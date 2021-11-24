import { Scrollbars } from "react-custom-scrollbars";

import {
  FaUserGraduate,
  FaBriefcase,
  FaMedal,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa";

function Info(props) {
  function renderView({ style, ...props }) {
    const viewStyle = {
      padding: "0 15px",
    };
    return (
      <div className="box" style={{ ...style, ...viewStyle }} {...props} />
    );
  }
  function renderInfoType() {
    const { sheetTitle } = props.selected;

    switch (sheetTitle) {
      case "main":
        return (
          <main>
            <h2>About me</h2>
            <section className="main-info paragraph">
              <article>
                <p>
                  Hai, saya biasa dipanggil Dion, saya punya kemampuan
                  bersosialisai yang mudah. Sewaktu kuliah saya aktif diberbagai
                  organisasi, saya juga mempunyai kemampuan dalam menyelesaikan
                  masalah. Tetapi di dalam pengalaman saya berorganisasi saya
                  sering menjadi orang di belakang layar, terkadang saya juga
                  menjadi pemimpin, misalnya dalam mengorganisir sebuah event
                  atau rapat. Saya memiliki rasa ingin tahu yang kuat, tapi
                  ketika saya merasa hal itu gampang saya jadi cepat bosan.
                </p>
              </article>
            </section>

            <section className="main-info experience">
              <div className="main-info-title">
                <FaBriefcase />
                <h2>Experience</h2>
              </div>
              <article>
                <span className="period">2020 - Sekarang</span>
                <h3>Freelancer</h3>
                <p>
                  Desain Logo, Web Developer, Analisa Data, dan Desain
                  Cafe/Rumah. Pernah menganalisa dan menyusun dara covid 19 se
                  Kabupaten 50 kota, untuk SAT Intelkam Polres 50 kota
                </p>
              </article>
              <article>
                <span className="period">2019 - 2020</span>
                <h3>KPU KAB 50 Kota</h3>
                <p>
                  Ikut serta dalam mensukseskan pilkada serentak tahun 2019,
                  seperti dalam penyusunan DPS, DPT, dan DPTb, serta rekap
                  perhitungan suara baik di tingkap kelurahan, kecamatan,
                  kabupaten, dan provinsi
                </p>
              </article>
            </section>
            <section className="main-info education">
              <div className="main-info-title">
                <FaUserGraduate />
                <h2>Education</h2>
              </div>
              <article>
                <span className="period">2014-2018</span>
                <h3>Universitas Sriwijaya</h3>
                <p>Jurusan Teknik sipil (Tidak menyelesaikan)</p>
              </article>
              <article>
                <span className="period">2011-2014</span>
                <h3>SMA Negeri 1 Kecamatan Harau</h3>
                <p>
                  Jurusan IPA, Aktif dalam OSIS, Ar-rijal (Rohis), dan Pramuka{" "}
                </p>
              </article>
              <article>
                <span className="period">2008-2011</span>
                <h3>SMP Negeri 1 Kecamatan Harau</h3>
              </article>
              <article>
                <span className="period">2002-2008</span>
                <h3>SD Negeri 03 Koto Tuo</h3>
              </article>
            </section>
            <section className="main-info award">
              <div className="main-info-title">
                <FaMedal />
                <h2>Awards</h2>
              </div>
              <article>
                <span className="period">2011</span>
                <h3>Juara 1</h3>
                <p>
                  Lomba Rocket Air se-Provinsi Sumatera Barat di Politeknik
                  Negeri Padang
                </p>
                <h3>Juara 3</h3>
                <p>
                  Lomba Robot line follower non program se-Provinsi Sumatera
                  Barat di Politeknik Negeri Padang
                </p>
              </article>
              <article>
                <span className="period">2009</span>
                <h3>Juara 2</h3>
                <p>Lomba Musik Tradisional tingkat SMP se-Kabupaten 50 Kota</p>
              </article>
            </section>
          </main>
        );
      case "skill_set":
        return (
          <main>
            <h2>Technical Skill Set</h2>
            <div className="skill-set">
              <div className="skill">
                <p className="skill-info">
                  <span className="skill-name">HTML, CSS, JavaScript, PHP</span>
                  <span className="skill-level">88%</span>
                </p>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p className="skill-info">
                  <span className="skill-name">
                    React, React Native, Vue Js
                  </span>
                  <span className="skill-level">85%</span>
                </p>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p className="skill-info">
                  <span className="skill-name">Bootstrap</span>
                  <span className="skill-level">90%</span>
                </p>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p className="skill-info">
                  <span className="skill-name">
                    Framework (Codeigniter 4, Node.js)
                  </span>
                  <span className="skill-level">93%</span>
                </p>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "93%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p className="skill-info">
                  <span className="skill-name">Graphql</span>
                  <span className="skill-level">80%</span>
                </p>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p className="skill-info">
                  <span className="skill-name">SQL (Postgres, MySql)</span>
                  <span className="skill-level">88%</span>
                </p>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p className="skill-info">
                  <span className="skill-name">MongoDB</span>
                  <span className="skill-level">82%</span>
                </p>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "82%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p className="skill-info">
                  <span className="skill-name">CorelDraw</span>
                  <span className="skill-level">85%</span>
                </p>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p className="skill-info">
                  <span className="skill-name">sketchUp</span>
                  <span className="skill-level">85%</span>
                </p>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p className="skill-info">
                  <span className="skill-name">Tekla Struktur</span>
                  <span className="skill-level">80%</span>
                </p>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </main>
        );
      case "work_samples":
        return (
          <main>
            <h2>Recent Projects</h2>
            <div className="work-samples">
              <article>
                <a
                  href="https://sarilamak-sinag.or.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sistem Informasi Nagari
                </a>
              </article>
              <article>
                <a
                  href="https://sontua.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sontua Wisata
                </a>
              </article>
            </div>
          </main>
        );
      case "contact":
        return (
          <main>
            <h2>Contact</h2>
            <p className="contact-data">
              <FaEnvelope />
              diondpkp97@gmail.com
            </p>
            <p className="contact-data">
              <FaPhone />
              081378957056
            </p>
            <p className="contact-data">
              <FaWhatsapp />
              081378957056
            </p>
          </main>
        );
    }
  }
  return (
    <div className="info">
      <Scrollbars renderView={renderView}>{renderInfoType()}</Scrollbars>
    </div>
  );
}

export default Info;
