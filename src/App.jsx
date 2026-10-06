import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import MobileStickyBar from './components/MobileStickyBar';
import DepartmentModal from './components/DepartmentModal';
import DoctorModal from './components/DoctorModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DepartmentsPage from './pages/DepartmentsPage';
import DoctorsPage from './pages/DoctorsPage';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

// Route path to pageId mapping
const pathToPage = {
  '/': 'home',
  '/about': 'about',
  '/departments': 'departments',
  '/doctors': 'doctors',
  '/appointments': 'appointments',
  '/contact': 'contact',
  '/privacy-policy': 'privacy',
  '/terms': 'terms'
};

const pageToPath = {
  home: '/',
  about: '/about',
  departments: '/departments',
  doctors: '/doctors',
  appointments: '/appointments',
  contact: '/contact',
  privacy: '/privacy-policy',
  terms: '/terms'
};

export default function App() {
  // Initialize page from pathname
  const initialPage = () => {
    const path = window.location.pathname;
    return pathToPage[path] || 'home';
  };

  const [activePage, setActivePage] = useState(initialPage);
  const [selectedDeptModal, setSelectedDeptModal] = useState(null);
  const [selectedDocModal, setSelectedDocModal] = useState(null);

  // Cross-page appointment preselection
  const [preselectedDeptId, setPreselectedDeptId] = useState(null);
  const [preselectedDoctor, setPreselectedDoctor] = useState(null);

  // Sync browser URL
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    const targetPath = pageToPath[pageId] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ pageId }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (e) => {
      const path = window.location.pathname;
      setActivePage(pathToPage[path] || 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title for SEO on page change
  useEffect(() => {
    const titles = {
      home: 'PR Health Care | Trusted Healthcare & Medical Services',
      about: 'About Us | PR Health Care - Healthcare With a Human Touch',
      departments: 'Departments & Clinical Specialties | PR Health Care',
      doctors: 'Consulting Doctors & Medical Team | PR Health Care',
      appointments: 'Book an Appointment | PR Health Care WhatsApp Desk',
      contact: 'Contact Us | PR Health Care - Phone: 8248164459',
      privacy: 'Privacy Policy | PR Health Care',
      terms: 'Terms & Conditions | PR Health Care'
    };
    document.title = titles[activePage] || 'PR Health Care | Trusted Healthcare';
  }, [activePage]);

  // Handler to jump to appointment with preselected department
  const handleBookForDepartment = (deptId) => {
    setPreselectedDeptId(deptId);
    setPreselectedDoctor(null);
    navigateTo('appointments');
  };

  // Handler to jump to appointment with preselected doctor
  const handleBookDoctor = (doc) => {
    setPreselectedDoctor(doc);
    setPreselectedDeptId(doc.departmentId);
    navigateTo('appointments');
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage
            setActivePage={navigateTo}
            onSelectDepartment={(dept) => setSelectedDeptModal(dept)}
            onSelectDoctor={(doc) => setSelectedDocModal(doc)}
          />
        );
      case 'about':
        return <AboutPage setActivePage={navigateTo} />;
      case 'departments':
        return (
          <DepartmentsPage
            setActivePage={navigateTo}
            onSelectDepartment={(dept) => setSelectedDeptModal(dept)}
            onBookForDepartment={handleBookForDepartment}
          />
        );
      case 'doctors':
        return (
          <DoctorsPage
            setActivePage={navigateTo}
            onSelectDoctor={(doc) => setSelectedDocModal(doc)}
            onBookDoctor={handleBookDoctor}
          />
        );
      case 'appointments':
        return (
          <AppointmentPage
            preselectedDeptId={preselectedDeptId}
            preselectedDoctor={preselectedDoctor}
            onClearPreselection={() => {
              setPreselectedDeptId(null);
              setPreselectedDoctor(null);
            }}
          />
        );
      case 'contact':
        return <ContactPage setActivePage={navigateTo} />;
      case 'privacy':
        return <PrivacyPolicyPage setActivePage={navigateTo} />;
      case 'terms':
        return <TermsPage setActivePage={navigateTo} />;
      default:
        return <NotFoundPage setActivePage={navigateTo} />;
    }
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activePage={activePage} setActivePage={navigateTo} />

      <main style={{ flexGrow: 1 }}>
        {renderCurrentPage()}
      </main>

      <Footer setActivePage={navigateTo} />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppWidget />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar setActivePage={navigateTo} />

      {/* Interactive Department Modal */}
      {selectedDeptModal && (
        <DepartmentModal
          department={selectedDeptModal}
          onClose={() => setSelectedDeptModal(null)}
          onBookAppointment={handleBookForDepartment}
        />
      )}

      {/* Interactive Doctor Modal */}
      {selectedDocModal && (
        <DoctorModal
          doctor={selectedDocModal}
          onClose={() => setSelectedDocModal(null)}
          onBookDoctor={handleBookDoctor}
        />
      )}
    </div>
  );
}
