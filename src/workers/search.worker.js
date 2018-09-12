import fuzzysort from "fuzzysort";
let cache = null;
const opts = {
  keys: ["en", "pl"],
  limit: 500,
  allowTypo: false,
  threshold: -10000
};
export function init(arr) {
  cache = arr;
}
export function search(term, startFrom = 0, limit = 50) {
  let results = null;

  results = fuzzysort.go(term, cache, opts);

  const itemsPaginated = [];

  let indexOfItem = 0;
  let i = startFrom;

  while (indexOfItem < limit && results[i] != null) {
    itemsPaginated[indexOfItem] = results[i];
    indexOfItem++;
    i++;
  }
  return {
    items: itemsPaginated,
    itemsCount: results.length
  };
}
