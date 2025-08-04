import { z as z$1 } from './nuxt-link-DYQtWteY.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { s } from './_plugin-vue_export-helper-DlAUqK2U.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/hookable/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unctx/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/h3/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/radix3/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/defu/dist/defu.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/klona/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/@iconify/vue/dist/iconify.mjs';
import '../_/renderer.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/server.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/devalue/index.js';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/destr/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ohash/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/pathe/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/consola/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ipx/dist/index.mjs';

const l = publicAssetsURL("/images/ModingJuniorLogo.webp"), p = { __name: "Header", __ssrInlineRender: true, setup(t) {
  const a = ref(false);
  return (e, d, n, r) => {
    const j = z$1;
    d(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, r))} data-v-48e32205><div class="logo" data-v-48e32205>`), d(ssrRenderComponent(j, { to: "/" }, { default: withCtx((L, b, A, k) => {
      if (b) b(`<img${ssrRenderAttr("src", l)} alt="Moding Junior Logo" width="200" height="60" data-v-48e32205${k}>`);
      else return [createVNode("img", { src: l, alt: "Moding Junior Logo", width: "200", height: "60" })];
    }), _: 1 }, n)), d(`</div><div class="${ssrRenderClass([{ open: a.value }, "burger"])}" data-v-48e32205><span data-v-48e32205></span></div><nav class="${ssrRenderClass([{ open: a.value }, "nav"])}" data-v-48e32205><ul class="nav-links" data-v-48e32205><li data-v-48e32205><a href="/" data-v-48e32205>Po\u010Detna</a></li><li data-v-48e32205><a href="/proizvodi" data-v-48e32205>Ponuda</a></li></ul><a href="/#contact" class="cta-button" data-v-48e32205>Kontaktirajte nas</a></nav></header>`);
  };
} }, f = p.setup;
p.setup = (t, a) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/Header.vue"), f ? f(t, a) : void 0;
};
const M = s(p, [["__scopeId", "data-v-48e32205"]]), y = publicAssetsURL("/images/certs.webp"), z = publicAssetsURL("/images/eucert.webp"), J = publicAssetsURL("/images/eusuf.webp"), u = {};
function P(t, a, e, d) {
  a(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, d))} data-v-edbd1956><div class="container" data-v-edbd1956><div class="footer-top" data-v-edbd1956><div class="column left" data-v-edbd1956><img${ssrRenderAttr("src", l)} data-v-edbd1956><nav class="nav-links" data-v-edbd1956><div class="contact-row" data-v-edbd1956><div class="contact-item" data-v-edbd1956><p class="label" data-v-edbd1956>E-Mail:</p><a href="mailto:info@moding-junior.hr" class="value" data-v-edbd1956>info@moding-junior.hr</a></div><div class="contact-item" data-v-edbd1956><p class="label" data-v-edbd1956>Telefon:</p><a href="tel:+38552500590" class="value" data-v-edbd1956>+38552500590</a></div><div class="contact-item" data-v-edbd1956><p class="label" data-v-edbd1956>Adresa:</p><a href="https://maps.app.goo.gl/ra5fjjZNNpFdyosp8" class="value" target="_blank" rel="noopener noreferrer" data-v-edbd1956> Valica 7, Pula, Istra </a></div></div></nav></div><div class="column middle" data-v-edbd1956><h3 data-v-edbd1956>Moding Junior - Br\u010Dko</h3><p data-v-edbd1956>Br\u010Dko - Brka, 76206<br data-v-edbd1956>Industrijska zona bb</p><p data-v-edbd1956>Telefon: +387 49 500 126</p></div><div class="column right" data-v-edbd1956><h3 data-v-edbd1956>Moding Junior - Prijedor</h3><p data-v-edbd1956>Prijedor, 79101<br data-v-edbd1956>Donja \u010Cela bb</p><p data-v-edbd1956>Telefon: +387 52 370 770</p><div class="logos" data-v-edbd1956><img${ssrRenderAttr("src", y)} loading="lazy" alt="Certifikati FSB" width="150" height="100" data-v-edbd1956><img${ssrRenderAttr("src", z)} loading="lazy" alt="Certifikat Europske Unije" width="150" height="100" data-v-edbd1956><img${ssrRenderAttr("src", J)} loading="lazy" alt="Sufinanciranje od strane Europske Unije" width="150" height="100" data-v-edbd1956></div></div></div><div class="footer-bottom" data-v-edbd1956><div class="bottom-left" data-v-edbd1956><p data-v-edbd1956><strong data-v-edbd1956>MODING JUNIOR d.o.o.</strong> za proizvodnju, gra\u0111evinarstvo, unutarnju i vanjsku trgovinu.<br data-v-edbd1956>OIB: 25897440119</p><p class="copyright" data-v-edbd1956>\xA9 2025. Moding Junior d.o.o. Sva Prava Zadr\u017Eana.</p></div><div class="bottom-right" data-v-edbd1956><nav class="policy-links" data-v-edbd1956></nav></div></div></div></footer>`);
}
const g = u.setup;
u.setup = (t, a) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue"), g ? g(t, a) : void 0;
};
const N = s(u, [["ssrRender", P], ["__scopeId", "data-v-edbd1956"]]), m = {};
function B(t, a, e, d) {
  const n = M, r = N;
  a('<!--[--><section id="header" class="no-overflow" data-v-96295549>'), a(ssrRenderComponent(n, null, null, e)), a('</section><section id="website" class="no-overflow" data-v-96295549>'), ssrRenderSlot(t.$slots, "default", {}, null, a, e), a('</section><section id="footer" class="no-overflow" data-v-96295549>'), a(ssrRenderComponent(r, null, null, e)), a("</section><!--]-->");
}
const h = m.setup;
m.setup = (t, a) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue"), h ? h(t, a) : void 0;
};
const ea = s(m, [["ssrRender", B], ["__scopeId", "data-v-96295549"]]);

export { ea as default };
//# sourceMappingURL=default-CioUpMHw.mjs.map
