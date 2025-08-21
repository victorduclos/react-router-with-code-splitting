import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - React Router App" },
    { name: "description", content: "Learn more about our React Router application" },
  ];
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our React Router application! This is a demonstration of routing
        capabilities in a modern React application.
      </p>
      <p className="text-lg">
        This page showcases how easy it is to add new routes and create
        a multi-page experience with React Router.
      </p>
    </div>
  );
}