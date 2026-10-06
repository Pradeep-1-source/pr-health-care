import React from 'react';
import { ShieldCheck, Heart, Award, Eye, Target, CheckCircle2, Calendar, MessageSquare, Phone } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function AboutPage({ setActivePage }) {
  const { about, brand } = hospitalData;

  return (
    <div>
      {/* Header Banner */}
      <section className="section-sm" style={{ background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="pill-badge" style={{ marginBottom: '12px' }}>About PR Health Care</div>
          <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-navy)', marginBottom: '14px' }}>
            {about.heading}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: '1.6' }}>
            {about.intro}
          </p>
        </div>
      </section>

      {/* Main Narrative & Imagery */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--primary-navy)' }}>
                Committed to Family Health & Healing
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '20px' }}>
                At PR Health Care, we believe that effective medicine begins with attentive listening. When patients feel heard, diagnosis is sharper, care is safer, and the road to recovery is clearer.
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '30px' }}>
                Our clinic is organized around clinical diligence, strict hygiene, and prompt coordination. Whether you are consulting for a sudden fever, monitoring long-term blood pressure, or scheduling your child's routine vaccinations, you will find a supportive, professional environment.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                <div style={{ background: 'var(--primary-subtle)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(15, 76, 129, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Target size={22} color="var(--primary-blue)" />
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)' }}>Our Mission</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                    {about.mission}
                  </p>
                </div>

                <div style={{ background: 'var(--accent-teal-light)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(13, 148, 136, 0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Eye size={22} color="var(--accent-teal-dark)" />
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-teal-dark)' }}>Our Vision</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#134E4A', lineHeight: '1.55' }}>
                    {about.vision}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setActivePage('appointments');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <Calendar size={18} />
                  <span>Book a Consultation</span>
                </button>
                <a
                  href={brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={18} />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="about-image-wrapper">
              <div className="about-main-img">
                <img
                  src="/images/about-hospital.jpg"
                  alt="Modern PR Health Care clinical consultation facility"
                />
              </div>
              <div style={{ marginTop: '16px', background: '#F8FAFC', border: '1px solid var(--border-light)', padding: '16px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShieldCheck size={28} color="#0D9488" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <strong>Hygiene & Safety Protocols:</strong> Continuous sanitization of outpatient consultation rooms and patient waiting lounges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Values */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge teal">Our Foundations</div>
            <h2 className="section-title">Core Values That Guide Every Consultation</h2>
            <p className="section-subtitle">
              Every clinician, nurse, and staff member at PR Health Care upholds these five fundamental principles.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {about.coreValues.map((val, idx) => (
              <div key={idx} className="med-card" style={{ padding: '24px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary-subtle)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <CheckCircle2 size={22} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--primary-navy)' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
