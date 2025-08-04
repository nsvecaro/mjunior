import { z } from './nuxt-link-DYQtWteY.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/server-renderer/index.mjs';
import { s } from './_plugin-vue_export-helper-DlAUqK2U.mjs';
import { u as zt } from './server.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ufo/dist/index.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/h3/dist/index.mjs';
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

const i = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(e) {
  const t = e;
  return zt({ title: `${t.statusCode} - ${t.statusMessage} | ${t.appName}`, script: [{ innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (r, n, u, d) => {
    const c = z;
    n(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black" }, d))} data-v-06403dcb><div class="fixed left-0 right-0 spotlight z-10" data-v-06403dcb></div><div class="max-w-520px text-center z-20" data-v-06403dcb><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-06403dcb>${ssrInterpolate(e.statusCode)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-06403dcb>${ssrInterpolate(e.description)}</p><div class="flex items-center justify-center w-full" data-v-06403dcb>`), n(ssrRenderComponent(c, { to: "/", class: "cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md" }, { default: withCtx((v, s, w, _) => {
      if (s) s(`${ssrInterpolate(e.backHome)}`);
      else return [createTextVNode(toDisplayString(e.backHome), 1)];
    }), _: 1 }, u)), n("</div></div></div>");
  };
} }, a = i.setup;
i.setup = (e, t) => {
  const r = useSSRContext();
  return (r.modules || (r.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/error-404.vue"), a ? a(e, t) : void 0;
};
const q = s(i, [["__scopeId", "data-v-06403dcb"]]);

export { q as default };
//# sourceMappingURL=error-404-kFKn3Xqi.mjs.map
