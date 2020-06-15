import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "Bize Ulaşın"
const Contact = () => (
  <Layout page="contact" title={title}>
    <SEO title={title} />
    
    <section className="ftco-section contact-section">
      <div className="container">
        <div className="row d-flex mb-5 contact-info">
          <div className="col-md-12 mb-4">
            <h2 className="h3">İletişim Bilgileri</h2>
          </div>
          <div className="w-100"></div>
          <div className="col-lg-3 col-md-6">
            <span><b>Adres:</b> Ayazma Caddesi, No: 21, Nef 11 Offices, D/1 <br/> <i>Kağıthane / İstanbul</i></span>
          </div>
          <div className="col-lg-3 col-md-6">
            <span><b>Telefon 1:</b> <a href="tel://08502238191">0850 223 81 91</a></span>
          </div>
          <div className="col-lg-3 col-md-6">
            <span><b>Telefon 2:</b> <a href="tel://05324726909">0532 472 69 09</a></span>
          </div>
          <div className="col-lg-3 col-md-6">
            <span><b>E-Posta:</b> <a href="mailto:aliyeva@aliyeva.av.tr">aliyeva@aliyeva.av.tr</a></span>
          </div>
        </div>
        <div className="row block-9">
          <div className="col-lg-6 order-md-last d-flex">
            <form action="#" className="bg-light p-5 contact-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="İsim - Soyisim"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email Adresi"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Konu"/>
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Mesajınız"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Gönder" className="btn btn-primary py-3 px-5"/>
              </div>
            </form>
          
          </div>

          <div className="col-lg-6 d-lg-flex">
          	<div id="map" className="bg-white">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.3276319701517!2d28.978857515419364!3d41.083687622729876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab65defd35401%3A0x4ecbd97bed539442!2zTmVmIEthxJ_EsXRoYW5lIDEx!5e0!3m2!1str!2str!4v1590946419291!5m2!1str!2str" width="400" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default Contact
