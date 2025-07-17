import React, { useState, useRef } from 'react';
import { GlassCard } from '../../common/GlassCard';
import { Button } from '../../common/Button';
import { MailIcon, Smartphone, MapPinIcon, SendIcon, Github, Facebook, Instagram, Linkedin, Twitter, Youtube, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';

const socials = [
  { icon: <Github size={22} />, link: 'https://github.com/Ampexqt', label: 'GitHub' },
  { icon: <Linkedin size={22} />, link: 'https://www.linkedin.com/in/rueda-jhon-harold-m-5585aa375/', label: 'LinkedIn' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>, link: 'https://x.com/johnharoldrueda', label: 'X (Twitter)' },
  { icon: <Instagram size={22} />, link: 'https://instagram.com/ampexxqt', label: 'Instagram' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4-4 4 4 0 0 0-4 4z"/><path d="M15 8a4 4 0 1 0-4 4"/><path d="M12 12v8"/><path d="M8 20h8"/></svg>, link: 'https://www.tiktok.com/@ampexqt', label: 'TikTok' },
];

// Enhanced Toast Component - Matching Download CV style
const Toast = ({ message, type = 'success', isVisible, onClose }) => {
  if (!isVisible) return null;

  const toastStyles = {
    success: {
      bg: 'bg-[#7DD6C0]/20',
      border: 'border-[#7DD6C0]',
      ring: 'ring-[#7DD6C0]/30',
      dot: 'bg-[#7DD6C0]',
      text: 'text-[#7DD6C0]'
    },
    error: {
      bg: 'bg-[#EF4444]/20',
      border: 'border-[#EF4444]',
      ring: 'ring-[#EF4444]/30',
      dot: 'bg-[#EF4444]',
      text: 'text-[#EF4444]'
    },
    info: {
      bg: 'bg-[#7DD6C0]/20',
      border: 'border-[#7DD6C0]',
      ring: 'ring-[#7DD6C0]/30',
      dot: 'bg-[#7DD6C0]',
      text: 'text-[#7DD6C0]'
    }
  };

  const style = toastStyles[type];

  return (
    <div className="fixed top-1/2 left-4 z-50 animate-slide-in transform -translate-y-1/2">
      <div className={`${style.bg} border-2 ${style.border} rounded-xl shadow-2xl p-3 max-w-xs w-full backdrop-blur-md ring-2 ${style.ring}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 ${style.dot} rounded-full animate-pulse shadow-lg`}></div>
            <span className="text-[#F2F2E9] font-semibold text-xs">{message}</span>
          </div>
          <button
            onClick={onClose}
            className={`${style.text} hover:text-[#F2F2E9] transition-all duration-200 p-1 rounded-full hover:bg-[#7DD6C0]/20 hover:scale-110`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  const validateField = (name, value) => {
    switch (name) {
      case 'user_name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'user_email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    let formName = name;
    
    // Map EmailJS field names to form state names
    if (name === 'user_name') formName = 'name';
    else if (name === 'user_email') formName = 'email';
    else if (name === 'message') formName = 'message';
    
    setForm(prev => ({ ...prev, [formName]: value }));
    
    // Validate field and update errors
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [formName]: error }));
    
    // Mark field as touched
    setTouched(prev => ({ ...prev, [formName]: true }));
  };

  const handleBlur = e => {
    const { name } = e.target;
    let formName = name;
    
    if (name === 'user_name') formName = 'name';
    else if (name === 'user_email') formName = 'email';
    else if (name === 'message') formName = 'message';
    
    setTouched(prev => ({ ...prev, [formName]: true }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('user_name', form.name),
      email: validateField('user_email', form.email),
      message: validateField('message', form.message)
    };
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    
    return !Object.values(newErrors).some(error => error !== '');
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration with your actual credentials
      const result = await emailjs.sendForm(
        'service_480rcyk', // Your Gmail service ID
        'template_r0jzdke', // Your email template ID
        formRef.current,
        '2VclqPtJ0av9LLc9-' // Your EmailJS public key
      );

      if (result.status === 200) {
        showToast('Success! I will get back to you soon.', 'success');
        setForm({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
        setShowForm(false);
      }
    } catch (error) {
      console.error('Email send failed:', error);
      showToast('Failed to send message. Please try again or contact me directly.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-transparent flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center px-4">
        <div className="w-full rounded-3xl bg-[#242527]/90 backdrop-blur-lg shadow-2xl flex flex-col items-center py-14 px-6 md:px-16 relative">
          <div className="text-center mb-8">
            <div className="text-base text-[#F2F2E9]/80 mb-2 tracking-wide">Ready to work together?</div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#F2F2E9] mb-2 tracking-tight leading-tight">
              Let's <span className="text-[#7DD6C0]">Connect</span>
            </h2>
            <div className="text-md text-[#F2F2E9]/60 mt-2">Let's build something amazing. Reach out and let's start a conversation.</div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full mb-8">
            <div className="flex items-center gap-3 text-[#F2F2E9] text-lg">
              <MailIcon size={22} className="text-[#7DD6C0]" />
              <span className="select-all">haroldzkie99@gmail.com</span>
            </div>
            <button
              className="px-8 py-3 rounded-full border border-[#7DD6C0] text-[#7DD6C0] font-semibold text-lg bg-transparent hover:bg-[#7DD6C0] hover:text-[#161618] transition-all duration-200 shadow-sm focus:outline-none focus-visible:outline-none focus:ring-0"
              onClick={() => setShowForm(true)}
            >
              Get in touch
            </button>
            <div className="flex items-center gap-3 text-[#F2F2E9] text-lg">
              <Smartphone size={22} className="text-[#7DD6C0]" />
              <span className="select-all">+63 953-843-5067</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-[#F2F2E9]/70 text-sm mb-8">
            <MapPinIcon size={18} className="text-[#7DD6C0] mr-1" />
            <span>Zamboanga City, Zamboanga Del Sur, Philippines. 7000 / Asia GMT+8</span>
          </div>
          <div className="w-full border-t border-[#F2F2E9]/10 my-6"></div>
          <div className="flex items-center justify-center gap-5 w-full mb-2 flex-wrap">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[#F2F2E9]/30 w-12 h-12 flex items-center justify-center text-[#F2F2E9]/80 hover:text-[#7DD6C0] hover:border-[#7DD6C0] hover:bg-[#7DD6C0]/10 hover:scale-110 transition-all duration-300 bg-transparent focus:outline-none focus-visible:outline-none focus:ring-0 group"
                aria-label={`${s.label} link`}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md mx-4 bg-[#161618] rounded-2xl shadow-2xl p-8 flex flex-col">
              <button
                className="absolute top-3 right-3 text-[#7DD6C0] hover:text-[#F2F2E9] text-xl font-bold focus:outline-none focus-visible:outline-none focus:ring-0"
                onClick={() => setShowForm(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-extrabold text-[#F2F2E9] mb-6 text-center">Send a Message</h3>
              <form ref={formRef} className="flex flex-col gap-5" onSubmit={handleSubmit} autoComplete="off">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#F2F2E9]">
                    Name <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full p-3 rounded-lg bg-[#1a1a1c] border-2 focus:outline-none text-[#F2F2E9] placeholder:text-[#7DD6C0]/60 text-base transition-all duration-200 ${
                      touched.name && errors.name 
                        ? 'border-[#EF4444] focus:border-[#EF4444]' 
                        : 'border-transparent focus:border-[#7DD6C0]'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {touched.name && errors.name && (
                    <div className="text-[#EF4444] text-sm font-medium flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                      </svg>
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#F2F2E9]">
                    Email <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full p-3 rounded-lg bg-[#1a1a1c] border-2 focus:outline-none text-[#F2F2E9] placeholder:text-[#7DD6C0]/60 text-base transition-all duration-200 ${
                      touched.email && errors.email 
                        ? 'border-[#EF4444] focus:border-[#EF4444]' 
                        : 'border-transparent focus:border-[#7DD6C0]'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {touched.email && errors.email && (
                    <div className="text-[#EF4444] text-sm font-medium flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                      </svg>
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#F2F2E9]">
                    Message <span className="text-[#EF4444]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full p-3 rounded-lg bg-[#1a1a1c] border-2 focus:outline-none text-[#F2F2E9] placeholder:text-[#7DD6C0]/60 text-base transition-all duration-200 resize-none ${
                      touched.message && errors.message 
                        ? 'border-[#EF4444] focus:border-[#EF4444]' 
                        : 'border-transparent focus:border-[#7DD6C0]'
                    }`}
                    placeholder="Tell me about your project or inquiry..."
                  />
                  {touched.message && errors.message && (
                    <div className="text-[#EF4444] text-sm font-medium flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                      </svg>
                      {errors.message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 w-full flex items-center justify-center gap-2 bg-[#7DD6C0] text-[#161618] font-bold py-3 rounded-lg shadow-md hover:bg-[#161618] hover:text-[#7DD6C0] border border-[#7DD6C0] transition-all text-base focus:outline-none focus-visible:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#161618] border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <SendIcon size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        <Toast 
          message={toast.message}
          type={toast.type}
          isVisible={toast.show}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      </div>
    </section>
  );
};