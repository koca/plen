import { shallowMount } from "@vue/test-utils";
import BaseLink from "@/components/BaseLink.vue";

describe("BaseLink.vue", () => {
  it("renders properly", () => {
    let wrapper;
    wrapper = shallowMount(BaseLink);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
