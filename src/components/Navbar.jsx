import React, { useState } from 'react';
import { Phone, Calendar, MessageSquare, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand } = hospitalData;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'departments', label: 'Departments' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'appointments', label: 'Appointment' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      {/* Top Informational Strip */}
      <div className="header-topbar">
        <div className="container topbar-content">
          <div className="topbar-item">
            <ShieldCheck size={16} color="#14B8A6" />
            <span>Dedicated Patient-Centered Healthcare & Consultations</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="topbar-item">
              <Phone size={15} color="#38BDF8" />
              <span>Contact: </span>
              <a href={`tel:${brand.contactNumber}`} style={{ fontWeight: '700', color: '#FFFFFF' }}>
                {brand.displayPhone}
              </a>
            </div>
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-item"
              style={{ color: '#86EFAC', fontWeight: '600' }}
            >
              <MessageSquare size={14} />
              <span>WhatsApp: {brand.contactNumber}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <div className="header-navbar">
        <div className="container navbar-container">
          {/* Brand Logo */}
          <div className="brand-logo" onClick={() => handleNavClick('home')} role="button" tabIndex={0}>
            <div className="logo-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v16m-8-8h16" />
                <circle cx="18" cy="6" r="2.5" fill="#38BDF8" stroke="none" />
              </svg>
            </div>
            <div className="logo-text-block">
              <span className="logo-main-text">PR <span>HEALTH CARE</span></span>
              <span className="logo-sub-text">Compassionate • Trusted</span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={`nav-link ${activePage === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Group */}
          <div className="nav-cta-group">
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              title="Chat with PR Health Care on WhatsApp"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleNavClick('appointments')}
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10, 37, 64, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              padding: '24px 20px 32px 20px',
              borderBottomLeftRadius: '24px',
              borderBottomRightRadius: '24px',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: 'none',
                    background: activePage === link.id ? 'var(--primary-subtle)' : 'transparent',
                    color: activePage === link.id ? 'var(--primary-blue)' : 'var(--primary-navy)',
                    fontWeight: '700',
                    fontSize: '1.05rem',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} opacity={activePage === link.id ? 1 : 0.4} />
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
              <button
                className="btn btn-primary btn-block"
                onClick={() => handleNavClick('appointments')}
              >
                <Calendar size={18} />
                <span>Book an Appointment</span>
              </button>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-block"
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Direct Helpline: <strong style={{ color: 'var(--primary-navy)' }}>{brand.contactNumber}</strong>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
