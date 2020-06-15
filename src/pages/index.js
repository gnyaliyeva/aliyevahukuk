import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import FlatIcons from "../assets/fonts/flaticon/flaticons.json"

const IndexPage = () => (
  <Layout page="home" title="home">
    <SEO title="Aliyeva Hukuk" />

    <section className="ftco-section ftco-no-pb services-section">
      <div className="container">
        <div className="row no-gutters d-flex">
          <div className="col-md-3 text-center services align-self-stretch p-4">
            <div className="icon"><span className="flaticon-auction"></span></div>
            <div className="media-body">
              <h3 className="heading mb-3">Yasal Tavsiye Alın</h3>
            </div>
          </div>
          <div className="col-md-3 text-center services align-self-stretch p-4">
            <div className="icon"><span className="flaticon-lawyer"></span></div>
            <div className="media-body">
              <h3 className="heading mb-3">Uzman Avukatlar İle Çalışın</h3>
            </div>
          </div>
          <div className="col-md-3 text-center services align-self-stretch p-4">
            <div className="icon"><span className="flaticon-money"></span></div>
            <div className="media-body">
              <h3 className="heading mb-3">Uygun Maliyet Fırsatlarından Yararlanın</h3>
            </div>
          </div>
          <div className="col-md-3 text-center services align-self-stretch p-4">
            <div className="icon"><span className="ion-ios-help-circle-outline"></span></div>
            <div className="media-body">
              <h3 className="heading mb-3">Merak Ettiklerinizi Danışın</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-counter" id="section-counter">
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-md-6">
              <Image name='home-img1' />
          </div>
          <div className="col-md-6 px-5 py-5">
            <div className="row justify-content-start pt-3 pb-3">
              <div className="col-md-12 heading-section ">
                <span className="subheading">Biz Kimiz?</span>
                <h2 className="mb-4">Hukuk & Danışmanlık</h2>
                <p>
                ALIYEVA Hukuk Ofisi, 2015 yılından bu yana yerli ve yabancı müvekkillerine hukukun bir çok dalında, ulusal ve uluslararası yönlendirme ve çözüm gerektiren hususlarda hukuki destek veren yenilikçi bir butik hukuk firmasıdır. 
                </p>
                <p className="d-none d-lg-block">
                Kurulan ya da gelişmekte olan ve özellikle Türkiye’de, Azerbaycan’da, Amerika’da ve İngiltere’de yatırım yapmak isteyen yerli ve yabancı müvekkilerin yatırımlarının yönlendirilmesi, gerekli müsaadelerin ve ruhsatların alınması, oturma ve çalışma izinlerinin elde edilmesi konularında hizmet vermektedir. 
                </p>
                <p className="d-none d-xl-block">
                ALIYEVA Hukuk Ofisi, Bakü, New York, Miami, Londra, Moskova, İslamabad, Lahor, Dubai ve Doha’da bulunan çok uluslu hukuk firmaları ile dünya standartlarında hizmet verebilmek amacıyla çözüm ortaklığı yapmakta; Türkçe, Azerbaycanca, Rusça, Urduca, İngilizce, ve Arapça dillerinde faaliyet göstermektedir.
                </p>
                <p className="d-none d-xl-block">
                İş hayatındaki ihtiyaçlar çeşitlenerek artmaktadır. Bunun sonucu şirketlerin ortak tercihi, dünya genelinde aynı ve yüksek standartlara sahip, hızlı ve etkin danışmanlık hizmetlerine tek ve güvenilir bir kaynaktan erişmektir. Bu amaçla yönetim ve yatırım danışmanlığı hizmetlerimizle birlikte müşterilerimize hukuk alanında da hizmet vermekteyiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Neler Yapıyoruz?</span>
            <h2 className="mb-4">Faaliyet Alanlarımız</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.disputes} alt="Uyuşmazlıkların Çözümü" />
              </div>
              <h3><Link to="/hukuk-danismanligi">Uyuşmazlıkların Çözümü</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.company} alt="Şirketler Hukuku" />
              </div>
              <h3><Link to="/hukuk-danismanligi">Şirketler Hukuku</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.bussines} alt="İş Hukuku" />
              </div>
              <h3><Link to="/hukuk-danismanligi">İş Hukuku</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.sport} alt="Spor Hukuku" />
              </div>
              <h3><Link to="/hukuk-danismanligi">Spor Hukuku</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.realestante} alt="Gayrimenkul Hukuku" />
              </div>
              <h3><Link to="/hukuk-danismanligi">Gayrimenkul Hukuku</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.international} alt="Uluslararası Hukuk" />
              </div>
              <h3><Link to="/hukuk-danismanligi">Uluslararası Hukuk</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.management} alt="Yönetim Danışmanlığı" />
              </div>
              <h3><Link to="/yonetim-danismanligi">Yönetim Danışmanlığı</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.audit} alt="Bağımsız Denetim Danışmanlığı" />
              </div>
              <h3><Link to="/yonetim-danismanligi">Bağımsız Denetim Danışmanlığı</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.financial} alt="Finansal Danışmanlık" />
              </div>
              <h3><Link to="/yonetim-danismanligi">Finansal Danışmanlık</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.accounting} alt="Mali Danışmanlık" />
              </div>
              <h3><Link to="/yonetim-danismanligi">Mali Danışmanlık</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.innercontrol} alt="İç Denetim Danışmanlığı" />
              </div>
              <h3><Link to="/yonetim-danismanligi">İç Denetim Danışmanlığı</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.managercoaching} alt="Yönetici Koçluğu" />
              </div>
              <h3><Link to="/yonetim-danismanligi">Yönetici Koçluğu</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.familycompanies} alt="Aile Şirketleri Danışmanlığı" />
              </div>
              <h3><Link to="/yonetim-danismanligi">Aile Şirketleri Danışmanlığı</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.humanresources} alt="İnsan Kaynakları Yönetim Danışmanlığı" />
              </div>
              <h3><Link to="/yonetim-danismanligi">İnsan Kaynakları Yönetim Danışmanlığı</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.commertial} alt="Kurumsal Gelişim Seminerleri" />
              </div>
              <h3><Link to="/yatirim-danismanligi">Kurumsal Gelişim Seminerleri</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.investment} alt="Yatırım ve İş Geliştirme" />
              </div>
              <h3><Link to="/yatirim-danismanligi">Yatırım ve İş Geliştirme</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.entrepreneurship} alt="Girişimcilik" />
              </div>
              <h3><Link to="/yatirim-danismanligi">Girişimcilik</Link></h3>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 text-center">
            <div className="practice-area">
              <div className="icon d-flex justify-content-center align-items-center">
                <img height="50" src={FlatIcons.encouraged} alt="Yatırım ve Teşvikler" />
              </div>
              <h3><Link to="/yatirim-danismanligi">Yatırım ve Teşvikler</Link></h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section container-fluid bg-home-map"></section>

    <section className="ftco-consultation" id="free-consultation">
      <div className="container-fluid">
        <div className="row d-md-flex">
          <div className="half p-3 p-md-5">
            <h3 className="mb-4">Ücretsiz Danışmanlık</h3>
            <form action="#">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="İsım & Soyisim"/>
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
                <input type="submit" value="Gönder" className="btn btn-primary"/>
              </div>
            </form>
          </div>
          <div className="half d-flex justify-content-center align-items-center img bg-home-lib">
            <div className="overlay"></div>
            <div className="desc text-center">
              <div className="icon"><span className="flaticon-auction"></span></div>
              <h1><Link to="/">Aliyeva <br/><span>Hukuk & Danışmanlık</span></Link></h1>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
