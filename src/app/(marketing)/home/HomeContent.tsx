'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import WhyMyGETS from './components/WhyMyGETS';
import PersonaSection from './components/PersonaSection';
import SolutionsPreview from './components/SolutionsPreview';
import RedFlagAlertsSection from './components/RedFlagAlertsSection';
import FAQSection from './components/FAQSection';
import FutureOfProcurementSection from './components/FutureOfProcurementSection';

export default function HomeContent() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section - Clear Value Proposition */}
      <HeroSection />
      
      {/* 2. Key Features - Immediate Value Demonstration */}
      <FeaturesSection />
      
      {/* 3. Social Proof & Trust - Why MyGETS */}
      <WhyMyGETS />
      
      {/* 4. Target Personas - Role-based Benefits */}
      <PersonaSection />
      
      {/* 5. Solutions Preview - Specific Use Cases */}
      <SolutionsPreview />
      
      {/* 6. Key Feature Highlight - Risk Prevention */}
      <RedFlagAlertsSection />
      
      {/* 7. Address Objections - FAQ */}
      <FAQSection />
      
      {/* 8. Strong CTA - Future Vision & Action */}
      <FutureOfProcurementSection />
    </main>
  );
}