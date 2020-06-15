import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import $ from 'jquery'

class Menu extends React.PureComponent {
    componentDidMount() {
        var body = $(window);
        var nav = $(".ftco-navbar-light");
        var toggle = $(".navbar-toggler");

        body.on("scroll", () => {
            if (body.scrollTop()) {
                nav.css("background", "black")
            } else {
                nav.css("background", "transparent")
            }
        });
        toggle.on("click", () => {
            console.log('fdsfd')
            nav.css("background", "black")
        })
        
    }

    render() {
        return (
            <Navbar className="ftco-navbar-light" expand="lg">
                <Navbar.Brand href="/"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/">Anasayfa</Nav.Link>
                    <Nav.Link href="/about-us">Hakkımızda</Nav.Link>
                    <NavDropdown title="Çalışma Alanlarımız" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/hukuk-danismanligi">Hukuk Danışmanlığı</NavDropdown.Item>
                        <NavDropdown.Item href="/yonetim-danismanligi">Yönetim Danışmanlığı</NavDropdown.Item>
                        <NavDropdown.Item href="/yatirim-danismanligi">Yatırım Danışmanlığı</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/our-team">Ekibimiz</Nav.Link>
                    <Nav.Link href="/contact">İletişim</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default Menu
