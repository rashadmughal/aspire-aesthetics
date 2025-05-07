import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Aspire Aesthetics Logo"
              width={300}
              height={60}
              priority
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-500 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-bg.svg"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Welcome to Aspire Aesthetics</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Experience luxury beauty and spa treatments in a serene environment.</p>
          <a 
            href="#contact" 
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Facial Treatments</h3>
              <p className="text-gray-600">Rejuvenate your skin with our premium facial treatments tailored to your skin type.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Body Treatments</h3>
              <p className="text-gray-600">Relax and unwind with our range of body treatments designed to relieve stress and tension.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Beauty Therapy</h3>
              <p className="text-gray-600">Enhance your natural beauty with our professional beauty therapy services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              At Aspire Aesthetics, we are dedicated to providing exceptional beauty and spa services in a luxurious and relaxing environment. 
              Our team of experienced professionals uses only the highest quality products to ensure you receive the best possible treatment.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re looking for a quick beauty fix or a full day of pampering, we have the perfect service for you. 
              Visit us today and experience the Aspire difference.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-500 mr-3" />
                  <a href="mailto:info@aspire-aesthetics.com" className="text-gray-600 hover:text-blue-500 transition-colors">
                    info@aspire-aesthetics.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-blue-500 mr-3" />
                  <a href="tel:+441234567890" className="text-gray-600 hover:text-blue-500 transition-colors">
                    +44 (0) 123 456 7890
                  </a>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-500 mr-3 mt-1" />
                  <address className="text-gray-600 not-italic">
                    Aspire Aesthetics<br />
                    123 Beauty Street<br />
                    London, SW1 1AA<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Opening Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Aspire Aesthetics. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
