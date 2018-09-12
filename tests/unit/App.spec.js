import { shallowMount } from "@vue/test-utils";
import App from "../../src/App.vue";
describe("App.vue", () => {
  it("test", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
