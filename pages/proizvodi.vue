<template>
    <section id="proizvodi">
        <div class="container">
            <!-- SIDEBAR -->
            <aside class="sidebar">
                <ul>
                    <li v-for="cat in categories" :key="cat">
                        <button @click="toggleCategory(cat)" :class="{ active: selectedCategory === cat }">
                            {{ cat }}
                        </button>

                        <!-- Podkategorije -->
                        <ul v-if="openCategory === cat">
                            <li v-for="sub in subcategoriesByCategory[cat]" :key="sub">
                                <button @click="toggleSubcategory(sub)"
                                    :class="{ 'active-sub': selectedSubcategory === sub }">
                                    {{ sub }}
                                </button>

                                <!-- Grupe (SAMO MOBILE) -->
                                <ul v-if="isMobile && openSubcategory === sub">
                                    <!-- Grupe -->
                                    <!-- Prikaz subcategoryDescription ako postoji -->
                                    <li v-if="subcategoryDescription" class="sidebar-subcategory-description">
                                        <p>{{ subcategoryDescription }}</p>
                                    </li>
                                    <li v-for="group in groupsBySelection(cat, sub)" :key="group">
                                        <button @click="toggleGroup(group)">
                                            {{ group }}
                                        </button>

                                        <div v-if="openedGroups.includes(group)">
                                            <div class="products-grid sidebar-products">
                                                <ProductCard v-for="p in productsInGroup(cat, sub, group)" :key="p.id"
                                                    :product="p" class="product-card" />
                                            </div>
                                        </div>
                                    </li>

                                    <!-- Proizvodi bez grupe -->
                                    <li v-if="productsWithoutGroup(cat, sub).length > 0">
                                        <div class="products-grid sidebar-products">
                                            <ProductCard v-for="p in productsWithoutGroup(cat, sub)" :key="p.id"
                                                :product="p" class="product-card" />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <!-- Statičke stavke -->
                    <li>
                        <div class="sidebar-label">Vijci i okovi</div>
                    </li>
                    <li>
                        <div class="sidebar-label">Boje i lakovi</div>
                    </li>
                </ul>
            </aside>

            <!-- MAIN CONTENT (DESKTOP ONLY) -->
            <main v-if="!isMobile" class="content">
                <h1 class="page-title">{{ selectedSubcategory || selectedCategory || 'Proizvodi' }}</h1>
                <p v-if="subcategoryDescription" class="subcategory-description">{{ subcategoryDescription }}</p>
                <p v-if="categoryDescription" class="category-description">{{ categoryDescription }}</p>

                <!-- Cijevi s grupama -->
                <div v-if="selectedCategory === 'Cijevi' && selectedSubcategory" class="groups-container">
                    <div v-for="(groupItems, groupName) in groupedProducts" :key="groupName" class="group">
                        <h3 class="group-title">{{ groupName }}</h3>
                        <div class="products-grid">
                            <ProductCard v-for="p in groupItems" :key="p.id" :product="p" class="product-card" />
                        </div>
                    </div>
                </div>

                <!-- Ostale kategorije -->
                <div v-else-if="selectedCategory && selectedSubcategory" class="products-grid">
                    <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" />
                </div>

                <!-- Kategorije bez podkategorija -->
                <div v-else-if="selectedCategory && (!subcategoriesByCategory[selectedCategory] || subcategoriesByCategory[selectedCategory].length === 0)"
                    class="products-grid">
                    <ProductCard v-for="p in categoryOnlyProducts" :key="p.id" :product="p" />
                </div>

                <!-- Prazno -->
                <div v-if="!selectedCategory && !selectedSubcategory" class="empty-placeholder">
                    <p>Odaberi kategoriju i podkategoriju za prikaz proizvoda.</p>
                </div>

                <!-- CTA -->
                <div class="empty-cta">
                    <p class="cta-text">Trebaš pomoć pri odabiru proizvoda? Nazovi nas — odmah ćemo ti pomoći!</p>
                    <a href="tel:+38552500590" class="cta-button">Nazovi nas</a>
                </div>
            </main>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ProductCard from '/components/ProductCard.vue'

const products = ref([])

const selectedCategory = ref(null)
const selectedSubcategory = ref(null)
const openCategory = ref(null)
const openSubcategory = ref(null)
const openedGroups = ref([])
const isMobile = ref(false)

const checkMobile = () => {
    isMobile.value = window.innerWidth <= 600
}

onMounted(async () => {
    const res = await fetch('/proizvodi/proizvodi.json')
    products.value = await res.json()
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkMobile)
})

const categories = computed(() => {
    const set = new Set()
    products.value.forEach(p => set.add(p.category))
    return Array.from(set)
})

const subcategoriesByCategory = computed(() => {
    const map = {}
    products.value.forEach(p => {
        if (!map[p.category]) map[p.category] = new Set()
        if (p.subcategory) map[p.category].add(p.subcategory)
    })
    const result = {}
    for (const key in map) {
        result[key] = Array.from(map[key])
    }
    return result
})

const categoryDescription = computed(() => {
    if (!selectedCategory.value) return null
    const match = products.value.find(p => p.category === selectedCategory.value && p.categoryDescription)
    return match?.categoryDescription || null
})

const subcategoryDescription = computed(() => {
    if (!selectedCategory.value || !selectedSubcategory.value) return null
    const match = products.value.find(
        p =>
            p.category === selectedCategory.value &&
            p.subcategory === selectedSubcategory.value &&
            p.subcategoryDescription
    )
    return match?.subcategoryDescription || null
})

const filteredProducts = computed(() => {
    if (!selectedCategory.value || !selectedSubcategory.value) return []
    return products.value.filter(p => p.category === selectedCategory.value && p.subcategory === selectedSubcategory.value)
})

const groupedProducts = computed(() => {
    if (selectedCategory.value !== 'Cijevi' || !selectedSubcategory.value) return {}
    const groups = {}
    filteredProducts.value.forEach(p => {
        const groupName = p.group
        if (!groups[groupName]) groups[groupName] = []
        groups[groupName].push(p)
    })
    return groups
})

const categoryOnlyProducts = computed(() => {
    if (!selectedCategory.value) return []
    const subcats = subcategoriesByCategory.value[selectedCategory.value]
    if (subcats && subcats.length > 0) return []
    return products.value.filter(p => p.category === selectedCategory.value)
})

const toggleCategory = (cat) => {
    openCategory.value = openCategory.value === cat ? null : cat
    selectedCategory.value = cat
    openSubcategory.value = null
    openedGroups.value = []
}

const toggleSubcategory = (sub) => {
    openSubcategory.value = openSubcategory.value === sub ? null : sub
    selectedSubcategory.value = sub
    openedGroups.value = []
}

const toggleGroup = (group) => {
    if (openedGroups.value.includes(group)) {
        openedGroups.value = []
    } else {
        openedGroups.value = [group]
    }
}

const groupsBySelection = (cat, sub) => {
    const set = new Set()
    products.value.forEach(p => {
        if (p.category === cat && p.subcategory === sub && p.group) {
            set.add(p.group)
        }
    })
    return Array.from(set)
}

const productsInGroup = (cat, sub, group) => {
    return products.value.filter(
        p => p.category === cat && p.subcategory === sub && (p.group || 'Ostalo') === group
    )
}

const productsWithoutGroup = (cat, sub) => {
    return products.value.filter(
        p => p.category === cat && p.subcategory === sub && !p.group
    )
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

.sidebar-label {
    font-size: inherit;
    font-weight: 500;
    padding: 0.4rem 0;
    color: #333;
    opacity: 0.8;
    width: 100%;
    text-align: left;
    pointer-events: none;
    user-select: none;
}

.sidebar-subcategory-description p {
  font-size: 0.9rem;
  color: #555;
  padding: 0.3rem 0.5rem;
  font-style: italic;
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
    margin-top: 1rem;
}

.empty-cta {
    margin-top: 6.5rem;
    margin-bottom: 2rem;
    text-align: center;
}

.cta-text {
    font-size: 1rem;
    margin-bottom: 0.75rem;
    color: #444;
    font-weight: 500;
    font-style: normal;
}

.cta-button {
    display: inline-block;
    background-color: #007BFF;
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease;
    font-style: normal;
}

.cta-button:hover {
    background-color: #0056b3;
}


@media (max-width: 600px) {
    .container {
        flex-direction: column;
        gap: 2rem;
    }

    #proizvodi {
        padding: 40px 20px 20px 20px;
    }

    .sidebar {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #ccc;
        padding-right: 0;
        padding-bottom: 1rem;
        margin-top: 0.5rem;
    }

    .sidebar ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .sidebar ul ul {
        padding-left: 0.5rem;
    }

    .sidebar button,
    .sidebar-label {
        font-size: 1.25rem;
        padding: 0.2rem 0;
        width: 100%;
        text-align: left;
    }

    .sidebar-label {
        color: #333;
        font-weight: 500;
        pointer-events: none;
        user-select: none;
    }

    .content {
        width: 100%;
    }

    .products-grid {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        gap: 1rem;
        padding-inline: 1rem;
        padding-bottom: 1rem;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
    }

    .products-grid::-webkit-scrollbar {
        display: none;
    }

    .product-card {
        flex: 0 0 calc(80% - 1rem);
        scroll-snap-align: start;
    }

    .page-title {
        font-size: 1.3rem;
        text-align: center;
    }

    .group-title {
        font-size: 1.1rem;
    }

    .empty-cta {
        text-align: left;
    }

    .cta-button {
        width: 100%;
        text-align: center;
    }
}
</style>