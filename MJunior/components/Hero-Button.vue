<template>
    <button class="hero-button" :class="customClass">{{ buttonText }}</button>
</template>

<script>
export default {
    name: "HeroButton",
    props: {
        buttonText: {
            type: String,
            required: true,
        },
        customClass:{
            type: String,
            default: "",
        },
    },
};
</script>

<style scoped>
.hero-button {
    border-radius: 8px;
    padding: 16px 40px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    cursor: pointer;
    font-size: 16px;
}

.hero-button:hover {
    background-color: #e0e0e0;
}
</style>