import { z } from "zod";

/**
 * Contact Form Schema
 * Defines validation rules for contact form submissions
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Demo Request Form Schema
 * Defines validation rules for demo request form submissions
 */
export const demoRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters" }),
  phoneNumber: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export type DemoRequestData = z.infer<typeof demoRequestSchema>;

/**
 * Early Adopter Program Application Schema
 * Defines validation rules for early adopter program applications
 */
export const earlyAdopterSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters" }),
  companySize: z.enum(["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]),
  industry: z.string().min(2, { message: "Industry must be at least 2 characters" }),
  currentProcurementSystem: z.string().optional(),
  reasonForInterest: z.string().min(10, { message: "Please provide more details about your interest" }),
  implementationTimeframe: z.enum(["Immediately", "1-3 months", "3-6 months", "6-12 months", "Not sure"]),
  additionalInfo: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions" }),
});

export type EarlyAdopterData = z.infer<typeof earlyAdopterSchema>;

/**
 * Mock form submission handler
 * Simulates a backend API call with success/failure responses
 * 
 * TODO: Replace with actual backend API integration
 * 
 * @param formData The form data to submit
 * @param formType The type of form being submitted
 * @returns A promise that resolves with success or error information
 */
export async function mockSubmitForm(
  formData: ContactFormData | DemoRequestData | EarlyAdopterData,
  formType: 'contact' | 'demo' | 'earlyAdopter'
): Promise<{ success: boolean; message: string; data?: any; error?: string }> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Store in localStorage for demonstration purposes
  try {
    // Get existing submissions or initialize empty array
    const existingSubmissions = JSON.parse(localStorage.getItem(`${formType}Submissions`) || '[]');
    
    // Add timestamp to submission
    const submission = {
      ...formData,
      submittedAt: new Date().toISOString(),
      id: `submission-${Date.now()}`
    };
    
    // Add to submissions array
    existingSubmissions.push(submission);
    
    // Save back to localStorage
    localStorage.setItem(`${formType}Submissions`, JSON.stringify(existingSubmissions));
    
    // Return success response
    return {
      success: true,
      message: getSuccessMessage(formType),
      data: submission
    };
  } catch (error) {
    console.error('Error in mock form submission:', error);
    
    // Return error response
    return {
      success: false,
      message: 'There was an error processing your submission. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Get success message based on form type
 */
function getSuccessMessage(formType: 'contact' | 'demo' | 'earlyAdopter'): string {
  switch (formType) {
    case 'contact':
      return 'Thank you for your message. We will get back to you shortly.';
    case 'demo':
      return 'Thank you for requesting a demo. Our team will contact you to schedule your personalized demonstration.';
    case 'earlyAdopter':
      return 'Thank you for applying to our Early Adopter Program. We will review your application and contact you within 2 business days.';
    default:
      return 'Your submission has been received. Thank you!';
  }
}

/**
 * Get all form submissions (for demonstration purposes)
 * 
 * TODO: Replace with actual backend API integration
 * 
 * @param formType The type of form submissions to retrieve
 * @returns Array of form submissions
 */
export function getFormSubmissions(formType: 'contact' | 'demo' | 'earlyAdopter'): any[] {
  try {
    return JSON.parse(localStorage.getItem(`${formType}Submissions`) || '[]');
  } catch (error) {
    console.error('Error retrieving submissions:', error);
    return [];
  }
}
