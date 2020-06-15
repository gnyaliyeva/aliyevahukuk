// Gatsby supports TypeScript natively!
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const title = "Hakkımızda"

const AboutUs = () => (
  <Layout page="about-us" title={title}>
    <SEO title="Hakkımızda" />

    <section className="ftco-counter" id="section-counter">
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-md-6 px-5">
            <div className="row justify-content-start pt-3 pb-3">
              <div className="col-md-12 heading-section">
                <span className="subheading">Aliyeva Hukuk</span>
                <h2 className="mb-4">Hukuk & Danışmanlık</h2>
                <p>
                ALIYEVA Hukuk Ofisi, 2015 yılından bu yana yerli ve yabancı müvekkillerine hukukun bir çok dalında, ulusal ve uluslararası yönlendirme ve çözüm gerektiren hususlarda hukuki destek veren yenilikçi bir butik hukuk firmasıdır. 
                </p>
                <p>
                Kurulan ya da gelişmekte olan ve özellikle Türkiye’de, Azerbaycan’da, Amerika’da ve İngiltere’de yatırım yapmak isteyen yerli ve yabancı müvekkilerin yatırımlarının yönlendirilmesi, gerekli müsaadelerin ve ruhsatların alınması, oturma ve çalışma izinlerinin elde edilmesi konularında hizmet vermektedir. 
                </p>
                <p className="d-lg-block d-md-none">
                ALIYEVA Hukuk Ofisi, Bakü, New York, Miami, Londra, Moskova, İslamabad, Lahor, Dubai ve Doha’da bulunan çok uluslu hukuk firmaları ile dünya standartlarında hizmet verebilmek amacıyla çözüm ortaklığı yapmakta; Türkçe, Azerbaycanca, Rusça, Urduca, İngilizce, ve Arapça dillerinde faaliyet göstermektedir.
                </p>
                <p className="d-lg-block d-md-none">
                İş hayatındaki ihtiyaçlar çeşitlenerek artmaktadır. Bunun sonucu şirketlerin ortak tercihi, dünya genelinde aynı ve yüksek standartlara sahip, hızlı ve etkin danışmanlık hizmetlerine tek ve güvenilir bir kaynaktan erişmektir. Bu amaçla yönetim ve yatırım danışmanlığı hizmetlerimizle birlikte müşterilerimize hukuk alanında da hizmet vermekteyiz.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
              <Image name='home-img1' />
          </div>
          <div className="d-none d-lg-none d-md-block px-5">
            <p>
            ALIYEVA Hukuk Ofisi, Bakü, New York, Miami, Londra, Moskova, İslamabad, Lahor, Dubai ve Doha’da bulunan çok uluslu hukuk firmaları ile dünya standartlarında hizmet verebilmek amacıyla çözüm ortaklığı yapmakta; Türkçe, Azerbaycanca, Rusça, Urduca, İngilizce, ve Arapça dillerinde faaliyet göstermektedir.
            </p>
            <p>
            İş hayatındaki ihtiyaçlar çeşitlenerek artmaktadır. Bunun sonucu şirketlerin ortak tercihi, dünya genelinde aynı ve yüksek standartlara sahip, hızlı ve etkin danışmanlık hizmetlerine tek ve güvenilir bir kaynaktan erişmektir. Bu amaçla yönetim ve yatırım danışmanlığı hizmetlerimizle birlikte müşterilerimize hukuk alanında da hizmet vermekteyiz.
            </p>
          </div>
        </div>
        <div className="row d-flex bg-light">
          <div className="col-lg-4 col-md-12 px-5 py-5">
            <div className="row">
              <div className="col-md-12 heading-section border border-smoke bg-white py-3 px-5 v-50">
                <h3>Hukuk Danışmanlığı</h3>
                <p>
                  İş hayatındaki ihtiyaçlar çeşitlenerek artmaktadır. Bunun sonucu şirketlerin ortak tercihi, dünya genelinde aynı ve yüksek standartlara sahip, hızlı ve etkin danışmanlık hizmetlerine tek ve güvenilir bir kaynaktan erişmektir. Bu amaçla yönetim ve yatırım danışmanlığı hizmetlerimizle birlikte müşterilerimize hukuk alanında da hizmet vermekteyiz.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 px-5 py-5">
            <div className="row">
              <div className="col-lg-12 heading-section border border-smoke bg-white py-3 px-5 v-50">
                <h3>Yönetim Danışmanlığı</h3>
                <p>
                  Bugünkü ekonomik rekabet ortamında, ‘’ne ürettiğiniz’’ ve ‘’kime sattığınız’’ kadar, ‘’nasıl yönettiğiniz’’ konusu da önem kazanmıştır. İşletmenizi, kaynaklarınızı, müşterinizi ve hatta rakiplerinizi ‘’yönetme yetenekleriniz’’, pazardaki geleceğinizi de belirleyecektir. Bu sebeple uzman ekibimiz ile birlikte yönetim, organizasyon, uygulama yöntemleri ve metotlarına ilişkin problemlerin teşhis ve araştırılması, uygun faaliyetler tavsiye edilmesi ve bu tavsiyelerin yerine getirilmesine yardımcı olunması alanında hizmetler sunmaktayız.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 px-5 py-5">
            <div className="row">
              <div className="col-md-12 heading-section border border-smoke bg-white py-3 px-5 v-50">
                <h3>Yatırım Danışmanlığı</h3>
                <p>
                  Şirketimiz, yurtiçi ve yurtdışında yatırım yapmayı düşünen yerel ve yabancı tüm yatırımcılara, ilgilendikleri alanlarda mevcut yatırım olanaklarının araştırılması ve raporlanması hizmetini vermektedir. Bu hizmet kapsamında, yurt içi ve yurt dışında, söz konusu yatırım alanı ile ilgili devletlerin sağladığı teşvik ve kolaylıkları; sektör, ürün ve bölge verilerinin karşılaştırmalı analizi, ve bu analiz doğrultusunda hazırlayacağımız tavsiyelerimizi kapsamlı bir rapor haline getiriyor ve yatırım projesini de bu rapor doğrultusunda hazırlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default AboutUs
