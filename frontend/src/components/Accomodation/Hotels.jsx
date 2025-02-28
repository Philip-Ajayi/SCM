import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Dummy Data for Restaurants and Hotels
const restaurants = [
  {
    name: "Chick Fil A",
    address: "2140 W Ridge Rd, Greece, NY 14626",
    url: "https://www.chick-fil-a.com/locations/ny/greece",
    img: "https://static.cfacdn.com/photos/restaurants/04005/large.jpg",
  },
  {
    name: "Five Guys",
    address: "1948 W Ridge Rd, Greece, NY 14626",
    url: "https://order.fiveguys.com/location/greece/menu",
    img: "https://dynl.mktgcdn.com/p/SVNYZ2BC7Z6GDLsHGy77BaPBmg59ViAF6cPmYnJdd3Q/450x450.jpg",
  },
  {
    name: "McDonald's",
    address: "2341 Ridge Rd W Rochester, NY 14626",
    url: "https://www.mcdonalds.com/us/en-us/location/ny/rochester/2341-ridge-rd-w/6290.html",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0xqXFvWM4sVMHsFQ2NHmUYOsA0wFPDo3sw&s",
  },
  {
    name: "Chipotle",
    address: "1847 Ridge Rd, Rochester, NY 14615",
    url: "https://locations.chipotle.com/ny/rochester/1847-w-ridge-rd",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6Q77zLziKRFupZ0M_WfhpIg91aP60zePpA&s",
  },
  {
    name: "Outback Steakhouse",
    address: "1954 W Ridge Rd, Rochester, NY 14626",
    url: "https://locations.outback.com/new-york/rochester/1954-west-ridge-road",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbF2FmrGJDZzkuS85-CVrnRF2xum3G7vBgQ&s",
  },
  {
    name: "Olive Garden",
    address: "100 Paddy Creek Cir, Rochester, NY 14615",
    url: "https://www.olivegarden.com/locations/ny/rochester/rochester-greece-ny-paddy-creek-circle/1420",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeC6M5-97YSSRmGoKRjJZ5Zj_huUZohXhuA&s",
  },
  {
    name: "Longhorns Steakhouse",
    address: "1837 W Ridge Rd, Greece, NY 14626",
    url: "https://www.longhornsteakhouse.com/locations/ny/greece/greece-ny/5387",
    img: "https://fastly.4sqi.net/img/general/600x600/42471451_13C0699_pCEpvbDPqozG2f4ig-NTlKyiWyJN9-wLd4A.jpg",
  },
];

const hotels = [
  {
    name: "Rochester Airport Marriott",
    address: "1890 Ridge Rd W, Rochester, NY 14626",
    url: "https://www.marriott.com/en-us/hotels/rocap-rochester-airport-marriott/rooms/",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/430828041.jpg?k=ee0120d16b06232cb10763572affbdabcd6e76e79b18f481567a2c03820a0132&o=&hp=1",
  },
  {
    name: "Fairfield Inn Rochester Airport",
    address: "1200 Brooks Ave, Rochester, NY 14624",
    url: "https://www.marriott.com/en-us/hotels/rocfg-fairfield-inn-and-suites-rochester-west-greece/overview/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5jwNVCfMIu5ZD5XH8ppmvX6-2T2Xhgyncg&s",
  },
  {
    name: "Microtel Inn & Suites, Chili/Rochester",
    address: "3258 Chili Ave, Rochester, NY 14624",
    url: "https://www.wyndhamhotels.com/microtel/rochester-new-york/microtel-inn-and-suites-chili-rochester-airport/overview?CID=LC:5b3ss9kd80xe5ox:31905&iata=00093796",
    img: "https://cf.bstatic.com/xdata/images/hotel/max500/156512801.jpg?k=16cff1a05fdbdfb4a1d3bf0effb792491c7c406176865e410958e8b91692db44&o=&hp=1",
  },
];

// Card Component
const Card = ({ name, address, url, img }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
      <img src={img} alt={name} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-4">{name}</h3>
      <p className="text-gray-500">{address}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 hover:underline">Visit Website</a>
    </div>
  );
};

// Swiper Component
const SwiperComponent = ({ items, title }) => {
  useEffect(() => {
    const swiper = new Swiper(`.${title.toLowerCase().replace(/\s/g, '-')}-swiper`, {
      modules: [Navigation, Pagination],
      spaceBetween: 20,
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: `.${title.toLowerCase().replace(/\s/g, '-')}-swiper-button-next`,
        prevEl: `.${title.toLowerCase().replace(/\s/g, '-')}-swiper-button-prev`,
      },
      pagination: {
        el: `.${title.toLowerCase().replace(/\s/g, '-')}-swiper-pagination`,
        clickable: true,
      },
    });
  }, [title]);

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
      <div className={`swiper ${title.toLowerCase().replace(/\s/g, '-')}-swiper`}>
        <div className="swiper-wrapper">
          {items.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <Card {...item} />
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <div className={`swiper-button-next ${title.toLowerCase().replace(/\s/g, '-')}-swiper-button-next`} />
        <div className={`swiper-button-prev ${title.toLowerCase().replace(/\s/g, '-')}-swiper-button-prev`} />
        {/* Pagination */}
        <div className={`swiper-pagination ${title.toLowerCase().replace(/\s/g, '-')}-swiper-pagination`} />
      </div>
    </div>
  );
};

// Main Component
const Hotels = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Restaurants & Hotels</h1>
      <SwiperComponent items={restaurants} title="Restaurants" />
      <SwiperComponent items={hotels} title="Hotels" />
    </div>
  );
};

export default Hotels;
