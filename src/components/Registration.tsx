import React from 'react';
import registration from '../assets/registarion.jpg'; // Import the image for the her

const Registration: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center">
            <img
              src={registration}
              alt="Workshop"
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </div>

          {/* Right Column: Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reserve Your Spot Today
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto md:mx-0">
              Limited seats available. Secure your place in this exclusive workshop to enhance your neurosurgical skills.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold">8</div>
                  <div className="opacity-90">Hours of Training</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">3</div>
                  <div className="opacity-90">Practical Sessions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">2</div>
                  <div className="opacity-90">Hands On Sessions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">3</div>
                  <div className="opacity-90">Expert Faculty</div>
                </div>
              </div>
            </div>

            <a
              href="https://forms.gle/JMN2vpPXhb6Cfi9b7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-10 rounded-full text-lg shadow-lg transition-all transform hover:scale-105"
            >
              Register Now
            </a>

            <p className="mt-4 text-sm opacity-80">
              For registration queries, please contact us at{' '}
              <a href="mailto:kiran@posspole.com" className="text-white underline">
                kiran@posspole.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
