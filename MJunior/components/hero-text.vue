<template>
  <div class="main-text">
    <h2><span class="moding">MODING</span> <span class="junior">JUNIOR</span></h2>
    <h1>Čelične konstrukcije • Proizvodnja • Montaža</h1>
    <p>Ferrocentar - trgovina crnom i obojenom metalurgijom te proizvodnja i montaža čeličnih konstrukcija.</p>
  </div>
  <div class="buttons">
    <Hero-Button buttonText="Naši radovi →" customClass="blue-button" to="/galerija" />
    <Hero-Button buttonText="Kontakt" customClass="yellow-button" to="#contact" />
  </div>

  <div class="stats-section">
    <div class="stats-wrapper">
      <div class="gradient-line"></div>
      <div class="stats">
        <div class="stat">
          <div class="stat-number">30+</div>
          <div class="stat-label">Godina</div>
        </div>
        <div class="stat">
          <div class="stat-number">750+</div>
          <div class="stat-label">Projekata</div>
        </div>
        <div class="stat">
          <div class="stat-number">60 000+</div>
          <div class="stat-label">Zadovoljnih klijenata</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>


<style scoped>
.main-text {
  text-align: left;
}

.moding {
  color: inherit;
}

.junior {
  color: #2463EB;
}

.main-text h1 {
  color: #2463EB;
  font-weight: 400;
  font-size: 1.4rem;
}

.main-text h2 {
  font-size: 4rem;
  width: 100%;
  max-width: 80%;
  font-weight: 500;
}

.main-text p {
  font-size: 1.3rem;
  width: 100%;
  max-width: 300px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.blue-button {
  background-color: #2463EB;
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.blue-button:hover {
  background-color: #1d4aab;
}

.yellow-button {
  background-color: #ffc107;
  color: black;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.yellow-button:hover {
  background-color: #e0a800;
}

.gradient-line {
  height: 4px;
  width: 100%;
  background: linear-gradient(to right, #00C9FF, #92FE9D, #fdfd00);
}

.stats-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
}

.stats-section {
  margin-top: 2rem;
}

.stats {
  display: flex;
  gap: 5rem;
  margin-top: 1rem;
  width: 100%;
  max-width: fit-content;
}

.stats {
  display: flex;
  gap: 5rem;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: bold;

}

.stat-label {
  font-size: 0.9rem;
}



@media (max-width: 768px) {

  .main-text{
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    padding: 10px 20px;
  }
  .main-text h2 {
    font-size: 4rem;
    margin-bottom: 0rem;
  }

  .main-text h1 {
    font-size: 1.1rem;
    margin-top: 1rem;
  }

  .main-text p {
    font-size: 1rem;
    max-width: 100%;
  }

  .buttons {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.6rem;
    padding: 10px 30px;
  }

  .buttons :deep(button) {
    flex: 1 1 auto;
    min-width: calc(50% - 0.5rem);
  }

  .stats-wrapper {
    padding: 0px 30px;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;

  }

  .gradient-line {
    width: 100%;
  }
}
</style>