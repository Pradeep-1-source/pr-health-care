import React from 'react';
import { FileText, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function TermsPage({ setActivePage }) {
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
          <div className="pill-badge" style={{ marginBottom: '10px' }}>Terms & Conditions</div>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-navy)', marginBottom: '8px' }}>
            Terms & Conditions
          </h1>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
            Last updated: October 2026 | PR Health Care
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow">
          <div className="med-card" style={{ padding: '40px', lineHeight: '1.75', fontSize: '0.96rem', color: 'var(--text-muted)' }}>
            
            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>1. Acceptance of Terms</h3>
            <p style={{ marginBottom: '20px' }}>
              By accessing the PR Health Care website, requesting consultations, or communicating via our WhatsApp channels, you agree to comply with these Terms and Conditions.
            </p>

            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>2. Not for Medical Emergencies</h3>
            <p style={{ marginBottom: '20px', background: '#FEF2F2', padding: '14px', borderRadius: '10px', borderLeft: '4px solid #EF4444', color: '#991B1B' }}>
              <strong>Important Notice:</strong> This website and our WhatsApp messaging channels are designed for routine appointment scheduling and outpatient queries. <em>They are not intended for acute medical emergencies.</em> If you are experiencing a life-threatening emergency, immediately call local emergency medical services (108 / 112) or go to the nearest hospital casualty department.
            </p>

            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>3. Appointments & Scheduling</h3>
            <p style={{ marginBottom: '20px' }}>
              Submitting an appointment request online constitutes a scheduling inquiry. Confirmed consultation slots are finalized following coordination with the clinic reception desk via phone or WhatsApp. Doctors' availability is subject to change in case of emergency duties or clinical contingencies.
            </p>

            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>4. Medical Information Disclaimer</h3>
            <p style={{ marginBottom: '20px' }}>
              Information provided on this website regarding departments, general health, or diagnostic screening is for informational guidance only and does not constitute a definitive medical diagnosis. In-person consultation with a qualified physician is required for prescription and clinical treatment.
            </p>

            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.3rem', marginBottom: '10px' }}>5. Clinic Queries & Feedback</h3>
            <p>
              For inquiries regarding these terms, please contact our helpline desk at <strong>8248164459</strong> or connect via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
