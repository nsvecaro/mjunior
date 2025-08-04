<template>
    <section class="contact-section">
      <ContactInfo />
      <ContactForm />
    </section>
  </template>
  
  <script setup>
    import ContactInfo from '~/components/ContactInfo.vue';
    import ContactForm from '~/components/ContactForm.vue';
  </script>
  
  <style scoped>
.contact-section {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(2rem, 8vw, 10rem);
  padding: 80px 120px 100px 120px;
}

@media (max-width: 600px) {
  .contact-section {
    padding: 2rem 1.2rem;
  }
}
  </style>