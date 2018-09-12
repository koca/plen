import Dexie from "dexie";
import {
  LANGUAGE_DATABASE_NAME,
  LANGUAGE_TABLE,
  LANGUAGE_DATABASE_SCHEMA
} from "../constants";

const database = new Dexie(LANGUAGE_DATABASE_NAME);

database.version(1).stores(LANGUAGE_DATABASE_SCHEMA);

export function check() {
  return database.table(LANGUAGE_TABLE).count();
}
export function initPhrasesTable() {
  const phrases = database.table(LANGUAGE_TABLE);

  return phrases.count(count => {
    if (count === 0) {
      return fetch("data.json")
        .then(res => res.json())
        .then(res => {
          return phrases.bulkAdd(res);
        });
    }
  });
}

export async function getPhrases(startFrom = 0, limit = 50) {
  const results = await database
    .table(LANGUAGE_TABLE)
    .offset(startFrom)
    .limit(limit)
    .toArray();
  return { items: results, count: 32000 };
}

export async function getAllPhrases() {
  const results = await database.table(LANGUAGE_TABLE).toArray();
  return {
    items: results,
    count: 32000
  };
}
