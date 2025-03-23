
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="lead">Welcome to My PSJ Foundation. By using our platform, you agree to these terms.</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the My PSJ Foundation platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            
            <h2>2. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our platform.
            </p>
            
            <h2>3. NGO Verification</h2>
            <p>
              All NGOs must undergo a verification process to ensure authenticity. We reserve the right to approve or reject any NGO application based on our verification criteria. Verified NGOs will receive a trust badge displayed on their profile.
            </p>
            
            <h2>4. Donor Responsibilities</h2>
            <p>
              Donors are responsible for ensuring the accuracy of their information and preferences. While we facilitate connections between donors and NGOs, we do not guarantee perfect matches in all cases.
            </p>
            
            <h2>5. Content Guidelines</h2>
            <p>
              Users may not post content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable. We reserve the right to remove any content that violates these guidelines.
            </p>
            
            <h2>6. Intellectual Property</h2>
            <p>
              The My PSJ Foundation platform and its original content, features, and functionality are owned by My PSJ Foundation and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall My PSJ Foundation, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            
            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws applicable in the jurisdiction where My PSJ Foundation is registered, without regard to its conflict of law provisions.
            </p>
            
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@mypsj.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
