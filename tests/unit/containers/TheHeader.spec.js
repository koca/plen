jest.mock("@/workers");
import "@/../tests/utils/store";
import { mount, createLocalVue } from "@vue/test-utils";
import TheHeader from "@/containers/TheHeader.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseLink from "@/components/BaseLink.vue";
import { createStore } from "@/store";

describe("TheHeader.vue", function() {
  let wrapper;
  let store;
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.component("BaseButton", BaseButton);
    localVue.component("BaseLink", BaseLink);
    store = createStore(localVue);

    wrapper = mount(TheHeader, {
      localVue,
      store
    });
  });

  it("should toggle header and search bar", () => {
    wrapper.find(".btn-search").trigger("click");

    expect(store.state.isSearching).toBe(true);

    wrapper.find(".btn-back").trigger("click");

    expect(store.state.isSearching).toBe(false);
  });

  it("should update `searchText` in store", () => {
    wrapper.find(".btn-search").trigger("click");
    const $input = wrapper.find("input");
    $input.element.value = "hello";
    $input.trigger("input");
    expect(store.state.searchText).toBe("hello");
  });

  it("should reset `searchText` when users goes back", () => {
    wrapper.find(".btn-search").trigger("click");
    const $input = wrapper.find("input");
    $input.element.value = "hello";
    $input.trigger("input");
    expect(store.state.searchText).toBe("hello");
    wrapper.find(".btn-back").trigger("click");
    expect(store.state.searchText).toBe("");
  });

  it("should clear `searchText` when users clicks X", () => {
    wrapper.find(".btn-search").trigger("click");
    const $input = wrapper.find("input");
    $input.element.value = "hello";
    $input.trigger("input");
    expect(store.state.searchText).toBe("hello");
    wrapper.find(".btn-clear").trigger("click");
    expect(store.state.searchText).toBe("");
  });

  it("should update the title when `searchText` changes", () => {
    wrapper.find(".btn-search").trigger("click");
    expect(wrapper.text()).toContain("Type to search");

    const $input = wrapper.find("input");
    $input.element.value = "hello";
    $input.trigger("input");
    expect(wrapper.text()).toContain("Results for: hello");

    wrapper.find(".btn-back").trigger("click");
    expect(wrapper.text()).toContain("All Sentences");
  });
});
