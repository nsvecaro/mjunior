<template>

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


</template>

<style scoped>
.stats {
    height: 100%;
    padding: 2rem 1rem;
    display: flex;
    gap: clamp(2rem, 10vw, 12rem);
    margin-top: 3rem;
    width: 100%;
    background: linear-gradient(145deg, #ffff00a7, #2686c1a7);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 3rem;
    color: #2463EB;
    font-weight: bold;


}

.stat-label {
    font-size: 1rem;
}

@media (max-width: 768px) {
  .stats {
    flex-direction: row;
    gap: 3rem;
    padding: 2rem 1rem;
  }
  .stat-number{
    font-size: 2.2rem;
  }
  .stat-label {
    font-size: 0.8rem;
  }

}
</style>