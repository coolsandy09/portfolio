import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Validate email format
function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // ── Validation ──
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields (name, email, message) are required." },
                { status: 400 }
            );
        }

        if (typeof name !== "string" || name.trim().length < 2) {
            return NextResponse.json(
                { error: "Name must be at least 2 characters." },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        if (typeof message !== "string" || message.trim().length < 10) {
            return NextResponse.json(
                { error: "Message must be at least 10 characters." },
                { status: 400 }
            );
        }

        // ── Send Email via Nodemailer ──
        // Configure these environment variables in your .env.local file:
        //   SMTP_HOST=smtp.gmail.com
        //   SMTP_PORT=587
        //   SMTP_USER=your-email@gmail.com
        //   SMTP_PASS=your-app-password
        //   CONTACT_TO_EMAIL=sandeepsah2201@gmail.com

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const toEmail = process.env.CONTACT_TO_EMAIL || "sandeepsah2201@gmail.com";

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            to: toEmail,
            replyTo: email,
            subject: `Portfolio Contact: ${name.trim()}`,
            text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 16px;">
                    <h2 style="color: #22d3ee; margin-bottom: 24px; font-size: 20px;">New Portfolio Contact Message</h2>
                    <div style="background: #1e293b; padding: 20px; border-radius: 12px; margin-bottom: 16px;">
                        <p style="margin: 0 0 8px 0;"><strong style="color: #94a3b8;">Name:</strong> ${name.trim()}</p>
                        <p style="margin: 0 0 8px 0;"><strong style="color: #94a3b8;">Email:</strong> <a href="mailto:${email.trim()}" style="color: #22d3ee;">${email.trim()}</a></p>
                    </div>
                    <div style="background: #1e293b; padding: 20px; border-radius: 12px;">
                        <p style="margin: 0 0 8px 0;"><strong style="color: #94a3b8;">Message:</strong></p>
                        <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message.trim()}</p>
                    </div>
                    <p style="color: #64748b; font-size: 12px; margin-top: 24px; text-align: center;">
                        Sent from your portfolio contact form
                    </p>
                </div>
            `,
        });

        return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
