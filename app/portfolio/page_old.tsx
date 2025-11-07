"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "commercial", "residential", "institutional", "hospitality"];

  const projects = [
    {
      id: 1,
      title: "Tech Campus Headquarters",
      category: "commercial",
      location: "Silicon Valley, CA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      description: "A 500,000 sq ft innovation hub featuring sustainable design and collaborative workspaces"
    },
    {
      id: 2,
      title: "Luxury Residential Tower",
      category: "residential",
      location: "New York, NY",
      year: "2023",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2035",
      description: "45-story high-rise with premium amenities and breathtaking city views"
    },
    {
      id: 3,
      title: "Modern Art Museum",
      category: "institutional",
      location: "London, UK",
      year: "2022",
      image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?q=80&w=2076",
      description: "Contemporary museum space celebrating art and architecture in harmony"
    },
    {
      id: 4,
      title: "Boutique Hotel & Spa",
      category: "hospitality",
      location: "Bali, Indonesia",
      year: "2022",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      description: "45-room luxury resort integrating traditional aesthetics with modern comfort"
    },
    {
      id: 5,
      title: "Corporate Office Redesign",
      category: "commercial",
      location: "Dubai, UAE",
      year: "2023",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
      description: "Complete interior transformation promoting wellness and productivity"
    },
    {
      id: 6,
      title: "University Library",
      category: "institutional",
      location: "Boston, MA",
      year: "2021",
      image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2095",
      description: "State-of-the-art learning center with flexible spaces and advanced technology"
    },
    {
      id: 7,
      title: "Private Villa Estate",
      category: "residential",
      location: "Malibu, CA",
      year: "2022",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
      description: "Oceanfront masterpiece blending indoor-outdoor living with sustainable features"
    },
    {
      id: 8,
      title: "Restaurant & Lounge",
      category: "hospitality",
      location: "Paris, France",
      year: "2023",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
      description: "Sophisticated dining experience with bespoke interiors and ambient lighting"
    },
    {
      id: 9,
      title: "Retail Flagship Store",
      category: "commercial",
      location: "Tokyo, Japan",
      year: "2023",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
      description: "Innovative retail space creating immersive brand experiences"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070"
            alt="Our Portfolio"
            fill
            className="object-cover"
          />
        </div>
        
        <motion.div 
          className="relative z-20 container-custom text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-1 mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-neutral-200">
            Transformative projects that showcase our commitment to design excellence
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-0 z-40 border-b">
        <div className="container-custom">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${
                  activeFilter === filter
                    ? "bg-primary-700 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="flex items-center gap-2 text-white font-medium">
                        View Project
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-6">Want to See More?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-100">
              Get in touch to learn about our full portfolio and how we can help with your project
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-sm hover:bg-neutral-100 transition-colors duration-300 font-semibold text-lg">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
