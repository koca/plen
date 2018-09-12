jest.mock("@/workers");
import * as actions from "@/store/actions";
import { getWorkers } from "@/workers";
it("should toggle sidebar", async () => {
  const commit = jest.fn();
  const showSidebar = false;

  await actions.toggleSidebar({
    commit,
    state: { showSidebar }
  });

  expect(commit).toHaveBeenCalledWith("setShowSidebar", !showSidebar);
});

it("should fetch the data", async () => {
  const commit = jest.fn();

  const expected = {
    items: [
      { en: "en1", pl: "pl1" },
      { en: "en2", pl: "pl2" },
      { en: "en3", pl: "pl3" }
    ]
  };
  const state = {
    sentencesOptions: {
      start: 0,
      end: 50
    }
  };
  getWorkers().database.getPhrases.mockReturnValue(expected);
  await actions.fetchSentences({ commit, state });

  expect(commit).toHaveBeenCalledWith("setSentences", expected);
});

it("should check the data is exists", async () => {
  const commit = jest.fn();
  const dispatch = jest.fn();

  let returns = 0;
  let expected = null;
  getWorkers().database.check.mockReturnValue(returns);
  await actions.check({ commit, dispatch });
  expect(commit).toHaveBeenCalledWith("setIsDownloaded", expected);
});

it("should search", async () => {
  const commit = jest.fn();
  const sentences = [
    { en: "en1", pl: "pl1" },
    { en: "en2", pl: "pl2" },
    { en: "en3", pl: "pl3" }
  ];

  const state = {
    sentences,
    searchText: "search",
    sentencesOptions: {
      start: 0,
      end: 50
    }
  };
  getWorkers().database.getAllPhrases.mockReturnValue({
    items: [{ en: "en1", pl: "pl1" }]
  });
  getWorkers().search.search.mockReturnValue({
    items: [{ en: "en1", pl: "pl1" }]
  });
  await actions.search({ commit, state }, "1");
  expect(commit).toHaveBeenCalledWith("setSentences", {
    items: [{ en: "en1", pl: "pl1" }]
  });
});

it("should load more", async () => {
  const commit = jest.fn();
  const sentences = [
    { en: "en1", pl: "pl1" },
    { en: "en1", pl: "pl1" },
    { en: "en1", pl: "pl1" },
    { en: "loadmoreen1", pl: "loadmorepl1" },
    { en: "loadmoreen1", pl: "loadmorepl1" },
    { en: "loadmoreen1", pl: "loadmorepl1" }
  ];

  const state = {
    sentences: sentences.slice(0, 3),
    searchText: "searching",
    sentencesOptions: {
      start: 0,
      end: 3
    }
  };
  const expected1 = {
    items: sentences.slice(0, 3)
  };
  const expected2 = {
    items: sentences.slice(3, 6)
  };

  getWorkers()
    .search.search.mockReturnValueOnce({ items: sentences.slice(0, 3) })
    .mockReturnValueOnce({ items: sentences.slice(3, 6) });

  await actions.loadMore({ commit, state }, "1");
  expect(commit).toHaveBeenCalledWith("appendSentences", expected1);

  //should load more
  await actions.loadMore({ commit, state }, "1");
  expect(commit).toHaveBeenCalledWith("appendSentences", expected2);
});
