import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function WhatsAppWidget() {
  const [bubbleOpen, setBubbleOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { brand } = hospitalData;

  const handleQuickSend = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(message || 'Hello PR Health Care, I would like to inquire about medical consultations.');
    window.open(`https://wa.me/91${brand.whatsappNumber}?text=${encoded}`, '_blank');
    setModalOpen(false);
    setMessage('');
  };

  return (
    <>
      <div className="floating-wa-wrapper" aria-label="WhatsApp quick contact">
        {/* Floating Bubble Teaser */}
        {bubbleOpen && !modalOpen && (
          <div className="wa-teaser-bubble">
            <span style={{ fontWeight: '600' }}>Chat with PR Health Care</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setBubbleOpen(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#94A3B8',
                display: 'flex',
                padding: '2px'
              }}
              aria-label="Dismiss chat tip"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Floating CTA Button */}
        <button
          className="floating-wa-btn"
          onClick={() => setModalOpen(!modalOpen)}
          aria-label="Chat with PR Health Care on WhatsApp"
        >
          <div className="wa-pulse-indicator">
            <div className="wa-pulse-ring"></div>
            <div className="wa-pulse-dot"></div>
          </div>
          <MessageSquare size={20} />
          <span>Chat with PR Health Care</span>
        </button>
      </div>

      {/* Quick WhatsApp Chat Popup Modal */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '28px',
            width: '340px',
            maxWidth: 'calc(100vw - 32px)',
            background: '#FFFFFF',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--border-light)',
            zIndex: 1000,
            overflow: 'hidden',
            animation: 'slideUp 0.25s ease-out'
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0A2540 0%, #0F4C81 100%)',
              color: '#FFFFFF',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <MessageSquare size={20} />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>PR Health Care</div>
                <div style={{ fontSize: '0.78rem', color: '#86EFAC', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#86EFAC', display: 'inline-block' }}></span>
                  Online | Quick Assistance
                </div>
              </div>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer' }}
              aria-label="Close WhatsApp chat popup"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '18px 20px', background: '#F8FAFC' }}>
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '12px 14px',
                fontSize: '0.88rem',
                color: 'var(--text-main)',
                border: '1px solid var(--border-light)',
                marginBottom: '14px',
                lineHeight: '1.45'
              }}
            >
              👋 Welcome to <strong>PR Health Care</strong>. How can we support your health today? Send us a message or request an appointment directly on WhatsApp!
            </div>

            <form onSubmit={handleQuickSend}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question or appointment request..."
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1.5px solid var(--border-light)',
                  fontSize: '0.88rem',
                  fontFamily: 'inherit',
                  resize: 'none',
                  minHeight: '80px',
                  marginBottom: '12px'
                }}
              />
              <button type="submit" className="btn btn-whatsapp btn-block" style={{ padding: '10px 16px', fontSize: '0.92rem' }}>
                <Send size={16} />
                <span>Open in WhatsApp</span>
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.75rem', color: 'var(--text-light)' }}>
              Official Contact: {brand.contactNumber}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
