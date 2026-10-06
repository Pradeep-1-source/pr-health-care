import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Stethoscope,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { hospitalData, getWhatsAppBookingUrl } from '../data/hospitalData';

export default function AppointmentPage({ preselectedDeptId, preselectedDoctor, onClearPreselection }) {
  const { departments, doctors, brand } = hospitalData;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    time: 'Morning (09:00 AM - 12:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Set initial selections if passed
  useEffect(() => {
    if (preselectedDeptId) {
      const d = departments.find((dept) => dept.id === preselectedDeptId);
      if (d) {
        setFormData((prev) => ({ ...prev, department: d.name }));
      }
    }
    if (preselectedDoctor) {
      setFormData((prev) => ({
        ...prev,
        doctor: preselectedDoctor.name,
        department: preselectedDoctor.departmentName
      }));
    }
  }, [preselectedDeptId, preselectedDoctor, departments]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.date) newErrors.date = 'Please select a preferred date';
    return newErrors;
  };

  const generatedWhatsAppUrl = getWhatsAppBookingUrl(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleLaunchWhatsApp = () => {
    window.open(generatedWhatsAppUrl, '_blank');
  };

  const copyWhatsAppMessage = () => {
    const text = `Hello PR Health Care, I would like to request an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nDepartment: ${formData.department}\nDoctor: ${formData.doctor || 'Any available specialist'}\nDate: ${formData.date}\nTime: ${formData.time}\nNotes: ${formData.message || 'None'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Get doctors matching selected department
  const filteredDoctors = formData.department
    ? doctors.filter((doc) => doc.departmentName === formData.department)
    : doctors;

  return (
    <div>
      {/* Header Banner */}
      <section className="section-sm" style={{ background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="pill-badge teal" style={{ marginBottom: '12px' }}>Easy Scheduling</div>
          <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-navy)', marginBottom: '14px' }}>
            Book an Appointment
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '750px', lineHeight: '1.6' }}>
            Schedule a consultation with our experienced physicians. Fill out your details below to coordinate directly with PR Health Care via our WhatsApp clinic desk.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: submitted ? '1fr' : '1.3fr 0.9fr', gap: '40px', alignItems: 'start' }}>
            
            {/* SUCCESS CONFIRMATION STATE */}
            {submitted ? (
              <div className="med-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '44px 36px', textAlign: 'center' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                  <CheckCircle2 size={42} />
                </div>
                <h2 style={{ fontSize: '2rem', color: 'var(--primary-navy)', marginBottom: '10px' }}>
                  Appointment Details Prepared!
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
                  Thank you, <strong>{formData.name}</strong>. Because PR Health Care operates a direct WhatsApp coordination workflow for real-time confirmation, please tap the button below to send this request directly to our reception desk.
                </p>

                {/* WhatsApp Message Preview Box */}
                <div className="whatsapp-preview-card" style={{ textAlign: 'left', margin: '0 auto 28px auto', maxWidth: '620px' }}>
                  <div className="whatsapp-preview-title">
                    <MessageSquare size={18} color="#16A34A" />
                    <span>Formatted Message for Reception</span>
                  </div>
                  <div className="whatsapp-message-box">
                    Hello PR Health Care, I would like to request an appointment.
                    <br />• <strong>Name:</strong> {formData.name}
                    <br />• <strong>Phone:</strong> {formData.phone}
                    {formData.email && <><br />• <strong>Email:</strong> {formData.email}</>}
                    <br />• <strong>Department:</strong> {formData.department}
                    <br />• <strong>Doctor:</strong> {formData.doctor || 'Earliest available specialist'}
                    <br />• <strong>Date:</strong> {formData.date}
                    <br />• <strong>Preferred Slot:</strong> {formData.time}
                    {formData.message && <><br />• <strong>Notes:</strong> {formData.message}</>}
                  </div>
                </div>

                {/* Primary WhatsApp Action */}
                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
                  <button
                    className="btn btn-whatsapp btn-lg"
                    onClick={handleLaunchWhatsApp}
                  >
                    <MessageSquare size={20} />
                    <span>Send Request on WhatsApp (Confirm Slot)</span>
                  </button>
                  <button
                    className="btn btn-secondary btn-lg"
                    onClick={copyWhatsAppMessage}
                  >
                    <Copy size={18} />
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Message Text'}</span>
                  </button>
                </div>

                <div style={{ fontSize: '0.88rem', color: 'var(--text-light)', borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
                  Need assistance right away? Direct phone inquiries welcome at: <strong>{brand.contactNumber}</strong>
                  <br />
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      if (onClearPreselection) onClearPreselection();
                    }}
                    style={{ background: 'none', border: 'none', color: 'var(--primary-blue)', textDecoration: 'underline', cursor: 'pointer', marginTop: '10px', fontSize: '0.9rem' }}
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              /* FORM INTERFACE */
              <>
                <div className="form-card">
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '8px' }}>
                    Patient Consultation Request Form
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Please enter accurate patient details so our medical desk can schedule the consultation smoothly.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                      {/* Full Name */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className={`form-input ${errors.name ? 'error' : ''}`}
                          placeholder="e.g. Ramesh Kumar"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <span className="form-error-msg">{errors.name}</span>}
                      </div>

                      {/* Phone Number */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                          Phone Number (WhatsApp Preferred) *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          className={`form-input ${errors.phone ? 'error' : ''}`}
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          Email Address (Optional)
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-input"
                          placeholder="patient@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Department */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="department">
                          Department / Specialty *
                        </label>
                        <select
                          id="department"
                          name="department"
                          className={`form-select ${errors.department ? 'error' : ''}`}
                          value={formData.department}
                          onChange={handleChange}
                        >
                          <option value="">Select a Department...</option>
                          {departments.map((dept) => (
                            <option key={dept.id} value={dept.name}>
                              {dept.name}
                            </option>
                          ))}
                        </select>
                        {errors.department && <span className="form-error-msg">{errors.department}</span>}
                      </div>

                      {/* Preferred Doctor */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="doctor">
                          Preferred Doctor (Optional)
                        </label>
                        <select
                          id="doctor"
                          name="doctor"
                          className="form-select"
                          value={formData.doctor}
                          onChange={handleChange}
                        >
                          <option value="">Any Available Specialist</option>
                          {filteredDoctors.map((doc) => (
                            <option key={doc.id} value={doc.name}>
                              {doc.name} ({doc.departmentName})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Preferred Date */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="date">
                          Preferred Date *
                        </label>
                        <input
                          id="date"
                          type="date"
                          name="date"
                          min={new Date().toISOString().split('T')[0]}
                          className={`form-input ${errors.date ? 'error' : ''}`}
                          value={formData.date}
                          onChange={handleChange}
                        />
                        {errors.date && <span className="form-error-msg">{errors.date}</span>}
                      </div>

                      {/* Preferred Time Slot */}
                      <div className="form-group full-width">
                        <label className="form-label" htmlFor="time">
                          Preferred Time Window
                        </label>
                        <select
                          id="time"
                          name="time"
                          className="form-select"
                          value={formData.time}
                          onChange={handleChange}
                        >
                          <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM – 12:00 PM)</option>
                          <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM – 03:00 PM)</option>
                          <option value="Evening (04:00 PM - 07:30 PM)">Evening (04:00 PM – 07:30 PM)</option>
                        </select>
                      </div>

                      {/* Message / Symptoms */}
                      <div className="form-group full-width">
                        <label className="form-label" htmlFor="message">
                          Brief Reason for Consultation / Symptoms (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-textarea"
                          placeholder="Describe symptoms or any previous tests you are bringing..."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                    <div style={{ marginTop: '24px' }}>
                      <button type="submit" className="btn btn-primary btn-block btn-lg">
                        <Calendar size={20} />
                        <span>Request Appointment</span>
                      </button>
                    </div>

                    <div className="form-notice">
                      <strong>Workflow Note:</strong> Once submitted, you will be offered direct WhatsApp transmission with pre-filled details to ensure rapid slot confirmation with our hospital reception.
                    </div>
                  </form>
                </div>

                {/* SIDEBAR REASSURANCE & DIRECT WHATSAPP */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Direct WhatsApp Instant Card */}
                  <div className="med-card" style={{ background: 'linear-gradient(135deg, #0A2540 0%, #0F4C81 100%)', color: '#FFFFFF', border: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MessageSquare size={22} color="#86EFAC" />
                      </div>
                      <div>
                        <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem' }}>Instant WhatsApp Booking</h4>
                        <span style={{ fontSize: '0.8rem', color: '#93C5FD' }}>Direct reception coordination</span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: '1.55', marginBottom: '20px' }}>
                      Prefer not to fill the entire form? You can start a WhatsApp conversation right now with a single tap.
                    </p>
                    <a
                      href="https://wa.me/918248164459?text=Hello%20PR%20Health%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-block"
                    >
                      <MessageSquare size={18} />
                      <span>Chat on WhatsApp (8248164459)</span>
                    </a>
                  </div>

                  {/* Consultation Guidelines */}
                  <div className="med-card">
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '14px' }}>
                      Appointment Guidelines
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={16} color="#0D9488" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Arrive 10 minutes before your confirmed consultation slot.</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={16} color="#0D9488" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Carry existing prescriptions and recent blood/diagnostic reports.</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={16} color="#0D9488" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Emergency consultations can be requested directly via reception.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
