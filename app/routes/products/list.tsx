import { Link } from "react-router";
import type { Route } from "./+types/list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products - React Router App" },
    { name: "description", content: "Browse our product catalog" },
  ];
}

const products = [
  { id: 1, name: "Product A", price: "$29.99", description: "A great product for everyday use" },
  { id: 2, name: "Product B", price: "$49.99", description: "Premium quality with advanced features" },
  { id: 3, name: "Product C", price: "$19.99", description: "Budget-friendly option" },
];

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-blue-600 mb-3">{product.price}</p>
            <div className="flex flex-col space-y-2">
              <Link 
                to={`/products/${product.id}`}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
              >
                View Details
              </Link>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}