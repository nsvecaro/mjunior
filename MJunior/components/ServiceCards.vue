<template>
    <div class="cards-grid">
      <div v-for="(service, i) in services" :key="i" class="card">
        <div class="icon" v-html="service.icon" />
        <h3 class="title">{{ service.title }}</h3>
        <p class="text">{{ service.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const services = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M2 2h20v2H2zm3 4h14v2H5zm-3 4h20v2H2zm3 4h14v2H5zm-3 4h20v2H2z"/></svg>`,
      title: 'Prodaja željeza',
      description: 'U našem skladištu možete pronaći sve od crnih, pocinčanih i aluminijskih cijevi.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v6H3zM2 20h20v-2H2zm0-4h20v-2H2zm0-4h20V10H2z"/></svg>`,
      title: 'Paneli i krovište',
      description: 'Najveća ponuda krovnih i zidnih panela, te ostalih vrsta krovišta u Puli.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M2 5h20v2H2zm2 4h16v12H4z"/></svg>`,
      title: 'Rezanje na mjeru',
      description: 'Uvijek se trudimo olakšati Vam, stoga nudimo rezanje na mjeru, cijeli ili panela.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v2H4zm2 4h12v12H6z"/></svg>`,
      title: 'Izrada čeličnih konstrukcija',
      description: 'Izrađujemo konstrukcije od nadstrešnica i ograda, do industrijskih objekata i hala.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v2H3zm2 4h14v14H5z"/></svg>`,
      title: 'Montaža čeličnih konstrukcija',
      description: 'Osim izrade, osiguravamo i preciznu montažu na lokaciji.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M2 2h20v20H2z"/></svg>`,
      title: 'Završna obrada',
      description: 'Završna obrada na jednom mjestu. Od brusnih ploča do vijaka i sitnog materijala.'
    }
  ]
  </script>
  
  <style scoped>
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.4rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0px auto;
  }
  
  .card {
    background: linear-gradient(to bottom right, #f8f9fa, #e2edff);
    border: 1px solid #77abff9a;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.04);
    transition: transform 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  
  .card:hover {
    transform: scale(1.03);
  }
  
  .icon {
    color: #246bfb;
    margin-bottom: 1rem;
  }

  .icon svg{
    width: 28px;
    height: 28px;
  }
  
  .title {
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
  
  .text {
    font-size: 1.1rem;
    color: #000000a0;
  }
  
  /* Responsive */
  @media (max-width: 960px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 600px) {
    .cards-grid {
      grid-template-columns: 1fr;
      gap: 1.8rem;
      padding: 1.5rem;
    }
  }
  </style>