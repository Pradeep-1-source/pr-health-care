import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Mail, Send, CheckCircle2, Calendar, AlertCircle } from 'lucide-react';
import { hospitalData, getWhatsAppInquiryUrl } from '../data/hospitalData';

export default function ContactPage({ setActivePage }) {
  const { brand } = hospitalData;

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    subject: 'General Consultation Inquiry',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;
    const msg = `Hello PR Health Care, Inquiry from ${contactForm.name} (${contactForm.phone}): [Subject: ${contactForm.subject}] - ${contactForm.message || 'No additional message'}`;
    window.open(getWhatsAppInquiryUrl(msg), '_blank');
    setFormSent(true);
  };

  return (
    <div>
      {/* Header Banner */}
      <section className="section-sm" style={{ background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="pill-badge teal" style={{ marginBottom: '12px' }}>Get In Touch</div>
          <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-navy)', marginBottom: '14px' }}>
            Contact PR Health Care
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '750px', lineHeight: '1.6' }}>
            We are here to assist you and your family. Reach out directly via WhatsApp, phone, or visit our outpatient facility.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.2fr', gap: '50px', alignItems: 'start' }}>
            
            {/* Contact Details & Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Primary Helpline Card */}
              <div className="med-card" style={{ borderLeft: '4px solid var(--primary-blue)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-subtle)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>Direct Contact & Helpline</h3>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>Voice call or SMS</div>
                  </div>
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '8px' }}>
                  {brand.contactNumber}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Available during clinic hours for general outpatient inquiries and scheduling assistance.
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href={`tel:${brand.contactNumber}`} className="btn btn-secondary btn-sm">
                    <Phone size={15} />
                    <span>Call Now</span>
                  </a>
                  <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                    <MessageSquare size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Working Hours Card (Editable Placeholder) */}
              <div className="med-card" style={{ borderLeft: '4px solid var(--accent-teal)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-teal-light)', color: 'var(--accent-teal-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>Clinic Working Hours</h3>
                    <span className="editable-tag">{brand.hours.note}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem', color: 'var(--text-main)', marginTop: '8px' }}>
                  <div><strong>{brand.hours.weekdays}</strong></div>
                  <div><strong>{brand.hours.sunday}</strong></div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '4px' }}>
                    {brand.hours.emergencyNote}
                  </div>
                </div>
              </div>

              {/* Physical Location Card (Editable Placeholder) */}
              <div className="med-card" style={{ borderLeft: '4px solid #DB2777' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FCE7F3', color: '#DB2777', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>Clinic Location</h3>
                    <span className="editable-tag">{brand.address.note}</span>
                  </div>
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.5', marginTop: '6px' }}>
                  <strong>{brand.address.line1}</strong>
                  <br />{brand.address.line2}
                  <br />{brand.address.cityState}
                </div>

                {/* Google Maps Visual Frame / Directions Placeholder */}
                <div style={{ marginTop: '16px', background: '#F1F5F9', borderRadius: '12px', padding: '24px', textAlign: 'center', border: '1px dashed #CBD5E1' }}>
                  <MapPin size={32} color="#0D9488" style={{ margin: '0 auto 8px auto' }} />
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--primary-navy)' }}>
                    Map Directions & Landmark Placeholder
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '4px' }}>
                    Easily accessible via local public transit. Embed live Google Maps iframe or custom map link here.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Inquiry Form */}
            <div className="form-card">
              <div className="pill-badge" style={{ marginBottom: '10px' }}>Fast Response</div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)', marginBottom: '8px' }}>
                Send Us a Direct Message
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Fill in your message and connect instantly with our reception team via WhatsApp.
              </p>

              {formSent ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <CheckCircle2 size={48} color="#16A34A" style={{ margin: '0 auto 14px auto' }} />
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--primary-navy)' }}>Inquiry Directed to WhatsApp</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '8px' }}>
                    If WhatsApp did not open automatically, click the button below:
                  </p>
                  <a
                    href={brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ marginTop: '18px' }}
                  >
                    <MessageSquare size={18} />
                    <span>Open WhatsApp (8248164459)</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-name">Your Full Name *</label>
                      <input
                        id="c-name"
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Anand Sharma"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="c-phone">Phone / WhatsApp Number *</label>
                      <input
                        id="c-phone"
                        type="tel"
                        required
                        className="form-input"
                        placeholder="e.g. 8248164459"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="c-subject">Subject</label>
                      <select
                        id="c-subject"
                        className="form-select"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      >
                        <option value="General Consultation Inquiry">General Consultation Inquiry</option>
                        <option value="Department & Doctor Timings">Department & Doctor Timings</option>
                        <option value="Preventive Health Packages">Preventive Health Packages</option>
                        <option value="Diagnostic Lab Inquiry">Diagnostic Lab Inquiry</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="c-msg">Your Message</label>
                      <textarea
                        id="c-msg"
                        className="form-textarea"
                        placeholder="Please write any specific questions you have..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-whatsapp btn-block btn-lg">
                      <Send size={18} />
                      <span>Send Inquiry on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary btn-block"
                      onClick={() => {
                        setActivePage('appointments');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <Calendar size={18} />
                      <span>Switch to Full Appointment Form</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
