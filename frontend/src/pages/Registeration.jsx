import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com'; // Import EmailJS
import Flier from '../assets/Flier2.jpeg';

function Registration() {
  const initialValues = { name: "", email: "", location: "", church: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to prevent double submission
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const messageRef = useRef(null); // Ref for scrolling

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple form submissions by disabling further submit actions
    if (isSubmitting) return;
    
    console.log("Form Values Before Submit: ", formValues); // Log form values before submission
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit && !isSubmitting) {
      // Prevent multiple submissions by setting isSubmitting to true
      setIsSubmitting(true);
      registerUser();
    } else {
      setIsSubmit(false); // Stop submission if there are errors
    }

    // Scroll to message ref if there's a message
    if (successMessage || errorMessage) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [formErrors, isSubmit, isSubmitting, navigate, successMessage, errorMessage]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // Check for mandatory fields
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.location) {
      errors.location = "Location is required!";
    }
    if (!values.church) {
      errors.church = "Church is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    } else if (!/^\d{10}$/.test(values.phone)) {
      // Phone number validation (10 digits for example)
      errors.phone = "Phone number must be 10 digits!";
    }

    return errors;
  };

  const registerUser = async () => {
    try {
      console.log("Form Data Being Sent: ", formValues); // Log form values being sent to the server
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      if (response.ok) {
        setFormValues(initialValues);
        setSuccessMessage("Thank you for registering!");
        setErrorMessage('');
        sendEmail(); // Call emailjs after successful registration
        setTimeout(() => {
          setIsSubmitting(false); // Re-enable form after successful submission
          navigate('/');
        }, 4000); // Navigate to index after 4 seconds
      } else {
        setErrorMessage("Registration failed! Please try again.");
        setSuccessMessage('');
        setIsSubmitting(false); // Re-enable form on failure
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage('');
      setIsSubmitting(false); // Re-enable form on error
    }
  };

  const sendEmail = () => {
    const templateParams = {
      name: formValues.name,
      email: formValues.email,
      location: formValues.location,
      church: formValues.church,
      phone: formValues.phone,
    };

    console.log("Sending email with params: ", templateParams); // Added logging

    emailjs.send(
      'service_2ctio3b', // Your service ID
      'template_05dafr4', // Your template ID
      templateParams,
      'vZ-qAuB2DrTy14Pp3' // Your public key
    ).then(
      (result) => {
        console.log('Email successfully sent!', result.text);
      },
      (error) => {
        console.log('Failed to send email.', error.text, error); // More detailed logging
      }
    );
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-200 max-w-md mt-20"> {/* Adjust margin-top for more space */}
        {/* Flier Image */}
        <img src={Flier} alt="Flier" className="w-full h-auto mb-6 rounded" /> {/* Increased bottom margin */}

        {/* Text Container */}
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold">Welcome to Supernatural Camp Meeting!</h1>
          <p className="text-gray-700">Join us for a wonderful experience.</p>
          <p className="text-gray-700">We look forward to seeing you there!</p>
          <p className="text-gray-700">Please register below to secure your spot.</p>
        </div>

        {/* Message Box */}
        <div ref={messageRef} className="mb-4 text-center">
          {successMessage && (
            <div className="bg-green-200 text-green-800 p-4 rounded shadow-md">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-200 text-red-800 p-4 rounded shadow-md">
              {errorMessage}
            </div>
          )}
        </div>

        {/* Registration Form */}
        <h2 className="text-xl font-bold text-center mb-4">Register Here</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form Fields */}
          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required // Set required
            />
            <p className="text-red-500 text-sm">{formErrors.name}</p>
          </div>
          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email" // Change type to email for validation
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required // Set required
            />
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          </div>
          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formValues.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required // Set required
            />
            <p className="text-red-500 text-sm">{formErrors.location}</p>
          </div>
          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Church</label>
            <input
              type="text"
              name="church"
              placeholder="Church"
              value={formValues.church}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required // Set required
            />
            <p className="text-red-500 text-sm">{formErrors.church}</p>
          </div>
          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel" // Change type to tel for better user experience
              name="phone"
              placeholder="Phone Number"
              value={formValues.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required // Set required
            />
            <p className="text-red-500 text-sm">{formErrors.phone}</p>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            disabled={isSubmitting} // Disable button during submission
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
