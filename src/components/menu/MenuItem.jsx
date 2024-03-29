import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img
          className="max-h-auto max-h-24 block mx-auto"
          src="/pizza.png"
          alt="Pizza"
        />
      </div>
      <h4 className="font-semibold my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        expedita.
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
        Add to cart $6
      </button>
    </div>
  );
};

export default MenuItem;
