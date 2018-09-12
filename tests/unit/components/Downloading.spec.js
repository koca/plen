import { shallowMount } from "@vue/test-utils";
import Downloading from "@/components/Downloading.vue";

describe("Downloading.vue", () => {
  it("renders properly", () => {
    let wrapper;
    wrapper = shallowMount(Downloading);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
