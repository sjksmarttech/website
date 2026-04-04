import { NavLink } from 'react-router-dom'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="brand" end>
            <img
              src={`${import.meta.env.BASE_URL}sjk-round-logo.png`}
              alt="SJK smarttech"
              className="brand__logo"
              width={1024}
              height={1024}
              decoding="async"
            />
          </NavLink>
          <nav className="nav" aria-label="Main">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')} end>
              Home
            </NavLink>
            <NavLink to="/professional" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
              Professional
            </NavLink>
            <NavLink to="/store" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
              Amazon Store
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand-row">
            <img
              src={`${import.meta.env.BASE_URL}sjk-round-logo.png`}
              alt="SJK smarttech"
              className="site-footer__logo"
              width={96}
              height={96}
              decoding="async"
            />
            <p className="site-footer__brand">SJK SmartTech</p>
          </div>
          <p className="site-footer__meta">
            <a href="https://sjksmarttech.com">sjksmarttech.com</a>
            {' · '}
            <a href="mailto:sjksmarttech@gmail.com">sjksmarttech@gmail.com</a>
            {' · '}
            <a href="tel:+918848235872">+91-8848235872</a>
          </p>
          <p className="site-footer__gst">GSTIN: 32CGIPM6664G1Z8</p>
          <p className="site-footer__copy">© {new Date().getFullYear()} SJK SmartTech. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
