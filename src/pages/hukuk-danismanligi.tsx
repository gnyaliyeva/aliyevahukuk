import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlatIcons from "../assets/fonts/flaticon/flaticons.json"

const title = "Hukuk Danışmanlığı"
const section = "Çalışma Alanlarımız"

const LawConsultant = () => (
  <Layout page="our-services" title={title} section={section}>
    <SEO title={title} />

    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="practice-area bg-white px-3 py-3 vh-100">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="35" src={FlatIcons.disputes} />
              </div>
              <h3 className="text-center">Uyuşmazlıkların Çözümü</h3>
              <ul className="list-circled">
                <li>Ticari, İdari ve Vergi Uyuşmazlıkları</li>
                <li>Tahkim, Arabuluculuk Faaliyetleri</li>
                <li>Enerji ve Uluslararası Mal Ticaretinden Doğan Anlaşmazlıklar</li>
                <li>Ortak Girişimler, Ortaklıkların ve Ortakların Hakları</li>
                <li>Rekabet Hukuku</li>
                <li>Sözleşmelerin Hazırlanması ve Sözleşmesel Uyuşmazlıklar</li>
                <li>Halka Açık Anonim Ortaklıklar ve Kurumsal Yönetim</li>
                <li>Sermaye Piyasaları Hukuku</li>
                <li>Kişisel Verilerin Korunması Kanununa Uygunluk</li>
                <li>İcra-İflas uyuşmazlıkları</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="practice-area bg-white px-3 py-3 vh-100">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="35" src={FlatIcons.company} />
              </div>
              <h3 className="text-center">Şirketler Hukuku</h3>
              <ul className="list-circled">
                <li>Şirket Genel Kurul  Toplantılarının Yapılması</li>
                <li>Sermaye  Artırımları/İndirimleri</li>
                <li>Sermaye Piyasası  Mevzuatı Kapsamında Danışmanlık</li>
                <li>Haksız Rekabetin  Önlenmesi, Tüketici Mevzuatı Kapsamında Danışmanlık</li>
                <li>İrtibat Bürolarının Kurulması</li>
                <li>Hukuki Durum  Tespit Raporlaması (Due Diligence)</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="practice-area bg-white px-1 py-3 vh-100">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="35" src={FlatIcons.bussines} />
              </div>
              <h3 className="text-center">İş Hukuku</h3>
              <ul className="list-circled">
                <li>Toplu İş  Sözleşmesi Taslaklarının Hazırlanması ve Müzakerelerin Yapılması</li>
                <li>Sözleşmenin Feshi  ve İşten Çıkarma Konularının Sulh veya Dava Yolu İle Halli</li>
                <li>Çalışma  Ortamlarının Özellikle Sağlık ve Güvenlik Açılarından Yürürlükteki Mevzuata  Uyumunun Sağlanması</li>
                <li>İş Sözleşmelerinin  ve Bağlı Prosedürlerin Yargıtay Uygulaması Işığında Güncellenmesi ve/veya  Yeniden Düzenlenmesi</li>
                <li>Her Somut Duruma  Özgü Tutanak, Savunma İstem Yazıları, İhtar ve Fesih Bildirimlerinin Hazırlanması</li>
                <li>Sendikal  Faaliyetler ile İlgili İhtilafların Çözümlenmesi</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="practice-area bg-white px-3 py-3 vh-100">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="35" src={FlatIcons.sport} />
              </div>
              <h3 className="text-center">Spor Hukuku</h3>
              <ul className="list-circled">
                <li>Oyuncu Menajerliği</li>
                <li>Transfer Sürecinin Yönetilmesi ve Nihayete Erdirilmesi</li>
                <li>Spor Kulüpleri İle Olan İletişimin ve Müzakerelerin Yönetilmesi</li>
                <li>Uluslararası Spor Kulüpleri ile İlgi Kurulması</li>
                <li>Sporcu, Menajerlik ve Transfer Sözleşmelerinin Hazırlanması</li>
                <li>Spor Kulüpleri, Sporcu, Teknik Adam, Oyuncu Menajerleri ve Federasyonlar Arasında Doğan Hukuki Uyuşmazlıkların Yönetilmesi ve Çözüme Kavuşturulması</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="practice-area bg-white px-3 py-3 vh-100">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="35" src={FlatIcons.realestante} />
              </div>
              <h3 className="text-center">Gayrimenkul Hukuku</h3>
              <ul className="list-circled">
                <li>Tapu İşlemleri</li>
                <li>Kiralama  Sözleşmeleri</li>
                <li>Ayni, Şahsi Hak  Tesisi Sözleşmeleri</li>
                <li>Hukuki Durum  Tespitinin Yapılması ve Raporunun Hazırlanması (Due Dilligence)</li>
                <li>Alım – Satım  Sözleşmeleri</li>
                <li>Projelerin Çevre  Mevzuatına Uygunluğunun Denetlenmesi</li>
                <li>Gayrimenkul  Finansmanı</li>
                <li>Yabancıların Mülk  Edinmesi</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="practice-area bg-white px-3 py-3 vh-100">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="35" src={FlatIcons.international} />
              </div>
              <h3 className="text-center">Uluslararası Hukuk</h3>
              <ul className="list-circled">
                <li>Uluslararası Ticaret Hukuku</li>
                <li>Uluslararası Sözleşmeler</li>
                <li>İngiltere – Ankara Anlaşması</li>
                <li>ABD Vatandaşlığı</li>
                <li>Green Card</li>
                <li>Türk Vatandaşlığı</li>
                <li>Yabancılar Hukuku</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default LawConsultant
