import { ref, mergeProps, useSSRContext } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/server-renderer/index.mjs';
import { s } from './_plugin-vue_export-helper-DlAUqK2U.mjs';

const r = { __name: "galerija", __ssrInlineRender: true, setup(l) {
  const t = ref([]), e = ref(null);
  return (_, a, $, o) => {
    a(`<div${ssrRenderAttrs(mergeProps({ class: "galerija-wrapper" }, o))} data-v-c928e66a><aside class="sidebar" data-v-c928e66a><ul data-v-c928e66a><!--[-->`), ssrRenderList(t.value, (s) => {
      a(`<li class="${ssrRenderClass({ active: e.value.id === s.id })}" data-v-c928e66a>${ssrInterpolate(s.label)}</li>`);
    }), a("<!--]--></ul></aside>"), e.value ? (a(`<main class="gallery-content" data-v-c928e66a><h2 data-v-c928e66a>${ssrInterpolate(e.value.label)}</h2><div class="masonry" data-v-c928e66a><!--[-->`), ssrRenderList(e.value.images, (s) => {
      a(`<img${ssrRenderAttr("src", `/galerija/${e.value.folder}/${s}`)} loading="lazy" alt="" data-v-c928e66a>`);
    }), a("<!--]--></div></main>")) : a("<!---->"), a("</div>");
  };
} }, c = r.setup;
r.setup = (l, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("pages/galerija.vue"), c ? c(l, t) : void 0;
};
const b = s(r, [["__scopeId", "data-v-c928e66a"]]);

export { b as default };
//# sourceMappingURL=galerija-C0tAUVjR.mjs.map
