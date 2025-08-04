import { mergeProps, useSSRContext } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue-router/dist/vue-router.node.mjs';
import { s } from './_plugin-vue_export-helper-DlAUqK2U.mjs';
import { u as zt } from './server.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/h3/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ufo/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/destr/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/hookable/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ohash/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/klona/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/defu/dist/defu.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/scule/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unctx/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/pathe/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/consola/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ipx/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/@iconify/vue/dist/iconify.mjs';
import '../_/renderer.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/server.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/devalue/index.js';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/plugins.mjs';

const o = { __name: "hvala", __ssrInlineRender: true, setup(e) {
  return zt({ title: "Poruka poslana | Moding Junior", meta: [{ name: "robots", content: "noindex, nofollow" }] }), useRouter(), (r, t, _, s) => {
    t(`<div${ssrRenderAttrs(mergeProps({ class: "thank-you" }, s))} data-v-ed96d79d><h1 data-v-ed96d79d>Hvala Vam na poruci!</h1><p data-v-ed96d79d>Uskoro \u0107emo vam se javiti.</p></div>`);
  };
} }, a = o.setup;
o.setup = (e, r) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("pages/hvala.vue"), a ? a(e, r) : void 0;
};
const j = s(o, [["__scopeId", "data-v-ed96d79d"]]);

export { j as default };
//# sourceMappingURL=hvala-DGnGLE6F.mjs.map
