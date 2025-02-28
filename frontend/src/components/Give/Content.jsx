import React from 'react';
import { FaPaypal, FaDollarSign } from 'react-icons/fa'; // Font Awesome icons
import { SiZelle, SiVenmo } from 'react-icons/si'; // Simple Icons for Zelle and Venmo

const Content = () => {
  return (
    <div className="container mx-auto px-4 py-10 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-800">
        Support the Supernatural Camp Meeting
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        Your generous contributions make it possible for us to host the Supernatural Camp Meeting and expand our mission of faith, transformation, and growth. Together, we can spread the message of hope and empower people globally. 
        Every donation makes a difference. Choose one of the secure platforms below to give.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Zelle */}
        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
          <SiZelle className="text-purple-700 text-6xl mb-3" />
          <p className="font-semibold text-xl text-gray-800">Zelle</p>
          <p className="text-md text-gray-600">Supernaturalcommunitychurch@gmail.com</p>
        </div>

        {/* Cash App */}
        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
          <FaDollarSign className="text-green-600 text-6xl mb-3" />
          <p className="font-semibold text-xl text-gray-800">Cash App</p>
          <p className="text-md text-gray-600">$Supernaturalchurch</p>
        </div>

        {/* Venmo */}
        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
          <SiVenmo className="text-blue-600 text-6xl mb-3" />
          <p className="font-semibold text-xl text-gray-800">Venmo</p>
          <p className="text-md text-gray-600">@Supernatural-communitychurch</p>
        </div>

        {/* PayPal */}
        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
          <FaPaypal className="text-blue-700 text-6xl mb-3" />
          <p className="font-semibold text-xl text-gray-800">PayPal</p>
          <p className="text-md text-gray-600">Supernaturalcommunitychurch@gmail.com</p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-6">
        Alternatively, you can make your donation through our website at: 
        <a href="http://www.super.ogg" className="text-purple-700 underline ml-1">www.supernaturalcc.org</a>
      </p>

      <p className="text-md text-gray-600">
        Your support enables us to organize life-changing sessions that inspire and empower people to discover their purpose and walk in the fullness of their calling.
      </p>
    </div>
  );
};

export default Content;
