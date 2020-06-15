import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ title, section1 }) => (
  <header
    style={{
      background: `#000`,
      backgroundSize: 'contain'
    }}
  >

    <div className="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-end justify-content-center">
          <div className="col-md-9 pb-5 text-center">
            <h1 className="mb-3 bread">{title}</h1>
            <p className="breadcrumbs">
              <span className="mr-2"><Link to="/">Anasayfa <i className="ion-ios-arrow-forward"></i></Link></span> {section1 ? <span>{section1} <i className="ion-ios-arrow-forward"></i></span> : null} <span>{title} <i className="ion-ios-arrow-forward"></i></span>
            </p>
          </div>
        </div>
      </div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
