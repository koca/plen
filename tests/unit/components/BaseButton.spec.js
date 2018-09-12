import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton.vue";

describe("BaseButton.vue", () => {
  it("renders properly", () => {
    let wrapper;
    wrapper = shallowMount(BaseButton);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
