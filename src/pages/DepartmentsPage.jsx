import React, { useState } from 'react';
import {
  Stethoscope,
  Baby,
  Activity,
  Bone,
  Smile,
  Sparkles,
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const iconMap = {
  Stethoscope,
  Baby,
  Activity,
  Bone,
  Smile,
  Sparkles,
  FileSpreadsheet,
  ShieldCheck
};

export default function DepartmentsPage({ setActivePage, onSelectDepartment, onBookForDepartment }) {
  const { departments, brand } = hospitalData;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'primary', label: 'Primary Care' },
    { id: 'specialized', label: 'Specialist Consultations' },
    { id: 'wellness', label: 'Diagnostics & Wellness' }
  ];

  const filteredDepts = departments.filter((dept) => {
    if (selectedCategory === 'primary') {
      return ['general-medicine', 'pediatrics'].includes(dept.id);
    }
    if (selectedCategory === 'specialized') {
      return ['cardiology', 'orthopedics', 'gynecology', 'dermatology'].includes(dept.id);
    }
    if (selectedCategory === 'wellness') {
      return ['diagnostics', 'preventive-healthcare'].includes(dept.id);
    }
    return true;
  });

  return (
    <div>
      {/* Header Banner */}
      <section className="section-sm" style={{ background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="pill-badge" style={{ marginBottom: '12px' }}>Clinical Specialties</div>
          <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-navy)', marginBottom: '14px' }}>
            Departments & Healthcare Services
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '750px', lineHeight: '1.6' }}>
            At PR Health Care, we provide well-organized outpatient care across 8 core clinical areas, designed to address everyday health concerns, specialist diagnostics, and long-term family wellness.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  border: '1.5px solid',
                  borderColor: selectedCategory === cat.id ? 'var(--primary-blue)' : 'var(--border-light)',
                  background: selectedCategory === cat.id ? 'var(--primary-blue)' : '#FFFFFF',
                  color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--text-muted)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '28px' }}>
            {filteredDepts.map((dept) => {
              const IconComp = iconMap[dept.iconName] || Stethoscope;
              return (
                <div key={dept.id} className="med-card" style={{ padding: '32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--primary-subtle)',
                        color: dept.colorAccent || 'var(--primary-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComp size={28} />
                    </div>
                    <span className="pill-badge" style={{ fontSize: '0.78rem' }}>Outpatient Care</span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: 'var(--primary-navy)' }}>
                    {dept.name}
                  </h3>
                  <div style={{ fontSize: '0.88rem', color: 'var(--accent-teal-dark)', fontWeight: '600', marginBottom: '12px' }}>
                    {dept.tagline}
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                    {dept.shortDescription}
                  </p>

                  <div style={{ marginBottom: '24px', flexGrow: 1 }}>
                    <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '700', color: 'var(--text-light)', marginBottom: '8px' }}>
                      Key Treatments & Scope:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {dept.keyServices.slice(0, 3).map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                          <CheckCircle2 size={16} color="#0D9488" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => onSelectDepartment(dept)}
                    >
                      <span>Full Details</span>
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        if (onBookForDepartment) {
                          onBookForDepartment(dept.id);
                        } else {
                          setActivePage('appointments');
                        }
                      }}
                    >
                      <Calendar size={15} />
                      <span>Book Slot</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp Quick Assistance */}
      <section className="section-sm section-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-navy)', marginBottom: '12px' }}>
            Unsure which department fits your symptoms?
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '1.02rem' }}>
            Message our front desk on WhatsApp. We will gladly guide you to the right physician or schedule a general checkup.
          </p>
          <a
            href={brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <MessageSquare size={20} />
            <span>Chat with PR Health Care Reception</span>
          </a>
        </div>
      </section>
    </div>
  );
}
