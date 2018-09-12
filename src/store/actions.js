import { startWorkers, getWorkers } from "../workers";

startWorkers();
window.workers = getWorkers();
export const toggleSidebar = ({ commit, state }) => {
  commit("setShowSidebar", !state.showSidebar);
};
export const check = async ({ commit, dispatch }) => {
  const workers = getWorkers();
  const payload = await workers.database.check();

  if (payload === 0) {
    commit("setIsDownloaded", null);
  }
  if (payload >= 1) {
    commit("setIsDownloaded", false);
    dispatch("fetchSentences");
  }
};

export const fetchSentences = async ({ commit, state }) => {
  const workers = getWorkers();
  await workers.database.initPhrasesTable();
  const payload = await workers.database.getPhrases(
    state.sentencesOptions.start,
    state.sentencesOptions.end
  );
  commit("setSentences", payload);
};
let isSearchable = false;
export const search = async ({ commit, state }, searchTerm) => {
  let workers = getWorkers();
  if (isSearchable === false) {
    const allPhrases = await workers.database.getAllPhrases();
    await workers.search.init(allPhrases && allPhrases.items);
    isSearchable = true;
  }
  const payload = await workers.search.search(
    searchTerm,
    state.sentencesOptions.start
  );
  commit("setSentences", payload);
};
export const loadMore = async ({ commit, state }) => {
  let workers = getWorkers();
  if (isSearchable === false) {
    const allPhrases = await workers.database.getAllPhrases();
    await workers.search.init(allPhrases.items);
    isSearchable = true;
  }
  let payload;
  if (state.searchText && state.searchText.length >= 1) {
    payload = await workers.search.search(
      state.searchText,
      state.sentencesOptions.start
    );
  } else {
    payload = await workers.database.getPhrases(
      state.sentencesOptions.start,
      state.sentencesOptions.end
    );
  }
  commit("appendSentences", payload);
};
