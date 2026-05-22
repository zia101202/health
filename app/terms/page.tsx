"use client";

import React from "react";
import Link from "next/link";
import { Hanken_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function TermsPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={`${hankenGrotesk.className} flex min-h-screen flex-col bg-[#f4f4f5] outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2`}
    >
      <div className="relative bg-black text-white">
        <div className="h-[100px] lg:h-[120px]">
          <Navbar />
        </div>
      </div>

      <div
        className={`${inter.className} flex flex-1 flex-col bg-[hsla(225,83%,56%,0.08)] px-4 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12`}
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="w-full rounded-[30px] border border-neutral-200/80 bg-white px-6 py-10 shadow-[0_10px_40px_rgba(17,24,39,0.08)] md:px-12 md:py-14">
            <div className="mb-10 flex flex-col gap-6 border-b border-neutral-200/90 pb-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[15px] font-normal text-[hsla(225,83%,56%,1)] transition-opacity hover:opacity-80 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsla(225,83%,56%,1)]"
              >
                <span className="text-[1em] leading-none" aria-hidden>
                  ←
                </span>
                Back to home
              </Link>
            </div>

            <h1
              className={`${hankenGrotesk.className} text-[34px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#101926] md:text-[42px]`}
            >
              Terms of Use{" "}
              <span className="text-[hsla(225,83%,56%,1)]">&amp;</span> Privacy
              Policy
            </h1>
            <p className="mt-4 inline-flex rounded-full bg-[hsla(225,83%,56%,0.1)] px-4 py-1.5 text-[14px] font-medium text-[hsla(225,83%,56%,1)] md:text-[15px]">
              Effective date: January 2, 2026
            </p>

            <div className="mt-10 max-w-none space-y-6 text-[16px] leading-relaxed text-neutral-700 [&_strong]:font-semibold [&_strong]:text-[#101926]">
              <p>
                Conzultos ("we," "our," or "the Platform") provides a digital
                marketplace connecting U.S. licensed healthcare professionals
                with individuals and organizations worldwide seeking ethical,
                non-clinical medical guidance.
              </p>
              <p>
                By accessing or using Conzultos, you agree to the following
                Terms of Use and Privacy Policy.
              </p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                1. Introduction and Definitions
              </h2>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                What Is Conzultos?
              </h3>
              <p>
                Conzultos is a medical advisory platform that facilitates
                non-clinical, educational, and informational medical guidance
                between licensed healthcare professionals ("Consultants") and
                users ("Clients").
              </p>
              <p>
                Conzultos does not provide medical treatment, diagnosis, or
                emergency care and does not establish a physician–patient
                relationship.
              </p>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                Platform Users
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Consultants:</strong> U.S. licensed physicians,
                  specialists, and qualified healthcare professionals offering
                  non-clinical advisory services.
                </li>
                <li>
                  <strong>Clients:</strong> Individuals or organizations seeking
                  professional medical guidance for informational purposes only.
                </li>
              </ul>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                2. Services and Limitations
              </h2>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                Advisory Services Description
              </h3>
              <p>
                Conzultos facilitates advisory sessions in which Consultants
                may:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Share professional opinions</li>
                <li>Provide medical education and general guidance</li>
                <li>Answer non-urgent health-related questions</li>
              </ul>
              <p>
                All guidance is based solely on information provided by the
                Client.
              </p>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                Services Not Provided
              </h3>
              <p>Conzultos does not support or allow:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prescriptions or medication management</li>
                <li>Clinical treatment plans</li>
                <li>Physical examinations or procedures</li>
                <li>Emergency or urgent medical care</li>
              </ul>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                No Physician–Patient Relationship
              </h3>
              <p>
                Use of the Platform does not create a physician–patient
                relationship between Consultants and Clients.
              </p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                3. HIPAA and Data Use Notice
              </h2>
              <p>
                Conzultos is not a HIPAA-covered entity. Users acknowledge and
                accept the risks associated with sharing information online.
              </p>
              <p>
                Clients should not upload highly sensitive information unless
                they understand and accept these risks.
              </p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                4. Medical Liability and Platform Role
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consultants act as independent professionals.</li>
                <li>
                  Conzultos functions solely as a technology intermediary.
                </li>
                <li>
                  Conzultos is not responsible for medical decisions,
                  interpretations, or outcomes arising from advisory sessions.
                </li>
                <li>
                  Consultants are solely responsible for ensuring their guidance
                  complies with applicable laws and professional standards.
                </li>
              </ul>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                5. User Responsibilities
              </h2>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                Consultant Responsibilities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain valid and active professional licensure</li>
                <li>Provide evidence-based, ethical, non-clinical guidance</li>
                <li>Operate strictly within advisory scope</li>
              </ul>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                Client Responsibilities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use the Platform only for non-urgent guidance</li>
                <li>Seek in-person or emergency care when appropriate</li>
              </ul>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                Appropriate Platform Use
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain professional and respectful conduct</li>
                <li>Do not arrange off-platform consultations or payments</li>
              </ul>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                6. Payments and Transactions
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consultants set their own advisory rates.</li>
                <li>Clients purchase advisory time blocks.</li>
                <li>Payments are processed securely via Stripe.</li>
                <li>Conzultos does not store financial information.</li>
                <li>Advisory time blocks expire after 12 months.</li>
                <li>
                  No refunds for unused time or differences in expectations.
                </li>
                <li>Platform fees are disclosed at checkout.</li>
              </ul>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                7. Data Storage and Privacy
              </h2>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                Secure Storage
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uploaded documents and messages are encrypted.</li>
                <li>
                  Access is limited to the Client and assigned Consultant.
                </li>
              </ul>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                Data Retention
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Data is retained only as necessary for services and legal
                  compliance.
                </li>
                <li>Users may request deletion, subject to applicable laws.</li>
              </ul>

              <h3
                className={`${hankenGrotesk.className} text-xl font-semibold tracking-[-0.01em] text-[#101926] mt-6 mb-2`}
              >
                Limitation of Liability
              </h3>
              <p>
                While reasonable security measures are implemented, Conzultos is
                not liable for unauthorized access beyond its control.
              </p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                8. Jurisdiction, Arbitration, and Liability
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Governed by U.S. law.</li>
                <li>
                  Disputes resolved through binding arbitration in the U.S.
                </li>
                <li>No class actions permitted.</li>
                <li>
                  Users agree to indemnify Conzultos against misuse or
                  negligence.
                </li>
              </ul>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                9. Conduct, Suspension, and Termination
              </h2>
              <p>Accounts may be suspended or terminated for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fraud or misuse</li>
                <li>Regulatory risk</li>
                <li>Repeated complaints</li>
                <li>Violation of these Terms</li>
              </ul>
              <p>No refunds upon termination.</p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                10. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Conzultos branding and platform content are proprietary.
                </li>
                <li>Users retain ownership of personal content.</li>
                <li>
                  Users grant Conzultos a license to use anonymized data for
                  platform improvement.
                </li>
              </ul>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                11. Eligibility
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users must be 18 years or older.</li>
                <li>Consultants must pass credential verification.</li>
                <li>Access may be denied if eligibility is not met.</li>
              </ul>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                12. Third-Party Services
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Conzultos integrates third-party services (e.g., Stripe).
                </li>
                <li>Users must comply with third-party terms.</li>
                <li>Conzultos is not responsible for third-party practices.</li>
              </ul>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                13. Communications
              </h2>
              <p>
                Users consent to receive electronic communications. Electronic
                records and signatures are legally binding.
              </p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                14. Cookies and Tracking
              </h2>
              <p>
                Cookies improve user experience and analytics. No sensitive
                medical data is stored in cookies.
              </p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                15. Minors
              </h2>
              <p>
                Conzultos does not knowingly collect information from users
                under 18.
              </p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                16. International Users
              </h2>
              <p>
                Data may be processed and stored in the U.S. International users
                consent to cross-border data transfer.
              </p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                17. Severability
              </h2>
              <p>
                If any provision is invalid, the remainder remains in effect.
              </p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                18. Entire Agreement
              </h2>
              <p>
                These Terms constitute the entire agreement between users and
                Conzultos.
              </p>

              <h2
                className={`${hankenGrotesk.className} text-2xl font-semibold tracking-[-0.02em] text-[#101926] mt-10 mb-4`}
              >
                19. Modifications
              </h2>
              <p>Conzultos may update these Terms. Continued use constitutes acceptance.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
