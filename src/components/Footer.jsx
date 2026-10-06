import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Footer({ setActivePage }) {
  const { brand, departments } = hospitalData;

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="brand-logo" onClick={() => handleNav('home')}>
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v16m-8-8h16" />
                  <circle cx="18" cy="6" r="2" fill="#38BDF8" stroke="none" />
                </svg>
              </div>
              <div className="logo-text-block">
                <span className="logo-main-text" style={{ color: '#FFFFFF' }}>PR <span style={{ color: '#2DD4BF' }}>HEALTH CARE</span></span>
                <span className="logo-sub-text" style={{ color: '#94A3B8' }}>Compassionate • Trusted</span>
              </div>
            </div>
            <p>
              Dedicated to delivering reliable, accessible, and compassionate outpatient healthcare. Keeping patient comfort, safety, and medical diligence at the heart of our community service.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li className="footer-link-item"><a href="#home" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>Home</a></li>
              <li className="footer-link-item"><a href="#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>About Us</a></li>
              <li className="footer-link-item"><a href="#departments" onClick={(e) => { e.preventDefault(); handleNav('departments'); }}>Departments</a></li>
              <li className="footer-link-item"><a href="#doctors" onClick={(e) => { e.preventDefault(); handleNav('doctors'); }}>Doctors</a></li>
              <li className="footer-link-item"><a href="#appointments" onClick={(e) => { e.preventDefault(); handleNav('appointments'); }}>Appointments</a></li>
              <li className="footer-link-item"><a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Patient Services */}
          <div>
            <h4 className="footer-heading">Patient Services</h4>
            <ul className="footer-links">
              <li className="footer-link-item"><a href="#appointments" onClick={(e) => { e.preventDefault(); handleNav('appointments'); }}>Book Appointment</a></li>
              <li className="footer-link-item"><a href="#departments" onClick={(e) => { e.preventDefault(); handleNav('departments'); }}>General Consultations</a></li>
              <li className="footer-link-item"><a href="#departments" onClick={(e) => { e.preventDefault(); handleNav('departments'); }}>Preventive Checkups</a></li>
              <li className="footer-link-item"><a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Clinic Contact</a></li>
              <li className="footer-link-item">
                <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp Support <ArrowUpRight size={13} style={{ display: 'inline' }} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-heading">Contact PR Health Care</h4>
            <div className="footer-contact-item">
              <Phone size={18} color="#38BDF8" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ color: '#E2E8F0', fontWeight: '700', fontSize: '1.05rem' }}>{brand.contactNumber}</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Direct call / WhatsApp assistance</div>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} color="#2DD4BF" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ color: '#E2E8F0', fontWeight: '600' }}>Mon – Sat: 8:00 AM – 8:00 PM</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Sun: 9:00 AM – 1:00 PM [Editable]</div>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={18} color="#F472B6" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ color: '#CBD5E1', fontSize: '0.88rem' }}>{brand.address.line1}, {brand.address.cityState}</div>
                <span className="editable-tag" style={{ background: 'rgba(255,255,255,0.08)', color: '#94A3B8', borderColor: 'rgba(255,255,255,0.15)', marginTop: '4px' }}>
                  Editable Address
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            © 2026 PR Health Care. All Rights Reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); handleNav('privacy'); }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); handleNav('terms'); }}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
