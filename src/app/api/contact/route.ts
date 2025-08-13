import { EmailClient } from "@azure/communication-email";
import { NextRequest, NextResponse } from "next/server";
import { validateCSRFTokenFromJSON } from "@/lib/security/csrf";

// Validate required environment variables
const requiredEnvVars = {
  AZURE_COMMUNICATION_CONNECTION_STRING: process.env.AZURE_COMMUNICATION_CONNECTION_STRING,
  AZURE_EMAIL_SENDER_ADDRESS: process.env.AZURE_EMAIL_SENDER_ADDRESS,
  RECIPIENT_EMAIL_ADDRESS: process.env.RECIPIENT_EMAIL_ADDRESS,
};

// Check for missing environment variables
const missingEnvVars = Object.entries(requiredEnvVars)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars.join(', '));
}

// Initialize the email client only if connection string is available
const emailClient = process.env.AZURE_COMMUNICATION_CONNECTION_STRING 
  ? new EmailClient(process.env.AZURE_COMMUNICATION_CONNECTION_STRING)
  : null;

export async function POST(request: NextRequest) {
  // Check if email client is properly initialized
  if (!emailClient) {
    return NextResponse.json(
      { 
        success: false, 
        message: "Email service is not properly configured. Please check environment variables." 
      },
      { status: 503 }
    );
  }

  try {
    const body = await request.json() as Record<string, any>;
    
    // Validate CSRF token
    const csrfValidation = await validateCSRFTokenFromJSON(request, body);
    if (!csrfValidation.valid) {
      return NextResponse.json(
        { 
          success: false, 
          message: "CSRF validation failed. Please refresh the page and try again.",
          error: csrfValidation.reason
        },
        { status: 403 }
      );
    }

    const { fullName, email, company, phone, subject, message } = body as {
      fullName: string;
      email: string;
      company: string;
      phone: string;
      subject: string;
      message: string;
    };

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Missing required fields" 
        },
        { status: 400 }
      );
    }

    // Create the email message
    const emailMessage = {
      senderAddress: process.env.AZURE_EMAIL_SENDER_ADDRESS!,
      content: {
        subject: `New Contact Form Submission: ${subject}`,
        plainText: `
          Name: ${fullName}
          Email: ${email}
          Company: ${company || 'Not provided'}
          Phone: ${phone || 'Not provided'}
          Subject: ${subject}
          
          Message:
          ${message}
        `,
      },
      recipients: {
        to: [
          {
            address: process.env.RECIPIENT_EMAIL_ADDRESS!,
            displayName: "MyGETS Support",
          },
        ],
      },
    };

    // Send the email
    const poller = await emailClient.beginSend(emailMessage);
    const result = await poller.pollUntilDone();

    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully",
      messageId: result.id 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send email";
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage 
      },
      { status: 500 }
    );
  }
}