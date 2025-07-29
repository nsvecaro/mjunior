<template>
  <div class="galerija-wrapper">
    <aside class="sidebar">
      <ul>
        <li v-for="partner in partners" :key="partner.id" @click="selected = partner"
          :class="{ active: selected.id === partner.id }">
          {{ partner.label }}
        </li>
      </ul>
    </aside>

    <main class="gallery-content" v-if="selected">
      <h2>{{ selected.label }}</h2>
      <div class="masonry">
        <img v-for="img in selected.images" :key="img" :src="`/galerija/${selected.folder}/${img}`" loading="lazy"
          alt="" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const partners = ref([])
const selected = ref(null)

onMounted(async () => {
  const res = await fetch('/galerija/galerija.json')
  partners.value = await res.json()
  selected.value = partners.value[0]
})
</script>

<style scoped>
.galerija-wrapper {
  padding: 120px 120px 20px 120px;
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 200px;
  padding: 1rem;
  overflow-y: auto;
  border-right: 2px solid #ccc;
  border-radius: 50px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 0.75rem 0;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.2rem;
}

.sidebar li:hover {
  color: #6d6d6d;
  transition: color 0.3s ease;
}

.sidebar li.active {
  font-weight: 700;
  font-size: 1.4rem;
}

.gallery-content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.masonry {
  column-count: 4;
  column-gap: 1.2rem;
}

.masonry img {
  width: 100%;
  display: block;
  margin-bottom: 2rem;
  border-radius: 6px;
  break-inside: avoid;
  object-fit: cover;
}

@media (max-width: 1200px) {
  .masonry {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .masonry {
    column-count: 2;
  }

  .masonry img {
    margin-bottom: 1rem;
  }

  .galerija-wrapper {
    flex-direction: column;
    padding: 100px 20px 20px 20px;
    height: auto;
  }

  .sidebar {
    width: 100%;
    padding: 0.5rem 0;
    border-right: none;
    border-bottom: 1px solid #ccc;
    overflow-x: auto;
  }

  .sidebar ul {
    display: flex;
    gap: 1.2rem;
    padding: 0 1rem;
    overflow-x: auto;
    white-space: nowrap;
  }

  .sidebar li {
    font-size: 1rem;
    padding: 0.6rem 0;
    flex: 0 0 auto;
    -webkit-tap-highlight-color: transparent;
  }

  .gallery-content {
    padding: 1rem 0;
  }
}

@media (max-width: 480px) {
  .masonry {
    column-count: 1;
  }
}
</style>