import React from 'react';
import { ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage({ setActivePage }) {
  return (
    <div>
      <section className="section-sm" style={{ background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container container-narrow">
          <button
            onClick={() => setActivePage('home')}
            style={{ background: 'none', border: 'none', color: 'var(--primary-blue)', display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontWeight: '600', marginBottom: '12px' }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>Legal & Privacy</div>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-navy)', marginBottom: '8px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
            Last updated: October 2026 | PR Health Care
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow">
          <div className="med-card" style={{ padding: '40px', lineHeight: '1.75', fontSize: '0.96rem', color: 'var(--text-muted)' }}>
            
            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>1. Introduction</h3>
            <p style={{ marginBottom: '20px' }}>
              PR Health Care ("we", "our", or "us") respects your personal and medical privacy. This Privacy Policy outlines how information collected through our website, appointment forms, and communication channels (including WhatsApp) is handled.
            </p>

            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>2. Information We Collect</h3>
            <p style={{ marginBottom: '10px' }}>
              When requesting an appointment or contacting us, you may provide:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Contact details such as name, telephone/WhatsApp number, and email address.</li>
              <li>Consultation details such as preferred department, preferred physician, and preferred appointment time.</li>
              <li>Voluntary notes regarding general symptoms or medical history shared to facilitate appointment scheduling.</li>
            </ul>

            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>3. How We Use Your Information</h3>
            <p style={{ marginBottom: '20px' }}>
              Information provided is used strictly to coordinate your medical consultation, verify scheduling with consulting doctors, communicate appointment reminders, and respond to your direct queries. We do not sell or trade patient contact details to third-party marketing brokers.
            </p>

            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>4. Medical Confidentiality</h3>
            <p style={{ marginBottom: '20px' }}>
              All health inquiries and consultation details shared with our clinical staff are treated with medical confidentiality adhering to applicable healthcare ethical guidelines.
            </p>

            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>5. Third-Party Messaging (WhatsApp)</h3>
            <p style={{ marginBottom: '20px' }}>
              Our appointment workflow facilitates communication over WhatsApp for patient convenience. Interactions via WhatsApp are subject to WhatsApp's standard end-to-end encryption and terms of service.
            </p>

            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>6. Contacting PR Health Care</h3>
            <p>
              For privacy-related questions or updating your communication preferences, you can reach out via WhatsApp or call our helpline directly at <strong>8248164459</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
