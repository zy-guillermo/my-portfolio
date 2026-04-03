"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const catModelUrl = new URL("../catnoodles.glb", import.meta.url).toString();

export default function VoxelCat() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scW = container.clientWidth;
    const scH = container.clientHeight;
    if (scW <= 0 || scH <= 0) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: false,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(scW, scH);
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);
    renderer.domElement.style.touchAction = "none";

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
    };
    renderer.domElement.addEventListener("wheel", onWheel, { passive: false });

    const scene = new THREE.Scene();
    scene.background = null;

    function easeOutCirc(x: number) {
      return Math.sqrt(1 - Math.pow(x - 1, 4));
    }

    const target = new THREE.Vector3(-8, 2, 0);
    const introCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI),
    );

    const orthoScale = scH * 0.005 + 4.8;
    const camera = new THREE.OrthographicCamera(
      -orthoScale,
      orthoScale,
      orthoScale,
      -orthoScale,
      0.01,
      50000,
    );

    camera.position.copy(introCameraPosition);
    camera.lookAt(target);

    const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.enableDamping = false;
    (controls.target as unknown as THREE.Vector3).copy(target);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.zoomSpeed = 0.7;
    controls.minZoom = 1;
    controls.maxZoom = 1.3;

    let loadedObject: THREE.Object3D | null = null;
    let req: number | null = null;
    let frame = 0;

    const handleWindowResize = () => {
      const c = containerRef.current;
      const r = renderer;
      if (!c || !r) return;
      const w = c.clientWidth;
      const h = c.clientHeight;
      if (w <= 0 || h <= 0) return;

      r.setSize(w, h);

      const s = h * 0.005 + 4.8;
      camera.left = -s;
      camera.right = s;
      camera.top = s;
      camera.bottom = -s;
      camera.updateProjectionMatrix();
    };

    const loader = new GLTFLoader();
    loader.load(
      catModelUrl,
      (gltf) => {
        const root = gltf.scene as unknown as THREE.Object3D;
        loadedObject = root;

        root.traverse((obj) => {
          const name = obj.name?.toLowerCase?.() ?? "";
          if (
            obj instanceof THREE.Mesh &&
            (name.includes("bg") ||
              name.includes("background") ||
              name.includes("backdrop") ||
              name.includes("plane") ||
              name.includes("sky"))
          ) {
            obj.visible = false;
          }
        });

        root.position.x = 0;
        root.position.y = 0;

        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const desired = 10;
        root.scale.multiplyScalar(desired / maxDim);

        camera.lookAt(target);

        scene.add(root);
        setLoading(false);
      },
      undefined,
      () => {
        setLoading(false);
      },
    );

    const animate = () => {
      req = requestAnimationFrame(animate);

      frame = frame <= 100 ? frame + 1 : frame;
      if (!reducedMotion && frame <= 100) {
        const p = introCameraPosition;
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

        camera.position.y = 10;
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        camera.lookAt(target);
      } else {
        controls.update();
      }

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("resize", handleWindowResize, false);

    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
      if (req) cancelAnimationFrame(req);

      controls.dispose();
      renderer.domElement.removeEventListener("wheel", onWheel);
      renderer.domElement.remove();
      renderer.dispose();

      scene.traverse((obj) => {
        if (!(obj instanceof THREE.Mesh)) return;
        const mesh = obj as THREE.Mesh;
        mesh.geometry.dispose?.();

        const mat = mesh.material;
        if (Array.isArray(mat)) {
          mat.forEach((m) => m.dispose?.());
        } else {
          mat.dispose?.();
        }
      });

      if (loadedObject) scene.remove(loadedObject);
      loadedObject = null;
    };
  }, [reducedMotion]);

  return (
    <div className="mx-auto flex w-full justify-center">
      <div
        ref={containerRef}
        className="voxel-cat relative h-[390px] w-[390px] sm:h-[610px] sm:w-[610px] mt-[-54px] mb-[-54px]"
        aria-label="3D cat"
      >
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-transparent text-sm text-gray-700 dark:text-white/70">
            Loading cat...
          </div>
        ) : null}
      </div>
    </div>
  );
}

