// AboutUs.jsx
import React from 'react';
import Navbar from './Navbar';

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className='mt-16 flex flex-col items-center justify-center min-h-screen bg-white p-4'>
        <div className='w-full max-w-3xl'>
          <h3 className="font-bold text-3xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center mb-6">About BookBytes</h3>
          <div className="text-black space-y-4 text-justify">
            <p>
              Welcome to <strong>BookBytes</strong>! Your ultimate destination for ebooks. At BookBytes, we believe in the power of reading and the accessibility of knowledge. We provide a wide range of ebooks that you can download for free or purchase to expand your collection.
            </p>
            <p>
              Our mission is to make reading accessible and enjoyable for everyone. Whether you are a casual reader or a bibliophile, you'll find something to suit your tastes in our extensive library. We strive to offer a diverse selection of genres, including fiction, non-fiction, self-help, academic, and much more.
            </p>
            <p>
              At BookBytes, we are committed to quality and convenience. Our easy-to-use platform allows you to browse, download, and purchase ebooks with ease. We work closely with authors and publishers to bring you the latest releases as well as timeless classics.
            </p>
            <p>
              Our team is passionate about books and dedicated to providing you with the best possible experience. We continuously update our library and improve our platform to meet the needs of our growing community of readers.
            </p>
            <p>
              Thank you for choosing BookBytes. We hope you enjoy your reading journey with us!
            </p>
          </div>
          <div className='mt-8 flex items-center justify-center'>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-8 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out 
              hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
