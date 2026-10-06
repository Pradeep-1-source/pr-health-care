import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function MobileStickyBar({ setActivePage }) {
  const { brand } = hospitalData;

  const handleBook = () => {
    setActivePage('appointments');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mobile-sticky-bar" aria-label="Mobile quick actions">
      <a
        href={brand.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp btn-sm"
        style={{ fontSize: '0.9rem', padding: '10px' }}
      >
        <MessageSquare size={17} />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={handleBook}
        className="btn btn-primary btn-sm"
        style={{ fontSize: '0.9rem', padding: '10px' }}
      >
        <Calendar size={17} />
        <span>Book Appointment</span>
      </button>
    </div>
  );
}
