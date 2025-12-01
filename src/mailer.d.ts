
export interface MailerMultiPartContent {
    html: string;
    textContent: string;
    attachments: unknown[]; // needs to match SendMailProps from chums-local-modules/lib/mailer.ts (see nodemailer/lib/mailer/index.d.ts)
}
export type MailerReportContent = MailerMultiPartContent|string;
