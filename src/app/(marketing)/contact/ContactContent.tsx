'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

const MapComponent = () => {
  const [mapError, setMapError] = useState<string | null>(null);

  const mapContainerStyle = {
    width: '100%',
    height: '400px', // Slightly reduced height for better mobile view
    borderRadius: '0',
  };

  const center = {
    lat: -31.9701,
    lng: 115.9275,
  };

  const handleMapError = () => {
    setMapError('Failed to load Google Maps. Please try again later.');
  };

  if (mapError) {
    return (
      <div className="h-[400px] flex items-center justify-center bg-[#f3f2f1]">
        <p className="text-gray-600">{mapError}</p>
      </div>
    );
  }

  return (
    <LoadScript 
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      onError={handleMapError}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options={{
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
          disableDefaultUI: false,
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: false,
          fullscreenControl: true,
        }}
      >
        <Marker
          position={center}
          title="MyGETS Headquarters"
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  // Add form ref
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(event.currentTarget);
    const data: FormData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: ApiResponse = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!',
        });
        // Reset form using the ref
        formRef.current?.reset();
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              Get in Touch with MyGETS
            </h1>
            <p className="text-xl mb-8 font-sans">
              We're here to help you revolutionize your procurement processes. Whether you have a question, need support, or want to schedule a personalized demo, our team is ready to assist.
            </p>
            <Link
              href="#contact-form"
              className="inline-flex items-center bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section id="contact-form" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-bold mb-6 font-sans">Send Us a Message</h2>
              
              {submitStatus.type && (
                <div className={`p-4 mb-6 rounded-lg ${
                  submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-myblue focus:border-myblue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-myblue focus:border-myblue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-myblue focus:border-myblue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-myblue focus:border-myblue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject*
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-myblue focus:border-myblue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message*
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-myblue focus:border-myblue transition-colors"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors inline-block"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Message'}
                </button>
              </form>
            </div>

            {/* Contact Details & Other Info */}
            <div className="lg:w-1/3 min-w-[300px]">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Our Office</h4>
                  <p className="text-gray-700">
                    MyGETS Headquarters<br />
                    100C Wright St Kewdale<br />
                    Perth, WA, 6105<br />
                    Australia
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Email Us</h4>
                  <div className="space-y-2">
                    <p>
                      <a href="mailto:info@mygets.net" className="text-[#107C10] hover:text-[#0e6b0e] transition-colors">
                        info@mygets.net
                      </a>
                      <span className="text-gray-600"> (General Inquiries)</span>
                    </p>
                    <p>
                      <a href="mailto:sales@mygets.net" className="text-[#107C10] hover:text-[#0e6b0e] transition-colors">
                        sales@mygets.net
                      </a>
                      <span className="text-gray-600"> (Sales & Demos)</span>
                    </p>
                    <p>
                      <a href="mailto:support@mygets.net" className="text-[#107C10] hover:text-[#0e6b0e] transition-colors">
                        support@mygets.net
                      </a>
                      <span className="text-gray-600"> (Customer Support)</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Call Us</h4>
                  <p className="text-gray-700">+61 4939 35033 (Phone)</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Business Hours</h4>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 4:00 PM AWST</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Looking for a Demo?</h4>
                  <p className="text-gray-700 mb-4">
                    See MyGETS in action and discover how it can transform your procurement.
                  </p>
                  <Link 
                    href="/request-demo"
                    className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors inline-block"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
            Find Us
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <MapComponent />
          </div>
        </div>
      </section>
    </main>
  );
} 