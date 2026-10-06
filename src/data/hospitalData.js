/**
 * PR HEALTH CARE - CENTRALIZED CONTENT STORE
 * 
 * Edit this single file to update hospital details, contact numbers,
 * departments, doctors, FAQs, working hours, and placeholders.
 */

export const hospitalData = {
  brand: {
    name: "PR Health Care",
    tagline: "Compassionate Care. Trusted Healthcare.",
    subTagline: "Dedicated to reliable, accessible, and patient-first medical excellence.",
    contactNumber: "8248164459",
    displayPhone: "+91 82481 64459",
    whatsappNumber: "8248164459",
    whatsappUrl: "https://wa.me/918248164459",
    email: "care@prhealthcare.com", // [Editable placeholder email]
    address: {
      line1: "PR Health Care Center", // [Editable placeholder]
      line2: "Main Healthcare Avenue, Medical District", // [Editable placeholder]
      cityState: "Tamil Nadu, India", // [Editable placeholder]
      note: "[Facility address is an editable placeholder — replace with actual clinic address]"
    },
    hours: {
      weekdays: "Monday – Saturday: 8:00 AM – 8:00 PM",
      sunday: "Sunday: 9:00 AM – 1:00 PM",
      emergencyNote: "Urgent consultation inquiries welcome via WhatsApp during operational hours.",
      note: "[Working hours are editable placeholders — adjust to your clinic timings]"
    }
  },

  hero: {
    badge: "Compassionate & Trusted Healthcare",
    headline: "Compassionate Care. Trusted Healthcare.",
    supportText: "At PR Health Care, we combine experienced medical professionals, modern healthcare practices, and compassionate care to support you and your family at every step.",
    primaryCtaText: "Book an Appointment",
    secondaryCtaText: "Chat on WhatsApp",
    statBadges: [
      { label: "Patient-First", value: "Dedicated Care" },
      { label: "Modern Clinics", value: "8 Key Specialties" },
      { label: "Quick Connect", value: "Direct WhatsApp" }
    ]
  },

  trustHighlights: [
    {
      id: "exp-med",
      title: "Experienced Medical Professionals",
      description: "Qualified doctors and attentive nursing staff providing clinical care you can rely on.",
      iconName: "UserCheck"
    },
    {
      id: "patient-centered",
      title: "Patient-Centered Care",
      description: "Your comfort, dignity, and individual health goals guide every clinical recommendation.",
      iconName: "HeartPulse"
    },
    {
      id: "modern-facilities",
      title: "Modern Healthcare Facilities",
      description: "Clean, hygienic consultation spaces equipped with contemporary diagnostic support.",
      iconName: "Building2"
    },
    {
      id: "convenient-appointments",
      title: "Convenient Appointments",
      description: "Seamless scheduling via WhatsApp or direct request to minimize waiting time.",
      iconName: "CalendarClock"
    }
  ],

  about: {
    heading: "Healthcare With a Human Touch",
    intro: "PR Health Care is focused on delivering reliable, accessible, and compassionate healthcare while keeping patient comfort and safety at the center of the experience.",
    detailedStory: "Founded on the belief that healthcare should be both clinically sound and genuinely warm, PR Health Care provides families with attentive outpatient consultations, preventive screenings, and personalized wellness plans. We listen carefully, explain options transparently, and partner with you throughout your recovery.",
    mission: "To provide dignified, compassionate, and dependable healthcare services that foster lifelong family wellness through clinical diligence and patient trust.",
    vision: "To become the preferred community healthcare provider known for clinical empathy, ethical medical practice, and accessible consultation standards.",
    coreValues: [
      {
        title: "Patient First",
        description: "Every decision prioritizes patient well-being, emotional reassurance, and safety."
      },
      {
        title: "Compassion",
        description: "Medical practice rooted in empathy, listening with patience, and treating with kindness."
      },
      {
        title: "Integrity",
        description: "Ethical medical guidance, transparent treatment discussions, and genuine recommendations."
      },
      {
        title: "Excellence",
        description: "Continuous commitment to hygienic medical protocols and modern clinical practices."
      },
      {
        title: "Safety",
        description: "Strict hygiene, sanitized consultation suites, and rigorous patient safety measures."
      }
    ]
  },

  whyChooseUs: [
    {
      title: "Patient-Centered Approach",
      description: "We listen carefully to your symptoms and personal history before prescribing tailored care."
    },
    {
      title: "Experienced Healthcare Team",
      description: "Dedicated medical practitioners who take time to explain treatment plans clearly."
    },
    {
      title: "Modern Facilities",
      description: "Well-maintained, clean, and peaceful environment designed for healing and ease."
    },
    {
      title: "Convenient Appointment Process",
      description: "Skip long lines by confirming appointments conveniently directly via WhatsApp or phone."
    },
    {
      title: "Focus on Safety & Comfort",
      description: "Sanitized clinical areas and strict protocols to keep patients and visitors protected."
    }
  ],

  departments: [
    {
      id: "general-medicine",
      name: "General Medicine",
      tagline: "Comprehensive Consultation & Routine Health Support",
      shortDescription: "Comprehensive medical consultation and routine healthcare support for acute and chronic conditions.",
      fullDescription: "Our General Medicine department serves as the first point of medical contact for adults. From managing fevers, infections, and hypertension to long-term chronic condition management, our physicians emphasize thorough evaluation and lifestyle guidance.",
      keyServices: [
        "Acute illness diagnosis (fevers, seasonal infections, allergies)",
        "Hypertension & Diabetes routine monitoring",
        "Adult immunizations & health risk checks",
        "Holistic lifestyle and dietary wellness counseling"
      ],
      iconName: "Stethoscope",
      colorAccent: "#0f4c81"
    },
    {
      id: "pediatrics",
      name: "Pediatrics",
      tagline: "Gentle & Attentive Healthcare for Children",
      shortDescription: "Dedicated healthcare support for children and families with gentle, kid-friendly care.",
      fullDescription: "Our pediatric care is designed to make young patients feel safe and parents feel reassured. We track physical milestones, manage childhood ailments, administer routine immunizations, and provide supportive nutritional advice.",
      keyServices: [
        "Well-child growth & developmental evaluations",
        "Childhood immunization schedules",
        "Treatment for common pediatric respiratory & digestive conditions",
        "Parental guidance on child nutrition and sleep"
      ],
      iconName: "Baby",
      colorAccent: "#0d9488"
    },
    {
      id: "cardiology",
      name: "Cardiology",
      tagline: "Heart Health Consultations & Preventive Cardiac Care",
      shortDescription: "Heart health consultations and preventive cardiac care to keep your cardiovascular system strong.",
      fullDescription: "Focusing on preventive cardiology, our specialists help identify early cardiovascular risks, interpret ECGs, manage high blood pressure, and recommend evidence-based lifestyle changes to support long-term heart longevity.",
      keyServices: [
        "Cardiovascular risk assessment & BP management",
        "ECG interpretation and clinical review",
        "Post-cardiac lifestyle and rehabilitation advice",
        "Cholesterol and lipid profile counseling"
      ],
      iconName: "Activity",
      colorAccent: "#e11d48"
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      tagline: "Bone, Joint, Muscle & Mobility Care",
      shortDescription: "Support for bone, joint, muscle, and mobility-related concerns to restore active living.",
      fullDescription: "Whether dealing with back pain, joint stiffness, arthritis, or minor sports sprains, our orthopedics department offers non-surgical assessments, joint rehabilitation advice, and ergonomic lifestyle recommendations.",
      keyServices: [
        "Arthritis & joint pain consultation",
        "Posture, ergonomic, and backache management",
        "Sprain, strain, and tendonitis care",
        "Bone mineral density evaluation & calcium guidance"
      ],
      iconName: "Bone",
      colorAccent: "#d97706"
    },
    {
      id: "gynecology",
      name: "Gynecology",
      tagline: "Compassionate Women's Health & Wellness Services",
      shortDescription: "Professional women's healthcare and wellness services tailored to every stage of life.",
      fullDescription: "Offering respectful and private consultations for women of all ages. From menstrual health, adolescent wellness, and PCOS support to pre-conception guidance and menopausal transitions.",
      keyServices: [
        "Routine gynecological health checkups",
        "Menstrual health, PCOS & hormonal imbalance counseling",
        "Pre-conception counseling and maternal wellness guidance",
        "Menopause support and bone health checks"
      ],
      iconName: "Smile",
      colorAccent: "#db2777"
    },
    {
      id: "dermatology",
      name: "Dermatology",
      tagline: "Skin Health Consultations & Care",
      shortDescription: "Consultation and care for common skin-related concerns, allergies, and dermatological conditions.",
      fullDescription: "Our dermatology service focuses on medical skin health. We diagnose and treat acne, eczema, fungal infections, skin allergies, and scalp concerns with evidence-based dermatological medications.",
      keyServices: [
        "Acne, pimple, and skin barrier treatments",
        "Eczema, psoriasis, and dermatitis management",
        "Allergic rash and contact dermatitis diagnostics",
        "Scalp, dandruff, and hair fall consultations"
      ],
      iconName: "Sparkles",
      colorAccent: "#8b5cf6"
    },
    {
      id: "diagnostics",
      name: "Diagnostics",
      tagline: "Reliable Health Evaluations & Essential Lab Access",
      shortDescription: "Convenient access to essential diagnostic and health evaluation services with prompt reporting.",
      fullDescription: "Accurate diagnostics are fundamental to timely medical treatment. We coordinate routine pathology tests, blood panels, urine analysis, and vital health screenings with certified laboratory partners.",
      keyServices: [
        "Complete Blood Count (CBC) & standard blood profiles",
        "Blood glucose, HbA1c & lipid profiles",
        "Thyroid panel & hormone evaluations",
        "Routine urinalysis & infection markers"
      ],
      iconName: "FileSpreadsheet",
      colorAccent: "#2563eb"
    },
    {
      id: "preventive-healthcare",
      name: "Preventive Healthcare",
      tagline: "Proactive Health Assessments & Wellness Packages",
      shortDescription: "Routine health assessments and wellness-focused care designed to safeguard your family's future.",
      fullDescription: "Prevention is always better than cure. Our wellness assessments are structured to detect subtle metabolic or cardiovascular shifts early, empowering you with proactive medical insights.",
      keyServices: [
        "Annual family health checkup plans",
        "Senior citizen comprehensive wellness reviews",
        "Lifestyle & metabolic disease prevention packages",
        "Dietary, stress, and sleep hygiene medical advice"
      ],
      iconName: "ShieldCheck",
      colorAccent: "#059669"
    }
  ],

  doctors: [
    {
      id: "dr-priya-ramanathan",
      name: "Dr. Priya Ramanathan",
      designation: "Senior Consultant — General Medicine",
      departmentId: "general-medicine",
      departmentName: "General Medicine",
      experienceText: "Senior Medical Consultant",
      bio: "Focuses on adult healthcare, preventive screening, and holistic chronic illness management with compassionate patient communication.",
      availableDays: "Mon, Wed, Fri (9:00 AM – 2:00 PM)",
      image: "/images/doctor-2.jpg",
      isPlaceholderNotice: "[Doctor profile is editable placeholder content for development]"
    },
    {
      id: "dr-rajesh-kumar",
      name: "Dr. Rajesh Kumar",
      designation: "Specialist — Cardiology",
      departmentId: "cardiology",
      departmentName: "Cardiology",
      experienceText: "Cardiology Specialist",
      bio: "Dedicated to clinical cardiology, hypertensive risk management, preventive cardiovascular lifestyle planning, and patient education.",
      availableDays: "Tue, Thu, Sat (10:00 AM – 3:00 PM)",
      image: "/images/doctor-1.jpg",
      isPlaceholderNotice: "[Doctor profile is editable placeholder content for development]"
    },
    {
      id: "dr-sneha-reddy",
      name: "Dr. Sneha Reddy",
      designation: "Specialist — Pediatrics & Child Health",
      departmentId: "pediatrics",
      departmentName: "Pediatrics",
      experienceText: "Pediatric Consultant",
      bio: "Gentle and patient-centered pediatrician experienced in childhood immunizations, developmental evaluations, and childhood nutrition.",
      availableDays: "Mon to Sat (10:00 AM – 1:00 PM & 5:00 PM – 7:30 PM)",
      image: "/images/doctor-4.jpg",
      isPlaceholderNotice: "[Doctor profile is editable placeholder content for development]"
    },
    {
      id: "dr-arvind-natarajan",
      name: "Dr. Arvind Natarajan",
      designation: "Specialist — Orthopedics & Joint Care",
      departmentId: "orthopedics",
      departmentName: "Orthopedics",
      experienceText: "Orthopedic Consultant",
      bio: "Specializes in non-surgical joint care, ergonomic back pain management, posture correction, and sports sprain rehabilitation.",
      availableDays: "Mon, Wed, Sat (4:00 PM – 7:30 PM)",
      image: "/images/doctor-3.jpg",
      isPlaceholderNotice: "[Doctor profile is editable placeholder content for development]"
    }
  ],

  testimonials: [
    {
      id: "test-1",
      initials: "K. S.",
      patientName: "K. S. [Patient Initial]",
      department: "General Medicine Consultation",
      comment: "The doctors at PR Health Care took the time to listen patiently to my symptoms and explained the treatment thoroughly. The WhatsApp appointment booking was fast and smooth.",
      editableTag: "[Editable Patient Experience Placeholder]"
    },
    {
      id: "test-2",
      initials: "M. R.",
      patientName: "M. R. & Family",
      department: "Pediatrics Department",
      comment: "Very friendly and reassuring atmosphere for children. The pediatrician made my child feel comfortable right away. Clean clinic and supportive staff.",
      editableTag: "[Editable Patient Experience Placeholder]"
    },
    {
      id: "test-3",
      initials: "V. T.",
      patientName: "V. T. [Preventive Checkup]",
      department: "Preventive Healthcare",
      comment: "Booked a family preventive health assessment. Everything was coordinated clearly without confusion. Highly recommend PR Health Care for prompt medical consultations.",
      editableTag: "[Editable Patient Experience Placeholder]"
    }
  ],

  faqs: [
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment directly through our online appointment form on this website or by clicking the 'Chat on WhatsApp' button. Your preferred doctor, department, date, and time will be pre-filled so our reception desk can confirm your consultation without delay."
    },
    {
      question: "How do I contact PR Health Care?",
      answer: "You can reach us directly on our dedicated contact line or WhatsApp at 8248164459 (+91 82481 64459). Our clinic team is available during operational hours to assist you with inquiries, scheduling, and clinic directions."
    },
    {
      question: "What departments are available at PR Health Care?",
      answer: "We offer consultations across 8 primary medical departments: General Medicine, Pediatrics, Cardiology, Orthopedics, Gynecology, Dermatology, Diagnostics, and Preventive Healthcare."
    },
    {
      question: "Can I request a specific doctor for my consultation?",
      answer: "Yes. When submitting an appointment request online or over WhatsApp, you can select your preferred doctor or department. If your requested specialist is not available at your preferred slot, our front desk will coordinate the earliest convenient alternative."
    },
    {
      question: "How can I reach PR Health Care through WhatsApp?",
      answer: "Simply tap any 'Chat on WhatsApp' button on the website, or message 8248164459 directly on WhatsApp. You can ask questions, check clinic timings, or initiate an appointment request in seconds."
    },
    {
      question: "What should I bring for my appointment?",
      answer: "We recommend bringing your valid photo ID, previous medical prescriptions, recent lab or diagnostic reports, and a list of any current medications you are taking. This helps our physicians provide an informed consultation."
    },
    {
      question: "Is PR Health Care suitable for emergency situations?",
      answer: "PR Health Care provides outpatient consultations and general medical care. For life-threatening emergencies or severe acute trauma, please immediately contact your local emergency services (108 / 112) or proceed to the nearest tertiary emergency department."
    }
  ],

  emergencyNotice: {
    title: "Need Medical Assistance?",
    subtitle: "Our team is here to help you connect with the right healthcare service.",
    phoneLabel: "Call or Message: 8248164459",
    disclaimer: "For life-threatening medical emergencies, please dial 108/112 immediately."
  }
};

/**
 * Generates standard WhatsApp URL with encoded message
 */
export function getWhatsAppBookingUrl(details = {}) {
  const baseNumber = hospitalData.brand.whatsappNumber;
  let text = "Hello PR Health Care, I would like to book an appointment.";
  
  if (details.name || details.department || details.date) {
    const parts = [
      `Hello PR Health Care, I would like to request an appointment.`,
      details.name ? `*Name:* ${details.name}` : null,
      details.phone ? `*Phone:* ${details.phone}` : null,
      details.department ? `*Department:* ${details.department}` : null,
      details.doctor ? `*Doctor:* ${details.doctor}` : null,
      details.date ? `*Preferred Date:* ${details.date}` : null,
      details.time ? `*Preferred Time:* ${details.time}` : null,
      details.message ? `*Notes:* ${details.message}` : null
    ].filter(Boolean);
    text = parts.join("\n");
  }

  return `https://wa.me/91${baseNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Standard General Inquiry WhatsApp link
 */
export function getWhatsAppInquiryUrl(customNote = "") {
  const baseNumber = hospitalData.brand.whatsappNumber;
  const text = customNote || "Hello PR Health Care, I have an inquiry regarding your medical services.";
  return `https://wa.me/91${baseNumber}?text=${encodeURIComponent(text)}`;
}
