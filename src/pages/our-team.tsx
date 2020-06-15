import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title="Ekibimiz"

const OurTeam = () => (
  <Layout page="our-team" title={title}>
    <SEO title={title} />

    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center heading-section heading-bg-white">
            <div className="icon"><i className="flaticon-auction"></i></div>
          	<span className="subheading">Ekibimiz hem akademik hem de profesyonel anlamda donanımlı kişilerden oluşmaktadır. Aliyeva Hukuk danışmanları, müşterilerinin ihtiyaçlarını doğru tespit edecek kadar deneyimli, sorunlara hızlı çözümler üretebilecek kadar da enerjiktir.</span>
          </div>
          <div className="col-md-12 text-center heading-section">
            <h5 className="mb-4">Aliyeva Hukuk ekibi, müşteriyi iyi dinleme, doğru anlama ve analiz etme, her projeyi titizlikle ele alma ve butik hizmet verme anlayışıyla hareket eder. Hem uluslararası bakış açısını, hem de yerel normları benimseyen ve uygulayan ekibi ile Hukuk, Yönetim ve Yatırım alanlarındaki ihtiyaçlarınızı karşılayabilecek güvenilir bir iş ortağınızdır.</h5>
            <div className="icon"><i className="flaticon-handshake"></i></div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section testimony-section bg-secondary">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-4 item border border-smoke">
            <div className="testimony-wrap text-center py-4 pb-5">
              <div className="user-img mb-4" id="team-pic1">
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="flaticon-lawyer"></i>
                </span>
              </div>
              <div className="text p-3">
                <p className="name">Zenfira ALİYEVA</p>
                <span className="position">Avukat / Kurucu Ortak</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 item border border-smoke">
            <div className="testimony-wrap text-center py-4 pb-5">
              <div className="user-img mb-4" id="team-pic2">
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="flaticon-lawyer"></i>
                </span>
              </div>
              <div className="text p-3">
                <p className="name">Ahmet AKCAN</p>
                <span className="position">Avukat</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 item border border-smoke">
            <div className="testimony-wrap text-center py-4 pb-5">
              <div className="user-img mb-4" id="team-pic3">
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="flaticon-lawyer"></i>
                </span>
              </div>
              <div className="text p-3">
                <p className="name">MUHAMMED SÜHELY SACİD</p>
                <span className="position">Avukat</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 item border border-smoke">
            <div className="testimony-wrap text-center py-4 pb-5">
              <div className="user-img mb-4" id="team-pic4">
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="flaticon-lawyer"></i>
                </span>
              </div>
              <div className="text p-3">
                <p className="name">Derya İLTEKE</p>
                <span className="position">İhracat Danışmanı</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 item border border-smoke">
            <div className="testimony-wrap text-center py-4 pb-5">
              <div className="user-img mb-4" id="team-pic5">
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="flaticon-lawyer"></i>
                </span>
              </div>
              <div className="text p-3">
                <p className="name">Halit YAĞMUR</p>
                <span className="position">Yatırım ve İş Geliştirme</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 item border border-smoke">
            <div className="testimony-wrap text-center py-4 pb-5">
              <div className="user-img mb-4" id="team-pic6">
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="flaticon-lawyer"></i>
                </span>
              </div>
              <div className="text p-3">
                <p className="name">Buğrahan AKTAŞ</p>
                <span className="position">Mali Müşavir</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 item border border-smoke">
            <div className="testimony-wrap text-center py-4 pb-5">
              <div className="user-img mb-4" id="team-pic7">
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="flaticon-lawyer"></i>
                </span>
              </div>
              <div className="text p-3">
                <p className="name">İsmail KARASU</p>
                <span className="position">Yönetici Koçu, Sosyolog / Yönetim Danışmanı, Eğitmen</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 item border border-smoke">
            <div className="testimony-wrap text-center py-4 pb-5">
              <div className="user-img mb-4" id="team-pic8">
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="flaticon-lawyer"></i>
                </span>
              </div>
              <div className="text p-3">
                <p className="name">Emrah KARAMEHMETOĞLU</p>
                <span className="position">İç Denetim</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </Layout>
)

export default OurTeam
