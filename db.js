import { IndexedStorage } from "https://code4fukui.github.io/IndexedStorage/IndexedStorage.js";
import { IndexedDB } from "https://code4fukui.github.io/IndexedDB/IndexedDB.js";

const isname = "sabaticket_storage";
const isver = 1;

export const keyprikey = "sabaticket_prikey";

const dbname = "sabaticket_db";
const dbver = 4;

export const indexStorage = await IndexedStorage.create(isname, isver);
export const db = await IndexedDB.create(dbname, ["id"], dbver);
