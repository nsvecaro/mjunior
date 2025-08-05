<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="column left">
          <!--  <h1>Moding Junior</h1> -->
          <img src="/images/ModingJuniorLogo.webp" alt="Moding Junior Logo">
          <nav class="nav-links">
            <div class="contact-row">
              <div class="contact-item">
                <p class="label">E-Mail:</p>
                <a href="mailto:info@moding-junior.hr" class="value">info@moding-junior.hr</a>
              </div>
              <div class="contact-item">
                <p class="label">Telefon:</p>
                <a href="tel:+38552500590" class="value">+38552500590</a>
              </div>
              <div class="contact-item">
                <p class="label">Adresa:</p>
                <a href="https://maps.app.goo.gl/ra5fjjZNNpFdyosp8" class="value" target="_blank"
                  rel="noopener noreferrer">
                  Valica 7, Pula, Istra
                </a>
              </div>
            </div>
          </nav>
        </div>
        <!-- <a href="#">O nama</a>
            <a href="#">Reference</a>
            <a href="#">Blog</a>-->
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
            <img src="/images/certs.webp" loading="lazy" alt="Certifikati FSB" width="150" height="100" />
            <img src="/images/eucert.webp" loading="lazy" alt="Certifikat Europske Unije" width="150" height="100" />
            <img src="/images/eusuf.webp" loading="lazy" alt="Sufinanciranje od strane Europske Unije" width="150"
              height="100" />
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="bottom-left">
          <p><strong>MODING JUNIOR d.o.o.</strong> za proizvodnju, građevinarstvo, unutarnju i vanjsku
            trgovinu.<br />OIB: 25897440119</p>
          <p class="copyright">© 2025. Moding Junior d.o.o. Sva Prava Zadržana.</p>
        </div>
        <div class="bottom-right">
          <nav class="policy-links">
            <!-- <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>-->
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.footer {
  background: #f6f6f6;
  padding: 3rem 2rem;
  font-family: 'Lexend', sans-serif;
  border-radius: 20px 20px 0 0;
  width: 100%;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
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

.column img {
  width: 100px;
}

.column h3 {
  padding: 18px 0px 0px 0px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}

.nav-links a {
  color: #000;
  text-decoration: none;
  font-weight: 600;
}

.nav-links a:hover {
  text-decoration: underline;
}

.contact-row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: left;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.label {
  font-weight: 400;
  margin: 0;
  white-space: nowrap;
}

.value {
  color: #007BFF;
  text-decoration: none;
  font-weight: 500;
}

.value:hover {
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
    border-bottom: 1px solid #ccc;
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
    ;
  }

  .footer {
    padding: 2rem 1rem;
  }

  .column {
    gap: 1rem;
  }

  .column h1 {
    font-size: 1.8rem;
    margin-bottom: 0rem;
  }

  .column h3 {
    font-size: 1.1rem;
    padding: 10px 0 0 0;
  }

  .column p {
    font-size: 0.9rem;
    margin: 0;
  }

  .nav-links a {
    font-size: 0.9rem;
  }

  .policy-links {
    font-size: 0.85rem;
  }

  .logos img {
    width: 100px;
  }

  .footer-top {
    row-gap: 2rem;
  }

  .footer-bottom {
    margin-top: 0rem;
    gap: 0;
  }

  .bottom-left {
    font-size: 0.8rem;
  }

  .bottom-right {
    font-size: 0.6rem;
  }
}

@media (max-width: 600px) {
  .footer-bottom {
    padding-top: 1.5rem;
  }
  .contact-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }
}
</style>