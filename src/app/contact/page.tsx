import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든
            연락해 주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MdEmail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <a
                      href="mailto:example@email.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      example@email.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MdPhone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <a
                      href="tel:+821012345678"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +82 10-1234-5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MdLocationOn className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Location</h3>
                    <p className="text-gray-600">Seoul, South Korea</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Social Links
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://github.com/jbj338033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/jbj338033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/jbj338033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="전민오"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="메시지 제목"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="메시지 내용을 입력해주세요."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
