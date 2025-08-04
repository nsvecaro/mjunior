import { defineComponent, computed, h, onServerPrefetch, toValue, getCurrentInstance, ref, shallowRef, toRef, nextTick, unref } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/index.mjs';
import { Icon, getIcon, loadIcon } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/@iconify/vue/dist/iconify.mjs';
import { getIconCSS } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/@iconify/utils/lib/css/icon.mjs';
import { a as y, d as Qt, e as I, u as zt, b as $o, c as H } from './server.mjs';
import { debounce } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/perfect-debounce/dist/index.mjs';
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
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/server-renderer/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/server.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/devalue/index.js';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/unhead/dist/plugins.mjs';

const Z = (e) => e === "defer" || e === false;
function x(...e) {
  var _a, _b, _c, _d, _e, _f, _g;
  var u;
  const a = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  A(e[0], e[1]) && e.unshift(a);
  let [r, s, t = {}] = e;
  const n = computed(() => toValue(r));
  if (typeof n.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  if (typeof s != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  const c = y();
  (_a = t.server) != null ? _a : t.server = true, (_b = t.default) != null ? _b : t.default = ae, (_c = t.getCachedData) != null ? _c : t.getCachedData = V, (_d = t.lazy) != null ? _d : t.lazy = false, (_e = t.immediate) != null ? _e : t.immediate = true, (_f = t.deep) != null ? _f : t.deep = $o.deep, (_g = t.dedupe) != null ? _g : t.dedupe = "cancel", t._functionName, c._asyncData[n.value];
  const i = { cause: "initial", dedupe: t.dedupe };
  (u = c._asyncData[n.value]) != null && u._init || (i.cachedData = t.getCachedData(n.value, c, { cause: "initial" }), c._asyncData[n.value] = ee(c, n.value, s, t, i.cachedData));
  const f = c._asyncData[n.value];
  f._deps++;
  const d = () => c._asyncData[n.value].execute(i);
  if (t.server !== false && c.payload.serverRendered && t.immediate) {
    const o = d();
    getCurrentInstance() ? onServerPrefetch(() => o) : c.hook("app:created", async () => {
      await o;
    });
  }
  const v = { data: P(() => {
    var o;
    return (o = c._asyncData[n.value]) == null ? void 0 : o.data;
  }), pending: P(() => {
    var o;
    return (o = c._asyncData[n.value]) == null ? void 0 : o.pending;
  }), status: P(() => {
    var o;
    return (o = c._asyncData[n.value]) == null ? void 0 : o.status;
  }), error: P(() => {
    var o;
    return (o = c._asyncData[n.value]) == null ? void 0 : o.error;
  }), refresh: (...o) => c._asyncData[n.value].execute(...o), execute: (...o) => c._asyncData[n.value].execute(...o), clear: () => T(c, n.value) }, D = Promise.resolve(c._asyncDataPromises[n.value]).then(() => v);
  return Object.assign(D, v), D;
}
function P(e) {
  return computed({ get() {
    var a;
    return (a = e()) == null ? void 0 : a.value;
  }, set(a) {
    const r = e();
    r && (r.value = a);
  } });
}
function A(e, a) {
  return !(typeof e == "string" || typeof e == "object" && e !== null || typeof e == "function" && typeof a == "function");
}
function T(e, a) {
  a in e.payload.data && (e.payload.data[a] = void 0), a in e.payload._errors && (e.payload._errors[a] = $o.errorValue), e._asyncData[a] && (e._asyncData[a].data.value = void 0, e._asyncData[a].error.value = $o.errorValue, e._asyncData[a].pending.value = false, e._asyncData[a].status.value = "idle"), a in e._asyncDataPromises && (e._asyncDataPromises[a] && (e._asyncDataPromises[a].cancelled = true), e._asyncDataPromises[a] = void 0);
}
function k(e, a) {
  const r = {};
  for (const s of a) r[s] = e[s];
  return r;
}
function ee(e, a, r, s, t) {
  var _a;
  var v, D;
  (_a = (v = e.payload._errors)[a]) != null ? _a : v[a] = $o.errorValue;
  const n = s.getCachedData !== V, c = !((D = e.ssrContext) != null && D._sharedPrerenderCache) ? r : () => {
    const u = e.ssrContext._sharedPrerenderCache.get(a);
    if (u) return u;
    const o = Promise.resolve().then(() => e.runWithContext(() => r(e)));
    return e.ssrContext._sharedPrerenderCache.set(a, o), o;
  }, i = s.deep ? ref : shallowRef, f = t != null, d = e.hook("app:data:refresh", async (u) => {
    (!u || u.includes(a)) && await l.execute({ cause: "refresh:hook" });
  }), l = { data: i(f ? t : s.default()), pending: shallowRef(!f), error: toRef(e.payload._errors, a), status: shallowRef("idle"), execute: (...u) => {
    var _a2, _b;
    const [o, W = void 0] = u, g = o && W === void 0 && typeof o == "object" ? o : {};
    if (e._asyncDataPromises[a]) {
      if (Z((_a2 = g.dedupe) != null ? _a2 : s.dedupe)) return e._asyncDataPromises[a];
      e._asyncDataPromises[a].cancelled = true;
    }
    if (g.cause === "initial" || e.isHydrating) {
      const m = "cachedData" in g ? g.cachedData : s.getCachedData(a, e, { cause: (_b = g.cause) != null ? _b : "refresh:manual" });
      if (m != null) return e.payload.data[a] = l.data.value = m, l.error.value = $o.errorValue, l.status.value = "success", Promise.resolve(m);
    }
    l.pending.value = true, l.status.value = "pending";
    const C = new Promise((m, h) => {
      try {
        m(c(e));
      } catch (j) {
        h(j);
      }
    }).then(async (m) => {
      if (C.cancelled) return e._asyncDataPromises[a];
      let h = m;
      s.transform && (h = await s.transform(m)), s.pick && (h = k(h, s.pick)), e.payload.data[a] = h, l.data.value = h, l.error.value = $o.errorValue, l.status.value = "success";
    }).catch((m) => {
      if (C.cancelled) return e._asyncDataPromises[a];
      l.error.value = H(m), l.data.value = unref(s.default()), l.status.value = "error";
    }).finally(() => {
      C.cancelled || (l.pending.value = false, delete e._asyncDataPromises[a]);
    });
    return e._asyncDataPromises[a] = C, e._asyncDataPromises[a];
  }, _execute: debounce((...u) => l.execute(...u), 0, { leading: true }), _default: s.default, _deps: 0, _init: true, _hash: void 0, _off: () => {
    var u;
    d(), (u = e._asyncData[a]) != null && u._init && (e._asyncData[a]._init = false), n || nextTick(() => {
      var o;
      (o = e._asyncData[a]) != null && o._init || (T(e, a), l.execute = () => Promise.resolve(), l.data.value = $o.value);
    });
  } };
  return l;
}
const ae = () => $o.value, V = (e, a, r) => {
  if (a.isHydrating) return a.payload.data[e];
  if (r.cause !== "refresh:manual" && r.cause !== "refresh:hook") return a.static.data[e];
};
async function q(e, a) {
  if (!e) return null;
  const r = getIcon(e);
  if (r) return r;
  let s;
  const t = loadIcon(e).catch(() => (console.warn(`[Icon] failed to load icon \`${e}\``), null));
  return a > 0 ? await Promise.race([t, new Promise((n) => {
    s = setTimeout(() => {
      console.warn(`[Icon] loading icon \`${e}\` timed out after ${a}ms`), n();
    }, a);
  })]).finally(() => clearTimeout(s)) : await t, getIcon(e);
}
function E(e) {
  const a = Qt().icon, r = (a.collections || []).sort((s, t) => t.length - s.length);
  return computed(() => {
    var c;
    const s = e(), t = s.startsWith(a.cssSelectorPrefix) ? s.slice(a.cssSelectorPrefix.length) : s, n = ((c = a.aliases) == null ? void 0 : c[t]) || t;
    if (!n.includes(":")) {
      const i = r.find((f) => n.startsWith(f + "-"));
      return i ? i + ":" + n.slice(i.length + 1) : n;
    }
    return n;
  });
}
function L(e, a) {
  if (e !== false) return e === true || e === null ? a : e;
}
const $ = "NUXT_ICONS_SERVER_CSS";
function te(e) {
  return e.replace(/([^\w-])/g, "\\$1");
}
const se = defineComponent({ name: "NuxtIconCss", props: { name: { type: String, required: true }, customize: { type: [Function, Boolean, null], default: null, required: false } }, setup(e) {
  const a = y(), r = Qt().icon, s = computed(() => e.name ? r.cssSelectorPrefix + e.name : ""), t = computed(() => "." + te(s.value));
  function n(c, i = true) {
    let f = t.value;
    r.cssWherePseudo && (f = `:where(${f})`);
    const d = getIconCSS(c, { iconSelector: f, format: "compressed", customise: L(e.customize, r.customize) });
    return r.cssLayer && i ? `@layer ${r.cssLayer} { ${d} }` : d;
  }
  return onServerPrefetch(async () => {
    var c;
    {
      const i = I().icon || {};
      if (!((c = i == null ? void 0 : i.serverKnownCssClasses) != null && c.includes(s.value))) {
        const f = await q(e.name, r.fetchTimeout).catch(() => null);
        if (!f) return null;
        let d = a.vueApp._context.provides[$];
        if (d || (d = a.vueApp._context.provides[$] = /* @__PURE__ */ new Map(), a.runWithContext(() => {
          zt({ style: [() => {
            let v = Array.from(d.values()).sort().join("");
            return r.cssLayer && (v = `@layer ${r.cssLayer} {${v}}`), { innerHTML: v };
          }] }, { tagPriority: "low" });
        })), e.name && !d.has(e.name)) {
          const l = n(f, false);
          d.set(e.name, l);
        }
        return null;
      }
    }
  }), () => h("span", { class: ["iconify", s.value] });
} }), re = defineComponent({ name: "NuxtIconSvg", props: { name: { type: String, required: true }, customize: { type: [Function, Boolean, null], default: null, required: false } }, setup(e, { slots: a }) {
  y();
  const r = Qt().icon, s = E(() => e.name), t = "i-" + s.value;
  return s.value && onServerPrefetch(async () => {
    await x(t, async () => await q(s.value, r.fetchTimeout), { deep: false });
  }), () => h(Icon, { icon: s.value, ssr: true, customise: L(e.customize, r.customize) }, a);
} }), Se = defineComponent({ name: "NuxtIcon", props: { name: { type: String, required: true }, mode: { type: String, required: false, default: null }, size: { type: [Number, String], required: false, default: null }, customize: { type: [Function, Boolean, null], default: null, required: false } }, setup(e, { slots: a }) {
  const r = y(), s = Qt().icon, t = E(() => e.name), n = computed(() => {
    var i;
    return ((i = r.vueApp) == null ? void 0 : i.component(t.value)) || ((e.mode || s.mode) === "svg" ? re : se);
  }), c = computed(() => {
    const i = e.size || s.size;
    return i ? { fontSize: Number.isNaN(+i) ? i : i + "px" } : null;
  });
  return () => h(n.value, { ...s.attrs, name: t.value, class: s.class, style: c.value, customize: e.customize }, a);
} });

export { Se as default };
//# sourceMappingURL=index-CrtTLl9d.mjs.map
