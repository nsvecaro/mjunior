<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/">
        <img src="/images/ModingJuniorLogo.png" alt="Moding Junior Logo" />
      </NuxtLink>
    </div>

    <div class="burger" :class="{ open: isOpen }" @click="toggleMenu">
      <span></span>
    </div>

    <nav class="nav" :class="{ open: isOpen }">
      <ul class="nav-links">
        <li><a href="/#hero" @click="closeMenu">Početna</a></li>
        <li><a href="/#partners" @click="closeMenu">Partneri</a></li>
        <li><a href="/#offers" @click="closeMenu">Ponuda</a></li>
      </ul>
      <a href="/#contact" class="cta-button" @click="closeMenu">Kontaktirajte nas</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 120px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-family: 'Lexend', sans-serif;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
}

.logo img {
  height: 60px;
  max-height: 80px;
  width: auto;
  object-fit: contain;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #000;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #246bfb;
}

.cta-button {
  background-color: #ffc107;
  color: black;
  padding: 1rem 1.4rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background-color: #e0a800;
}

/* Burger ikona */
.burger {
  display: none;
  position: relative;
  width: 25px;
  height: 20px;
  cursor: pointer;
}

.burger span,
.burger::before,
.burger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: black;
  transition: all 0.4s ease;
  border-radius: 2px;
}

.burger span {
  top: 50%;
  transform: translateY(-50%);

}

.burger::before {
  top: 0;
}

.burger::after {
  bottom: 0;
}

.burger.open span {
  opacity: 0;
}

.burger.open::before {
  transform: rotate(45deg);
  top: 45%;
}

.burger.open::after {
  transform: rotate(-45deg);
  bottom: auto;
  top: 45%;
}

/* Responsive */
@media (max-width: 768px) {
  .burger {
    display: block;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: white;
    align-items: flex-start;
    padding: 1rem 2rem;
    gap: 1.5rem;
    display: none;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  }

  .nav.open {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .cta-button {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
  }

  .header {
    padding: 1rem 1.5rem;
    flex-wrap: wrap;
  }
}
</style>