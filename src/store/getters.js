export const totalSentencesCount = state => {
  if (state.sentences && state.sentences.items)
    return state.sentences.itemsCount;
  return (state.sentences && state.sentences.length) || 0;
};

export const currentSentences = state => {
  if (state.sentences && state.sentences.items) return state.sentences.items;
  if (!state.sentences.length) return [];
  return state.sentences;
};
