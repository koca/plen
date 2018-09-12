import startSearchWorker from "workerize-loader!./search.worker.js";
import startDatabaseWorker from "workerize-loader!./database.worker.js";

let databaseWorker = null;
let searchWorker = null;

export function getWorkers() {
  if (databaseWorker === null && searchWorker === null)
    console.log("Workers hasn't initialized yet");

  return {
    search: searchWorker,
    database: databaseWorker
  };
}

export function startWorkers() {
  searchWorker = startSearchWorker();
  databaseWorker = startDatabaseWorker();
}
