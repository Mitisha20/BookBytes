import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';

import list from '../../public/list.json';

function Freebook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 overflow-hidden'>
        <h1 className="font-bold text-black text-2xl">Free Offered Courses</h1>
        <p className='text-black mt-2 md:mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum consequuntur beatae vel quasi nemo laborum veritatis labore magni. Incidunt neque praesentium necessitatibus dignissimos rem in sunt quisquam eos nam.
        </p>
      </div>

      <div className='max-w-screen-2xl container mx-auto px-7 '>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
