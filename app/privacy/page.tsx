import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy | VibePay",
  description: "Learn how VibePay protects your privacy and handles your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Background Grid */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <Navigation />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto border-l border-r border-border/80 min-h-screen pt-16">
        <main className="max-w-4xl mx-auto pt-32 pb-20 px-6 sm:px-14">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              How we collect, use, and protect your information when you use
              VibePay services.
            </p>
            <div className="text-sm text-gray-500 mt-4">
              Last updated: July 2025
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
            <h2>Introduction</h2>
            <p>
              VibePay (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our merchant
              of record services and payment processing platform.
            </p>
            <p>
              By using VibePay&apos;s services, you agree to the collection and use
              of information in accordance with this Privacy Policy.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>
                <strong>Account Information:</strong> Name, email address, phone
                number, business information
              </li>
              <li>
                <strong>Financial Information:</strong> Bank account details,
                tax identification numbers, payment history
              </li>
              <li>
                <strong>Identity Verification:</strong> Government-issued ID,
                business registration documents
              </li>
              <li>
                <strong>Transaction Data:</strong> Payment amounts, currencies,
                transaction timestamps
              </li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you use our services, we automatically collect:</p>
            <ul>
              <li>IP addresses and device identifiers</li>
              <li>Browser type and operating system</li>
              <li>Usage patterns and service interactions</li>
              <li>Log files and error reports</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>
                Provide merchant of record services and payment processing
              </li>
              <li>Verify your identity and prevent fraud</li>
              <li>Comply with tax and regulatory obligations</li>
              <li>Process transactions and manage your account</li>
              <li>Improve our services and customer support</li>
              <li>Send important service communications</li>
              <li>Detect and prevent unauthorized access</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                assist in providing our services
              </li>
              <li>
                <strong>Financial Institutions:</strong> Banks and payment
                processors for transaction processing
              </li>
              <li>
                <strong>Regulatory Authorities:</strong> Tax agencies and
                government bodies as required by law
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required by court
                orders, subpoenas, or legal processes
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with mergers,
                acquisitions, or asset sales
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Multi-factor authentication requirements</li>
              <li>Regular security assessments and monitoring</li>
              <li>Access controls and employee training</li>
              <li>Compliance with PCI DSS standards</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our
              services and comply with legal obligations. Transaction records
              are typically retained for 7 years to meet tax and regulatory
              requirements.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>
                Request deletion of your information (subject to legal
                requirements)
              </li>
              <li>Object to certain processing activities</li>
              <li>Data portability for your information</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2>International Transfers</h2>
            <p>
              As a global merchant of record service, we may transfer your
              information to countries outside your jurisdiction. We ensure
              appropriate safeguards are in place to protect your information
              during such transfers.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of
              age. We do not knowingly collect personal information from
              children under 18.
            </p>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new Privacy
              Policy on our website and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> team@vibepay.sh
              </li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
