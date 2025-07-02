import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import BrandLogo from '../../assets/logo.png';

// --- Professional Increment: Full service list for dynamic generation ---
const servicesOptions = [
  'Web Design & Development',
  'Fast & Secure Web Hosting',
  'Online Reputation Management',
  'Database Reactivation',
  'Email & SMS Automation',
  'Live Chat & AI Chatbots',
  'Social Media Scheduling',
  'Blog Development & Strategy',
];

// --- Professional Increment: Reusable style constants for brand consistency ---
const baseInputStyle = "w-full px-4 py-2.5 rounded-lg shadow-sm transition duration-200 ease-in-out bg-black/30 border-2 text-gray-200 placeholder-gray-400";
const focusInputStyle = "focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50";
const errorInputStyle = "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50";
const defaultBorderStyle = "border-gray-600 hover:border-gray-500";


const OnboardingForm = () => {
  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    contactName: '', companyName: '', email: '', phone: '', website: '',
    businessDescription: '', targetAudience: '', projectGoals: '',
    services: [], designInspiration: '', brandGuidelines: '',
    hasDomain: '', hasHosting: '', additionalInfo: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  // --- EMAILJS CONFIGURATION ---
  const SERVICE_ID = 'fnlchatserviceid';
  const TEMPLATE_ID = 'fnlonboardingtemplateid';
  const PUBLIC_KEY = '5xusJiiEPt_SywXs8';

  // --- FORM HANDLING (No changes in logic) ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev, services: checked ? [...prev.services, value] : prev.services.filter(s => s !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.contactName.trim()) newErrors.contactName = 'Full Name is required.';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.businessDescription.trim()) newErrors.businessDescription = 'Please describe your business.';
    if (!formData.projectGoals.trim()) newErrors.projectGoals = 'Please outline your project goals.';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstErrorKey = Object.keys(errors)[0] || Object.keys(validateForm())[0];
      if (firstErrorKey) {
          const errorElement = document.querySelector(`[name="${firstErrorKey}"]`);
          if (errorElement) {
              errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              errorElement.focus({ preventScroll: true });
          }
      }
      return;
    }
    setStatus('sending');
    const templateParams = {
        contact_name: formData.contactName, company_name: formData.companyName, email: formData.email,
        phone: formData.phone || 'N/A', website: formData.website || 'N/A',
        business_description: formData.businessDescription, target_audience: formData.targetAudience || 'N/A',
        project_goals: formData.projectGoals, services: formData.services.join(', '),
        design_inspiration: formData.designInspiration || 'N/A', brand_guidelines: formData.brandGuidelines || 'N/A',
        has_domain: formData.hasDomain || 'N/A', has_hosting: formData.hasHosting || 'N/A',
        additional_info: formData.additionalInfo || 'N/A'
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => { setStatus('success'); window.scrollTo(0, 0); },
            () => { setStatus('error'); window.scrollTo(0, 0); });
  };

  return (
    <div className="relative isolate min-h-screen p-4 sm:p-8 flex items-center justify-center font-sans overflow-hidden">
        {/* BRANDED BACKGROUND - IDENTICAL TO SERVICES PAGE */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-900" />
            <div className="absolute inset-0 bg-black/60" />
        </div>

      <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-yellow-500/40">
        {status === 'success' || status === 'error' ? (
          <div className="flex flex-col items-center justify-center p-8 text-center min-h-[600px]">
            <img src={BrandLogo} alt="First and Last Marketing Logo" className="w-24 h-24 mb-6" />
            <h2 className={`text-3xl font-bold mb-4 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {status === 'success' ? "Submission Received!" : "An Error Occurred"}
            </h2>
            <p className="text-lg text-gray-300 max-w-md">
              {status === 'success' ? "Thank you! We're reviewing your project and will be in touch within 1-2 business days." : "We couldn't send your form. Please try again or email us directly."}
            </p>
            {status === 'error' && (
              <button onClick={() => setStatus('idle')} className="mt-8 px-10 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 transition-all duration-300 transform hover:scale-105">
                Try Again
              </button>
            )}
          </div>
        ) : (
          <div className="p-6 sm:p-10">
            <header className="text-center mb-10">
              <img src={BrandLogo} alt="First and Last Marketing Logo" className="mx-auto w-20 h-20 mb-4" />
              <h1 className="text-4xl font-extrabold text-yellow-400 tracking-tight">Project Onboarding</h1>
              <p className="mt-3 text-lg text-gray-300">Let's build something amazing together.</p>
            </header>
            
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              <fieldset>
                <legend className="text-2xl font-bold text-yellow-400 border-b-2 border-yellow-500/70 pb-2 mb-6 w-full">1. Contact Details</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  <InputField label="Full Name" name="contactName" value={formData.contactName} onChange={handleChange} error={errors.contactName} required />
                  <InputField label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} error={errors.companyName} required />
                  <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} required />
                  <InputField label="Phone Number (Optional)" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-2xl font-bold text-yellow-400 border-b-2 border-yellow-500/70 pb-2 mb-6 w-full">2. Business & Brand</legend>
                <div className="space-y-5">
                    <InputField label="Current Website URL (if any)" name="website" value={formData.website} onChange={handleChange} placeholder="https://www.example.com" />
                    <TextAreaField label="Describe your business and what you do" name="businessDescription" value={formData.businessDescription} onChange={handleChange} error={errors.businessDescription} required />
                    <TextAreaField label="Who is your target audience or ideal customer?" name="targetAudience" value={formData.targetAudience} onChange={handleChange} />
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-2xl font-bold text-yellow-400 border-b-2 border-yellow-500/70 pb-2 mb-6 w-full">3. Project Details</legend>
                <div className="space-y-6">
                    <TextAreaField label="What are the main goals for this project?" name="projectGoals" value={formData.projectGoals} onChange={handleChange} placeholder="e.g., Increase leads by 20%, launch a new product..." error={errors.projectGoals} required />
                    
                    <div>
                      <FormLabel label="Which services are you interested in?" required />
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {servicesOptions.map(service => (
                          <CheckboxField key={service} label={service} name="services" value={service} checked={formData.services.includes(service)} onChange={handleChange} />
                        ))}
                      </div>
                      {errors.services && <p className="text-red-400 text-xs mt-2">{errors.services}</p>}
                    </div>
                </div>
              </fieldset>
              
              <fieldset>
                <legend className="text-2xl font-bold text-yellow-400 border-b-2 border-yellow-500/70 pb-2 mb-6 w-full">4. Design & Content</legend>
                <div className="space-y-6">
                    <TextAreaField label="List 2-3 websites you like and explain why" name="designInspiration" value={formData.designInspiration} onChange={handleChange} placeholder="e.g., www.stripe.com (for its clean design)" />
                    <TextAreaField label="Do you have existing brand assets or guidelines?" name="brandGuidelines" value={formData.brandGuidelines} onChange={handleChange} placeholder="e.g., Yes, we have a logo and brand color guide." />
                </div>
              </fieldset>
              
              <fieldset>
                  <legend className="text-2xl font-bold text-yellow-400 border-b-2 border-yellow-500/70 pb-2 mb-6 w-full">5. Technical Details</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <RadioGroup label="Do you already own a domain name?" name="hasDomain" value={formData.hasDomain} onChange={handleChange} options={['Yes', 'No', 'Not sure']} />
                      <RadioGroup label="Do you have a web hosting provider?" name="hasHosting" value={formData.hasHosting} onChange={handleChange} options={['Yes', 'No', 'Not sure']} />
                  </div>
              </fieldset>
              
              <fieldset>
                 <legend className="text-2xl font-bold text-yellow-400 border-b-2 border-yellow-500/70 pb-2 mb-6 w-full">6. Anything Else?</legend>
                 <TextAreaField label="Is there anything else you'd like to share?" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
              </fieldset>

              <div className="pt-6 text-center">
                <button type="submit" disabled={status === 'sending'} className="w-full max-w-sm px-8 py-4 bg-yellow-500 text-gray-900 text-lg font-bold rounded-full shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none">
                  {status === 'sending' ? (
                    <div className="flex items-center justify-center"><svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Submitting...</div>
                  ) : 'Send Project Details'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS (Now fully brand-aligned) ---
const FormLabel = ({ id, label, required }) => (
    <label htmlFor={id} className="block text-sm font-bold text-gray-200 mb-2">
      {label} {required && <span className="text-yellow-400 ml-1">*</span>}
    </label>
);

const InputField = ({ label, name, type = 'text', value, onChange, placeholder, error, required }) => (
  <div>
    <FormLabel id={name} label={label} required={required} />
    <input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder || `Enter ${label.toLowerCase()}`}
      className={`${baseInputStyle} ${focusInputStyle} ${error ? errorInputStyle : defaultBorderStyle}`}
    />
    {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder, error, required }) => (
  <div>
    <FormLabel id={name} label={label} required={required} />
    <textarea id={name} name={name} value={value} onChange={onChange} rows="4" placeholder={placeholder || 'Your answer...'}
      className={`${baseInputStyle} ${focusInputStyle} ${error ? errorInputStyle : defaultBorderStyle}`}
    />
    {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
  </div>
);

const CheckboxField = ({ label, name, value, checked, onChange }) => (
  <div className="flex items-center p-3 border-2 border-gray-700 bg-black/30 rounded-lg hover:bg-black/50 hover:border-yellow-600 transition-colors duration-200 cursor-pointer">
    <input id={`${name}-${value}`} name={name} type="checkbox" value={value} checked={checked} onChange={onChange}
      className="h-5 w-5 text-yellow-500 border-gray-500 rounded bg-gray-800 focus:ring-yellow-500 focus:ring-offset-gray-900 cursor-pointer"
    />
    <label htmlFor={`${name}-${value}`} className="ml-3 text-sm font-medium text-gray-300 select-none cursor-pointer flex-1">{label}</label>
  </div>
);

const RadioGroup = ({ label, name, value, onChange, options }) => (
  <div>
    <FormLabel label={label} />
    <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0">
        {options.map(option => (
            <div key={option} className="flex items-center">
                <input id={`${name}-${option}`} name={name} type="radio" value={option} checked={value === option} onChange={onChange}
                    className="h-4 w-4 text-yellow-500 bg-gray-900 border-gray-600 focus:ring-yellow-500 focus:ring-offset-gray-900 cursor-pointer"
                />
                <label htmlFor={`${name}-${option}`} className="ml-2 block text-sm text-gray-300 select-none cursor-pointer">{option}</label>
            </div>
        ))}
    </div>
  </div>
);

export default OnboardingForm;