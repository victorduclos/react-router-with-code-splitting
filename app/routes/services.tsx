import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services - React Router App" },
    { name: "description", content: "Discover our professional services" },
  ];
}

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    icon: "🌐",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that drives engagement",
    icon: "🎨",
  },
  {
    title: "Consulting",
    description: "Strategic technology consulting for your business",
    icon: "💡",
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}