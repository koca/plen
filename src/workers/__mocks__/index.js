/* global jest */
import * as database from "./database.worker";
import * as search from "./search.worker";
export const getWorkers = jest.fn(() => {
  return {
    database,
    search
  };
});
export const startWorkers = jest.fn(() => Promise.resolve());
