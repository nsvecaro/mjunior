import { defineComponent, shallowRef, h, resolveComponent, computed } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/index.mjs';
import { parseQuery, hasProtocol, joinURL, withTrailingSlash, withoutTrailingSlash } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/ufo/dist/index.mjs';
import { f as X, a as y, e as I, r as Pt, n as kt, g as Mo } from './server.mjs';

const D = (...n) => n.find((p) => p !== void 0);
function F(n) {
  const p = n.componentName || "NuxtLink";
  function m(e) {
    return typeof e == "string" && e.startsWith("#");
  }
  function q(e, a, v) {
    const i = v != null ? v : n.trailingSlash;
    if (!e || i !== "append" && i !== "remove") return e;
    if (typeof e == "string") return S(e, i);
    const u = "path" in e && e.path !== void 0 ? e.path : a(e).path;
    return { ...e, name: void 0, path: S(u, i) };
  }
  function R(e) {
    var _a, _b, _c;
    const a = X(), v = I(), i = computed(() => !!e.target && e.target !== "_self"), u = computed(() => {
      const r = e.to || e.href || "";
      return typeof r == "string" && hasProtocol(r, { acceptRelative: true });
    }), d = resolveComponent("RouterLink"), c = d && typeof d != "string" ? d.useLink : void 0, o = computed(() => {
      if (e.external) return true;
      const r = e.to || e.href || "";
      return typeof r == "object" ? false : r === "" || u.value;
    }), t = computed(() => {
      const r = e.to || e.href || "";
      return o.value ? r : q(r, a.resolve, e.trailingSlash);
    }), l = o.value || c == null ? void 0 : c({ ...e, to: t }), y = computed(() => {
      var _a2, _b2;
      var h;
      const r = (_a2 = e.trailingSlash) != null ? _a2 : n.trailingSlash;
      if (!t.value || u.value || m(t.value)) return t.value;
      if (o.value) {
        const g = typeof t.value == "object" && "path" in t.value ? Pt(t.value) : t.value, x = typeof g == "object" ? a.resolve(g).href : g;
        return S(x, r);
      }
      return typeof t.value == "object" ? (_b2 = (h = a.resolve(t.value)) == null ? void 0 : h.href) != null ? _b2 : null : S(joinURL(v.app.baseURL, t.value), r);
    });
    return { to: t, hasTarget: i, isAbsoluteUrl: u, isExternal: o, href: y, isActive: (_a = l == null ? void 0 : l.isActive) != null ? _a : computed(() => t.value === a.currentRoute.value.path), isExactActive: (_b = l == null ? void 0 : l.isExactActive) != null ? _b : computed(() => t.value === a.currentRoute.value.path), route: (_c = l == null ? void 0 : l.route) != null ? _c : computed(() => a.resolve(t.value)), async navigate(r) {
      await kt(y.value, { replace: e.replace, external: o.value || i.value });
    } };
  }
  return defineComponent({ name: p, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, default: void 0, required: false } }, useLink: R, setup(e, { slots: a }) {
    const v = X(), { to: i, href: u, navigate: d, isExternal: c, hasTarget: o, isAbsoluteUrl: t } = R(e);
    shallowRef(false);
    const l = void 0, y$1 = void 0;
    async function r(h = y()) {
    }
    return () => {
      var x;
      if (!c.value && !o.value && !m(i.value)) {
        const f = { ref: y$1, to: i.value, activeClass: e.activeClass || n.activeClass, exactActiveClass: e.exactActiveClass || n.exactActiveClass, replace: e.replace, ariaCurrentValue: e.ariaCurrentValue, custom: e.custom };
        return e.custom || (f.rel = e.rel || void 0), h(resolveComponent("RouterLink"), f, a.default);
      }
      const h$1 = e.target || null, g = D(e.noRel ? "" : e.rel, n.externalRelAttribute, t.value || o.value ? "noopener noreferrer" : "") || null;
      return e.custom ? a.default ? a.default({ href: u.value, navigate: d, prefetch: r, get route() {
        if (!u.value) return;
        const f = new URL(u.value, "http://localhost");
        return { path: f.pathname, fullPath: f.pathname, get query() {
          return parseQuery(f.search);
        }, hash: f.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: u.value };
      }, rel: g, target: h$1, isExternal: c.value || o.value, isActive: false, isExactActive: false }) : null : h("a", { ref: l, href: u.value || null, rel: g, target: h$1, onClick: (f) => {
        if (!(c.value || o.value)) return f.preventDefault(), e.replace ? v.replace(u.value) : v.push(u.value);
      } }, (x = a.default) == null ? void 0 : x.call(a));
    };
  } });
}
const z = F(Mo);
function S(n, p) {
  const m = p === "append" ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(n) && !n.startsWith("http") ? n : m(n, true);
}

export { z };
//# sourceMappingURL=nuxt-link-DYQtWteY.mjs.map
