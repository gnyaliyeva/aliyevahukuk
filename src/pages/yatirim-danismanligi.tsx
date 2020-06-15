import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const sectıon1 = "Çalışma Alanlarımız"
const title = "Yatırım Danışmanlığı"

const InvestConsultant = () => {

    const handleTab = (e) => {
        document.querySelectorAll('.category').forEach(el => ( el.setAttribute('class', 'category') ));
        e.target.parentNode.setAttribute('class', 'category active');
        let id = e.target.getAttribute('href');
        id = id.replace('#', '');
        document.querySelectorAll('.tab-content').forEach(el => ( el.setAttribute('class', 'pt-4 tab-content d-none') ));
        document.getElementById(id).setAttribute('class', 'pt-4 tab-content d-block');
    }

    return (
    <Layout page="our-services" title={title} section1={sectıon1}>
        <SEO title={title} />

        <section className="ftco-section ftco-degree-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 order-md-last">
                        <Image name='practice-area1'/>
                        <div className="pt-4 tab-content" id="practicearea1">
                            <h2 className="mb-3">Yatırım ve İş Geliştirme</h2>
                            <p>Yurtiçi ve yurtdışında yatırım yapmayı düşünen tüm yatırımcılara, ilgilendikleri alanlarda mevcut yatırım olanaklarının araştırılması ve raporlanması hizmetini vermektedir. Bu hizmet kapsamında, söz konusu yatırım alanı ile ilgili devletlerin sağladığı teşvik ve kolaylıkları; sektör, ürün ve bölge verilerinin karşılaştırmalı analizi, ve bu analiz doğrultusunda hazırlayacağımız tavsiyelerimizi kapsamlı bir rapor haline getirip, yatırımcıya sunuyoruz ve yatırım projesini de bu rapor doğrultusunda hazırlıyoruz.</p>
                            <h2 className="mb-3 mt-5">Uzmanlık Alanlarımız</h2>
                            <p><strong>Alım:</strong> Türkiye ve dünyadan yatırım amaçlı gayrimenkuller bulunması ve alım sürecinin yönetimi, alıcı temsilciliği</p>
                            <p><strong>Finansman:</strong> Proje finansmanı ve kredi temini, yatırım dosyalarının hazırlanması ve bankalara sunumu</p>
                            <p><strong>Fizibilite:</strong> En yüksek sürekli getiriyi sağlayan, pazar-rekabet araştırmaları ve müşterilerin beklentileri ışığında hazırlanan fizibilite çalışmaları</p>
                            <p><strong>Arsa & Proje Bulma:</strong> ürkiye'de konut, AVM, ofis, otel, lojistik projelerine uygun arsalar ve geliştirilecek projeler ve satın alımı yada KK/HP anlaşmaları</p>
                            <ul>
                                <li>Rezidanslar</li>
                                <li>Tatil Evleri</li>
                                <li>Yatay ve Dikey Konut Projeleri</li>
                                <li>Master-Plan Bazında Geliştirilmiş Yerleşim Projeleri</li>
                                <li>Otel ve Konutlardan Oluşan Karma Kullanım Projeleri</li>
                            </ul>  
                        </div>   
                        <div className="pt-4 tab-content d-none" id="practicearea2">
                            <h2 className="mb-3">Girişimcilik</h2>
                            <p>Mevcut işletmelerini geliştirmek isteyen işletme sahiplerine, proje fikri olan ve kendi işini kurmak isteyen girişimcilere, iş kurma, işletme ve işletmelerini geliştirme konularında, ihtiyaç duydukları danışmanlık ve eğitim hizmetlerini kapsamaktadır.</p>
                            <p>Şirket kurulumu veya şirketin dönüşümü konusunda bürokratik işlemler; ticaret sicil gazetesinde yer alacak şirket ana sözleşmenin hazırlanmasından kurumlarla ilişkilerin yürütülmesi, bu kurumlara sunulması gereken her türlü belgenin eksiksiz olarak temin edilmesi gibi tüm süreçte kapsamlı danışmanlık hizmetleri sunmaktadır. </p>
                            <p>Öte yandan, ticari hayata yeni atılacak olan, yeni girişimci işletmelerin piyasadaki payını ve etkinliğini artırmak, rekabet güçlerini en üst seviyeye taşımak ve öte yandan faaliyetlerini planlı bir şekilde gerçekleştirmelerini sağlamaktayız. Ayrıca aylık, yıllık ve 5 yıllık gibi belli periyotlarda bütçe planlaması, nakit akışı planlaması, çalışma sermayesi, bütçe ve finansal planlama gibi raporlama hizmetleri de verilmektedir. Şirket hedefleri belirleyerek işletmenin sürdürebilirliğini ve piyasa değerini artırmaktır.</p>
                            <h2 className="mb-3 mt-5">Uzmanlık Alanlarımız</h2>
                            <ul>
                                <li>Girişimci Olmaya Yatkınlık ve Becerilerinin Analizi</li>
                                <li>İş Programlarının Hazırlanması</li>
                                <li>Yapılabilirlik Raporunun Hazırlanması</li>
                                <li>İş Planının Hazırlanması</li>
                                <li>İşletme Yapısının Geliştirilmesi</li>
                            </ul>  
                        </div>     
                        <div className="pt-4 tab-content d-none" id="practicearea3">
                            <h2 className="mb-3">Destek ve Teşvikler</h2>
                            <h4>Yurt Dışına Yönelik Devlet Destekleri</h4>
                            <p>Türkiye’deki bir şirketin yurt dışındaki birimleri ile ilgili bazı harcamalar yada yurt dışına ihracat yapmak adına yapacağı harcamalardan bazıları desteklenir.
                            <br/>Bu harcamalar aşağıda belirtilmiştir.</p>
                            <ul>
                                <li>Yurt Dışı Birim Kira Desteği</li>
                                <li>Yurt Dışı Tanıtım Destekleri</li>
                                <li>Yurt Dışı Fuar Destekleri</li>
                                <li>Yurt Dışı Marka Destekleri</li>
                                <li>Belgelendirme – Test Analiz Desteği</li>
                                <li>Rapor – Danışmanlık Desteği</li>
                                <li>Pazar Araştırma (İş Gezisi) Desteği</li>
                            </ul>  
                            <h4>Döviz Kazandırıcı Hizmet Sektörü Destekleri</h4>
                            <p>Film, Sağlık, Eğitim, Bilişim, Yönetim Danışmanlığı sektörü olarak 5 ana gruba ayrılır. İlgili gruplara ait bazı destek başlıkları aşağıda belirtilmiştir.</p>
                            <ul>
                                <li>Komisyon Desteği</li>
                                <li>Pazara Giriş Destekleri</li>
                                <li>Türkiye’deki Film Platosu/Stüdyosu Kira Destekleri</li>
                                <li>Film İçerisindeki Reklam Destekleri</li>
                                <li>Belgelendirme Destekleri</li>
                                <li>Reklam, Tanıtım ve Pazarlama Destekleri</li>
                                <li>Yurt Dışı Fuar Katılım Destekleri</li>
                                <li>SGK Teşvikleri</li>
                                <li>KDV Teşvikleri</li>
                                <li>Yabancı Personel Çalışma – İkamet İzinleri</li>
                                <li>KOSGEB Destekleri</li>
                                <li>Turquality ve Markalaşma Destekleri</li>
                                <li>Yerli Malı Belgesi</li>
                                <li>Kapasite Raporu Alımı</li>
                                <li>Ekspertiz Raporu Alımı</li>
                                <li>Dahilde İşleme İzin Belgesi</li>
                                <li>Sanayi Sicil-Yıllık İşletme Cetveli</li>
                                <li>Kep ve E-imza Çözümleri</li>
                            </ul>
                        </div>   
                    </div> 
                    <div className="col-lg-4 sidebar">
                        <div className="sidebar-box">
                            <form action="#" className="search-form">
                                <div className="form-group">
                                <span className="icon icon-search"></span>
                                    <input type="text" className="form-control" placeholder="Sayfa içinde arama yapın"/>
                                </div>
                            </form>
                        </div>
                        <div className="sidebar-box">
                            <div className="categories">
                                <h3>Yatırım Danışmanlığı</h3>
                                <li className="category active"><a href="#practicearea1" onClick={el => handleTab(el)}>Yatırım ve İş Geliştirme <span className="ion-ios-arrow-forward"></span></a></li>
                                <li className="category"><a href="#practicearea2" onClick={el => handleTab(el)}>Girişimcilik <span className="ion-ios-arrow-forward"></span></a></li>
                                <li className="category"><a href="#practicearea3" onClick={el => handleTab(el)}>Destek ve Teşvikler <span className="ion-ios-arrow-forward"></span></a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
    ) 
}

export default InvestConsultant
