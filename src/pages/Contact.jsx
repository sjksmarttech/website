import { Link } from 'react-router-dom'
import './Page.css'

export default function Contact() {
  return (
    <div className="page">
      <h1 className="page__title">Contact</h1>
      <p className="page__lead">
        Reach reactSJK SmartTech for professional inquiries, retail correspondence, or GST billing
        details.
      </p>

      <div className="contact-block">
        <dl>
          <dt>Business name</dt>
          <dd>reactSJK SmartTech</dd>

          <dt>Website</dt>
          <dd>
            <a href="https://sjksmarttech.com">sjksmarttech.com</a>
          </dd>

          <dt>Email</dt>
          <dd>
            <a href="mailto:sjksmarttech@gmail.com">sjksmarttech@gmail.com</a>
          </dd>

          <dt>Phone</dt>
          <dd>
            <a href="tel:+919495670824">+91-9495670824</a>
          </dd>

          <dt>GSTIN</dt>
          <dd>32CGIPM6664G1Z8</dd>
        </dl>
      </div>

      <section className="section" style={{ marginTop: '2rem' }}>
        <h2 className="section__title">What to use each channel for</h2>
        <ul className="list-check">
          <li>
            <strong>Amazon orders:</strong> use Amazon account help and seller messaging for shipping
            and returns.
          </li>
          <li>
            <strong>Development or consulting:</strong> email with a short brief and timeline; we will
            respond with next steps.
          </li>
          <li>
            <strong>B2B / invoices:</strong> email with company name, billing address, and GSTIN
            requirements.
          </li>
        </ul>
      </section>

      <p style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to home</Link>
      </p>
    </div>
  )
}
