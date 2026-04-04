import { Link } from 'react-router-dom'
import './Page.css'

export default function Professional() {
  return (
    <div className="page">
      <h1 className="page__title">Professional profile</h1>
      <p className="page__lead">
        Results-driven full-stack developer with 12+ years of hands-on experience developing,
        architecting, and managing enterprise-level web applications.
      </p>

      <section className="section">
        <h2 className="section__title">Summary</h2>
        <p style={{ color: 'var(--muted)', marginTop: 0 }}>
          Expert in modern front ends and proven PHP frameworks, with strong cloud and container
          skills. Passionate about integrating AI tools responsibly, UML-based design thinking, and
          delivering scalable, user-centric solutions. Experienced leader in cross-functional teams,
          full project lifecycle delivery, and client collaboration. At home, we pair this with a
          strong operations mindset—my spouse works in SRE and DevOps—which keeps reliability and
          observability part of everyday conversation.
        </p>
      </section>

      <section className="section">
        <h2 className="section__title">Core stack</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Front end</h3>
            <p>Next.js, component-driven UIs, performance tuning, and accessibility awareness.</p>
          </div>
          <div className="card">
            <h3>Back end</h3>
            <p>CodeIgniter, Laravel, APIs, authentication, and maintainable service boundaries.</p>
          </div>
          <div className="card">
            <h3>Cloud &amp; platform</h3>
            <p>AWS services, Docker, deployment patterns aligned with modern DevOps practice.</p>
          </div>
          <div className="card">
            <h3>Design &amp; AI</h3>
            <p>UML-oriented analysis, clear architecture diagrams, practical AI tooling in the SDLC.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">How we work</h2>
        <ul className="list-check">
          <li>Plan with stakeholders; document flows and contracts before heavy build-out.</li>
          <li>Ship iteratively with code review, testing discipline, and measurable quality bars.</li>
          <li>Communicate timelines and trade-offs clearly to technical and non-technical audiences.</li>
        </ul>
      </section>

      <p>
        <Link to="/contact">Discuss a project →</Link>
        {' · '}
        <Link to="/store">Visit our Amazon focus →</Link>
      </p>
    </div>
  )
}
