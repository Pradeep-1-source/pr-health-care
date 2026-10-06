import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, AlertCircle, Filter, ArrowRight } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function DoctorsPage({ setActivePage, onSelectDoctor, onBookDoctor }) {
  const { doctors, departments, brand } = hospitalData;
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredDoctors = selectedDept === 'all'
    ? doctors
    : doctors.filter((doc) => doc.departmentId === selectedDept);

  return (
    <div>
      {/* Header Banner */}
      <section className="section-sm" style={{ background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="pill-badge" style={{ marginBottom: '12px' }}>Clinical Team</div>
          <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-navy)', marginBottom: '14px' }}>
            Our Medical Practitioners
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '750px', lineHeight: '1.6' }}>
            Meet our consulting physicians dedicated to providing patient-centered, ethical, and attentive outpatient care. Schedule a consultation or chat directly via WhatsApp.
          </p>

          {/* Department Filter */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setSelectedDept('all')}
              style={{
                padding: '8px 16px',
                borderRadius: '9999px',
                border: '1.5px solid',
                borderColor: selectedDept === 'all' ? 'var(--primary-blue)' : 'var(--border-light)',
                background: selectedDept === 'all' ? 'var(--primary-blue)' : '#FFFFFF',
                color: selectedDept === 'all' ? '#FFFFFF' : 'var(--text-muted)',
                fontWeight: '600',
                fontSize: '0.88rem',
                cursor: 'pointer'
              }}
            >
              All Doctors ({doctors.length})
            </button>
            {departments.slice(0, 4).map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  border: '1.5px solid',
                  borderColor: selectedDept === dept.id ? 'var(--primary-blue)' : 'var(--border-light)',
                  background: selectedDept === dept.id ? 'var(--primary-blue)' : '#FFFFFF',
                  color: selectedDept === dept.id ? '#FFFFFF' : 'var(--text-muted)',
                  fontWeight: '600',
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="container" style={{ marginTop: '24px' }}>
        <div style={{ background: '#F8FAFC', border: '1px dashed #CBD5E1', borderRadius: '12px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#475569' }}>
          <AlertCircle size={18} color="#0D9488" style={{ flexShrink: 0 }} />
          <span>
            <strong>Content Editability Note:</strong> Doctor names, specialties, and schedules shown below are customizable placeholders for the PR Health Care development build. Real doctor credentials and timings can be configured directly in <code style={{ color: 'var(--primary-blue)' }}>src/data/hospitalData.js</code>.
          </span>
        </div>
      </div>

      {/* Doctors Grid */}
      <section className="section">
        <div className="container">
          <div className="doctors-grid">
            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="doctor-card">
                <div className="doctor-image-wrapper">
                  <img src={doc.image} alt={doc.name} loading="lazy" />
                </div>
                <div className="doctor-body">
                  <span className="pill-badge teal" style={{ alignSelf: 'flex-start', fontSize: '0.75rem', marginBottom: '8px' }}>
                    {doc.departmentName}
                  </span>
                  <h3 className="doctor-name">{doc.name}</h3>
                  <div className="doctor-specialty">{doc.designation}</div>
                  <p className="doctor-bio">{doc.bio}</p>

                  <div style={{ background: 'var(--bg-subtle)', borderRadius: '8px', padding: '10px', marginBottom: '16px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', color: 'var(--primary-navy)' }}>
                      <Clock size={14} color="var(--primary-blue)" />
                      <span>Consultation Hours:</span>
                    </div>
                    <div style={{ marginTop: '4px' }}>{doc.availableDays}</div>
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
                      onClick={() => onBookDoctor(doc)}
                    >
                      <Calendar size={14} />
                      <span>Book Slot</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA Strip */}
      <section className="section-sm section-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-navy)', marginBottom: '10px' }}>
            Prefer to coordinate directly with our front desk?
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '22px' }}>
            Connect with PR Health Care via WhatsApp or call our helpline at 8248164459.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                setActivePage('appointments');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Calendar size={18} />
              <span>Go to Appointment Form</span>
            </button>
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
