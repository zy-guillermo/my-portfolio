declare module "three/examples/jsm/controls/OrbitControls" {
  export class OrbitControls {
    constructor(camera: unknown, domElement: unknown);
    autoRotate: boolean;
    enableDamping: boolean;
    target: unknown;
    enableZoom: boolean;
    enablePan: boolean;
    zoomSpeed: number;
    minZoom: number;
    maxZoom: number;
    update(): void;
    dispose(): void;
  }
}

declare module "three/examples/jsm/loaders/GLTFLoader" {
  export class GLTFLoader {
    load(
      url: string,
      onLoad: (gltf: { scene: unknown }) => void,
      onProgress?: (event: unknown) => void,
      onError?: (err: unknown) => void
    ): void;
  }
}

