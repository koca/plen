import * as getters from "@/store/getters";

// it("should return sliced state.sentences", () => {
//   const state = {
//     sentences: [{}, {}, {}, {}]
//   };
//   // we have 4 items but we should get 2 of 'em.
//   let currentSentences = getters.currentSentences(state);
//   expect(currentSentences.length).toBe(4);
//   currentSentences = getters.currentSentences({ sentences: [] });
//   expect(currentSentences.length).toBe(0);
// });

it("should return the state.sentences count", () => {
  const state = {
    sentences: [{}, {}, {}, {}]
  };
  // we have 4 items but we should get 2 of 'em.
  let totalSentences = getters.totalSentencesCount(state);
  expect(totalSentences).toBe(4);
  totalSentences = getters.totalSentencesCount({ sentences: [] });
  expect(totalSentences).toBe(0);
  totalSentences = getters.totalSentencesCount({});
  expect(totalSentences).toBe(0);
});
