import { ref, computed, mergeProps, useSSRContext } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/noel/Desktop/ModingJuniorWeb/node_modules/vue/server-renderer/index.mjs';
import { s } from './_plugin-vue_export-helper-DlAUqK2U.mjs';

const z = { __name: "productcard", __ssrInlineRender: true, props: { product: { type: Object, required: true } }, setup(c) {
  return (o, t, l, $) => {
    t(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, $))} data-v-1d9861fd>`), c.product.image ? t(`<img${ssrRenderAttr("src", c.product.image)}${ssrRenderAttr("alt", c.product.name)} class="product-image" loading="lazy" data-v-1d9861fd>`) : t("<!---->"), t(`<div class="card-content" data-v-1d9861fd><h3 class="product-name" data-v-1d9861fd>${ssrInterpolate(c.product.name)}</h3></div></div>`);
  };
} }, P = z.setup;
z.setup = (c, o) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("components/productcard.vue"), P ? P(c, o) : void 0;
};
const m = s(z, [["__scopeId", "data-v-1d9861fd"]]), k = { __name: "proizvodi", __ssrInlineRender: true, setup(c) {
  const o = ref([]), t = ref(null), l = ref(null), $ = ref(null), G = ref(null), N = ref([]), C = ref(false), q = computed(() => {
    const a = /* @__PURE__ */ new Set();
    return o.value.forEach((e) => a.add(e.category)), Array.from(a);
  }), b = computed(() => {
    const a = {};
    o.value.forEach((d) => {
      a[d.category] || (a[d.category] = /* @__PURE__ */ new Set()), d.subcategory && a[d.category].add(d.subcategory);
    });
    const e = {};
    for (const d in a) e[d] = Array.from(a[d]);
    return e;
  }), S = computed(() => {
    if (!t.value) return null;
    const a = o.value.find((e) => e.category === t.value && e.categoryDescription);
    return (a == null ? void 0 : a.categoryDescription) || null;
  }), p = computed(() => {
    if (!t.value || !l.value) return null;
    const a = o.value.find((e) => e.category === t.value && e.subcategory === l.value && e.subcategoryDescription);
    return (a == null ? void 0 : a.subcategoryDescription) || null;
  }), x = computed(() => !t.value || !l.value ? [] : o.value.filter((a) => a.category === t.value && a.subcategory === l.value)), L = computed(() => {
    if (t.value !== "Cijevi" || !l.value) return {};
    const a = {};
    return x.value.forEach((e) => {
      const d = e.group;
      a[d] || (a[d] = []), a[d].push(e);
    }), a;
  }), M = computed(() => {
    if (!t.value) return [];
    const a = b.value[t.value];
    return a && a.length > 0 ? [] : o.value.filter((e) => e.category === t.value);
  }), T = (a, e) => {
    const d = /* @__PURE__ */ new Set();
    return o.value.forEach((i) => {
      i.category === a && i.subcategory === e && i.group && d.add(i.group);
    }), Array.from(d);
  }, V = (a, e, d) => o.value.filter((i) => i.category === a && i.subcategory === e && (i.group || "Ostalo") === d), R = (a, e) => o.value.filter((d) => d.category === a && d.subcategory === e && !d.group);
  return (a, e, d, i) => {
    e(`<section${ssrRenderAttrs(mergeProps({ id: "proizvodi" }, i))} data-v-f1705eed><div class="container" data-v-f1705eed><aside class="sidebar" data-v-f1705eed><ul data-v-f1705eed><!--[-->`), ssrRenderList(q.value, (r) => {
      e(`<li data-v-f1705eed><button class="${ssrRenderClass({ active: t.value === r })}" data-v-f1705eed>${ssrInterpolate(r)}</button>`), $.value === r ? (e("<ul data-v-f1705eed><!--[-->"), ssrRenderList(b.value[r], (s) => {
        e(`<li data-v-f1705eed><button class="${ssrRenderClass({ "active-sub": l.value === s })}" data-v-f1705eed>${ssrInterpolate(s)}</button>`), C.value && G.value === s ? (e("<ul data-v-f1705eed>"), p.value ? e(`<li class="sidebar-subcategory-description" data-v-f1705eed><p data-v-f1705eed>${ssrInterpolate(p.value)}</p></li>`) : e("<!---->"), e("<!--[-->"), ssrRenderList(T(r, s), (v) => {
          e(`<li data-v-f1705eed><button data-v-f1705eed>${ssrInterpolate(v)}</button>`), N.value.includes(v) ? (e('<div data-v-f1705eed><div class="products-grid sidebar-products" data-v-f1705eed><!--[-->'), ssrRenderList(V(r, s, v), (j) => {
            e(ssrRenderComponent(m, { key: j.id, product: j, class: "product-card" }, null, d));
          }), e("<!--]--></div></div>")) : e("<!---->"), e("</li>");
        }), e("<!--]-->"), R(r, s).length > 0 ? (e('<li data-v-f1705eed><div class="products-grid sidebar-products" data-v-f1705eed><!--[-->'), ssrRenderList(R(r, s), (v) => {
          e(ssrRenderComponent(m, { key: v.id, product: v, class: "product-card" }, null, d));
        }), e("<!--]--></div></li>")) : e("<!---->"), e("</ul>")) : e("<!---->"), e("</li>");
      }), e("<!--]--></ul>")) : e("<!---->"), e("</li>");
    }), e('<!--]--><li data-v-f1705eed><div class="sidebar-label" data-v-f1705eed>Vijci i okovi</div></li><li data-v-f1705eed><div class="sidebar-label" data-v-f1705eed>Boje i lakovi</div></li></ul></aside>'), C.value ? e("<!---->") : (e(`<main class="content" data-v-f1705eed><h1 class="page-title" data-v-f1705eed>${ssrInterpolate(l.value || t.value || "Proizvodi")}</h1>`), p.value ? e(`<p class="subcategory-description" data-v-f1705eed>${ssrInterpolate(p.value)}</p>`) : e("<!---->"), S.value ? e(`<p class="category-description" data-v-f1705eed>${ssrInterpolate(S.value)}</p>`) : e("<!---->"), t.value === "Cijevi" && l.value ? (e('<div class="groups-container" data-v-f1705eed><!--[-->'), ssrRenderList(L.value, (r, s) => {
      e(`<div class="group" data-v-f1705eed><h3 class="group-title" data-v-f1705eed>${ssrInterpolate(s)}</h3><div class="products-grid" data-v-f1705eed><!--[-->`), ssrRenderList(r, (v) => {
        e(ssrRenderComponent(m, { key: v.id, product: v, class: "product-card" }, null, d));
      }), e("<!--]--></div></div>");
    }), e("<!--]--></div>")) : t.value && l.value ? (e('<div class="products-grid" data-v-f1705eed><!--[-->'), ssrRenderList(x.value, (r) => {
      e(ssrRenderComponent(m, { key: r.id, product: r }, null, d));
    }), e("<!--]--></div>")) : t.value && (!b.value[t.value] || b.value[t.value].length === 0) ? (e('<div class="products-grid" data-v-f1705eed><!--[-->'), ssrRenderList(M.value, (r) => {
      e(ssrRenderComponent(m, { key: r.id, product: r }, null, d));
    }), e("<!--]--></div>")) : e("<!---->"), !t.value && !l.value ? e('<div class="empty-placeholder" data-v-f1705eed><p data-v-f1705eed>Odaberi kategoriju i podkategoriju za prikaz proizvoda.</p></div>') : e("<!---->"), e('<div class="empty-cta" data-v-f1705eed><p class="cta-text" data-v-f1705eed>Treba\u0161 pomo\u0107 pri odabiru proizvoda? Nazovi nas \u2014 odmah \u0107emo ti pomo\u0107i!</p><a href="tel:+38552500590" class="cta-button" data-v-f1705eed>Nazovi nas</a></div></main>')), e("</div></section>");
  };
} }, w = k.setup;
k.setup = (c, o) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("pages/proizvodi.vue"), w ? w(c, o) : void 0;
};
const J = s(k, [["__scopeId", "data-v-f1705eed"]]);

export { J as default };
//# sourceMappingURL=proizvodi-XjfJdQW2.mjs.map
