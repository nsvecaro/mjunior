<template>
    <div class="card">
        <img v-if="product.image" :src="product.image" :alt="product.name" class="product-image" loading="lazy" />
        <div class="card-content">
            <h3 class="product-name">{{ product.name }}</h3>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 6px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 180px;


    
}

.card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-image {
    width: 100px;
    height: auto;
    align-items: center;
    object-fit: cover;
    display: block;
}

.card-content {
    padding: 0.75rem 1rem;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-name {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
}
@media (max-width: 480px) {
  .card {
    min-width: 140px;
    max-width: 180px;
    flex: 0 0 auto;
  }

  .product-image {
    width: 80px;
  }

  .product-name {
    font-size: 0.9rem;
  }
}
</style>