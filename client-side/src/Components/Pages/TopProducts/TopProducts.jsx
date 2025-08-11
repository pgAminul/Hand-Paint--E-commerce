import React from "react";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import Title from "../../Layout/ReusableComponents/Title";
import { Link } from "react-router";

const TopProducts = () => {
  const products = [
    {
      id: 1,
      name: "Floral Hand-Painted T-Shirt",
      category: "T-Shirts",
      price: 29.99,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=600&q=80",
      inStock: true,
    },
    {
      id: 2,
      name: "Abstract Art Denim Jacket",
      category: "Jackets",
      price: 59.99,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=600&q=80",
      inStock: true,
    },
    {
      id: 3,
      name: "Bohemian Painted Maxi Dress",
      category: "Dresses",
      price: 49.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=80",
      inStock: false,
    },
    {
      id: 4,
      name: "Painted Silk Scarf",
      category: "Scarves",
      price: 24.99,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=600&q=80",
      inStock: true,
    },
    {
      id: 1,
      name: "Floral Hand-Painted T-Shirt",
      category: "T-Shirts",
      price: 29.99,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=600&q=80",
      inStock: true,
    },
    {
      id: 2,
      name: "Abstract Art Denim Jacket",
      category: "Jackets",
      price: 59.99,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=600&q=80",
      inStock: true,
    },
    {
      id: 3,
      name: "Bohemian Painted Maxi Dress",
      category: "Dresses",
      price: 49.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=80",
      inStock: false,
    },
    {
      id: 4,
      name: "Painted Silk Scarf",
      category: "Scarves",
      price: 24.99,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=600&q=80",
      inStock: true,
    },
  ];

  return (
    <section className="py-10 px-4 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <Title
          title={"Our Top Products"}
          description={
            "Discover unique wearable art pieces crafted by talented artisans"
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
            >
              <figure className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {!product.inStock && (
                  <div className="badge badge-error absolute top-3 right-3">
                    Out of Stock
                  </div>
                )}
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-base">{product.name}</h2>
                <p className="text-sm opacity-70">{product.category}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-primary">
                    ${product.price}
                  </span>
                  <div className="rating rating-sm">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${product.id}`}
                        className="mask mask-star-2 bg-yellow-400"
                        checked={i < Math.round(product.rating)}
                        readOnly
                      />
                    ))}
                  </div>
                </div>
                <div className="card-actions mt-4 flex justify-between">
                  <button
                    className={`btn btn-primary btn-sm gap-1 ${
                      !product.inStock ? "btn-disabled" : ""
                    }`}
                  >
                    <FiShoppingCart /> Add
                  </button>
                  <button
                    className={`btn btn-outline btn-sm ${
                      !product.inStock ? "btn-disabled" : ""
                    }`}
                  >
                    <FiEye /> View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/all-products" className="btn btn-primary px-8">
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
