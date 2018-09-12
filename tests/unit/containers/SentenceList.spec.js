jest.mock("@/workers");
import { mount, createLocalVue } from "@vue/test-utils";
import SentenceList from "@/containers/SentenceList.vue";
import { createStore } from "@/store";
import { getWorkers } from "@/workers";
describe("SentenceList.vue", function() {
  let wrapper;
  let store;
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    store = createStore(localVue);
    const payload = [
      { en: "en1", pl: "pl1" },
      { en: "en2", pl: "pl2" },
      { en: "en3", pl: "pl3" }
    ];
    getWorkers().database.getPhrases.mockReturnValueOnce(payload);
    // sets limit
    getWorkers().database.check.mockReturnValue(10);

    wrapper = mount(SentenceList, {
      localVue,
      store
    });
  });

  it("displays the list of sentences", async () => {
    expect(wrapper.findAll(".sentence").length).toBe(3);
  });
});
