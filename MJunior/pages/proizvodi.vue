<template>
    <section id="proizvodi">
        <div class="container">
            <!-- Sidebar -->
            <aside class="sidebar">
                <ul>
                    <li v-for="cat in categories" :key="cat">
                        <button @click="selectCategory(cat)" :class="{ 'active': selectedCategory === cat }">
                            {{ cat }}
                        </button>

                        <!-- Prikaži podkategorije samo ako ih ova kategorija ima -->
                        <ul
                            v-if="subcategoriesByCategory[cat] && subcategoriesByCategory[cat].length > 0 && selectedCategory === cat">
                            <li v-for="sub in subcategoriesByCategory[cat]" :key="sub">
                                <button @click="selectSubcategory(sub)"
                                    :class="{ 'active-sub': selectedSubcategory === sub }">
                                    {{ sub }}
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>

            <!-- Glavni sadržaj -->
            <main class="content">
                <h1 class="page-title">
                    {{ selectedSubcategory || selectedCategory || 'Proizvodi' }}
                </h1>

                <!-- Za cijevi s grupama -->
                <div v-if="selectedCategory === 'Cijevi' && selectedSubcategory" class="groups-container">
                    <div v-for="(groupItems, groupName) in groupedProducts" :key="groupName" class="group">
                        <h3 class="group-title">{{ groupName }}</h3>
                        <div class="products-grid">
                            <ProductCard v-for="p in groupItems" :key="p.id" :product="p" class="product-card" />
                        </div>
                    </div>
                </div>

                <!-- Za ostale kategorije koje imaju subkategorije -->
                <div v-else-if="selectedCategory && selectedSubcategory" class="products-grid">
                    <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" />
                </div>

                <!-- Za kategorije koje nemaju subkategorije -->
                <div v-else-if="selectedCategory && (!subcategoriesByCategory[selectedCategory] || subcategoriesByCategory[selectedCategory].length === 0)"
                    class="products-grid">
                    <ProductCard v-for="p in categoryOnlyProducts" :key="p.id" :product="p" />
                </div>

                <!-- Prazno -->
                <div v-else class="empty-placeholder">
                    <p>Odaberi kategoriju i podkategoriju za prikaz proizvoda.</p>
                </div>
            </main>
        </div>
    </section>
</template>

<script setup>
import ProductCard from '/components/ProductCard.vue'
import { ref, computed, onMounted } from 'vue'

const products = ref([])

const selectedCategory = ref(null)
const selectedSubcategory = ref(null)

onMounted(async () => {
    const res = await fetch('/proizvodi/proizvodi.json')
    products.value = await res.json()
})

const categories = computed(() => {
    const set = new Set()
    products.value.forEach(p => set.add(p.category))
    return Array.from(set)
})

const subcategories = computed(() => {
    if (!selectedCategory.value) return []
    const set = new Set()
    products.value
        .filter(p => p.category === selectedCategory.value)
        .forEach(p => set.add(p.subcategory))
    return Array.from(set)
})

const filteredProducts = computed(() => {
    if (!selectedCategory.value || !selectedSubcategory.value) return []
    return products.value.filter(
        p =>
            p.category === selectedCategory.value &&
            p.subcategory === selectedSubcategory.value
    )
})

const categoryOnlyProducts = computed(() => {
    if (!selectedCategory.value) return []
    const subcats = subcategoriesByCategory.value[selectedCategory.value]
    // Ako postoje podkategorije za ovu kategoriju, ne prikazuj ništa
    if (subcats && subcats.length > 0) return []

    // Vrati sve proizvode koji su u ovoj kategoriji
    return products.value.filter(p => p.category === selectedCategory.value)
})

const subcategoriesByCategory = computed(() => {
    const map = {}
    products.value.forEach(p => {
        if (!map[p.category]) map[p.category] = new Set()
        if (p.subcategory) map[p.category].add(p.subcategory)
    })

    // Pretvori sve setove u arraye
    const result = {}
    for (const key in map) {
        result[key] = Array.from(map[key])
    }
    return result
})

const groupedProducts = computed(() => {
    if (selectedCategory.value !== 'Cijevi' || !selectedSubcategory.value) return {}

    const groups = {}
    filteredProducts.value.forEach(p => {
        const groupName = p.group || 'Ostalo'
        if (!groups[groupName]) groups[groupName] = []
        groups[groupName].push(p)
    })
    return groups
})

function selectCategory(cat) {
    selectedCategory.value = cat
    selectedSubcategory.value = null
}

function selectSubcategory(sub) {
    selectedSubcategory.value = sub
}
</script>

<style scoped>
#proizvodi {
    margin-top: 50px;
    padding: 80px 120px 30px 120px;
    height: 100%;
    position: relative;
    background-color: rgb(255, 255, 248);
    border-radius: 30px;
}

.container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    min-height: 85vh;
    gap: 2rem;
}

/* Sidebar */
.sidebar {
    width: 220px;
    border-right: 1px solid #ccc;
    padding-right: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar>ul>li {
    margin-bottom: 1rem;
}

.sidebar button {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    padding: 0.4rem 0;
    color: #333;
    width: 100%;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 500;
}

.sidebar ul ul {
    padding-left: 1rem;
    margin-top: 0.5rem;
}

.sidebar .active {
    color: #007BFF;
}

.sidebar .active-sub {
    font-weight: 700;
    color: #007BFF;
}

/* Content */
.content {
    flex-grow: 1;
}

.page-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 2rem;
}

.groups-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.group {
    display: flex;
    flex-direction: column;
}

.group-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

/*dekstop*/
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
}

/* Svaka kartica */
.product-card {
    min-width: 220px;
    max-width: 220px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
}

/* Placeholder */
.empty-placeholder {
    font-style: italic;
    color: #777;
    margin-top: 2rem;
}


@media (max-width: 600px) {
  .container {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;
  }

  .sidebar {
    width: 120px;
    flex-shrink: 0;
    padding-right: 0.5rem;
    border-right: 1px solid #ccc;
  }

  .sidebar button {
    font-size: 0.85rem;
    padding: 0.2rem 0;
  }

  .sidebar ul {
    gap: 0.3rem;
  }

  .sidebar ul ul {
    padding-left: 0.5rem;
  }

  .content {
    flex-grow: 1;
    width: 100%;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 0.75rem;
  }

  .product-card {
    min-width: 100%;
    max-width: 100%;
  }

  .page-title {
    font-size: 1.2rem;
    text-align: center;
  }
}

@media (max-width: 600px) {
    #proizvodi {
        padding: 40px 20px 20px 20px;
    }

    .sidebar ul ul {
        padding-left: 0.5rem;
    }

    .products-grid {
        padding-bottom: 0.5rem;
    }

    .page-title {
        font-size: 1.3rem;
    }

    .group-title {
        font-size: 1.1rem;
    }
}
</style>