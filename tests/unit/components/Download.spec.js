import { shallowMount } from "@vue/test-utils";
import Download from "@/components/Download.vue";

describe("Download.vue", () => {
  it("renders properly", () => {
    let wrapper;
    wrapper = shallowMount(Download);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
