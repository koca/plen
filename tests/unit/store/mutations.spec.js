import * as mutations from "@/store/mutations";
describe("Mutations.js", () => {
  it("sets the sidebar's visibility", () => {
    const showSidebar = true;
    const state = {
      showSidebar: false
    };

    mutations.setShowSidebar(state, showSidebar);
    expect(state).toEqual({
      showSidebar
    });
  });
  it("sets the sentences", () => {
    const sentences = [
      { en: "en1", pl: "pl1" },
      { en: "en2", pl: "pl2" },
      { en: "en3", pl: "pl3" }
    ];
    const state = {
      sentences
    };

    mutations.setSentences(state, sentences);
    expect(state.sentences).toMatchObject(sentences);
  });
  it("sets `serchtext`", () => {
    const searchText = "searchme";
    const state = {
      searchText
    };

    mutations.setSearchText(state, searchText);
    expect(state.searchText).toBe(searchText);
  });

  it("sets the searching in header which is `isSearching`", () => {
    const isSearching = false;
    const state = {
      isSearching
    };

    mutations.setIsSearching(state, isSearching);
    expect(state.isSearching).toBe(isSearching);
  });
  it("sets `isDownloaded`", () => {
    const isDownloaded = false;
    const state = {
      isDownloaded
    };

    mutations.setIsDownloaded(state, isDownloaded);
    expect(state.isDownloaded).toBe(isDownloaded);
  });
  it("appends sentences", () => {
    const sentences = [
      { en: "en1", pl: "pl1" },
      { en: "en2", pl: "pl2" },
      { en: "en3", pl: "pl3" }
    ];
    const state = {
      sentences: {
        items: sentences
      }
    };
    const expected = { items: [...sentences, ...sentences] };

    mutations.appendSentences(state, { items: sentences });
    expect(state.sentences).toEqual(expected);
  });
});

it("sets `sentencesOptions", () => {
  const sentencesOptions = { start: 0, end: 55 };
  const state = {
    sentencesOptions
  };

  mutations.setSentencesOptions(state, sentencesOptions);
  expect(state.sentencesOptions).toBe(sentencesOptions);
});
