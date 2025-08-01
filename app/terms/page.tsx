import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Terms of Service | VibePay",
  description:
    "Terms and conditions for using VibePay's merchant of record services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navigation />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto border-l border-r border-border/80 min-h-screen pt-16">
        <main className="max-w-4xl mx-auto pt-32 pb-20 px-6 sm:px-14">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The terms and conditions governing your use of VibePay&apos;s
              merchant of record services.
            </p>
            <div className="text-sm text-gray-500 mt-4">
              Last updated: December 2024
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg prose-invert max-w-none 
                         prose-headings:text-white prose-headings:font-semibold prose-headings:tracking-tight
                         prose-p:text-gray-300 prose-p:leading-relaxed
                         prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                         prose-strong:text-white prose-li:text-gray-300
                         prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                         prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4"
          >
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using VibePay&apos;s services, you agree to be
              bound by these Terms of Service (&quot;Terms&quot;). If you
              disagree with any part of these terms, you may not access our
              services.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and
              VibePay regarding your use of our merchant of record and payment
              processing services.
            </p>

            <h2>Service Description</h2>
            <p>VibePay provides merchant of record services, including:</p>
            <ul>
              <li>Payment processing and transaction management</li>
              <li>Global tax compliance and filing</li>
              <li>Regulatory compliance and reporting</li>
              <li>Financial liability assumption</li>
              <li>Multi-currency and multi-jurisdiction support</li>
              <li>Customer support and dispute resolution</li>
            </ul>

            <h2>Account Registration and Security</h2>
            <p>
              To use our services, you must create an account and provide
              accurate, complete information. You are responsible for:
            </p>
            <ul>
              <li>
                Maintaining the confidentiality of your account credentials
              </li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Providing accurate and up-to-date business information</li>
              <li>Complying with our identity verification requirements</li>
            </ul>

            <h2>Acceptable Use</h2>
            <p>You agree not to use our services for:</p>
            <ul>
              <li>Illegal activities or prohibited business types</li>
              <li>Fraudulent, deceptive, or misleading practices</li>
              <li>Money laundering or terrorist financing</li>
              <li>Processing payments for sanctioned entities</li>
              <li>Violating intellectual property rights</li>
              <li>Circumventing our risk management systems</li>
              <li>Adult content, gambling, or other restricted industries</li>
            </ul>

            <h2>Payment Terms and Fees</h2>
            <h3>Service Fees</h3>
            <p>
              Our fees are clearly disclosed in your service agreement. Fees may
              include:
            </p>
            <ul>
              <li>Transaction processing fees</li>
              <li>Monthly service fees</li>
              <li>Currency conversion fees</li>
              <li>Chargeback and dispute fees</li>
              <li>Additional compliance services</li>
            </ul>

            <h3>Payment Processing</h3>
            <p>
              As your merchant of record, we collect payments on your behalf and
              remit funds according to your agreed schedule. Settlement times
              may vary based on risk assessment and regulatory requirements.
            </p>

            <h2>Data and Privacy</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy.
              We process personal data in accordance with applicable data
              protection laws and our privacy commitments.
            </p>
            <p>
              You grant us the right to process transaction data necessary to
              provide our services, including sharing with payment processors,
              banks, and regulatory authorities.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              VibePay retains all rights to our platform, software, and
              services. You are granted a limited, non-exclusive license to use
              our services in accordance with these Terms.
            </p>
            <p>
              You retain ownership of your business data and content, while
              granting us necessary rights to process and transmit such data to
              provide our services.
            </p>

            <h2>Compliance and Regulatory Requirements</h2>
            <p>
              As a merchant of record service, we assume regulatory compliance
              obligations. You agree to:
            </p>
            <ul>
              <li>Provide accurate business and product information</li>
              <li>Cooperate with compliance audits and reviews</li>
              <li>Notify us of material changes to your business</li>
              <li>Comply with applicable laws in your jurisdiction</li>
              <li>Maintain appropriate business licenses and permits</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, VibePay&apos;s liability
              is limited to direct damages not exceeding the fees paid by you in
              the 12 months preceding the claim.
            </p>
            <p>
              We are not liable for indirect, incidental, consequential, or
              punitive damages, including lost profits, business interruption,
              or data loss.
            </p>

            <h2>Disclaimers</h2>
            <p>
              Our services are provided &quot;as is&quot; without warranties of
              any kind. We disclaim all warranties, express or implied,
              including merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate this agreement with 30 days&apos;
              written notice. We may terminate immediately for breach of terms,
              regulatory requirements, or risk management purposes.
            </p>
            <p>
              Upon termination, we will complete processing of pending
              transactions and remit owed funds, subject to applicable holding
              periods and regulatory requirements.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms will be resolved through
              binding arbitration in accordance with the rules of a recognized
              arbitration organization. You waive any right to class action
              proceedings.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Material
              changes will be communicated with at least 30 days&apos; notice.
              Continued use of our services constitutes acceptance of modified
              Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which
              VibePay is incorporated, without regard to conflict of law
              principles.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms or our services, please contact
              us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> team@vibepay.sh
              </li>
            </ul>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the
              remaining provisions will continue in full force and effect.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
