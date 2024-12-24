import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="profile-container">
        <header className="header">
          <div className="profile-header">
            <img src="https://via.placeholder.com/150" alt="Foto Profil" className="profile-img" />
            <div className="profile-info">
              <h1 className="name">MUH. ASYRAF FEBRIANSYAH .B</h1>
              <p className="university">📍 Telkom University | S1 Sistem Informasi</p>
              <p className="graduation">📅 Lulus: 2024</p>
              <div className="contact">
                <p>Email: <a href="mailto:Afebry444@gmail.com">Afebry444@gmail.com</a></p>
                <p>Phone: <a href="tel:+6285156048105">📱 085156048105</a></p>
                <p>GitHub: <a href="https://github.com/Asyraf2k" target="_blank" rel="noopener noreferrer">🌐 GitHub</a></p>
                <p>Linkedin: <a href="https://github.com/Asyraf2k" target="_blank" rel="noopener noreferrer">🌐 Linkedin</a></p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="about">
            <h2 className="section-title">Profil</h2>
            <p className="bio">Web Developer dengan latar belakang S1 Sistem Informasi dari Telkom University. Berpengalaman dalam pengembangan aplikasi berbasis web, manajemen proyek IT, dan data engineering. Mampu mengintegrasikan teknologi front-end dan back-end untuk menciptakan solusi berbasis web yang efisien dan responsif.</p>
          </section>

          <section className="experience">
            <h2 className="section-title">Pengalaman Profesional</h2>
            <ul>
              <li><strong>Regional Operation Center PT Telkom Indonesia – Data Engineer Internship</strong> (Jun 2023 – Agustus 2023)</li>
              <ul>
                <li>Berpartisipasi dalam pengembangan alat pengumpulan data berbasis bot.</li>
                <li>Menangani proses ETL (Extract, Transform, Load) untuk mengelola data di gudang data berbasis cloud.</li>
                <li>Mendukung pengolahan data sebagai persyaratan operasional yang harus dipenuhi oleh agen.</li>
              </ul>
            </ul>
          </section>

          <section className="projects">
            <h2 className="section-title">Proyek Akademis</h2>
            <div className="project">
              <h3>PRIMAJASA Travel and Booking Websites (Project Manager, 2022)</h3>
              <ul>
                <li>Memimpin tim dalam pengembangan situs pemesanan perjalanan berbasis web.</li>
                <li>Mengimplementasikan sistem manajemen proyek untuk mengatur jadwal, tugas, dan deliverables.</li>
              </ul>
            </div>
            <div className="project">
              <h3>META SOIL Farm Management Platforms (Full Stack Developer, 2024)</h3>
              <ul>
                <li>Mengembangkan platform manajemen pertanian berbasis web menggunakan teknologi full stack.</li>
                <li>Mengintegrasikan fitur manajemen data tanah dan tanaman dengan antarmuka yang ramah pengguna.</li>
              </ul>
            </div>
          </section>

          <section className="thesis">
            <h2 className="section-title">Skripsi</h2>
            <p>"Pengembangan Aplikasi Dashboard pada Pemetaan Tingkat Kesuburan Tanah Berbasis GIS"</p>
            <p><strong>Nilai Skripsi:</strong> 83.51 (Predikat A)</p>
          </section>

          <section className="skills">
            <h2 className="section-title">Kompetensi Teknis</h2>
            <ul>
              <li><strong>Front-End Development:</strong> HTML, CSS, JavaScript, React.js</li>
              <li><strong>Back-End Development:</strong> PHP Native</li>
              <li><strong>Database:</strong> MySQL, MongoDB</li>
              <li><strong>Framework:</strong> Bootstrap, Tailwind CSS</li>
              <li><strong>Desain & Multimedia:</strong> Photoshop, Premiere Pro, Blender</li>
            </ul>
          </section>

          <section className="certifications">
            <h2 className="section-title">Sertifikasi</h2>
            <ul>
              <li>BNSP Web Developer (2023)</li>
              <li>FreeCodeCamp Responsive Web Design (2024)</li>
              <li>FreeCodeCamp Front End Development Libraries (Sedang Proses, 2024)</li>
            </ul>
          </section>

          <section className="languages">
            <h2 className="section-title">Bahasa</h2>
            <ul>
              <li><strong>Bahasa Indonesia:</strong> Penutur Asli</li>
              <li><strong>English:</strong> Limited Working Proficiency (Skor EPRT: 520)</li>
            </ul>
          </section>
        </main>

      </section>
    </div>
  );
}

export default App;
