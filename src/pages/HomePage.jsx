import React, { useState } from 'react';
import {
  Calendar,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  HeartPulse,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Phone,
  Stethoscope,
  Baby,
  Activity,
  Bone,
  Smile,
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const iconMap = {
  UserCheck,
  HeartPulse,
  Building2,
  CalendarClock,
  Stethoscope,
  Baby,
  Activity,
  Bone,
  Smile,
  Sparkles,
  FileSpreadsheet,
  ShieldCheck
};

export default function HomePage({ setActivePage, onSelectDepartment, onSelectDoctor }) {
  const { hero, trustHighlights, about, whyChooseUs, departments, doctors, testimonials, faqs, brand, emergencyNotice } = hospitalData;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-wrapper">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge teal">
                <ShieldCheck size={16} />
                <span>{hero.badge}</span>
              </div>
              <h1 className="hero-title">
                Compassionate Care. <br />
                <span>Trusted Healthcare.</span>
              </h1>
              <p className="hero-description">
                {hero.supportText}
              </p>

              <div className="hero-cta-row">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => setActivePage('appointments')}
                >
                  <Calendar size={20} />
                  <span>{hero.primaryCtaText}</span>
                </button>
                <a
                  href={brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageSquare size={20} />
                  <span>{hero.secondaryCtaText}</span>
                </a>
              </div>

              {/* Stat / Trust Badges */}
              <div className="hero-stat-cards">
                {hero.statBadges.map((stat, i) => (
                  <div key={i} className="hero-stat-item">
                    <div className="hero-stat-label">{stat.label}</div>
                    <div className="hero-stat-value">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-image-frame">
                <img
                  src="/images/hero-doctor.jpg"
                  alt="Doctor at PR Health Care walking in a modern hospital facility"
                  loading="eager"
                />
              </div>

              {/* Floating Reassurance Badge */}
              <div className="hero-floating-badge">
                <div className="badge-icon-box">
                  <HeartPulse size={26} />
                </div>
                <div>
                  <div className="badge-text-title">Compassionate Focus</div>
                  <div className="badge-text-desc">Patient comfort & hygiene at center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / HIGHLIGHTS SECTION */}
      <section className="section section-sm section-bg">
        <div className="container">
          <div className="highlights-grid">
            {trustHighlights.map((item) => {
              const IconComp = iconMap[item.iconName] || ShieldCheck;
              return (
                <div key={item.id} className="highlight-card">
                  <div className="highlight-icon-box">
                    <IconComp size={26} />
                  </div>
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT PR HEALTH CARE TEASER */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-main-img">
                <img
                  src="/images/about-hospital.jpg"
                  alt="PR Health Care clinical consultation and modern healthcare team"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <div className="pill-badge" style={{ marginBottom: '14px' }}>About PR Health Care</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginTop: '4px' }}>
                {about.heading}
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '16px', color: 'var(--text-main)', fontWeight: '500' }}>
                {about.intro}
              </p>
              <p style={{ fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '24px', color: 'var(--text-muted)' }}>
                {about.detailedStory}
              </p>

              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '12px', color: 'var(--primary-navy)' }}>Our Guiding Values</h4>
                <div className="values-list">
                  {about.coreValues.slice(0, 4).map((val, idx) => (
                    <div key={idx} className="value-item">
                      <CheckCircle2 size={18} className="value-icon" />
                      <div>
                        <div className="value-title">{val.title}</div>
                        <div className="value-desc">{val.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  className="btn btn-primary"
                  onClick={() => setActivePage('about')}
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setActivePage('contact')}
                >
                  <span>Contact Clinic</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES / DEPARTMENTS GRID */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge">Specialties & Care</div>
            <h2 className="section-title">Departments & Clinical Services</h2>
            <p className="section-subtitle">
              Comprehensive outpatient medical care designed to support your family across all stages of health.
            </p>
          </div>

          <div className="departments-grid">
            {departments.map((dept) => {
              const IconComp = iconMap[dept.iconName] || Stethoscope;
              return (
                <div
                  key={dept.id}
                  className="dept-card"
                  onClick={() => onSelectDepartment(dept)}
                >
                  <div className="dept-icon-box">
                    <IconComp size={26} />
                  </div>
                  <h3 className="dept-title">{dept.name}</h3>
                  <p className="dept-desc">{dept.shortDescription}</p>
                  <div className="dept-link-action">
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => setActivePage('departments')}
            >
              <span>Explore All Department Details</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE PR HEALTH CARE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge teal">Patient Trust</div>
            <h2 className="section-title">Why Patients Choose PR Health Care</h2>
            <p className="section-subtitle">
              Our clinical practice is built on attentive listening, clean hygiene standards, and ethical medical care.
            </p>
          </div>

          <div className="why-grid">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="why-card">
                <div className="why-num-box">0{index + 1}</div>
                <div>
                  <h3 className="why-card-title">{benefit.title}</h3>
                  <p className="why-card-desc">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DOCTORS SECTION */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge">Medical Team</div>
            <h2 className="section-title">Consulting Medical Professionals</h2>
            <p className="section-subtitle">
              Experienced physicians committed to attentive patient consultation and reliable medical guidance.
            </p>
          </div>

          <div className="doctors-grid">
            {doctors.map((doc) => (
              <div key={doc.id} className="doctor-card">
                <div className="doctor-image-wrapper">
                  <img src={doc.image} alt={doc.name} loading="lazy" />
                </div>
                <div className="doctor-body">
                  <h3 className="doctor-name">{doc.name}</h3>
                  <div className="doctor-specialty">{doc.designation}</div>
                  <p className="doctor-bio">{doc.bio}</p>
                  
                  <div style={{ marginBottom: '14px' }}>
                    <span className="editable-tag">{doc.isPlaceholderNotice}</span>
                  </div>

                  <div className="doctor-actions-row">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => onSelectDoctor(doc)}
                    >
                      View Profile
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        setActivePage('appointments');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button
              className="btn btn-secondary"
              onClick={() => setActivePage('doctors')}
            >
              <span>View All Doctors & Consultation Timings</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. PATIENT EXPERIENCES / TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge">Patient Feedback</div>
            <h2 className="section-title">What Patients Appreciate</h2>
            <p className="section-subtitle">
              Demonstrating our commitment to attentive medical listening and smooth clinic coordination.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div>
                  <div style={{ marginBottom: '12px' }}>
                    <span className="editable-tag">{t.editableTag}</span>
                  </div>
                  <p className="testimonial-quote">“{t.comment}”</p>
                </div>
                <div className="testimonial-author-row">
                  <div className="author-avatar">{t.initials}</div>
                  <div>
                    <div className="author-name">{t.patientName}</div>
                    <div className="author-dept">{t.department}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge">Patient Information</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers to help you plan your visit and appointment with ease.
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question">{faq.question}</span>
                    <ChevronDown size={20} className="faq-icon-caret" />
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. EMERGENCY / ASSISTANCE CTA BANNER */}
      <section className="section-sm">
        <div className="container">
          <div className="emergency-banner-box">
            <div>
              <h2 className="banner-title">{emergencyNotice.title}</h2>
              <p className="banner-subtitle">
                {emergencyNotice.subtitle}
              </p>
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#93C5FD', fontSize: '0.9rem' }}>
                <Phone size={16} />
                <span>Direct Line: <strong style={{ color: '#FFFFFF' }}>{brand.contactNumber}</strong></span>
              </div>
              <div style={{ marginTop: '6px', fontSize: '0.8rem', color: '#94A3B8' }}>
                {emergencyNotice.disclaimer}
              </div>
            </div>

            <div className="banner-cta-group">
              <button
                className="btn btn-white btn-lg"
                onClick={() => setActivePage('contact')}
              >
                <span>Contact Us</span>
              </button>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
