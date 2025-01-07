import { useContext, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from '../components/Title';
import { Heart } from 'phosphor-react';

export default function Wishlist() {
  const [sizes, setSizes] = useState({}); // Object to track sizes per product
  const [clicked, setClick] = useState(false);
  const { wishlist, addtocart, addtowishlist, click } = useContext(ShopContext);

  const handleSizeSelect = (productId, sizeOption) => {
    setSizes((prev) => ({ ...prev, [productId]: sizeOption }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Title text1="My" text2="Wishlist" />
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          <p>Your wishlist is currently empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow p-4"
            >
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-full md:w-[50vw] object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <div className="flex justify-between items-center">
                  <p className="text-md font-bold text-gray-900 mt-2">
                    ${item.price}
                  </p>
                  <Heart
                    size={24}
                    weight="fill"
                    className={`cursor-pointer ${
                      click[item._id] ? 'text-red-400' : ''
                    }`}
                    onClick={() => {
                      setClick(click[item._id]);
                      addtowishlist(item._id);
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  {item.sizes?.map((sizeOption, index) => (
                    <button
                      key={index}
                      onClick={() => handleSizeSelect(item._id, sizeOption)}
                      className={`px-5 py-2 border-2 rounded-lg transition ${
                        sizes[item._id] === sizeOption
                          ? 'border-black bg-gray-100'
                          : 'border-gray-300'
                      }`}
                    >
                      {sizeOption}
                    </button>
                  ))}
                </div>

                <button
                  className="w-full mt-4 bg-red-500 text-white rounded-lg py-2 px-4 font-semibold hover:bg-red-600 transition duration-300 ease"
                  onClick={() => addtocart(item._id, sizes[item._id])}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
