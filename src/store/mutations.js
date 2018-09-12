export const setShowSidebar = (state, value) => {
  state.showSidebar = value;
};
export const setSentences = (state, value) => {
  state.sentences = value;
};
export const setSentencesOptions = (state, value) => {
  state.sentencesOptions = value;
};
export const appendSentences = (state, value) => {
  state.sentences.items.push(...value.items);
};
export const setSearchText = (state, value) => {
  state.searchText = value;
};
export const setIsSearching = (state, value) => {
  state.isSearching = value;
};

export const setIsDownloaded = (state, value) => {
  state.isDownloaded = value;
};
