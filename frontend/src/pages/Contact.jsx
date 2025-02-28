import React, { useState } from 'react';
import { MdPlace, MdEmail, MdLocalPhone } from 'react-icons/md';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs.send('service_2ctio3b', 'template_2sc4sl1', templateParams, 'vZ-qAuB2DrTy14Pp3')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setTimeout(() => {
          navigate('/'); // Navigate to home after success
        }, 2000); // Wait 2 seconds before navigating
      }, (err) => {
        console.log('FAILED...', err);
        setError(true);
      });
  };

  return (
    <div className="min-h-screen bg-gray-200 py-10">
      <br /><br />
      <div className="text-center mb-12"> {/* Original margin-bottom for the header */}
        <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
        <p className="text-xl text-gray-600 mt-2">Get in touch</p>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-10 mt-10 lg:mt-20 justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 w-full lg:max-w-md"
        >
          <ContactInfoItem icon={<MdLocalPhone />} text="585 210 5038" />
          <ContactInfoItem icon={<MdEmail />} text="supernaturalcommunitychurch@gmail.com" />
          <ContactInfoItem icon={<MdPlace />} text="1400 Leigh Station Road, Rochester, NY 14467" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 p-8 rounded-lg w-full lg:max-w-md"
        >
          <form className="space-y-6" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name" className="text-white">
                Your Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required // Make this field required
                  className="w-full mt-2 p-2 text-gray-900 rounded-md"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-white">
                Your Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required // Make this field required
                  className="w-full mt-2 p-2 text-gray-900 rounded-md"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="text-white">
                Your Phone Number
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required // Make this field required
                  className="w-full mt-2 p-2 text-gray-900 rounded-md"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="text-white">
                Your Message
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required // Make this field required
                  className="w-full mt-2 p-2 text-gray-900 rounded-md h-32 resize-y"
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-400 text-black font-semibold rounded-md"
            >
              Send
            </button>
            {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
            {error && <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function ContactInfoItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg overflow-hidden"> {/* Add overflow-hidden */}
      <div className="p-4 bg-gray-700 text-white rounded-full">{icon}</div>
      <p className="text-white text-xl break-all w-full overflow-hidden"> {/* Ensure full width and allow word breaking */}
        {text}
      </p>
    </div>
  );
}
