import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../assets/css/ionicons.min.css"
import "../assets/css/flaticon.css"
import "../assets/css/style.css"

import Header from "./header"
import Banner from "./banner"
import Menu from "./menu"

const Layout = ({ children, section1, page, title, }) => {
  let header = <Header title={title} section1={section1} />;
  if (title === 'home') header = <Banner/>

  return (
    <>
      <Menu page={page} />
      {header}
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Aliyeva Hukuk</h2>
                <p>ALIYEVA Hukuk Ofisi, 2015 yılından bu yana yerli ve yabancı müvekkillerine hukukun bir çok dalında, ulusal ve uluslararası yönlendirme ve çözüm gerektiren hususlarda hukuki destek veren yenilikçi bir butik hukuk firmasıdır.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate"><Link to="/"><span className="icon-twitter"></span></Link></li>
                  <li className="ftco-animate"><Link to="/"><span className="icon-facebook"></span></Link></li>
                  <li className="ftco-animate"><Link to="/"><span className="icon-instagram"></span></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Faaliyet Alanlarımız</h2>
                <ul className="list-unstyled">
                  <li><Link to="/hukuk-danismanligi" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Şirketler Hukuku</Link></li>
                  <li><Link to="/hukuk-danismanligi" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>İş Hukuku</Link></li>
                  <li><Link to="/hukuk-danismanligi" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Spor Hukuku</Link></li>
                  <li><Link to="/hukuk-danismanligi" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Gayrimenkul Hukuku</Link></li>
                  <li><Link to="/hukuk-danismanligi" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Uluslararası Hukuk</Link></li>
                  <li><Link to="/hukuk-danismanligi" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Finansal Danışmanlık</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">İletişim Bilgileri?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon ion-ios-map"></span><span className="text">Ayazma Caddesi No: 21 Nef 11 Offices D/1 Kağıthane / İstanbul</span></li>
                    <li><Link to="/"><span className="icon ion-ios-call"></span><span className="text">0850 223 81 91</span></Link></li>
                    <li><a href="mailto:aliyeva@aliyeva.av.tr"><span className="icon ion-ios-mail"></span><span className="text">aliyeva@aliyeva.av.tr</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> Aliyeva Hukuk. All rights reserved | by gunayaliyeva
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Layout.defaultProp = {
  title: 'home'
}

export default Layout
