<template>
  <form class="kontakt-form" @submit.prevent="submitForm">
    <input v-model="ime" type="text" placeholder="Vaše ime" required />
    <input v-model="email" type="email" placeholder="Vaš e-mail" required />
    <textarea v-model="poruka" rows="4" placeholder="Vaša poruka" required></textarea>
    <button type="submit">Pošalji nam poruku</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const ime = ref('')
const email = ref('')
const poruka = ref('')

function submitForm() {
  console.log('Ime:', ime.value)
  console.log('Email:', email.value)
  console.log('Poruka:', poruka.value)

  //backend soon

}
</script>

<style scoped>
.kontakt-form {
  background: #e8f0ff;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 550px;
  width: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.kontakt-form input,
.kontakt-form textarea {
  padding: 1rem 1.2rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: 1.025rem;
  line-height: 1.5;
}

.kontakt-form textarea {
  resize: vertical;
  min-height: 140px;
  max-height: 350px;
}

.kontakt-form button {
  background-color: #246bfb;
  color: white;
  font-weight: 400;
  font-size: 1.05rem;
  padding: 0.9rem 1.2rem;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.kontakt-form button:hover {
  background-color: #154ae0;
}

.kontakt-form input:focus,
.kontakt-form textarea:focus {
  border-color: #246bfb;
  outline: none;
}

.kontakt-form input:hover,
.kontakt-form textarea:hover {
  border-color: #999;
}

.kontakt-form input::placeholder,
.kontakt-form textarea::placeholder {
  color: #8888888a;
}

@media (max-width: 480px) {
  .kontakt-form {
    padding: 1.2rem;
    font-size: 0.95rem;
  }

  .kontakt-form input,
  .kontakt-form textarea {
    font-size: 0.7rem;
    padding: 0.9rem 0.5rem;
  }

  .kontakt-form button {
    font-size: 0.6rem;
    padding: 0.85rem 1.1rem;
  }
}

</style>