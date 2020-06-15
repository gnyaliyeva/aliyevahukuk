import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const sectıon1 = "Çalışma Alanlarımız"
const title = "Yönetim Danışmanlığı"

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
                        <Image name='practice-area2'/>

                        <div className="pt-4 tab-content" id="practicearea1">
                            <h2 className="mb-3">Bağımsız Denetim Danışmanlığı</h2>
                            <ul>
                                <li>Şirket Satın Alımlarında ve Birleşmelerinde Hedef Şirketlerdeki Finansal Risklerin Belirlenmesine Yönelik veya Satışa Konu Şirketin Satışa Hazırlanmasına İlişkin Özel Finansal İnceleme Raporları Hazırlanması</li>
                                <li>Kredi Kullanımlarında Sözleşme Şartlarına ve Finansal Rasyolara Uygunluk Denetimlerinin Yapılması</li>
                                <li>Hile ve Yolsuzluk Denetimlerinin Yapılması </li>
                                <li>Konsolide ve Birleştirilmiş Mali Tablo ve Raporların Hazırlanması</li>
                                <li>İç Kontrol Sistemleri İncelemesi</li>
                                <li>İç Denetim Departmanı Yapılanması ve Geliştirilmesi</li>
                                <li>Mali Analiz ve Risk Değerlendirmeleri</li>
                            </ul>  
                        </div>   

                        <div className="pt-4 tab-content d-none" id="practicearea2">
                            <h2 className="mb-3">Finansal Danışmanlık</h2>
                            <p>Aliyeva Hukuk & Consulting, özellikle firmaların karlılık analizleri, nakit akış tabloları gibi durum analizlerin yanında yeni fon kaynaklarının tesisi ve firmanın finans kurumlarıyla ilişkilerinin yönetimi, gibi konularda da danışmanlık vermektedir.</p>
                            <ul>
                                <li>Bilanço ve Gelir Tablolarının Analizi</li>
                                <li>Bilanço Kalemlerinin Tetkiki</li>
                                <li>Kredibiliteye Uygun Olmayan Rakam ve Kalemlerin Düzeltilmesi</li>
                                <li>Detay Mizanın İncelenmesi</li>
                                <li>Ticari Alacaklar, Satıcılar ve Krediler Kaleminin Bilançoya Uygunluğu</li>
                                <li>Firmanın Bankalarla Olan Kredi İlişkisini Tesis Etmek</li>
                                <li>Bankalarla Görüşmelerini Firma Talebi Doğrultusunda Gerçekleştirmek</li>
                                <li>Bankaya Verilecek Kredi Evraklarının Set Halinde Oluşturulması ve Güncellenmesi</li>
                                <li>Firma ve Ortaklarının Sicil ve KKB Kayıtlarını inceleyip, Yanlış ve Eksikliklerinin Düzeltilmesi</li>
                            </ul>  
                        </div>   

                        <div className="pt-4 tab-content d-none" id="practicearea3">
                            <h2 className="mb-3">Mali Danışmanlık</h2>
                            <ul>
                                <li>Yerli ve Yabancı Sermayeli Şirket Kuruluşu</li>
                                <li>Yabancı Sermayeli Firmaların İrtibat Büroları Çalışması</li>
                                <li>Vergi ve SSK Kurum ve Kuruluşlarındaki İşlemler</li>
                                <li>Şirket Yapılandırılması (Birleşme- Bölünme –Genişleme)</li>
                                <li>Müşteriler Hakkında Fizibilite Çalışması</li>
                                <li>Mali Danışmanlık, Kontrol ve Revizyon İşlemleri</li>
                            </ul>
                        </div>   

                        <div className="pt-4 tab-content d-none" id="practicearea4">
                            <h2 className="mb-3">İç Denetim Danışmanlığı</h2>
                            <ul>
                                <li>Mali Süreç Denetimi</li>
                                <li>Operasyonel Süreç Denetimi</li>
                                <li>İnsan Kaynakları Süreç Denetimi</li>
                                <li>Satın alma Süreç Denetimi</li>
                                <li>Bütçe Süreç Denetim</li>
                                <li>Satış Süreç Denetimi</li>
                                <li>Stok Yönetimi Denetimi</li>
                                <li>Suistimal Denetimi</li>
                                <li>Ciro Denetimi</li>
                            </ul>
                        </div>   

                        <div className="pt-4 tab-content d-none" id="practicearea5">
                            <h2 className="mb-3">Yönetici Koçluğu</h2>
                            <p>Yönetici Koçluğu performansa yönelik olup, kişinin içinde var olan yeteneklerini ve becerilerini açığa çıkarma, kendini daha iyi tanıyarak, keşfetme ve hedeflere ulaşma sürecidir. İş, özel ve  sosyal hayatında denge oluşturarak kendini gerçekleştirmesine, bununla beraber kendisiyle ilgili farkındalığın artmasına, insanlar arası ilişkilerde daha başarılı olmasına, liderlik becerilerinin artmasına katkıda bulunacaktır. Koçluk, kişinin kendine daha fazla zaman ayırmasına ve geleceğine ilişkin daha net plan yapmasına yardımcı olmak, güçlü ve zayıf yanlarını keşfederek, kendini sorgulayan, sorunlara çözümler üreten, hayatını koordine edebilen, kendisiyle ve çevresiyle barışık, karmaşık yaşam değerlerini bütünleştirirken, kendilerini disipline edebilmelerini, sorunlar ve fırsatlar karşısında olumlu düşünüp olumlu davranmalarını sağlamaya yarayan süreçleri içerir.</p>
                            <h3>Koçluk Size Ne Kazandırır?</h3>
                            <ul>
                                <li>Kendini Keşfetme</li>
                                <li>Kendini Tanıma “Ben Kimim?”</li>
                                <li>Değerlerle Uyumlu Yaşamak.</li>
                                <li>Liderlik Becerilerini Geliştirmek</li>
                                <li>Farkındalık Oluşturmak</li>
                                <li>Duygusal Zeka Yetkinliklerini Arttırmak</li>
                                <li>İş, Özel, Sosyal Yaşamdan Keyif Alma ve Dengeli Yaşama</li>
                                <li>Kendi Kısıtlamalarının Farkına Varıp, Aşma Yollarını Oluşturma</li>
                                <li>Kendi Kendini Motive Edebilmek</li>
                                <li>Performansı Arttırmak</li>
                                <li>Hedeflere Ulaşmak</li>
                            </ul>
                            <span><b>Süreç: </b>Haftada 1 – 1,5 Saat | 10 Hafta</span>
                        </div>

                        <div className="pt-4 tab-content d-none" id="practicearea6">
                            <h2 className="mb-3">Aile Şirketleri & İnsan Kaynakları Yönetim Danışmanlığı</h2>
                            <h3>Aile Şirketleri Yönetim Danışmanlığı</h3>
                            <p>Ülkemizde kayıtlı şirketlerin %95 i aile şirketi niteliğindedir. Bu şirketlerin aile bireyleri arası ilişkilerden etkilenebilen yapısı ve kendine özgü yönetim tarzları gereği diğer şirketlerden farklı özellikleri vardır. Bu yapıdan kaynaklanan problemler çözülmeyince şirketlerin büyük çoğunluğu üçüncü kuşağa gelmeden yok olmakta, el değiştirmekte veya parçalanmaktadır.</p>
                            <p>Bu gerçekten hareketle Aile şirketlerinin kurumsallaşması yolunda yapılması gereken çalışmaları özet olarak şöyle sıralayabiliriz:</p>
                            <ul>
                                <li>Mevcut durum analizi</li>
                                <li>Aile Şirketlerinde Stratejik Planlama (miras planı, varis planı, ortaklık planları, kar payı dağıtımı, iştirakler, işletme sermayesi vb.)</li>
                                <li>Aile Şirketlerinde Şirket Anayasasının Oluşturulması</li>
                                <li>Aile Şirketlerinde Yönetim ve Denetim Sisteminin Kurulması</li>
                                <li>Aile Şirketlerinde Profesyoneller Arasındaki İlişkilerin Geliştirilmesi (aile üyesi olanlar ile aile üyesi olmayanlar arasındaki ilişkilerin koordinasyonu)</li>
                                <li>Aile Şirketlerinde, Şirket İçi İş ve Bilgi Akış Sistemlerinin Düzenlenmesi</li>
                                <li>Aile Şirketlerinde Ödüllendirme Cezalandırma Sisteminin Oluşturulması</li>
                                <li>Aile şirketlerinde Personel Temin ve Terfi Sistemlerinin Oluşturulması</li>
                                <li>Aile şirketlerinde Varis Seçimi</li>
                                <li>Aile şirketlerinde 2. Kuşağın Yönetim Becerilerinin Geliştirilmesi ve Eğitilmesi</li>
                            </ul>
                            <h3>İnsan Kaynakları Yönetim Danışmanlığı</h3>
                            <p>Tüm gelişmelerin insan yoluyla sağlanabileceği, güçlü kurum değerlerine sahip insanların her türlü sorunun üstesinden geleceği ve kurumu hedeflerine ulaştıracağı açıktır. Kurum hedefleriyle çalışanların kişisel hedefleri arasında motivasyon artırıcı bir uyum sağlamak ve buna bağlı olarak iş tatminini, verimliliği ve etkinliği artırılması, işgücü devri ve koordinasyonsuzluğun azalması, insan kaynakları sisteminin doğru oluşturulması ve etkin olarak kullanılması yoluyla sağlanır:</p>
                            <ul>
                                <li>Yönetici ve Çalışan İstihdamı</li>
                                <li>Performans Ölçme ve İzleme Sisteminin Kurulması</li>
                                <li>Kurum, Birim ve Kişi bazında Performans Kriterlerinin Belirlenmesi</li>
                                <li>Ücret Yönetim Sisteminin Kurulması</li>
                            </ul>
                        </div>  

                        <div className="pt-4 tab-content d-none" id="practicearea7">
                            <h2 className="mb-3">Kurumsal Gelişim Seminerleri</h2>
                            <ul>
                                <li>Pozitif Yaşam Becerileri</li>
                                <li>Pozitif Performans</li>
                                <li>Beyin, El, Yürek</li>
                                <li>Profesyonel İş İnsanı Olmak</li>
                                <li>Mutlu Pazartesiler (Pazartesi Sendromunu Yenmek)</li>
                                <li>İletişim Becerileri ve Beden Dili</li>
                                <li>Y Kuşağı ile Çalışma ve İletişim Becerileri</li>
                                <li>Liderlik ve Yönetim Becerileri</li>
                                <li>Ekip Çalışması ve Biz Olmak</li>
                                <li>Ekip Olmanın Gücü</li>
                                <li>Satışta Özgüven ve Satış Odaklılık</li>
                                <li>Satış Becerilerini Geliştirme</li>
                                <li>Başarılı Satışçı Olmak ve Satışta Psikolojik Engelleri Aşmak</li>
                                <li>Müşteri İlişkileri ve Hizmet Kalitesi</li>
                                <li>Öfke Kontrolü ve Stres Yönetimi</li>
                                <li>Zamanı Yönet, Hayatı Yönet, İşini Yönet</li>
                                <li>Kişisel İmaj, Protokol ve Görgü Kuralları</li>
                                <li>Diksiyon ve Fonetik, Doğru ve Etkili Konuşma</li>
                                <li>Prezantasyon (Sunum) Becerileri</li>
                                <li>Problem Çözme ve Karar Verme</li>
                                <li>Telefonda İletişim</li>
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
                                <h3>Yönetim Danışmanlığı</h3>
                                <li className="category active"><a href="#practicearea1" onClick={el => handleTab(el)}>Bağımsız Denetim Danışmanlığı <span className="ion-ios-arrow-forward"></span></a></li>
                                <li className="category"><a href="#practicearea2" onClick={el => handleTab(el)}>Finansal Danışmanlık <span className="ion-ios-arrow-forward"></span></a></li>
                                <li className="category"><a href="#practicearea3" onClick={el => handleTab(el)}>Mali Danışmanlık <span className="ion-ios-arrow-forward"></span></a></li>
                                <li className="category"><a href="#practicearea4" onClick={el => handleTab(el)}>İç Denetim Danışmanlığı <span className="ion-ios-arrow-forward"></span></a></li>
                                <li className="category"><a href="#practicearea5" onClick={el => handleTab(el)}>Yönetici Koçluğu <span className="ion-ios-arrow-forward"></span></a></li>
                                <li className="category"><a href="#practicearea6" onClick={el => handleTab(el)}>Aile Şirketleri & İnsan Kaynakları Yönetim Danışmanlığı <span className="ion-ios-arrow-forward"></span></a></li>
                                <li className="category"><a href="#practicearea7" onClick={el => handleTab(el)}>Kurumsal Gelişim Seminerleri <span className="ion-ios-arrow-forward"></span></a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="ftco-counter">
            <div className="container-fluid">
                <div className="row d-flex bg-light">
                    <div className="col-lg-4 col-sm-12 px-5 py-5">
                        <div className="row">
                            <div className="col-md-12 heading-section border border-smoke bg-white py-3 h-100">
                                <h5 className="px-2">Stratejik Planlama/Stratejik Yönetim</h5>
                                <ul className="list-circled">
                                    <li>Çevre Analizi ve İşletme Rekabet Gücü Analizi</li>
                                    <li>Misyon, Vizyon ve İlkelerin Belirlenmesi</li>
                                    <li>Stratejik Amaç ve Hedeflerin Belirlenmesi</li>
                                    <li>Faaliyet Planlarının Hazırlanması</li>
                                    <li>Faaliyet Planlarının Takibini ve Değerlendirmesini Sağlayacak Gösterge ve Sistemlerin Oluşturulması</li>
                                    <li>Faaliyet Planlarına ve İş Hedeflerine Uygunluğun İzlenmesi ve Değerlendirilmesi</li>
                                </ul>
                            </div>

                            <div className="col-md-12 heading-section border border-smoke bg-white py-3 mt-5 h-100">
                                <h5 className="px-2">Mevcut Durum Analizi</h5>
                                <ul className="list-circled">
                                    <li>Mevcut Departmanların Analizi</li>
                                    <li>Mevcut Görevlerin Analizi</li>
                                    <li>Organizasyon Analizi</li>
                                    <li>Kurum Kültürü Analizi</li>
                                    <li>Çalışan Memnuniyeti Analizi</li>
                                    <li>Yetkinlik Analizi</li>
                                    <li>Eğitim İhtiyaç Analizi</li>
                                </ul>
                            </div>

                            <div className="col-md-12 heading-section border border-smoke bg-white py-3 mt-5 h-100">
                                <h5 className="px-2">Yönetim Organizasyon ve Yeniden Yapılanma</h5>
                                <ul className="list-circled">
                                    <li>İdeal Organizasyon Şemasının Oluşturulması</li>
                                    <li>Tüm Personelin Görev, Yetki ve Sorumluluklarının Belirlenmesi</li>
                                    <li>Her Bir Pozisyonun Yetkinlik Tanımlarının Yapılması</li>
                                    <li>Personelin Hangi Alanda İstihdam Edileceğinin Belirlenmesi</li>
                                    <li>Toplantı, Yazışma ve Raporlama Sisteminin Kurulması</li>
                                    <li>Dosyalama ve Arşiv Sisteminin Kurulması</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 px-5 py-5">
                        <div className="row">
                            <div className="col-md-12 heading-section border border-smoke bg-white py-3 h-300">
                                <h5 className="px-2">Norm Kadro Analizi</h5>
                                <ul className="list-circled">
                                    <li>İş Süreçlerinin Analiz Edilmesi</li>
                                    <li>Süreçlerin Dokümante Edilmesi</li>
                                    <li>İş Yükü Analizinin Yapılması</li>
                                    <li>Kritik Süreçler İçin Zaman Etütlerinin Yapılması</li>
                                    <li>Mevcut İşler İçin Gerekli Personel Sayısının Tespit Edilmesi</li>
                                </ul>
                            </div>

                            <div className="col-md-12 heading-section border border-smoke bg-white py-3 mt-5 h-100">
                                <h5 className="px-2">Temel Yönetmeliklerin Oluşturulması</h5>
                                <ul className="list-circled">
                                    <li>Personel Yönetmeliği</li>
                                    <li>Disiplin Yönetmeliği</li>
                                    <li>Satın alma Yönetmeliği</li>
                                    <li>Dosyalama ve Arşiv Yönetmeliği</li>
                                    <li>Yazılı Haberleşme Yönetmeliği</li>
                                    <li>Toplantı Sistemi Yönetmeliği</li>
                                    <li>Araç Kullanım Yönetmeliği</li>
                                </ul>
                            </div>

                            <div className="col-md-12 heading-section border border-smoke bg-white py-3 mt-5 h-100">
                                <h5 className="px-2">Süreç Yönetimi</h5>
                                <ul className="list-circled">
                                    <li>İş Süreçlerin Belirlenmesi</li>
                                    <li>Süreçlerin Tanımlanması</li>
                                    <li>Kritik Süreçlerin Belirlenmesi</li>
                                    <li>Süreç İyileştirmesi</li>
                                </ul>
                            </div>

                            <div className="col-md-12 heading-section border border-smoke bg-white py-3 mt-5 h-100">
                                <h5 className="px-2">Üretim Yönetimi</h5>
                                <ul className="list-circled">
                                    <li>Ürün Gerçekleştirmenin Planlanması</li>
                                    <li>Ürün ve Hizmet Geliştirme</li>
                                    <li>Kalite Kontrol Sisteminin Kurulması</li>
                                    <li>Verimlilik Kontrol Sisteminin Kurulması</li>
                                    <li>Standartların Oluşturulması</li>
                                    <li>Üretim Planlama ve Kontrol Sisteminin Kurulması</li>
                                    <li>Stok Yönetim Sistemlerinin Kurulması</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 px-5 py-5">
                        <div className="row">
                            <div className="col-md-12 heading-section border border-smoke bg-white py-3 h-100">
                                <h5 className="px-2">Muhasebe ve Finans Sisteminin İç ve Dış Denetime Hazır Hale Getirilmesi</h5>
                                <ul className="list-circled">
                                    <li>Şirketlere Muhasebe ve Mali Müşavirlik Konularında Hizmet Vermek</li>
                                    <li>Mali ve Vergi Mevzuatı Konusunda Firma Personelinin Eğitilmesi, Üst Düzey Yöneticilerin Bu Konuda Bilgilendirilmesi</li>
                                    <li>Firmaların Düzenlenen Gelir Tabloları İle Bilançolarının Vergi Mevzuatına Uygunluk Denetiminin Yapılarak Yöneticilere Rapor Sunulması</li>
                                    <li>Şirket Evlilikleri ve Birleşmeleri Konusunda Şirketlere Danışmanlık Yapmak ve Bu İşlemlerle İlgili Olarak Prosedürlerin Tamamlanması ve Sonuçlandırılması</li>
                                    <li>Firma Muhasebe ve Finans Departmanların Kurulması ve Yönetilmesi Konusunda Firmalara Danışmanlık Yapmak</li>
                                    <li>Şirketlerde Nevi Değişikliği</li>
                                    <li>Anonim Şirketlerinin Limited Şirkete, Limited Şirketin Anonim Şirkete Dönüşmesi Konusunda Danışmanlık Yapmak ve Sonuçlandırmak</li>
                                </ul>
                            </div>

                            <div className="col-md-12 heading-section border border-smoke bg-white py-3 mt-5 h-100">
                                <h5 className="px-2">Pazarlama ve Satış</h5>
                                <ul className="list-circled">
                                    <li>Pazarlama ve Satış Organizasyonunun Kurulması</li>
                                    <li>Yurt içi ve Yurt Dışı Satışın Geliştirilmesi</li>
                                    <li>Prim Siteminin Kurulması</li>
                                    <li>Lojistik ve Tedarik Zinciri Yönetimi</li>
                                </ul>
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
