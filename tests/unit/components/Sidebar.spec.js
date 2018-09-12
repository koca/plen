import { shallowMount } from "@vue/test-utils";
import Sidebar from "@/components/Sidebar.vue";

describe("Sidebar.vue", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(Sidebar, {
      stubs: {
        BaseLink: "<div class='stubbed-baselink' />"
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
