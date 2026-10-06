import React from 'react';
import { X, Calendar, MessageSquare, CheckCircle2, Stethoscope, Baby, Activity, Bone, Smile, Sparkles, FileSpreadsheet, ShieldCheck } from 'lucide-react';
import { getWhatsAppInquiryUrl } from '../data/hospitalData';

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

export default function DepartmentModal({ department, onClose, onBookAppointment }) {
  if (!department) return null;

  const IconComponent = iconMap[department.iconName] || Stethoscope;
  const whatsappUrl = getWhatsAppInquiryUrl(`Hello PR Health Care, I would like to inquire about consultations in the ${department.name} department.`);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: 'var(--primary-subtle)',
              color: department.colorAccent || 'var(--primary-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <IconComponent size={30} />
          </div>
          <div>
            <div className="pill-badge" style={{ marginBottom: '6px' }}>Department Overview</div>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)' }}>{department.name}</h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--accent-teal-dark)', fontWeight: '600' }}>
              {department.tagline}
            </div>
          </div>
        </div>

        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '24px' }}>
          {department.fullDescription || department.shortDescription}
        </p>

        <h4 style={{ fontSize: '1.1rem', marginBottom: '14px', color: 'var(--primary-navy)' }}>
          Common Services & Consultations
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
          {department.keyServices?.map((service, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-main)' }}>
              <CheckCircle2 size={18} color="#0D9488" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{service}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              onClose();
              onBookAppointment(department.id);
            }}
          >
            <Calendar size={18} />
            <span>Book for this Dept</span>
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageSquare size={18} />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
