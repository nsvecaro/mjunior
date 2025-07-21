<template>
    <footer class="footer">
      <div class="footer-top">
        <div class="column left">
          <h1>Moding Junior</h1>
          <nav class="nav-links">
            <a href="#">O nama</a>
            <a href="#">Reference</a>
            <a href="#">Blog</a>
          </nav>
        </div>
  
        <div class="column middle">
          <h3>Moding Junior - Brčko</h3>
          <p>Brčko - Brka, 76206<br />Industrijska zona bb</p>
          <p>Telefon: +387 49 500 126</p>
        </div>
  
        <div class="column right">
          <h3>Moding Junior - Prijedor</h3>
          <p>Prijedor, 79101<br />Donja Čela bb</p>
          <p>Telefon: +387 52 370 770</p>
          <div class="logos">
            <img src="/images/certs.jpg" alt="Certifikati FSB" />
            <img src="/images/eucert.jpg" alt="Certifikat Europske Unije" />
            <img src="/images/eusuf.jpg" alt="Sufinanciranje od strane Europske Unije" />
          </div>
        </div>
      </div>
  
      <div class="footer-bottom">
        <div class="bottom-left">
          <p><strong>MODING JUNIOR d.o.o.</strong> za proizvodnju, građevinarstvo, unutarnju i vanjsku trgovinu.<br />OIB: 25897440119</p>
          <nav class="policy-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
          </nav>
          <p class="copyright">© 2025. Moding Junior d.o.o. Sva Prava Zadržana.</p>
        </div>
        <div class="bottom-right">
          <p>Designed & coded by <strong>Scope</strong></p>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
.footer {
  background: #f6f6f6;
  padding: 3rem 2rem;
  font-family: 'Lexend', sans-serif;
  border-radius: 20px 20px 0 0;
  width: 100%;
}
  
.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2rem;
}
  
  .column {
    flex: 1 1 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }


.column h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
  
.nav-links a {
  color: #000;
  text-decoration: none;
  font-weight: 500;
}
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  
  .logos {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .logos img {
  width: 150px;
  height: auto;
  object-fit: contain;
}
  
  .footer-bottom {
    display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #555;
  gap: 2rem;
}
  
.policy-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.policy-links a {
  color: #555;
  text-decoration: none;
}

.policy-links a:hover {
  text-decoration: underline;
}

.bottom-left p {
  margin: 0.3rem 0;
}

.bottom-right {
  margin-left: auto;
}

@media (max-width: 960px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }

  .bottom-right {
    margin-left: 0;
  }
}

@media (max-width: 600px) {
  .footer-top {
    grid-template-columns: 1fr;
  }

  .nav-links {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .logos {
    justify-content: flex-start;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
  </style>