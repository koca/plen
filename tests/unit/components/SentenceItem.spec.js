import { shallowMount } from "@vue/test-utils";
import SentenceItem from "@/components/SentenceItem.vue";

describe("SentenceItem.vue", () => {
  let wrapper;
  const sentence = { en: "en1", pl: "pl1" };

  beforeEach(() => {
    wrapper = shallowMount(SentenceItem, {
      propsData: {
        sentence,
        id: 0
      }
    });
  });
  it("renders properly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("displays a sentence", () => {
    expect(wrapper.find(".sentence").text()).toContain("en1");
    expect(wrapper.find(".sentence").text()).toContain("pl1");
  });
});
