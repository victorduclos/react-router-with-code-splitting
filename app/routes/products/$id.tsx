import { Link } from "react-router";
import type { Route } from "./+types/$id";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Product ${params.id} - React Router App` },
    { name: "description", content: `Details for product ${params.id}` },
  ];
}

const products = [
  { 
    id: 1, 
    name: "Product A", 
    price: "$29.99", 
    description: "A great product for everyday use",
    longDescription: "This is our flagship product that has been carefully designed to meet the needs of everyday users. It features high-quality materials and exceptional craftsmanship.",
    features: ["Durable construction", "Easy to use", "Affordable price", "1-year warranty"]
  },
  { 
    id: 2, 
    name: "Product B", 
    price: "$49.99", 
    description: "Premium quality with advanced features",
    longDescription: "Our premium offering comes with advanced features that make it perfect for professional use. Built with the latest technology and premium materials.",
    features: ["Advanced technology", "Premium materials", "Professional grade", "2-year warranty", "24/7 support"]
  },
  { 
    id: 3, 
    name: "Product C", 
    price: "$19.99", 
    description: "Budget-friendly option",
    longDescription: "An excellent entry-level option that doesn't compromise on quality. Perfect for those looking for value without breaking the bank.",
    features: ["Great value", "Reliable performance", "Compact design", "6-month warranty"]
  },
];

export default function ProductDetail({ params }: Route.ComponentProps) {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);

    console.log('icicici')

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
        <p className="mb-4">The product you're looking for doesn't exist.</p>
        <Link to="/products" className="text-blue-500 hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-4">
            <span className="text-gray-500 text-lg">Product Image</span>
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.longDescription}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 flex-1">
              Add to Cart
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}