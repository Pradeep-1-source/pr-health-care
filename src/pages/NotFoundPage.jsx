import React from 'react';
import { Home, Calendar, Stethoscope, ArrowLeft } from 'lucide-react';

export default function NotFoundPage({ setActivePage }) {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center' }}>
      <div className="container container-narrow">
        <div className="med-card" style={{ padding: '50px 30px' }}>
          <div style={{ fontSize: '5rem', fontWeight: '800', color: 'var(--primary-blue)', lineHeight: '1' }}>404</div>
          <h1 style={{ fontSize: '2rem', color: 'var(--primary-navy)', marginTop: '16px', marginBottom: '12px' }}>
            Page Not Found
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 28px auto' }}>
            The healthcare resource or page you are looking for is unavailable or has moved.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => setActivePage('home')}>
              <Home size={18} />
              <span>Return to Home</span>
            </button>
            <button className="btn btn-secondary" onClick={() => setActivePage('departments')}>
              <Stethoscope size={18} />
              <span>Explore Departments</span>
            </button>
            <button className="btn btn-secondary" onClick={() => setActivePage('appointments')}>
              <Calendar size={18} />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
