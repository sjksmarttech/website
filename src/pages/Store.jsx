import { Link } from 'react-router-dom'
import './Page.css'

const AMAZON_STOREFRONT_URL = 'https://www.amazon.in'

const base = import.meta.env.BASE_URL

export default function Store() {
  return (
    <div className="page">
      <h1 className="page__title">Amazon storefront</h1>
      <p className="page__lead">
        SJK SmartTech sells practical home, car-care, and student essentials on Amazon—fulfillment,
        pricing, and support run through Amazon’s marketplace.
      </p>

      <section className="section">
        <h2 className="section__title">Shop our Amazon storefront</h2>
        <p className="store-intro">
          Browse all listings in one place—microfiber, sponge scrubbers, student accessories, and
          more. Orders, returns, and delivery are handled on Amazon.
        </p>
        <p>
          <a
            className="btn btn--primary"
            href={AMAZON_STOREFRONT_URL}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex' }}
          >
            Open our Amazon storefront
          </a>
        </p>
      </section>

      <section className="section">
        <h2 className="section__title">Featured: 600 GSM microfiber car cloths</h2>
        <article className="store-product">
          <div className="store-product__gallery">
            <figure className="store-product__figure">
              <img
                src={`${base}store-microfiber-1.png`}
                alt="Premium dual-sided yellow and grey 600 GSM microfiber cloths with stitched edges"
                width={800}
                height={800}
                loading="lazy"
              />
            </figure>
            <figure className="store-product__figure">
              <img
                src={`${base}store-microfiber-2.png`}
                alt="Microfiber cloths used on car exterior mirror and interior dashboard"
                width={800}
                height={800}
                loading="lazy"
              />
            </figure>
          </div>
          <div className="store-product__body">
            <h3 className="store-product__name">Premium 600 GSM dual-sided microfiber</h3>
            <p className="store-product__text">
              Ultra-thick <strong>600 GSM</strong> towels with a bright yellow side and charcoal grey
              reverse, finished with durable stitched edges. Built for scratch-conscious detailing on
              paint, glass, and interior trims.
            </p>
            <ul className="store-feature-list">
              <li>High absorbency for washing, drying, and quick wipe-downs</li>
              <li>Machine washable and reusable</li>
              <li>Interior dashboards and exterior mirrors—one cloth, multiple surfaces</li>
              <li>Dense microfiber pile suited to automotive and home use</li>
            </ul>
            <p>
              <a
                className="btn btn--secondary"
                href={AMAZON_STOREFRONT_URL}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex' }}
              >
                View microfiber listings on Amazon
              </a>
            </p>
          </div>
        </article>
      </section>

      <section className="section">
        <h2 className="section__title">Sponge scrubbers &amp; home care</h2>
        <article className="store-category">
          <div className="store-category__visual store-category__visual--placeholder" aria-hidden="true">
            <span>Sponge &amp; scrubber listings</span>
          </div>
          <div className="store-category__body">
            <p>
              Dish sponges, scrub pads, and everyday cleaning tools chosen for kitchens and
              surfaces—formats customers already know from retail shelves, available through our
              Amazon catalog.
            </p>
            <ul className="store-feature-list">
              <li>Effective scrubbing for dishes, counters, and sinks</li>
              <li>Practical multipacks where available</li>
              <li>Fulfilled with Amazon delivery and returns</li>
            </ul>
            <p>
              <a
                className="btn btn--secondary"
                href={AMAZON_STOREFRONT_URL}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex' }}
              >
                Shop home care on Amazon
              </a>
            </p>
          </div>
        </article>
      </section>

      <section className="section">
        <h2 className="section__title">Student accessories</h2>
        <article className="store-category">
          <div className="store-category__visual store-category__visual--placeholder" aria-hidden="true">
            <span>Student essentials on Amazon</span>
          </div>
          <div className="store-category__body">
            <p>
              Compact, study-friendly picks for desks, dorms, and bags—organization helpers and
              everyday accessories aimed at students and home offices.
            </p>
            <ul className="store-feature-list">
              <li>Space-smart items for small desks and shared rooms</li>
              <li>Affordable add-ons for daily routines</li>
              <li>See live availability and reviews on Amazon</li>
            </ul>
            <p>
              <a
                className="btn btn--secondary"
                href={AMAZON_STOREFRONT_URL}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex' }}
              >
                Shop student accessories on Amazon
              </a>
            </p>
          </div>
        </article>
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
