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

function H2({ children, tightTop }: { children: React.ReactNode; tightTop?: boolean }) {
  return (
    <h2
      className={`${hankenGrotesk.className} ${
        tightTop ? "mt-6" : "mt-10"
      } scroll-mt-28 text-2xl font-semibold tracking-[-0.02em] text-[#101926] mb-4`}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className={`${hankenGrotesk.className} mt-6 mb-2 text-xl font-semibold tracking-[-0.01em] text-[#101926]`}
    >
      {children}
    </h3>
  );
}

export default function WaiverPage() {
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
              Waiver of{" "}
              <span className="text-[hsla(225,83%,56%,1)]">Liability</span>
            </h1>
            <p className="mt-4 inline-flex rounded-full bg-[hsla(225,83%,56%,0.1)] px-4 py-1.5 text-[14px] font-medium text-[hsla(225,83%,56%,1)] md:text-[15px]">
              Preguntamed Incorporated., a Delaware C-Corporation
            </p>

            <div className="mt-10 max-w-none space-y-6 text-[16px] leading-relaxed text-neutral-700 [&_strong]:font-semibold [&_strong]:text-[#101926]">
              <H2 tightTop>INTRODUCTION</H2>
              <p>
                This Comprehensive Liability Waiver, Release of Claims, and Assumption of Risk Agreement (this{" "}
                <strong>&quot;Agreement&quot;</strong>) is made and entered into by and between Preguntamed Incorporated., a Delaware
                C-Corporation organized under the laws of the State of Delaware and registered to do business in the State of
                Texas, doing business as Conzultos (&quot;Conzultos,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;), and each individual or entity that registers for, accesses, or uses the Conzultos platform in
                any capacity, whether as a Client seeking non-clinical medical advisory services or as a Consultant providing such
                services (each, a &quot;User,&quot; &quot;you,&quot; or &quot;your&quot;).
              </p>
              <p>
                This Agreement governs the rights, obligations, and responsibilities of all Users with respect to the
                non-clinical advisory services facilitated through the Conzultos platform and is designed to clearly establish
                the advisory, not clinical, nature of all interactions on the platform, to allocate risk among the parties, and
                to ensure enforceability across all fifty United States, the District of Columbia, and U.S. territories. Each
                User should read this Agreement in its entirety before accepting. By accepting this Agreement, each User
                acknowledges that they have had the opportunity to seek independent legal counsel and that they are entering
                into this Agreement voluntarily and with full understanding of its terms.
              </p>

              <H2>RECITALS</H2>
              <p>
                <strong>WHEREAS,</strong> Conzultos operates a SaaS marketplace platform that connects U.S.-licensed physicians
                and qualified healthcare professionals (&quot;Consultants&quot; or &quot;Advisors&quot;) with individuals,
                families, and organizations (&quot;Clients&quot;) seeking non-clinical, informational, and educational medical
                advisory services;
              </p>
              <p>
                <strong>WHEREAS,</strong> the services facilitated through the Conzultos platform are strictly limited to
                non-clinical advisory and informational guidance, and expressly exclude any form of medical diagnosis,
                treatment, prescribing, clinical care, or emergency medical services;
              </p>
              <p>
                <strong>WHEREAS,</strong> Conzultos serves solely as a technology intermediary and does not itself render medical
                advice, practice medicine, or exercise any control or supervision over the professional judgment of Consultants;
              </p>
              <p>
                <strong>WHEREAS,</strong> all advisory sessions are coordinated and scheduled through the Conzultos platform;
                however, the actual sessions are conducted remotely using the Consultant&apos;s preferred third-party
                communication method (such as Microsoft Teams, Zoom, telephone, or other video or audio conferencing tools
                selected by the Consultant), as Conzultos does not currently operate an integrated audio or video conferencing
                system within the Platform;
              </p>
              <p>
                <strong>NOW, THEREFORE,</strong> in consideration of the mutual promises herein, the receipt and sufficiency of
                which are hereby acknowledged, and intending to be legally bound, the parties agree as follows:
              </p>

              <H2>SECTION 1: DEFINITIONS</H2>
              <p>For purposes of this Agreement, the following terms shall have the meanings ascribed below:</p>
              <p>
                <strong>1.1 &quot;Advisory Services&quot;</strong> means non-clinical, non-diagnostic, informational, and
                educational guidance provided by a Consultant through the Platform. Advisory Services may include, without
                limitation: sharing professional opinions, providing general medical education, answering non-urgent
                health-related questions, offering career or practice management guidance, and providing strategic medical insight
                for business or legal matters. Advisory Services expressly exclude any and all Clinical Services.
              </p>
              <p>
                <strong>1.2 &quot;Clinical Services&quot;</strong> means any service that constitutes the practice of medicine
                under applicable federal or state law, including but not limited to: medical diagnosis, prescription of
                medication, development of treatment plans, physical examination, laboratory or diagnostic ordering, emergency
                care, mental health therapy or counseling, and any activity that would give rise to a physician-patient
                relationship or require malpractice insurance coverage.
              </p>
              <p>
                <strong>1.3 &quot;Client&quot;</strong> means any individual, family member, legal representative, attorney,
                consultant, analyst, or organizational representative who books, attends, or otherwise receives Advisory
                Services through the Platform.
              </p>
              <p>
                <strong>1.4 &quot;Consultant&quot; or &quot;Advisor&quot;</strong> means a U.S.-licensed physician or qualified
                healthcare professional who has been credentialed by Conzultos and provides Advisory Services through the
                Platform as an independent contractor.
              </p>
              <p>
                <strong>1.5 &quot;Platform&quot;</strong> means the Conzultos website (
                <Link href="https://www.conzultos.com" target="_blank" rel="noopener noreferrer" className="text-[hsla(225,83%,56%,1)] hover:underline">
                  www.conzultos.com
                </Link>
                ), all associated mobile applications, and any related software, tools, APIs, or technologies operated by
                Conzultos.
              </p>
              <p>
                <strong>1.6 &quot;Released Parties&quot;</strong> means, collectively, Conzultos (Preguntamed Incorporated.), its
                parents, subsidiaries, affiliates, officers, directors, employees, agents, successors, assigns, independent
                contractors, Consultants, and each of their respective heirs, executors, administrators, and legal
                representatives.
              </p>
              <p>
                <strong>1.7 &quot;Session&quot;</strong> means a scheduled advisory consultation coordinated through the Platform
                and conducted remotely using the Consultant&apos;s preferred third-party communication method, such as Microsoft
                Teams, Zoom, telephone, or other audio or video conferencing tools. The Platform facilitates the scheduling,
                payment, and coordination of Sessions but does not provide the communication infrastructure through which
                Sessions are conducted. Session duration and format are determined by the Consultant&apos;s posted availability
                and service terms.
              </p>

              <H2>SECTION 2: NATURE AND SCOPE OF SERVICES</H2>
              <H3>2.1 Strictly Non-Clinical Advisory</H3>
              <p>
                All services facilitated through the Conzultos Platform are strictly non-clinical in nature. Consultants provide
                informational and educational advisory guidance only. Under no circumstances does any interaction through the
                Platform constitute clinical care, medical treatment, or the practice of medicine as defined under the laws of
                any U.S. state or territory.
              </p>
              <H3>2.2 Prohibited Activities</H3>
              <p>The following activities are expressly prohibited on the Platform and shall not be provided, requested, or facilitated through any Session:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Medical diagnosis or differential diagnosis of any condition</li>
                <li>Prescription, recommendation, adjustment, or management of any medication, drug, device, or supplement</li>
                <li>Development or modification of clinical treatment plans</li>
                <li>Physical examination, telemedicine examination, or any hands-on clinical assessment</li>
                <li>Emergency medical advice, triage, or crisis intervention</li>
                <li>Mental health therapy, psychotherapy, or psychiatric counseling</li>
                <li>Ordering, interpreting, or acting upon laboratory tests, imaging, or diagnostic studies</li>
                <li>Any activity that would trigger obligations under state medical practice acts, state telehealth or telemedicine statutes, or HIPAA</li>
                <li>Any activity that would establish, continue, or imply a physician-patient relationship</li>
              </ul>
              <H3>2.3 Acknowledgment of Non-Clinical Nature</H3>
              <p>
                Each User expressly acknowledges and agrees that all Advisory Services are general, informational, and
                educational in character and are not a substitute for professional medical advice, diagnosis, or treatment from
                a qualified healthcare provider. Users further acknowledge that reliance on any information provided during a
                Session is solely at the User&apos;s own risk.
              </p>

              <H2>SECTION 3: NO PHYSICIAN-PATIENT RELATIONSHIP</H2>
              <H3>3.1 No Relationship Established</H3>
              <p>
                No physician-patient relationship, therapist-patient relationship, or other clinical or fiduciary healthcare
                relationship of any kind is created, implied, or established between any Consultant and any Client through the
                use of the Platform, the booking of a Session, or the receipt of Advisory Services. This applies regardless of
                the nature or content of any communication exchanged during a Session.
              </p>
              <H3>3.2 No Duty of Care</H3>
              <p>
                Because no physician-patient relationship exists, no Consultant owes any duty of care, duty of follow-up, duty
                to refer, or any other clinical duty to any Client arising from the use of the Platform. No Consultant assumes
                responsibility for the ongoing healthcare needs of any Client.
              </p>
              <H3>3.3 Multi-State Applicability</H3>
              <p>
                This Section is intended to apply in all fifty (50) U.S. states, the District of Columbia, and all U.S.
                territories. Users acknowledge that the formation of a physician-patient relationship is governed by the laws
                of the state in which the Client is located at the time of the Session, and that the structure of the
                Platform&apos;s Advisory Services is specifically designed to avoid triggering the formation of such a
                relationship under any state&apos;s law. In any state where a physician-patient relationship may be deemed to
                arise by operation of law notwithstanding this Agreement, both parties agree to the maximum limitation of
                liability and waiver of claims permitted under such state&apos;s law.
              </p>

              <H2>SECTION 4: PLATFORM ROLE AND TECHNOLOGY INTERMEDIARY STATUS</H2>
              <H3>4.1 Technology Intermediary Only</H3>
              <p>
                Conzultos operates solely as a technology intermediary and marketplace facilitator. Conzultos does not provide
                medical advice, does not practice medicine, does not employ Consultants in a clinical capacity, and does not
                control, direct, supervise, or influence the professional opinions, judgment, or guidance of any Consultant.
                Conzultos&apos;s role is limited to facilitating the connection between Clients and Consultants, processing
                payments, coordinating session scheduling, and providing an internal messaging system for initial coordination.
                Conzultos does not provide, operate, or maintain the audio or video conferencing tools used to conduct
                Sessions. All Sessions are conducted using third-party communication platforms selected by the Consultant (such
                as Microsoft Teams, Zoom, telephone, or other tools), and Conzultos has no control over, and assumes no
                responsibility for, the performance, security, privacy practices, or terms of service of such third-party
                communication platforms.
              </p>
              <H3>4.2 Corporate Practice of Medicine Compliance</H3>
              <p>
                Conzultos does not engage in the corporate practice of medicine as defined under the laws of Texas or any other
                U.S. state that has adopted the Corporate Practice of Medicine (&quot;CPOM&quot;) doctrine. All fees collected by
                Conzultos are solely for technology licensing, platform access, administrative services, and payment processing,
                and do not constitute fee-splitting for medical services, payment for clinical care, or compensation for the
                practice of medicine. No portion of any fee paid to Conzultos is remuneration for medical judgment, clinical
                decision-making, or the rendering of healthcare services. Each Consultant exercises fully independent
                professional judgment, and Conzultos neither directs nor influences the substance of any Advisory Services. This
                structure is specifically designed to comply with CPOM restrictions in Texas (Tex. Occ. Code § 165.001 et seq.)
                and in all other states where such doctrines are in effect.
              </p>
              <H3>4.3 No Vicarious Liability</H3>
              <p>
                Users acknowledge and agree that Conzultos shall not be vicariously liable for any act, omission, statement,
                opinion, or guidance of any Consultant. Each Consultant operates as an independent professional and is solely
                responsible for the content and quality of the Advisory Services they provide.
              </p>
              <H3>4.4 No Agency or Employment</H3>
              <p>
                Nothing in this Agreement or in any interaction on the Platform shall be construed to create an
                employer-employee, agency, joint venture, partnership, or franchisor-franchisee relationship between Conzultos
                and any Consultant.
              </p>

              <H2>SECTION 5: INDEPENDENT CONTRACTOR STATUS OF CONSULTANTS</H2>
              <H3>5.1 Independent Contractor Relationship</H3>
              <p>
                All Consultants providing Advisory Services through the Platform are independent contractors and not employees,
                agents, or representatives of Conzultos. Each Consultant exercises full and independent professional judgment in
                the provision of Advisory Services. Conzultos does not control, and expressly disclaims any right to control, the
                manner, method, content, or means by which any Consultant provides Advisory Services.
              </p>
              <H3>5.2 Consultant Autonomy</H3>
              <p>Each Consultant maintains complete autonomy over:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>(a) Their participation on the Platform, including the right to accept or decline any Session</li>
                <li>(b) The rates they set for Advisory Services</li>
                <li>(c) Their availability and scheduling</li>
                <li>(d) The specific advisory criteria and scope of topics they are willing to address</li>
                <li>(e) The content and substance of their professional opinions and guidance</li>
              </ul>
              <H3>5.3 Consultant Responsibilities</H3>
              <p>Each Consultant is solely responsible for:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>(a) Maintaining valid, active, and unrestricted professional licensure in all relevant jurisdictions</li>
                <li>
                  (b) Ensuring that all Advisory Services remain strictly non-clinical and within the scope permitted by this
                  Agreement and the Platform&apos;s Terms of Use
                </li>
                <li>(c) Complying with all applicable federal, state, and local laws, rules, regulations, and professional ethical standards</li>
                <li>
                  (d) Their own tax obligations, including but not limited to self-employment tax, income tax, and any required
                  filings; Consultants are responsible for obtaining IRS Form 1099 directly from their own Stripe account,
                  which is required for payment processing through the Platform
                </li>
                <li>(e) Obtaining and maintaining any insurance coverage they deem necessary or advisable for their advisory activities</li>
              </ul>

              <H2>SECTION 6: CONSULTANT COMPLIANCE AND PLATFORM ENFORCEMENT</H2>
              <H3>6.1 Platform Enforcement Rights</H3>
              <p>
                Conzultos reserves the right to monitor session metadata (including but not limited to session duration,
                frequency, Client feedback, and flagged keywords) for compliance with this Agreement. Conzultos does not monitor
                the content of Sessions in real time but reserves the right to investigate any reported violation. Conzultos may,
                in its sole discretion, immediately suspend or permanently remove any Consultant found to have provided, or
                reasonably believed to have provided, Clinical Services through the Platform.
              </p>
              <H3>6.2 Zero-Tolerance Policy for Clinical Services</H3>
              <p>The provision of Clinical Services through the Platform constitutes a material breach of this Agreement. Upon determination that a Consultant has provided Clinical Services, Conzultos may, without prior notice:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>(a) Immediately terminate the Consultant&apos;s access to the Platform;</li>
                <li>(b) Withhold or forfeit any pending payouts associated with the Session(s) in question;</li>
                <li>(c) Report the conduct to the appropriate state medical board or regulatory authority if required by law or if Conzultos determines in good faith that such reporting is warranted; and</li>
                <li>(d) Pursue any and all remedies available under this Agreement, at law, or in equity.</li>
              </ul>
              <H3>6.3 Mandatory Incident Reporting by Consultants</H3>
              <p>
                Each Consultant agrees to notify Conzultos in writing within twenty-four (24) hours if a Session inadvertently
                crosses into clinical territory, including but not limited to situations where a Client discloses a medical
                emergency, requests a diagnosis or prescription, or where the Consultant believes the boundary between advisory
                and clinical guidance may have been breached. Failure to report such incidents shall constitute a material breach
                of this Agreement.
              </p>
              <H3>6.4 Client Reporting Mechanism</H3>
              <p>
                Clients have the right and are encouraged to report to Conzultos any Session in which they believe Clinical
                Services were provided, including but not limited to the receipt of a diagnosis, prescription recommendation, or
                treatment plan. Reports may be submitted to{" "}
                <a href="mailto:support@conzultos.com" className="text-[hsla(225,83%,56%,1)] hover:underline">support@conzultos.com</a>. Conzultos will investigate all such reports and
                take appropriate enforcement action as warranted.
              </p>

              <H2>SECTION 7: ASSUMPTION OF RISK</H2>
              <H3>7.1 Voluntary Participation</H3>
              <p>
                Each User acknowledges that participation in the Platform and use of Advisory Services is entirely voluntary. No
                User is required to book, attend, or complete any Session.
              </p>
              <H3>7.2 Inherent Risks</H3>
              <p>Each User expressly acknowledges, understands, and voluntarily assumes all risks associated with the use of the Platform and the receipt or provision of Advisory Services, including but not limited to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>(a) The inherent limitations of non-clinical advisory guidance, which is general in nature and may not address the specific clinical circumstances of any individual</li>
                <li>(b) The risk that information exchanged during a Session may be incomplete, inaccurate, misunderstood, or inapplicable to the User&apos;s particular situation</li>
                <li>(c) The risk that a User may rely on advisory information in a manner that leads to adverse health, financial, legal, or personal outcomes</li>
                <li>(d) The limitations of remote communication, including potential technology failures, audio/video quality issues, latency, or disconnection during a Session</li>
                <li>(e) The risk that a Client may delay or forgo necessary clinical care as a result of information obtained during a Session</li>
                <li>(f) The risk that the advisory information may conflict with advice provided by the Client&apos;s personal healthcare providers</li>
                <li>(g) The risks inherent in transmitting personal or health-related information electronically, including potential unauthorized access, interception, or disclosure despite reasonable security measures</li>
                <li>(h) The risk that Consultants, although credentialed, may provide guidance that another qualified professional would disagree with</li>
              </ul>
              <H3>7.3 Express Assumption</H3>
              <p className="font-semibold text-[#101926]">
                BY ACCEPTING THIS AGREEMENT, EACH USER EXPRESSLY AND VOLUNTARILY ASSUMES ALL OF THE FOREGOING RISKS AND ANY OTHER
                RISKS ARISING OUT OF OR RELATED TO THE USE OF THE PLATFORM AND ADVISORY SERVICES, WHETHER OR NOT SUCH RISKS ARE
                SPECIFICALLY IDENTIFIED HEREIN, AND WHETHER SUCH RISKS ARISE FROM THE NEGLIGENCE OR FAULT OF THE RELEASED
                PARTIES OR OTHERWISE.
              </p>

              <H2>SECTION 8: COMPREHENSIVE RELEASE AND WAIVER OF CLAIMS</H2>
              <H3>8.1 General Release</H3>
              <p>
                To the fullest extent permitted by applicable law, each User, on behalf of themselves and their heirs, executors,
                administrators, assigns, successors, agents, and legal representatives, hereby irrevocably and unconditionally
                releases, waives, discharges, and covenants not to sue the Released Parties from and against any and all claims,
                demands, causes of action, suits, judgments, damages, losses, liabilities, costs, and expenses (including
                reasonable attorneys&apos; fees) of any kind or nature, whether known or unknown, suspected or unsuspected,
                disclosed or undisclosed, liquidated or unliquidated, fixed or contingent, that arise out of or relate in any way
                to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>(a) The use of the Platform or any feature, tool, or functionality thereof</li>
                <li>(b) The booking, conduct, content, or outcome of any Session</li>
                <li>(c) Any Advisory Services received from or provided by any Consultant</li>
                <li>(d) Any communication, opinion, statement, or information exchanged through the Platform</li>
                <li>(e) Any decision, action, or inaction taken in reliance on Advisory Services</li>
                <li>(f) Any alleged negligence, gross negligence, error, omission, or professional misconduct by any Consultant or by Conzultos</li>
                <li>(g) Any technology failure, data breach, security incident, or system error</li>
                <li>(h) Any third-party claims arising from the User&apos;s use of Advisory Services</li>
              </ul>
              <H3>8.2 Waiver of Unknown Claims</H3>
              <p>
                Each User expressly waives any and all rights under any statute or common law principle in any jurisdiction
                (including, without limitation, California Civil Code Section 1542 and any analogous provision under the laws of
                any other state) that would otherwise limit the scope of this release to claims that are known or suspected at the
                time of execution. Users acknowledge that this release covers claims that may arise after the date of this
                Agreement and claims of which the User is not currently aware.
              </p>
              <p>
                California Civil Code Section 1542, which is hereby expressly waived, provides: &quot;A general release does not
                extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at
                the time of executing the release and that, if known by him or her, would have materially affected his or her
                settlement with the debtor or released party.&quot; Similar provisions in other states are likewise expressly
                waived.
              </p>
              <H3>8.3 Covenant Not to Sue</H3>
              <p>
                Each User covenants and agrees not to bring any claim, action, or proceeding against any of the Released Parties
                arising out of or relating to any matter covered by this release. If any User brings such a claim in violation
                of this covenant, the User shall be liable for all costs and expenses (including reasonable attorneys&apos;
                fees) incurred by the Released Parties in defending such claim.
              </p>

              <H2>SECTION 9: LIMITATION OF LIABILITY</H2>
              <H3>9.1 Exclusion of Damages</H3>
              <p className="font-semibold uppercase tracking-wide text-[#101926]">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ANY RELEASED PARTY BE LIABLE TO ANY USER FOR
                ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT OF OR RELATING TO
                THIS AGREEMENT, THE PLATFORM, OR ANY ADVISORY SERVICES, REGARDLESS OF THE THEORY OF LIABILITY (WHETHER CONTRACT,
                TORT, STRICT LIABILITY, OR OTHERWISE), AND EVEN IF THE RELEASED PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                DAMAGES.
              </p>
              <H3>9.2 Cap on Direct Damages</H3>
              <p className="font-semibold uppercase tracking-wide text-[#101926]">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE TOTAL AGGREGATE LIABILITY OF ALL RELEASED PARTIES TO ANY
                USER FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO THIS AGREEMENT, THE PLATFORM, OR ANY ADVISORY SERVICES
                SHALL NOT EXCEED THE LESSER OF (I) THE TOTAL FEES ACTUALLY PAID BY THE USER TO CONZULTOS IN THE TWELVE (12) MONTHS
                IMMEDIATELY PRECEDING THE CLAIM, OR (II) FIVE HUNDRED DOLLARS ($500.00).
              </p>
              <H3>9.3 Essential Basis of the Bargain</H3>
              <p>
                The limitations, exclusions, and disclaimers set forth in this Section apply to all claims regardless of whether
                the claim is based on breach of contract, tort (including negligence), breach of warranty, strict liability, or
                any other legal or equitable theory, and shall survive any failure of essential purpose of any limited remedy.
                Each User acknowledges that these limitations are an essential basis of the bargain between the parties and that
                Conzultos would not provide access to the Platform without these limitations.
              </p>
              <H3>9.4 State-Specific Limitations</H3>
              <p>
                Some states do not allow the exclusion or limitation of certain damages. In such states, the liability of the
                Released Parties shall be limited to the fullest extent permitted by the law of such state. Specifically:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  (a) In states that prohibit the limitation of liability for gross negligence or willful misconduct (e.g., certain
                  interpretations under New York, New Jersey, and Connecticut law), this Section shall be construed to limit
                  liability only to the extent that such limitation is not prohibited.
                </li>
                <li>
                  (b) In states that impose specific requirements for enforceable liability waivers (e.g., Montana, Virginia,
                  Louisiana), this Agreement shall be interpreted in accordance with such requirements and enforced to the maximum
                  extent permitted.
                </li>
                <li>
                  (c) Nothing in this Agreement is intended to waive any rights that cannot be waived as a matter of public
                  policy under any applicable state law.
                </li>
              </ul>

              <H2>SECTION 10: INDEMNIFICATION</H2>
              <H3>10.1 Client Indemnification</H3>
              <p>Each Client agrees to defend, indemnify, and hold harmless the Released Parties from and against any and all claims, demands, actions, damages, losses, liabilities, judgments, settlements, costs, and expenses (including reasonable attorneys&apos; fees and court costs) arising out of or relating to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>(a) The Client&apos;s use of the Platform or Advisory Services;</li>
                <li>(b) The Client&apos;s breach of this Agreement or the Terms of Use;</li>
                <li>(c) Any decision, action, or inaction taken by the Client based on Advisory Services;</li>
                <li>(d) Any misrepresentation by the Client regarding the nature or urgency of their inquiry;</li>
                <li>(e) Any claim by a third party arising from the Client&apos;s use of Advisory Services; or</li>
                <li>(f) The Client&apos;s violation of any applicable law or regulation.</li>
              </ul>
              <H3>10.2 Consultant Indemnification</H3>
              <p>Each Consultant agrees to defend, indemnify, and hold harmless Conzultos, its officers, directors, employees, and agents from and against any and all claims, demands, actions, damages, losses, liabilities, judgments, settlements, costs, and expenses (including reasonable attorneys&apos; fees and court costs) arising out of or relating to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>(a) The Consultant&apos;s provision of Advisory Services;</li>
                <li>(b) Any allegation that the Consultant provided Clinical Services through the Platform;</li>
                <li>(c) Any breach of the Consultant&apos;s representations or obligations under this Agreement;</li>
                <li>(d) Any violation of applicable laws, regulations, or professional ethical standards;</li>
                <li>(e) Any claim that the Consultant&apos;s conduct created a physician-patient relationship; or</li>
                <li>(f) Any lapse, restriction, or revocation of the Consultant&apos;s professional licensure.</li>
              </ul>
              <H3>10.3 Indemnification Procedures</H3>
              <p>
                The indemnifying party shall be entitled to control the defense of any covered claim, provided that the
                indemnified party shall have the right to participate in the defense at its own expense. No settlement that
                imposes any obligation or liability on the indemnified party shall be made without such party&apos;s prior written
                consent, which shall not be unreasonably withheld.
              </p>

              <H2>SECTION 11: DISCLAIMERS AND NO WARRANTIES</H2>
              <H3>11.1 &quot;As Is&quot; Disclaimer</H3>
              <p className="font-semibold uppercase tracking-wide text-[#101926]">
                THE PLATFORM AND ALL ADVISORY SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY
                OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, CONZULTOS EXPRESSLY DISCLAIMS
                ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, COMPLETENESS, RELIABILITY, QUALITY, OR SUITABILITY.
              </p>
              <H3>11.2 No Guarantee of Outcomes</H3>
              <p>
                Conzultos makes no representation, warranty, or guarantee regarding the accuracy, completeness, adequacy,
                timeliness, or reliability of any Advisory Services or any information provided through the Platform. Conzultos
                does not warrant that any advisory guidance will achieve any particular result, meet any expectation, or be
                applicable to any specific individual&apos;s circumstances.
              </p>
              <H3>11.3 No Guarantee of Availability</H3>
              <p>
                Conzultos does not guarantee uninterrupted, error-free, or secure access to the Platform or the continuous
                availability of any Consultant. Temporary interruptions in service may occur due to maintenance, updates, system
                failures, or factors beyond Conzultos&apos;s reasonable control.
              </p>

              <H2>SECTION 12: HIPAA, PRIVACY, AND DATA USE ACKNOWLEDGMENTS</H2>
              <H3>12.1 Not a HIPAA-Covered Entity</H3>
              <p>
                Users acknowledge and agree that Conzultos is not a HIPAA-covered entity, a healthcare provider, a health plan, or
                a healthcare clearinghouse as defined under the Health Insurance Portability and Accountability Act of 1996, as
                amended (&quot;HIPAA&quot;). Accordingly, HIPAA privacy and security requirements do not apply to the Platform or
                to Advisory Services.
              </p>
              <H3>12.2 FTC Health Breach Notification Rule Acknowledgment</H3>
              <p>
                Users acknowledge that, although Conzultos is not a HIPAA-covered entity, health-related information collected or
                maintained by the Platform may be subject to the Federal Trade Commission&apos;s Health Breach Notification Rule
                (16 C.F.R. Part 318) (&quot;FTC HBNR&quot;). In the event of a breach of security involving unsecured, individually
                identifiable health information, Conzultos will comply with applicable notification obligations under the FTC HBNR,
                including notifying affected Users and the FTC as required. Users assume the inherent risks associated with
                transmitting health-related information through a non-HIPAA-covered platform, including but not limited to the
                risk that such information may be subject to different privacy and security standards than those applicable to
                HIPAA-covered entities. Users acknowledge that Conzultos&apos;s compliance obligations with respect to health data
                are governed by the FTC Act (15 U.S.C. § 45) and the FTC HBNR, rather than by HIPAA.
              </p>
              <H3>12.3 Voluntary Disclosure of Health Information</H3>
              <p>
                Any health-related information shared by a Client during a Session is shared voluntarily by the Client for the
                sole purpose of receiving non-clinical advisory guidance. Clients are advised not to share information that they
                consider highly sensitive or that they would not be comfortable sharing in a non-clinical setting. Clients assume
                all risk associated with the voluntary disclosure of personal or health-related information on the Platform.
              </p>
              <H3>12.4 Data Security</H3>
              <p>
                Conzultos implements commercially reasonable security measures to protect User data. However, no electronic
                transmission or storage system is fully secure, and Conzultos cannot guarantee absolute security. Users acknowledge
                and accept the inherent risks of electronic communication.
              </p>

              <H2>SECTION 13: USER RESPONSIBILITIES AND ACKNOWLEDGMENTS</H2>
              <H3>13.1 Client Acknowledgments</H3>
              <p>By accepting this Agreement, each Client acknowledges and agrees that:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>(a) Advisory Services are not a substitute for professional medical advice, diagnosis, or treatment from a licensed healthcare provider</li>
                <li>(b) No physician-patient relationship is established through the Platform</li>
                <li>(c) The Client is solely responsible for all healthcare decisions and for seeking in-person clinical care when appropriate</li>
                <li>(d) The Client will not use the Platform for emergency medical situations and will call 911 or go to the nearest emergency room for any medical emergency</li>
                <li>(e) The Client will provide accurate and complete information during all Sessions</li>
                <li>(f) The Client understands that advisory guidance may vary among qualified professionals and that differences in opinion do not constitute error or malpractice</li>
              </ul>
              <H3>13.2 Consultant Acknowledgments</H3>
              <p>By accepting this Agreement, each Consultant acknowledges and agrees that:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>(a) All services provided through the Platform must remain strictly non-clinical and advisory in nature</li>
                <li>(b) The Consultant will not provide, and will actively refuse to provide, any Clinical Services through the Platform</li>
                <li>(c) If a Session reveals a clinical need, the Consultant will recommend that the Client seek appropriate in-person clinical care and will not attempt to address the clinical issue through the Platform</li>
                <li>(d) The Consultant is solely responsible for ensuring compliance with all applicable laws, regulations, and professional ethical standards</li>
                <li>(e) The Consultant will maintain valid, active, and unrestricted licensure throughout their participation on the Platform</li>
                <li>(f) The Consultant will cooperate with Conzultos in the event of any complaint, claim, or regulatory inquiry related to their use of the Platform</li>
              </ul>
              <H3>13.3 Emergency Session Termination</H3>
              <p>
                If at any point during a Session a Consultant reasonably perceives that the Client is experiencing a medical or
                psychiatric emergency, the Consultant shall have the right and the obligation to immediately terminate the Session
                and direct the Client to call 911 or proceed to the nearest emergency room. Conzultos shall not be liable for any
                consequences arising from the early termination of a Session under this Section, and no refund shall be owed to the
                Client for any Session terminated due to a perceived emergency.
              </p>

              <H2>SECTION 14: SESSION RECORDING AND CONFIDENTIALITY</H2>
              <H3>14.1 Prohibition on Unauthorized Recording</H3>
              <p>
                No User may record, capture, screenshot, transcribe, or otherwise reproduce the audio, video, or content of any
                Session, in whole or in part, without the prior express written consent of both the other party to the Session and
                Conzultos. This prohibition applies regardless of whether the User is located in a one-party or two-party consent
                jurisdiction under applicable state wiretapping and electronic surveillance laws (including but not limited to the
                laws of California, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Pennsylvania, and
                Washington, which generally require the consent of all parties to a recorded communication).
              </p>
              <H3>14.2 Consequences of Unauthorized Recording</H3>
              <p>
                Any unauthorized recording of a Session constitutes a material breach of this Agreement and may result in immediate
                termination of the User&apos;s account, forfeiture of any pending payments, and liability for all damages suffered
                by the other party and by Conzultos as a result of such recording. Conzultos reserves the right to pursue all
                available legal remedies, including injunctive relief, against any User who records a Session without
                authorization.
              </p>
              <H3>14.3 Session Confidentiality</H3>
              <p>
                All communications exchanged during a Session are intended to be confidential as between the Client and the
                Consultant. Users agree not to publicly disclose, publish, or distribute the content of any Session without the
                prior written consent of the other party. Nothing in this Section creates a legal privilege (such as
                attorney-client privilege or physician-patient privilege) with respect to Session communications.
              </p>

              <H2>SECTION 15: ELIGIBILITY AND AGE RESTRICTION</H2>
              <H3>15.1 Minimum Age Requirement</H3>
              <p>
                The Platform is strictly limited to use by adults aged eighteen (18) years or older. By accepting this Agreement,
                each User represents and warrants that they are at least eighteen (18) years of age and are legally competent to
                enter into a binding contract. Minors cannot legally accept a liability waiver or bind themselves to an
                arbitration agreement, and accordingly, no individual under the age of eighteen (18) may register for, access,
                or use the Platform in any capacity.
              </p>
              <H3>15.2 Advisory Services Regarding Minors</H3>
              <p>If a Client who is a parent or legal guardian seeks Advisory Services regarding a minor child, the Client acknowledges and agrees that:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>(a) All Advisory Services are provided solely to and for the educational and informational benefit of the adult Client, not the minor;</li>
                <li>(b) No physician-patient or advisory relationship of any kind is formed between the Consultant and the minor;</li>
                <li>(c) The Client is solely responsible for all decisions regarding the minor&apos;s healthcare; and</li>
                <li>(d) The Client&apos;s acceptance of this Agreement and all waivers, releases, and limitations contained herein apply fully to any Advisory Services received regarding the minor.</li>
              </ul>
              
              <div className="bg-yellow-50 text-yellow-800 p-4 rounded border border-yellow-200 text-sm">
                [Note: Sections 16 through 19 were truncated in the provided text. Please insert them here.]
              </div>

              <H2>SECTION 20: SEVERABILITY AND REFORMATION</H2>
              <H3>20.1 Severability</H3>
              <p>
                If any provision of this Agreement is held to be invalid, illegal, void, or unenforceable by any court of
                competent jurisdiction or arbitrator, such provision shall be severed from this Agreement, and the remaining
                provisions shall continue in full force and effect without being impaired or invalidated in any way.
              </p>
              <H3>20.2 Reformation</H3>
              <p>
                If any provision of this Agreement is found to be overbroad, unreasonable, or unenforceable in scope, duration, or
                application, the court or arbitrator shall reform such provision to the minimum extent necessary to make it valid
                and enforceable, consistent with the intent of the parties.
              </p>

              <H2>SECTION 21: MAXIMUM ENFORCEABILITY</H2>
              <p>
                It is the express intent of the parties that this Agreement be enforced to the maximum extent permitted by
                applicable law in each jurisdiction. All provisions of this Agreement, including but not limited to the release,
                waiver, limitation of liability, arbitration, and class action waiver provisions, are intended to be enforced as
                written. If any enforcing body determines that any provision exceeds the scope permitted by law, the provision
                shall be reformed or limited only to the extent necessary, and the remainder of the Agreement shall be enforced in
                its entirety.
              </p>

              <H2>SECTION 22: DIGITAL ACCEPTANCE AND ELECTRONIC SIGNATURES</H2>
              <H3>22.1 Electronic Acceptance</H3>
              <p>
                This Agreement may be accepted electronically by clicking &quot;I Agree,&quot; &quot;Accept,&quot; or a similar
                affirmative action during the Conzultos registration or onboarding process. Such electronic acceptance constitutes
                a valid, binding, and enforceable signature under the Electronic Signatures in Global and National Commerce Act
                (E-SIGN Act, 15 U.S.C. §§ 7001–7031), the Uniform Electronic Transactions Act (UETA), and any applicable state
                electronic signature laws.
              </p>
              <H3>22.2 Record of Acceptance</H3>
              <p>
                Conzultos will maintain a record of each User&apos;s electronic acceptance of this Agreement, including the date,
                time, IP address, and account information associated with the acceptance event. This record shall constitute prima
                facie evidence of the User&apos;s assent to this Agreement.
              </p>
              <H3>22.3 Continuing Obligation</H3>
              <p>
                This Agreement remains in effect for as long as the User maintains an active account on the Platform and survives
                termination of the User&apos;s account with respect to any claims arising during the period of active use.
                Conzultos reserves the right to update this Agreement from time to time; continued use of the Platform following
                any such update constitutes acceptance of the modified terms.
              </p>

              <H2>SECTION 23: ENTIRE AGREEMENT AND INTEGRATION</H2>
              <p>
                This Agreement, together with the Conzultos Terms of Use and Privacy Policy (available at{" "}
                <Link href="https://www.conzultos.com" target="_blank" rel="noopener noreferrer" className="text-[hsla(225,83%,56%,1)] hover:underline">
                  www.conzultos.com
                </Link>
                ), constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes
                all prior or contemporaneous agreements, representations, warranties, and understandings, whether written or
                oral, relating to such subject matter. No amendment to this Agreement shall be effective unless made in writing and
                executed by an authorized representative of Conzultos.
              </p>

              <H2>SECTION 24: WAIVER OF JURY TRIAL</H2>
              <p className="font-semibold uppercase tracking-wide text-[#101926]">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, EACH USER HEREBY KNOWINGLY, VOLUNTARILY, AND IRREVOCABLY WAIVES
                ANY AND ALL RIGHT TO A TRIAL BY JURY IN ANY ACTION, PROCEEDING, OR COUNTERCLAIM ARISING OUT OF OR RELATING TO THIS
                AGREEMENT, THE PLATFORM, OR ANY ADVISORY SERVICES.
              </p>

              <H2>SECTION 25: NOTICES</H2>
              <p>
                All notices, requests, or communications relating to this Agreement shall be in writing and directed to Conzultos
                at: Preguntamed Incorporated. d/b/a Conzultos,{" "}
                <a href="mailto:support@conzultos.com" className="text-[hsla(225,83%,56%,1)] hover:underline">support@conzultos.com</a>, or at such other address as Conzultos may designate
                from time to time.
              </p>

              <hr className="my-10 border-neutral-200" />

              <H2>ACKNOWLEDGMENT AND ACCEPTANCE</H2>
              <p>
                By clicking &quot;I Agree&quot; or by otherwise accepting this Agreement through the Conzultos platform, each User
                hereby acknowledges and confirms that they have read this entire Agreement carefully and understand all of its
                terms and conditions; that this Agreement contains a comprehensive release and waiver of claims, including claims
                for negligence; that the User is waiving their right to a trial by jury and their right to participate in a class
                action; that all disputes arising under this Agreement will be resolved through binding arbitration; that no
                physician-patient relationship is created through the Platform; that Advisory Services are non-clinical and
                informational only and are not a substitute for professional medical care; that the User is entering into this
                Agreement voluntarily and of their own free will, without coercion or duress; that the User has had the
                opportunity to consult with an attorney before accepting this Agreement; and that this is a legally binding
                contract under which the User is waiving certain legal rights.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
