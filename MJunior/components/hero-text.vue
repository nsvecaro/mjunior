<template>
  <div class="hero-text-wrapper">
    <div class="main-text">
      <h2><span class="moding">MODING</span> <span class="junior">JUNIOR</span></h2>
      <h1>Čelične konstrukcije • Proizvodnja • Montaža</h1>
      <p>Ferrocentar - trgovina crnom i obojenom metalurgijom te proizvodnja i montaža čeličnih konstrukcija.</p>
    </div>
    <div class="buttons">
      <Hero-Button buttonText="Naša ponuda →" customClass="blue-button" to="/proizvodi" />
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
  font-weight: 600;
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
  font-weight: 500;
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
  min-height: 120px;
}

.stats {
  display: flex;
  gap: 5rem;
  margin-top: 1rem;
  width: 100%;
  min-height: 80px;
  align-items: center;
}
.stat{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.stat-number{
  font-weight: 800;
  font-size: 1.1rem;
}

.stat-label{
  font-size: 0.8rem;
  color: #666;
}

/* RESPONSIVE */

@media (max-width: 1299px) {
  .main-text {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }

  .main-text h2 {
    font-size: 3rem;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .main-text h1 {
    font-size: 1rem;
    margin-top: 1rem;
  }

  .main-text p {
    font-size: 0.85rem;
    max-width: 100%;
  }

  .buttons {
    justify-content: center;
  }

  .stats-wrapper {
    align-items: center;
    width: 100%;
    padding: 0 20px;
  }

  .stats {
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
    align-items: center;
  }
}

@media (min-width: 1300px) and (max-width: 1500px) {
.main-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
}

.main-text h2{
  margin-bottom: 0px;
}

.buttons{
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.stats-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
}
</style>