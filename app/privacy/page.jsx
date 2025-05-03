'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('section-1');

  const sections = [
    {
      id: 'section-1',
      title: 'Information We Collect',
      content: 'We collect information that you provide directly to us when using our custom water bottle services, including your name, email address, shipping address, and payment information. We also automatically collect certain information about your device when you use our website.'
    },
    {
      id: 'section-2',
      title: 'How We Use Your Information',
      content: 'We use the information we collect to process your orders, communicate with you about our products and services, improve our website experience, and comply with legal obligations.'
    },
    {
      id: 'section-3',
      title: 'Information Sharing',
      content: 'We do not sell your personal information. We may share your information with service providers who assist us in operating our website, conducting our business, or serving our users.'
    },
    {
      id: 'section-4',
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      id: 'section-5',
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-700 mb-8">
            At PrintPaani, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our custom water bottle services.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="text-lg font-semibold hover:text-blue-600">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {section.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about our Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@printpaani.com" className="text-blue-600 hover:underline">
                privacy@printpaani.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}