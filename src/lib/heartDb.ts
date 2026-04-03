import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "portfolio-hearts.sqlite");

function ensureDb() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const db = new Database(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS hearts (
      id INTEGER PRIMARY KEY,
      count INTEGER NOT NULL
    );

    INSERT OR IGNORE INTO hearts (id, count) VALUES (1, 0);
  `);
  return db;
}

// Keep a single connection per Node.js process.
const db = ensureDb();

export function getHeartCount() {
  const row = db.prepare("SELECT count FROM hearts WHERE id = 1").get() as
    | { count: number }
    | undefined;
  return row?.count ?? 0;
}

export function incrementHeartCount() {
  db.prepare("UPDATE hearts SET count = count + 1 WHERE id = 1").run();
  return getHeartCount();
}

