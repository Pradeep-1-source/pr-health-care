import React from 'react';
import { X, Calendar, MessageSquare, Clock, MapPin, Stethoscope, AlertCircle } from 'lucide-react';
import { getWhatsAppBookingUrl } from '../data/hospitalData';

export default function DoctorModal({ doctor, onClose, onBookDoctor }) {
  if (!doctor) return null;

  const waUrl = getWhatsAppBookingUrl({
    doctor: doctor.name,
    department: doctor.departmentName
  });

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid var(--border-light)' }}>
            <img src={doctor.image} alt={doctor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div className="pill-badge teal" style={{ marginBottom: '6px' }}>{doctor.departmentName}</div>
            <h3 style={{ fontSize: '1.45rem', color: 'var(--primary-navy)' }}>{doctor.name}</h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: '600' }}>
              {doctor.designation}
            </div>
          </div>
        </div>

        {/* Development Notice */}
        <div style={{ background: '#F8FAFC', border: '1px dashed #CBD5E1', borderRadius: '10px', padding: '10px 14px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#64748B' }}>
          <AlertCircle size={16} color="#64748B" />
          <span>{doctor.isPlaceholderNotice}</span>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '8px' }}>Clinical Profile & Focus</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            {doctor.bio}
          </p>
        </div>

        <div style={{ background: 'var(--primary-subtle)', borderRadius: '12px', padding: '16px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--primary-navy)' }}>
            <Clock size={16} color="var(--primary-blue)" />
            <span><strong>Consultation Schedule:</strong> {doctor.availableDays}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--primary-navy)' }}>
            <Stethoscope size={16} color="var(--primary-blue)" />
            <span><strong>Specialty:</strong> {doctor.departmentName} Outpatient Care</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              onClose();
              onBookDoctor(doctor);
            }}
          >
            <Calendar size={18} />
            <span>Book with {doctor.name.split(' ')[1] || 'Doctor'}</span>
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageSquare size={18} />
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
