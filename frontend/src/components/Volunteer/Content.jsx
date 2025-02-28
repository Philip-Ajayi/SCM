import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Content = () => {
  const content = [
    {
      title: 'Choir Team',
      text: 'Join our Church Choir to lift spirits and create a joyful atmosphere through music. Whether you sing or play an instrument, your talents can inspire and uplift our congregation',
      emailParams: {
        serviceId: 'service_duc6trr',
        templateId: 'template_puhs71b',
        userId: 'wuxzX4ebXWZPvRSed',
      }
    },
    {
      title: 'Media Team',
      text: 'Join our Media Team and help us capture and share the essence of our services. From video production to social media management, your skills will enhance our outreach and connect with our community.',
      emailParams: {
        serviceId: 'service_example2',
        templateId: 'template_example2',
        userId: 'example2UserId',
      }
    },
    {
      title: 'Ushering Team',
      text: 'Become a member of our Ushering Team and be the friendly face that greets attendees. Help create a welcoming environment by guiding guests, distributing materials, and ensuring everyone feels at home',
      emailParams: {
        serviceId: 'service_example3',
        templateId: 'template_example3',
        userId: 'example3UserId',
      }
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedParams, setSelectedParams] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState(''); // 'success' or 'error'

  const handleOpenModal = (emailParams) => {
    setSelectedParams(emailParams);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', phone: '' });
    setFeedbackMessage('');
    setFeedbackType('');
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    emailjs.send(
      selectedParams.serviceId,
      selectedParams.templateId,
      templateParams,
      selectedParams.userId
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFeedbackMessage('Your message has been sent successfully!');
        setFeedbackType('success');
        setFormData({ name: '', email: '', phone: '' });
      },
      (error) => {
        console.log('FAILED...', error);
        setFeedbackMessage('There was an error sending your message. Please try again.');
        setFeedbackType('error');
      }
    );
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Introductory Text */}
      <p className="text-lg text-justify mb-6">
      We invite you to become a vital part of our community by volunteering at the church. Your time and talents can make a meaningful impact in the lives of others. Whether you're passionate about hospitality, teaching, or organizing events, there’s a place for you here. Together, we can serve our community and grow in faith. Sign up today to join a team that makes a difference!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {content.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-10"
          >
            {/* Image */}
            <img
              src="/src/assets/Art.jpg" // Direct image path
              alt={`Teaching ${index + 1}`}
              className="w-full lg:w-1/3 h-auto max-w-xs lg:max-w-none rounded-md shadow-lg"
            />

            {/* Header, Text, and Button */}
            <div className="flex flex-col justify-start">
              <h2 className="text-2xl font-bold text-gray-800 lg:mb-4">{item.title}</h2>
              <p className="text-gray-600 text-justify leading-relaxed">{item.text}</p>

              <button
                onClick={() => handleOpenModal(item.emailParams)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-auto"
              >
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <div>
                <label className="block">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <div>
                <label className="block">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                Send
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="ml-4 text-red-500"
              >
                Cancel
              </button>
            </form>

            {/* Feedback message */}
            {feedbackMessage && (
              <div className={`mt-4 p-2 rounded ${feedbackType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {feedbackMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
