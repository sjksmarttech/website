import { Link } from 'react-router-dom'
import './Page.css'

export default function Store() {
  return (
    <div className="page">
      <h1 className="page__title">Amazon storefront</h1>
      <p className="page__lead">
        reactSJK SmartTech operates an online retail presence on Amazon, offering practical products
        for homes, students, and daily upkeep.
      </p>

      <section className="section">
        <h2 className="section__title">What we sell</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Microfiber</h3>
            <p>
              Cleaning cloths, towels, and related textiles—selected for absorbency, durability, and
              everyday usefulness in kitchens, vehicles, and workspaces.
            </p>
          </div>
          <div className="card">
            <h3>Student essentials</h3>
            <p>
              Items that support study and organization—compact, affordable picks suited to dorms,
              desks, and on-the-go routines.
            </p>
          </div>
          <div className="card">
            <h3>Home care</h3>
            <p>
              Sponge scrubbers and similar tools for dishes and surfaces—focused on effective,
              familiar formats customers already trust on Amazon.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Shopping on Amazon</h2>
        <p style={{ color: 'var(--muted)', marginTop: 0 }}>
          Listings, pricing, Prime eligibility, and delivery are managed entirely on Amazon’s
          marketplace. When you have a direct storefront link or seller profile URL, add it here or
          replace the button below so visitors land on your live catalog.
        </p>
        <p>
          {/* Replace href with your Amazon storefront or seller profile URL from Seller Central */}
          <a
            className="btn btn--primary"
            href="https://www.amazon.in"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex' }}
          >
            Open Amazon India
          </a>
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
          Replace the button link in <code style={{ margin: '0 0.2rem' }}>src/pages/Store.jsx</code>{' '}
          with your storefront URL so customers go straight to your listings.
        </p>
      </section>

      <section className="section">
        <h2 className="section__title">Support &amp; business details</h2>
        <p style={{ color: 'var(--muted)', marginTop: 0 }}>
          For order questions on Amazon, use Amazon’s messaging and returns flow. For wholesale,
          invoicing, or GST-related correspondence, use our{' '}
          <Link to="/contact">contact page</Link>.
        </p>
      </section>

      <p>
        <Link to="/professional">About our technology work →</Link>
      </p>
    </div>
  )
}
