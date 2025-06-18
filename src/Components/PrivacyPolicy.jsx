import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At First and Last Marketing, we respect your privacy and are committed to protecting the personal information you share with us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, phone number, and business details when you:
        <ul className="list-disc pl-6 mt-2">
          <li>Submit a form on our website</li>
          <li>Subscribe to our newsletter</li>
          <li>Engage with us through social media or email</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        Your information helps us:
        <ul className="list-disc pl-6 mt-2">
          <li>Provide and improve our services</li>
          <li>Send marketing updates (only if you opt-in)</li>
          <li>Respond to inquiries and support requests</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or share your personal data with third parties except as required by law or to provide services you’ve requested.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your information from unauthorized access, use, or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You may request to view, edit, or delete your personal data by contacting us at <a href="mailto:info@firstandlastmarketing.com" className="text-blue-600 underline">info@firstandlastmarketing.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Updates</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Last updated: {new Date().toLocaleDateString()}.
      </p>

      <p className="mt-8">If you have any questions about this policy, contact us anytime.</p>
    </section>
  );
};

export default PrivacyPolicy;
