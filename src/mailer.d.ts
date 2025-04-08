
export interface MailerMultiPartContent {
    html: string;
    textContent: string;
    attachments: unknown[]; // needs to match SendMailProps from chums-local-modules/lib/mailer.ts (see nodemailer/lib/mailer/index.js)
}
export type MailerReportContent = MailerMultiPartContent|string;
