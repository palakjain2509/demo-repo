import { NextRequest, NextResponse } from 'next/server';
import { EmailClient } from '@azure/communication-email';
import { validateCSRFTokenFromJSON } from '@/lib/security/csrf';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as Record<string, any>;
    
    // Validate CSRF token
    const csrfValidation = await validateCSRFTokenFromJSON(request, data);
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

    const { fullName, email, company, jobTitle, phone, specificInterests } = data as {
      fullName: string;
      email: string;
      company: string;
      jobTitle: string;
      phone: string;
      specificInterests: string;
    };

    // Initialize the email client
    const connectionString = process.env.AZURE_COMMUNICATION_CONNECTION_STRING;
    const senderAddress = process.env.AZURE_EMAIL_SENDER_ADDRESS;
    const recipientAddress = process.env.RECIPIENT_EMAIL_ADDRESS;
    
    // Validate required environment variables
    if (!connectionString) {
        throw new Error('Azure Communication Services connection string is not configured');
      }
      if (!senderAddress) {
        throw new Error('Azure email sender address is not configured');
      }
      if (!recipientAddress) {
        throw new Error('Demo request recipient email is not configured');
      }
  

    const emailClient = new EmailClient(connectionString);

    // Prepare the email message
    const message = {
        senderAddress: senderAddress,
      content: {
        subject: `New Demo Request from ${fullName}`,
        html: `
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Job Title:</strong> ${jobTitle || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Specific Interests:</strong> ${specificInterests || 'Not provided'}</p>
        `,
      },
      recipients: {
        to: [{ address: recipientAddress }],
      },
    };

    // Send the email
    const poller = await emailClient.beginSend(message);
    const result = await poller.pollUntilDone();

    return NextResponse.json({ 
      success: true, 
      message: 'Demo request submitted successfully',
      messageId: result.id 
    });
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process demo request' 
      },
      { status: 500 }
    );
  }
}