import React from 'react';

// Importing eBooks (PDFs)
import MyCellAndI from '../../assets/My cell and I.pdf';
import AFreshStart from '../../assets/A Fresh Start.pdf';
import OurSantification from '../../assets/Our Santification.pdf';
import OvercomingSelfCondemnation from '../../assets/Overcoming Self Condemnation.pdf';
import PrayForUs from '../../assets/Pray for us.pdf';
import Revival from '../../assets/Revival.pdf';
import BelieversHandInMinistry from '../../assets/THE BELIEVER’S HAND IN MINISTRY.pdf';
import CultureOfAccountability from '../../assets/The Culture of accountability.pdf';
import WalkingOnWater from '../../assets/Walking on Water.pdf';
import WalkingWithGod from '../../assets/Walking with God.pdf';

// Importing the logo for the image URL
import logo from '../../assets/logo.jpg';

// Array of eBooks (title, image, and pdf download link)
const ebookData = [
  {
    title: 'My Cell and I',
    pdfUrl: MyCellAndI,
    imageUrl: logo
  },
  {
    title: 'A Fresh Start',
    pdfUrl: AFreshStart,
    imageUrl: logo
  },
  {
    title: 'Our Sanctification',
    pdfUrl: OurSantification,
    imageUrl: logo
  },
  {
    title: 'Overcoming Self Condemnation',
    pdfUrl: OvercomingSelfCondemnation,
    imageUrl: logo
  },
  {
    title: 'Pray for Us',
    pdfUrl: PrayForUs,
    imageUrl: logo
  },
  {
    title: 'Revival',
    pdfUrl: Revival,
    imageUrl: logo
  },
  {
    title: 'The Believer’s Hand in Ministry',
    pdfUrl: BelieversHandInMinistry,
    imageUrl: logo
  },
  {
    title: 'The Culture of Accountability',
    pdfUrl: CultureOfAccountability,
    imageUrl: logo
  },
  {
    title: 'Walking on Water',
    pdfUrl: WalkingOnWater,
    imageUrl: logo
  },
  {
    title: 'Walking with God',
    pdfUrl: WalkingWithGod,
    imageUrl: logo
  }
];

const Content = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Download Our eBooks</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ebookData.map((ebook, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={ebook.imageUrl}
              alt={ebook.title}
              className="w-full h-48 object-contain mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">{ebook.title}</h2>
            <a
              href={ebook.pdfUrl}
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Download Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
