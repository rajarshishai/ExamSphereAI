import nodemailer from 'nodemailer';

interface EmailResult {
  sent: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Creates and configures the Nodemailer transporter.
 * Supports Gmail SMTP (with App Password), custom SMTP, or development fallback.
 */
const getTransporter = () => {
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.SMTP_PASSWORD;
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    },
    tls: {
      rejectUnauthorized: false // Helps in local dev environments
    }
  });
};

/**
 * Dispatches an OTP verification code email to a student or administrator.
 */
export const sendOtpEmail = async (
  recipientEmail: string,
  otpCode: string,
  recipientName?: string
): Promise<EmailResult> => {
  const transporter = getTransporter();

  if (!transporter) {
    console.warn(
      `[Email Service] SMTP credentials (SMTP_USER & SMTP_PASS) not configured in Backend/.env. Email not dispatched to ${recipientEmail}. Code: ${otpCode}`
    );
    return {
      sent: false,
      error: 'SMTP credentials missing in Backend/.env'
    };
  }

  const senderEmail = process.env.SMTP_USER || 'no-reply@examsphere.ai';
  const senderName = process.env.EMAIL_FROM_NAME || 'ExamSphere AI Authentication';
  const greetingName = recipientName || recipientEmail.split('@')[0];

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ExamSphere AI Verification Code</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 15px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="560px" border="0" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
                
                <!-- Header Banner -->
                <tr>
                  <td style="background: linear-gradient(135deg, #172F61 0%, #315FEA 100%); padding: 32px 30px; text-align: center;">
                    <div style="display: inline-block; width: 44px; height: 44px; line-height: 44px; background: rgba(255,255,255,0.2); border-radius: 12px; font-size: 22px; color: #ffffff; margin-bottom: 8px;">
                      ⚡
                    </div>
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">ExamSphere AI</h1>
                    <p style="color: #bfdbfe; margin: 4px 0 0 0; font-size: 13px; font-weight: 500;">AI-Powered Universal Examination Preparation</p>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 36px 36px 28px 36px;">
                    <h2 style="color: #0f172a; margin: 0 0 12px 0; font-size: 19px; font-weight: 700;">Account Verification Code</h2>
                    <p style="color: #475569; font-size: 14px; line-height: 1.6; margin: 0 0 24px 0;">
                      Hello <strong>${greetingName}</strong>,<br>
                      Use the following one-time verification code to securely authenticate your ExamSphere AI account:
                    </p>

                    <!-- OTP Display Box -->
                    <div style="background-color: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 16px; padding: 22px; text-align: center; margin-bottom: 24px;">
                      <div style="font-size: 36px; font-weight: 900; letter-spacing: 10px; color: #172F61; font-family: monospace;">
                        ${otpCode}
                      </div>
                      <p style="color: #64748b; font-size: 12px; margin: 8px 0 0 0; font-weight: 600;">
                        ⏱️ Valid for 10 minutes. Do not share this code.
                      </p>
                    </div>

                    <p style="color: #64748b; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                      If you did not initiate this request, your account is still secure — simply ignore this message.
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 20px 36px; border-top: 1px solid #e2e8f0; text-align: center;">
                    <p style="color: #94a3b8; font-size: 11px; margin: 0;">
                      &copy; ${new Date().getFullYear()} ExamSphere AI. Universal Competitive Examination Platform.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"${senderName}" <${senderEmail}>`,
      to: recipientEmail,
      subject: `Your ExamSphere AI Verification Code: ${otpCode}`,
      text: `Your ExamSphere AI verification code is ${otpCode}. It is valid for 10 minutes. Please do not share it with anyone.`,
      html: htmlContent
    });

    console.log(`✓ Verification code email successfully delivered to ${recipientEmail} (ID: ${info.messageId})`);
    return {
      sent: true,
      messageId: info.messageId
    };
  } catch (error: any) {
    console.error(`❌ Failed to send verification email to ${recipientEmail}:`, error?.message || error);
    return {
      sent: false,
      error: error?.message || 'Failed to dispatch email'
    };
  }
};

/**
 * Dispatches a password reset email.
 */
export const sendPasswordResetEmail = async (
  recipientEmail: string,
  otpCode: string,
  recipientName?: string
): Promise<EmailResult> => {
  const transporter = getTransporter();

  if (!transporter) {
    console.warn(
      `[Email Service] SMTP credentials not configured. Password reset code for ${recipientEmail}: ${otpCode}`
    );
    return {
      sent: false,
      error: 'SMTP credentials missing in Backend/.env'
    };
  }

  const senderEmail = process.env.SMTP_USER || 'no-reply@examsphere.ai';
  const senderName = process.env.EMAIL_FROM_NAME || 'ExamSphere AI Security';
  const greetingName = recipientName || recipientEmail.split('@')[0];

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset - ExamSphere AI</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 15px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="560px" border="0" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
                <tr>
                  <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 30px; text-align: center;">
                    <div style="display: inline-block; width: 44px; height: 44px; line-height: 44px; background: rgba(239, 68, 68, 0.2); border-radius: 12px; font-size: 22px; color: #f87171; margin-bottom: 8px;">
                      🔒
                    </div>
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800;">ExamSphere AI Security</h1>
                    <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 13px;">Password Reset Authorization</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 36px 36px 28px 36px;">
                    <h2 style="color: #0f172a; margin: 0 0 12px 0; font-size: 19px; font-weight: 700;">Password Recovery Code</h2>
                    <p style="color: #475569; font-size: 14px; line-height: 1.6; margin: 0 0 24px 0;">
                      Hello <strong>${greetingName}</strong>,<br>
                      A password reset was requested for your account. Enter the 6-digit recovery code below:
                    </p>
                    <div style="background-color: #fef2f2; border: 2px dashed #fca5a5; border-radius: 16px; padding: 22px; text-align: center; margin-bottom: 24px;">
                      <div style="font-size: 36px; font-weight: 900; letter-spacing: 10px; color: #b91c1c; font-family: monospace;">
                        ${otpCode}
                      </div>
                      <p style="color: #ef4444; font-size: 12px; margin: 8px 0 0 0; font-weight: 600;">
                        ⏱️ Expires in 10 minutes.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #f8fafc; padding: 20px 36px; border-top: 1px solid #e2e8f0; text-align: center;">
                    <p style="color: #94a3b8; font-size: 11px; margin: 0;">
                      &copy; ${new Date().getFullYear()} ExamSphere AI. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"${senderName}" <${senderEmail}>`,
      to: recipientEmail,
      subject: `Reset Your ExamSphere AI Password - Code: ${otpCode}`,
      text: `Your password reset code is ${otpCode}. It expires in 10 minutes.`,
      html: htmlContent
    });

    console.log(`✓ Password reset email delivered to ${recipientEmail} (ID: ${info.messageId})`);
    return {
      sent: true,
      messageId: info.messageId
    };
  } catch (error: any) {
    console.error(`❌ Failed to send password reset email to ${recipientEmail}:`, error?.message || error);
    return {
      sent: false,
      error: error?.message || 'Failed to dispatch reset email'
    };
  }
};
