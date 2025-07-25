import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      {/* Header */}
      <header className="bg-white shadow-sm py-6 relative z-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-center md:justify-start items-center w-full md:w-auto mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="Aspire Aesthetics Logo"
              className="w-40 md:w-60 h-auto"
              width={300}
              height={60}
              priority
            />
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#services" className="text-gray-700 hover:text-[var(--primary)] transition-all uppercase text-sm tracking-wider">Services</a>
            <a href="#about" className="text-gray-700 hover:text-[var(--primary)] transition-all uppercase text-sm tracking-wider">About</a>
            <a href="#contact" className="text-gray-700 hover:text-[var(--primary)] transition-all uppercase text-sm tracking-wider">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 relative bg-[var(--primary)]">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Image
            src="/hero-bg.svg"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading text-white mb-8">Elevate Your Natural Beauty</h1>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto">Experience luxury beauty and spa treatments in a serene environment.</p>
          <a 
            href="#contact" 
            className="bg-white text-[var(--primary)] px-10 py-4 rounded-none font-medium hover:bg-[var(--primary-dark)] hover:text-white transition-all uppercase tracking-wider text-sm"
          >
            Book Your Consultation
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[var(--primary)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block border border-[var(--accent)] p-6 elegant-shadow bg-[var(--primary)]">
              <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">Our Premium Services</h2>
              <div className="w-20 h-0.5 bg-[var(--accent)] mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[var(--primary)] p-8 elegant-shadow hover:translate-y-[-5px] transition-all">
              <h3 className="text-xl font-heading mb-4 text-white">Facial Treatments</h3>
              <div className="w-12 h-0.5 bg-[var(--accent)] mb-6"></div>
              <p className="text-white">Rejuvenate your skin with our premium facial treatments tailored to your skin type and concerns.</p>
              <a href="#contact" className="inline-block mt-6 text-[var(--accent)] hover:text-white transition-all uppercase text-sm tracking-wider">Learn More →</a>
            </div>
            <div className="bg-[var(--primary)] p-8 elegant-shadow hover:translate-y-[-5px] transition-all">
              <h3 className="text-xl font-heading mb-4 text-white">Body Treatments</h3>
              <div className="w-12 h-0.5 bg-[var(--accent)] mb-6"></div>
              <p className="text-white">Relax and unwind with our range of body treatments designed to relieve stress and tension.</p>
              <a href="#contact" className="inline-block mt-6 text-[var(--accent)] hover:text-white transition-all uppercase text-sm tracking-wider">Learn More →</a>
            </div>
            <div className="bg-[var(--primary)] p-8 elegant-shadow hover:translate-y-[-5px] transition-all">
              <h3 className="text-xl font-heading mb-4 text-white">Beauty Therapy</h3>
              <div className="w-12 h-0.5 bg-[var(--accent)] mb-6"></div>
              <p className="text-white">Enhance your natural beauty with our professional beauty therapy services and treatments.</p>
              <a href="#contact" className="inline-block mt-6 text-[var(--accent)] hover:text-white transition-all uppercase text-sm tracking-wider">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[var(--primary)] border-t-4 border-[var(--accent)]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">About Aspire Aesthetics</h2>
              <div className="w-20 h-0.5 bg-[var(--accent)] mx-auto"></div>
            </div>
            <div className="text-center">
              <p className="text-white mb-6 leading-relaxed">
                At Aspire Aesthetics, we are dedicated to providing exceptional beauty and spa services in a luxurious and relaxing environment. 
                Our team of experienced professionals uses only the highest quality products to ensure you receive the best possible treatment.
              </p>
              <p className="text-white leading-relaxed">
                Whether you&apos;re looking for a quick beauty fix or a full day of pampering, we have the perfect service for you. 
                Visit us today and experience the Aspire difference.
              </p>
              <a href="#contact" className="inline-block mt-10 bg-white text-[var(--primary)] px-8 py-3 hover:bg-[var(--primary-dark)] hover:text-white transition-all uppercase tracking-wider text-sm">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[var(--primary)] border-t-4 border-[var(--accent)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block border border-[var(--accent)] p-6 elegant-shadow bg-[var(--primary)]">
              <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">Get In Touch</h2>
              <div className="w-20 h-0.5 bg-[var(--accent)] mx-auto"></div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[var(--primary)] p-10 elegant-shadow">
              <h3 className="text-2xl font-heading mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaEnvelope className="text-[var(--accent)] mr-4 text-xl" />
                  <a href="mailto:info@aspire-aesthetics.com" className="text-white hover:text-[var(--accent)] transition-all">
                    info@aspire-aesthetics.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-[var(--accent)] mr-4 text-xl" />
                  <a href="tel:+441234567890" className="text-white hover:text-[var(--accent)] transition-all">
                    +44 (0) 123 456 7890
                  </a>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-[var(--accent)] mr-4 text-xl mt-1" />
                  <address className="text-white not-italic">
                    Aspire Aesthetics<br />
                    123 Beauty Street<br />
                    London, SW1 1AA<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </div>
            <div className="bg-[var(--primary)] p-10 elegant-shadow">
              <h3 className="text-2xl font-heading mb-6 text-white">Opening Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[var(--primary-dark)] border-opacity-20 pb-3">
                  <span className="text-white font-medium">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-[var(--primary-dark)] border-opacity-20 pb-3">
                  <span className="text-white font-medium">Saturday</span>
                  <span className="text-white">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
              <div className="mt-10">
                <a 
                  href="#" 
                  className="block w-full text-center bg-white text-[var(--primary)] py-3 hover:bg-[var(--primary-dark)] hover:text-white transition-all uppercase tracking-wider text-sm"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#22232A] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex flex-col items-center w-full md:w-auto">
              <Image
                src="/logo.png"
                alt="Aspire Aesthetics Logo"
                className="w-40 md:w-60 h-auto mb-4"
                width={200}
                height={40}
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a href="#services" className="text-gray-300 hover:text-[var(--accent)] transition-all">Services</a>
              <a href="#about" className="text-gray-300 hover:text-[var(--accent)] transition-all">About</a>
              <a href="#contact" className="text-gray-300 hover:text-[var(--accent)] transition-all">Contact</a>
              <a href="#" className="text-gray-300 hover:text-[var(--accent)] transition-all">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-[var(--accent)] transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <p className="text-gray-400 text-center text-sm">&copy; {new Date().getFullYear()} Aspire Aesthetics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
