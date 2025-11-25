import React from 'react';
import { ScrollText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-24 pb-20 bg-(--bg-primary) min-h-screen text-(--text-primary)">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 text-(--accent-cyan)">
            <ScrollText size={32} />
          </div>
          <h1 className="text-4xl font-black mb-4">Terms & Conditions</h1>
          <p className="text-(--text-secondary) text-lg">Last updated: October 2024</p>
        </div>

        <div className="bg-white border border-(--card-border) rounded-lg p-8 shadow-sm space-y-8">
          <section>
             <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
             <p className="text-gray-600 leading-relaxed">
               Welcome to FlipZone. By accessing this website we assume you accept these terms and conditions. Do not continue to use FlipZone if you do not agree to take all of the terms and conditions stated on this page.
             </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4">2. License</h2>
             <p className="text-gray-600 leading-relaxed">
               Unless otherwise stated, FlipZone and/or its licensors own the intellectual property rights for all material on FlipZone. All intellectual property rights are reserved. You may access this from FlipZone for your own personal use subjected to restrictions set in these terms and conditions.
             </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4">3. User Comments</h2>
             <p className="text-gray-600 leading-relaxed">
               Parts of this website offer an opportunity for users to post and exchange opinions and information. FlipZone does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of FlipZone,its agents and/or affiliates.
             </p>
          </section>

           <section>
             <h2 className="text-2xl font-bold mb-4">4. Hyperlinking to our Content</h2>
             <p className="text-gray-600 leading-relaxed">
               The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.
             </p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Terms;