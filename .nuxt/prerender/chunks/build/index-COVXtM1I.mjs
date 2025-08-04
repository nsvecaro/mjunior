import { withCtx, createVNode, createBlock, openBlock, mergeProps, ref, useSSRContext } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot, ssrRenderStyle } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/server-renderer/index.mjs';
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
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/@iconify/vue/dist/iconify.mjs';
import '../_/renderer.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/server.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/devalue/index.js';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/plugins.mjs';

const z = { name: "HeroButton", props: { buttonText: { type: String, required: true }, customClass: { type: String, default: "" }, to: { type: String, required: true } } };
function ie(n, t, e, a, o, l, i, f) {
  t(`<a${ssrRenderAttrs(mergeProps({ href: o.to, class: ["hero-button", o.customClass] }, a))} data-v-7301ccc2>${ssrInterpolate(o.buttonText)}</a>`);
}
const N = z.setup;
z.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/Hero-Button.vue"), N ? N(n, t) : void 0;
};
const ce = s(z, [["ssrRender", ie], ["__scopeId", "data-v-7301ccc2"]]), C = {};
function le(n, t, e, a) {
  const o = ce;
  t(`<div${ssrRenderAttrs(mergeProps({ class: "hero-text-wrapper" }, a))} data-v-0a44cdfe><div class="main-text" data-v-0a44cdfe><h2 data-v-0a44cdfe><span class="moding" data-v-0a44cdfe>MODING</span> <span class="junior" data-v-0a44cdfe>JUNIOR</span></h2><h1 data-v-0a44cdfe>\u010Celi\u010Dne konstrukcije \u2022 Proizvodnja \u2022 Monta\u017Ea</h1><p data-v-0a44cdfe>Ferrocentar - trgovina crnom i obojenom metalurgijom te proizvodnja i monta\u017Ea \u010Deli\u010Dnih konstrukcija.</p></div><div class="buttons" data-v-0a44cdfe>`), t(ssrRenderComponent(o, { buttonText: "Na\u0161a ponuda \u2192", customClass: "blue-button", to: "/proizvodi" }, null, e)), t(ssrRenderComponent(o, { buttonText: "Kontakt", customClass: "yellow-button", to: "#contact" }, null, e)), t('</div><div class="stats-section" data-v-0a44cdfe><div class="stats-wrapper" data-v-0a44cdfe><div class="gradient-line" data-v-0a44cdfe></div><div class="stats" data-v-0a44cdfe><div class="stat" data-v-0a44cdfe><div class="stat-number" data-v-0a44cdfe>30+</div><div class="stat-label" data-v-0a44cdfe>Godina</div></div><div class="stat" data-v-0a44cdfe><div class="stat-number" data-v-0a44cdfe>750+</div><div class="stat-label" data-v-0a44cdfe>Projekata</div></div><div class="stat" data-v-0a44cdfe><div class="stat-number" data-v-0a44cdfe>60 000+</div><div class="stat-label" data-v-0a44cdfe>Zadovoljnih klijenata</div></div></div></div></div></div>');
}
const G = C.setup;
C.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/hero-text.vue"), G ? G(n, t) : void 0;
};
const re = s(C, [["ssrRender", le], ["__scopeId", "data-v-0a44cdfe"]]), L = { __name: "hero-slideshow", __ssrInlineRender: true, setup(n) {
  const t = [{ src: "/images/MonPeriniBale.webp", alt: "Moding Junior \u2013 Profesionalnost u svakom detalju. Napredna tehnolo\u0161ka rje\u0161enja za izgradnju zahtjevnih \u010Deli\u010Dnih konstrukcija \u2013 projekt Mon Perin, Bale.", title: "Profesionalnost", subtitle: "Napredna tehnolo\u0161ka rje\u0161enja", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z" fill="#2463EB"/></svg>' }, { src: "/images/CelicnaKonstrukcijaJablanovec.webp", alt: "Moding Junior \u2013 Kvaliteta bez kompromisa. Robusna konstrukcija po najvi\u0161im standardima \u2013 hala u Jablanovcu.", title: "Kvaliteta", subtitle: "Robusna konstrukcija po standardima", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="#2463EB"/></svg>' }, { src: "/images/GramatHala.webp", alt: "Moding Junior \u2013 Iskustvo koje broji. Vi\u0161e od 750 realiziranih projekata, uklju\u010Duju\u0107i industrijske hale kao \u0161to je Gramat.", title: "Iskustvo", subtitle: "Vi\u0161e od 750 projekata", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill="#2463EB"/></svg>' }, { src: "/images/CelicnaKonstrukcijaSB.webp", alt: "Moding Junior \u2013 Perfekcija u izvedbi. Detalji koji \u010Dine razliku vidljivi su u svakoj fazi monta\u017Ee \u010Deli\u010Dne konstrukcije.", title: "Perfekcija", subtitle: "Detalji koji \u010Dine razliku", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" fill="#2463EB"/></svg>' }, { src: "/images/CelicnaKonstrukcija.webp", alt: "Moding Junior \u2013 Inovacija za budu\u0107nost. Moderna rje\u0161enja za svaki projekt, temeljena na \u010Deliku i preciznosti.", title: "Inovacija", subtitle: "Moderna rje\u0161enja za svaki projekt", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" fill="#2463EB"/></svg>' }], e = ref(0);
  return (a, o, l, i) => {
    var _a;
    o(`<div${ssrRenderAttrs(mergeProps({ class: "slideshow-container" }, i))} data-v-f58c0ba9><div class="circle-decoration top-right" data-v-f58c0ba9></div><div class="image-wrapper" data-v-f58c0ba9><img${ssrRenderAttr("src", t[e.value].src)}${ssrRenderAttr("alt", t[e.value].alt)} class="slideshow-image"${ssrRenderAttr("loading", e.value === 0 ? "eager" : "lazy")} width="1280" height="720"${ssrRenderAttr("srcset", `
    ${t[e.value].src.replace(".webp", "-480.webp")} 480w,
    ${t[e.value].src.replace(".webp", "-768.webp")} 768w,
    ${t[e.value].src} 1280w
  `)} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 1280px" data-v-f58c0ba9><div class="label-box" data-v-f58c0ba9><div class="icon" data-v-f58c0ba9>${(_a = t[e.value].icon) != null ? _a : ""}</div><div class="label-content" data-v-f58c0ba9><p class="label-title" data-v-f58c0ba9>${ssrInterpolate(t[e.value].title)}</p><p class="label-subtitle" data-v-f58c0ba9>${ssrInterpolate(t[e.value].subtitle)}</p></div></div></div><div class="dots" data-v-f58c0ba9><!--[-->`), ssrRenderList(t, (f, w) => {
      o(`<span class="${ssrRenderClass([{ active: w === e.value }, "dot"])}" data-v-f58c0ba9></span>`);
    }), o('<!--]--></div><div class="circle-decoration bottom-left" data-v-f58c0ba9></div></div>');
  };
} }, H = L.setup;
L.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/hero-slideshow.vue"), H ? H(n, t) : void 0;
};
const de = s(L, [["__scopeId", "data-v-f58c0ba9"]]), $ = { __name: "Reveal", __ssrInlineRender: true, setup(n) {
  const t = ref(null);
  return (e, a, o, l) => {
    a(`<div${ssrRenderAttrs(mergeProps({ ref_key: "el", ref: t, class: "reveal" }, l))} data-v-4841235f>`), ssrRenderSlot(e.$slots, "default", {}, null, a, o), a("</div>");
  };
} }, T = $.setup;
$.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/Reveal.vue"), T ? T(n, t) : void 0;
};
const V = s($, [["__scopeId", "data-v-4841235f"]]), M = { __name: "SectionTitle", __ssrInlineRender: true, props: { title: { type: String, required: true }, subtitle: { type: String, default: "" }, alignment: { type: String, default: "center" } }, setup(n) {
  return (t, e, a, o) => {
    e(`<div${ssrRenderAttrs(mergeProps({ class: ["section-title", n.alignment] }, o))} data-v-6028c522><h2 class="title" data-v-6028c522>${ssrInterpolate(n.title)}</h2>`), n.subtitle ? e(`<p class="subtitle" data-v-6028c522>${ssrInterpolate(n.subtitle)}</p>`) : e("<!---->"), e('<div class="gradient-line" data-v-6028c522></div></div>');
  };
} }, q = M.setup;
M.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/SectionTitle.vue"), q ? q(n, t) : void 0;
};
const ve = s(M, [["__scopeId", "data-v-6028c522"]]), y = { __name: "ServiceCards", __ssrInlineRender: true, setup(n) {
  const t = [{ icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 576 512"><path fill="#246bfb" d="M64 32C46.3 32 32 46.3 32 64l0 240 0 48 0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-128 0-151.8c0-18.2-19.4-29.7-35.4-21.1L352 215.4l0-63.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4 160 64c0-17.7-14.3-32-32-32L64 32z"/></svg>', title: "Prodaja \u017Eeljeza", description: "U na\u0161em skladi\u0161tu mo\u017Eete prona\u0107i sve od crnih, pocin\u010Danih i aluminijskih cijevi." }, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 384 512"><path fill="#246bfb" d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/></svg>', title: "Paneli i krovi\u0161te", description: "Najve\u0107a ponuda krovnih i zidnih panela, te ostalih vrsta krovi\u0161ta u Puli." }, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="#246bfb" d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>', title: "Rezanje na mjeru", description: "Uvijek se trudimo olak\u0161ati Vam, stoga nudimo rezanje na mjeru, cijevi ili panela." }, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 576 512"><path fill="#246bfb" d="M256 32c-17.7 0-32 14.3-32 32l0 2.3 0 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288l0 64 512 0 0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1l0-99.6 0-2.3c0-17.7-14.3-32-32-32l-64 0zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6L16.6 384z"/></svg>', title: "Izrada \u010Deli\u010Dnih konstrukcija", description: "Izra\u0111ujemo konstrukcije od nadstre\u0161nica i ograda, do industrijskih objekata i hala." }, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="#246bfb" d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>', title: "Monta\u017Ea \u010Deli\u010Dnih konstrukcija", description: "Osim izrade, osiguravamo i preciznu monta\u017Eu na lokaciji." }, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="#246bfb" d="M176 88l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 80c-4.4 0-8 3.6-8 8zm-48 40l0-40c0-30.9 25.1-56 56-56l144 0c30.9 0 56 25.1 56 56l0 40 28.1 0c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9l0 92.1-128 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L0 320l0-92.1c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1l28.1 0zM0 416l0-64 128 0c0 17.7 14.3 32 32 32s32-14.3 32-32l128 0c0 17.7 14.3 32 32 32s32-14.3 32-32l128 0 0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64z"/></svg>', title: "Zavr\u0161na obrada", description: "Zavr\u0161na obrada na jednom mjestu. Od brusnih plo\u010Da do vijaka i sitnog materijala." }];
  return (e, a, o, l) => {
    a(`<div${ssrRenderAttrs(mergeProps({ class: "cards-grid" }, l))} data-v-e5ba6800><!--[-->`), ssrRenderList(t, (i, f) => {
      var _a;
      a(`<div class="card" data-v-e5ba6800><div class="icon" data-v-e5ba6800>${(_a = i.icon) != null ? _a : ""}</div><h3 class="title" data-v-e5ba6800>${ssrInterpolate(i.title)}</h3><p class="text" data-v-e5ba6800>${ssrInterpolate(i.description)}</p></div>`);
    }), a("<!--]--></div>");
  };
} }, E = y.setup;
y.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/ServiceCards.vue"), E ? E(n, t) : void 0;
};
const ue = s(y, [["__scopeId", "data-v-e5ba6800"]]), I = { __name: "PartnerGrid", __ssrInlineRender: true, setup(n) {
  const t = ["/images/partneri/CantopyHiltonLogo.png", "/images/partneri/MinistarstvoFinancijaRHLogo.png", "/images/partneri/InaLogo.png", "/images/partneri/MonPerinLogo.png", "/images/partneri/BaltenspergerLogo.png", "/images/partneri/HidroingLogo.png", "/images/partneri/JedinstvoKrapinaLogo.png", "/images/partneri/KudumijaLogo.png", "/images/partneri/GradPulaLogo.png", "/images/partneri/KolektorLogo.png", "/images/partneri/MDKLogo.png", "/images/partneri/MonterraLogo.png"];
  return (e, a, o, l) => {
    a(`<div${ssrRenderAttrs(mergeProps({ class: "grid" }, l))} data-v-685c5c80><!--[-->`), ssrRenderList(t, (i, f) => {
      a(`<img${ssrRenderAttr("src", i)} alt="Partner logo" class="logo" width="200" height="200" loading="lazy" data-v-685c5c80>`);
    }), a("<!--]--></div>");
  };
} }, O = I.setup;
I.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/PartnerGrid.vue"), O ? O(n, t) : void 0;
};
const pe = s(I, [["__scopeId", "data-v-685c5c80"]]), S = { __name: "Numbers", __ssrInlineRender: true, setup(n) {
  const t = ref([{ target: 30, label: "Godina", current: 0 }, { target: 750, label: "Projekata", current: 0 }, { target: 6e4, label: "Zadovoljnih klijenata", current: 0 }]);
  return ref([]), (e, a, o, l) => {
    a(`<div${ssrRenderAttrs(mergeProps({ class: "stats" }, l))} data-v-2e39a168><!--[-->`), ssrRenderList(t.value, (i, f) => {
      a(`<div class="stat" data-v-2e39a168><div class="stat-number" data-v-2e39a168>${ssrInterpolate(i.current)}</div><div class="stat-label" data-v-2e39a168>${ssrInterpolate(i.label)}</div></div>`);
    }), a("<!--]--></div>");
  };
} }, D = S.setup;
S.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/Numbers.vue"), D ? D(n, t) : void 0;
};
const me = s(S, [["__scopeId", "data-v-2e39a168"]]), R = { __name: "ContactInfo", __ssrInlineRender: true, setup(n) {
  const t = [{ label: "Adresa", value: "Valica 7<br>52100, Pula, Istra", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill="#ffffff"/></svg>' }, { label: "Telefon", value: "+385 52 500 590", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" fill="#ffffff"/></svg>' }, { label: "E-Mail", value: "info@moding-junior.hr", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="#ffffff" /></svg>' }];
  return (e, a, o, l) => {
    a(`<div${ssrRenderAttrs(mergeProps({ class: "kontakt-info" }, l))} data-v-db7ae155><!--[-->`), ssrRenderList(t, (i) => {
      var _a, _b;
      a(`<div class="info-item" data-v-db7ae155><div class="icon" data-v-db7ae155>${(_a = i.icon) != null ? _a : ""}</div><div class="text-wrapper" data-v-db7ae155><h3 class="label" data-v-db7ae155>${ssrInterpolate(i.label)}</h3><p class="value" data-v-db7ae155>${(_b = i.value) != null ? _b : ""}</p></div></div>`);
    }), a("<!--]--></div>");
  };
} }, Z = R.setup;
R.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/ContactInfo.vue"), Z ? Z(n, t) : void 0;
};
const fe = s(R, [["__scopeId", "data-v-db7ae155"]]), B = {};
function ge(n, t, e, a) {
  t(`<form${ssrRenderAttrs(mergeProps({ class: "kontakt-form", action: "https://formspree.io/f/mjkoovyz", method: "POST" }, a))} data-v-d04aa9f3><input name="ime" type="text" placeholder="Va\u0161e ime" required data-v-d04aa9f3><input name="email" type="email" placeholder="Va\u0161 e-mail" required data-v-d04aa9f3><textarea name="poruka" rows="4" placeholder="Va\u0161a poruka" required data-v-d04aa9f3></textarea><input type="text" name="_gotcha" style="${ssrRenderStyle({ display: "none" })}" data-v-d04aa9f3><button type="submit" data-v-d04aa9f3>Po\u0161alji nam poruku</button><input type="hidden" name="_next" value="https://localhost:3000/hvala" data-v-d04aa9f3></form>`);
}
const U = B.setup;
B.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue"), U ? U(n, t) : void 0;
};
const we = s(B, [["ssrRender", ge], ["__scopeId", "data-v-d04aa9f3"]]), P = { __name: "Contact", __ssrInlineRender: true, setup(n) {
  return (t, e, a, o) => {
    e(`<section${ssrRenderAttrs(mergeProps({ class: "contact-section" }, o))} data-v-fe085b90>`), e(ssrRenderComponent(fe, null, null, a)), e(ssrRenderComponent(we, null, null, a)), e("</section>");
  };
} }, Q = P.setup;
P.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue"), Q ? Q(n, t) : void 0;
};
const _e = s(P, [["__scopeId", "data-v-fe085b90"]]), F = { __name: "index", __ssrInlineRender: true, setup(n) {
  return zt({ title: "\u010Celi\u010Dne konstrukcije, paneli i \u017Eeljezo | Moding Junior Pula", meta: [{ name: "description", content: "Moding Junior iz Pule \u2013 vi\u0161e od 30 godina iskustva u proizvodnji i monta\u017Ei \u010Deli\u010Dnih konstrukcija, prodaji \u017Eeljeza, krovnih i zidnih panela, te metalnih ograda i kapija." }, { property: "og:title", content: "\u010Celi\u010Dne konstrukcije, paneli i \u017Eeljezo | Moding Junior Pula" }, { property: "og:description", content: "Specijalizirani za izradu \u010Deli\u010Dnih konstrukcija, krovne panele, metalne ograde i kapije. Poslujemo diljem Istre, s bazom u Puli." }, { property: "og:image", content: "https://moding-junior.hr/images/og-image.jpg" }, { property: "og:type", content: "website" }, { property: "og:url", content: "https://moding-junior.hr" }, { name: "robots", content: "index, follow" }, { name: "keywords", content: "\u010Deli\u010Dne konstrukcije, prodaja \u017Eeljeza, \u017Eeljezne konstrukcije, \u010Deli\u010Dne hale, paneli za krov, sendvi\u010D paneli, metalne ograde, aluminijske kapije, Pula, Istra, Moding Junior" }], link: [{ rel: "canonical", href: "https://moding-junior.hr" }] }), (t, e, a, o) => {
    const l = re, i = de, f = V, w = ve, A = ue, J = pe, X = me, Y = V, K = _e;
    e('<!--[--><section id="hero" data-v-6f075480><div class="container" data-v-6f075480><div class="hero-container" data-v-6f075480><div class="left" data-v-6f075480>'), e(ssrRenderComponent(l, null, null, a)), e('</div><div class="right" data-v-6f075480>'), e(ssrRenderComponent(i, null, null, a)), e('</div></div></div></section><section id="offers" class="section-with-wave" data-v-6f075480>'), e(ssrRenderComponent(f, null, { default: withCtx((k, c, g, r) => {
      if (c) c(`<div class="decorative-line-top" data-v-6f075480${r}><svg viewBox="0 0 1440 100" preserveAspectRatio="none" data-v-6f075480${r}><path d="M0,60 C240,-40 1200,160 1440,60" stroke="#a4c1fd" stroke-width="4" fill="none" data-v-6f075480${r}></path></svg></div>`), c(ssrRenderComponent(w, { title: "\u0160to nudimo", subtitle: "Sve \u0161to vam treba za gradnju i obradu metala - brzo, precizno i pouzdano" }, null, g, r));
      else return [createVNode("div", { class: "decorative-line-top" }, [(openBlock(), createBlock("svg", { viewBox: "0 0 1440 100", preserveAspectRatio: "none" }, [createVNode("path", { d: "M0,60 C240,-40 1200,160 1440,60", stroke: "#a4c1fd", "stroke-width": "4", fill: "none" })]))]), createVNode(w, { title: "\u0160to nudimo", subtitle: "Sve \u0161to vam treba za gradnju i obradu metala - brzo, precizno i pouzdano" })];
    }), _: 1 }, a)), e(ssrRenderComponent(f, null, { default: withCtx((k, c, g, r) => {
      if (c) c(ssrRenderComponent(A, null, null, g, r));
      else return [createVNode(A)];
    }), _: 1 }, a)), e('<div class="decorative-line" data-v-6f075480><svg viewBox="0 0 1440 100" preserveAspectRatio="none" data-v-6f075480><path d="M0,0 C300,150 900,-50 1440,60" stroke="#a4c1fd" stroke-width="4" fill="none" data-v-6f075480></path></svg></div></section><section id="partners" data-v-6f075480>'), e(ssrRenderComponent(w, { title: "Partneri", subtitle: "Na\u0161i partneri - suradnje koje govore vi\u0161e od rije\u010Di" }, null, a)), e('<div class="container" data-v-6f075480>'), e(ssrRenderComponent(f, null, { default: withCtx((k, c, g, r) => {
      if (c) c(ssrRenderComponent(J, null, null, g, r));
      else return [createVNode(J)];
    }), _: 1 }, a)), e('</div></section><section id="numbers" data-v-6f075480>'), e(ssrRenderComponent(X, null, null, a)), e('</section><section id="contact" data-v-6f075480>'), e(ssrRenderComponent(Y, null, { default: withCtx((k, c, g, r) => {
      if (c) c(ssrRenderComponent(w, { title: "Kontaktirajte nas", subtitle: "Spremni smo odgovoriti na sva va\u0161a pitanja i pomo\u0107i vam u va\u0161im projektima" }, null, g, r));
      else return [createVNode(w, { title: "Kontaktirajte nas", subtitle: "Spremni smo odgovoriti na sva va\u0161a pitanja i pomo\u0107i vam u va\u0161im projektima" })];
    }), _: 1 }, a)), e('<div class="container" data-v-6f075480>'), e(ssrRenderComponent(f, null, { default: withCtx((k, c, g, r) => {
      if (c) c(ssrRenderComponent(K, null, null, g, r));
      else return [createVNode(K)];
    }), _: 1 }, a)), e("</div></section><!--]-->");
  };
} }, W = F.setup;
F.setup = (n, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), W ? W(n, t) : void 0;
};
const Fe = s(F, [["__scopeId", "data-v-6f075480"]]);

export { Fe as default };
//# sourceMappingURL=index-COVXtM1I.mjs.map
