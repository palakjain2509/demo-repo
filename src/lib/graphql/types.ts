/**
 * GraphQL Schema Types for MyGETS
 * 
 * This file defines TypeScript interfaces that mirror the GraphQL schema.
 * These types are used for frontend development and will be replaced with
 * actual GraphQL schema integration when the backend is implemented.
 * 
 * TODO: Replace with actual GraphQL schema when backend is available.
 */

// Base Types
export interface User {
  id: string;
  name: string;
  email: string;
  organization: Organization;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface Organization {
  id: string;
  name: string;
  industry: string;
  size: string;
  country: string;
  users: User[];
  createdAt: string;
  updatedAt: string;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  PROCUREMENT_LEAD = 'PROCUREMENT_LEAD',
  BUSINESS_DEVELOPMENT = 'BUSINESS_DEVELOPMENT',
  EXECUTIVE = 'EXECUTIVE',
  ANALYST = 'ANALYST',
  VIEWER = 'VIEWER'
}

// Form Submission Types
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  status: SubmissionStatus;
  createdAt: string;
  updatedAt: string;
}

export interface DemoRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  phoneNumber?: string;
  preferredDate?: string;
  preferredTime?: string;
  additionalInfo?: string;
  status: SubmissionStatus;
  createdAt: string;
  updatedAt: string;
}

export interface EarlyAdopterApplication {
  id: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  companySize: string;
  industry: string;
  currentProcurementSystem?: string;
  reasonForInterest: string;
  implementationTimeframe: string;
  additionalInfo?: string;
  status: ApplicationStatus;
  createdAt: string;
  updatedAt: string;
}

export enum SubmissionStatus {
  PENDING = 'PENDING',
  REVIEWED = 'REVIEWED',
  CONTACTED = 'CONTACTED',
  COMPLETED = 'COMPLETED',
  ARCHIVED = 'ARCHIVED'
}

export enum ApplicationStatus {
  PENDING = 'PENDING',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  WAITLISTED = 'WAITLISTED'
}

// Input Types (for mutations)
export interface ContactFormInput {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface DemoRequestInput {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  phoneNumber?: string;
  preferredDate?: string;
  preferredTime?: string;
  additionalInfo?: string;
}

export interface EarlyAdopterApplicationInput {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  companySize: string;
  industry: string;
  currentProcurementSystem?: string;
  reasonForInterest: string;
  implementationTimeframe: string;
  additionalInfo?: string;
}

// Query Response Types
export interface ContactSubmissionsResponse {
  submissions: ContactSubmission[];
  totalCount: number;
}

export interface DemoRequestsResponse {
  requests: DemoRequest[];
  totalCount: number;
}

export interface EarlyAdopterApplicationsResponse {
  applications: EarlyAdopterApplication[];
  totalCount: number;
}

// Mutation Response Types
export interface SubmissionResponse {
  success: boolean;
  message: string;
  submission?: ContactSubmission | DemoRequest | EarlyAdopterApplication;
  errors?: string[];
}
