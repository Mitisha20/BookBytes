import React from 'react';

function Cards({ item }) {
  console.log(item);
  return (
    <div className='max-w-screen-2xl container md:px-10 px-4 mt-20 mb-5 hover:scale-110 duration-100 '>
      <div className="card shadow-2xl bg-white rounded-lg overflow-hidden max-w-sm mx-auto transition-shadow duration-300 ease-in-out hover:shadow-3xl ">
        <figure className="overflow-hidden h-64">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-contain" 
          />
        </figure>
        <div className="card-body p-4">
          <div>
            <h2 className="card-title text-2xl font-bold  flex items-center">
              {item.name}
              <span className="badge badge-secondary bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-2 py-3 px-3 text-sm rounded-md">
                {item.category}
              </span>
            </h2>
          </div>
          <div className="text-gray-700 mb-2">
            <p>{item.description}</p>
          </div>
          <div className="card-actions flex justify-between items-center">
            <div className="badge badge-outline bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full">
              ₹{item.price}
            </div>
            <div className="badge badge-outline bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full ml-auto hover:bg-white hover:text-transparent hover:bg-clip-text hover:border hover:border-blue-500 hover:border-solid hover:from-blue-500 hover:to-purple-600 ">
              <span className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent ">Buy Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
