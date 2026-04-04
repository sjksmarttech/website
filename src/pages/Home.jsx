import { Link } from 'react-router-dom'
import './Page.css'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__title">Technology expertise. Thoughtful retail.</h1>
          <p className="hero__text">
            SJK SmartTech brings together enterprise-grade full-stack development and a curated
            Amazon storefront focused on everyday quality—microfiber essentials, student items, and
            reliable home-care products.
          </p>
          <div className="hero__actions">
            <Link to="/professional" className="btn btn--primary">
              Development &amp; consulting
            </Link>
            <Link to="/store" className="btn btn--ghost">
              Shop on Amazon
            </Link>
          </div>
        </div>
      </section>

      <div className="dual-panels">
        <article className="dual-panel">
          <h2>Professional services</h2>
          <p>
            12+ years building and leading enterprise web applications—with depth in Next.js,
            CodeIgniter, Laravel, AWS, and Docker. UML-aware design, AI tooling where it helps, and
            clear communication across teams and clients.
          </p>
          <Link to="/professional" className="btn btn--secondary">
            View profile &amp; capabilities
          </Link>
        </article>
        <article className="dual-panel">
          <h2>Amazon storefront</h2>
          <p>
            Practical products chosen for real homes and students: microfiber cloths and towels,
            study-friendly accessories, sponge scrubbers, and similar household essentials—fulfilled
            with the standards buyers expect on Amazon.
          </p>
          <Link to="/store" className="btn btn--secondary">
            Categories &amp; how to buy
          </Link>
        </article>
      </div>

      <div className="page" style={{ paddingTop: '1rem' }}>
        <section className="section">
          <h2 className="section__title">Why one site for both</h2>
          <p className="page__lead" style={{ marginBottom: 0 }}>
            The same discipline that goes into scalable software—reliability, clarity, and respect for
            the end user—guides how we source and present retail products. Our household includes
            hands-on SRE and DevOps practice, which reinforces a culture of operational excellence in
            everything we ship, whether it is code or a customer order.
          </p>
        </section>
        <section className="section">
          <h2 className="section__title">Quick links</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Contact &amp; legal</h3>
              <p>Website, email, phone, and GSTIN for invoices and support.</p>
              <Link to="/contact">Go to contact →</Link>
            </div>
            <div className="card">
              <h3>sjksmarttech.com</h3>
              <p>Your registered domain points here—ideal for GitHub Pages with a custom domain.</p>
              <a href="https://sjksmarttech.com" target="_blank" rel="noreferrer">
                Open site →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
