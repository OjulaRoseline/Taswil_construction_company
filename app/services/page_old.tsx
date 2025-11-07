"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Compass, Palette, Leaf, Eye, FileCheck } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: Target,
      title: "Project Management",
      description: "Comprehensive oversight from concept to completion",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
      features: [
        "Budget planning and control",
        "Schedule management",
        "Quality assurance",
        "Risk mitigation",
        "Stakeholder coordination",
        "Regulatory compliance"
      ]
    },
    {
      icon: Compass,
      title: "Architecture",
      description: "Innovative design solutions that inspire and endure",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031",
      features: [
        "Concept design",
        "Schematic design",
        "Design development",
        "Construction documentation",
        "3D modeling & BIM",
        "Site analysis"
      ]
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Thoughtfully crafted interiors that enhance everyday life",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
      features: [
        "Space planning",
        "Material selection",
        "Furniture design",
        "Lighting design",
        "Color consultation",
        "Custom millwork"
      ]
    },
    {
      icon: Leaf,
      title: "Sustainability Consulting",
      description: "Environmentally responsible design for a better future",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
      features: [
        "LEED certification",
        "Energy modeling",
        "Sustainable material sourcing",
        "Green building strategies",
        "Life cycle assessment",
        "Carbon footprint analysis"
      ]
    },
    {
      icon: Eye,
      title: "3D Visualization",
      description: "Photorealistic renderings that bring designs to life",
      image: "https://images.unsplash.com/photo-1596276020587-8044fe049813?q=80&w=2071",
      features: [
        "Architectural rendering",
        "Virtual reality tours",
        "Animation & walkthroughs",
        "Material studies",
        "Lighting simulations",
        "Marketing visuals"
      ]
    },
    {
      icon: FileCheck,
      title: "Consulting Services",
      description: "Expert guidance for complex design challenges",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
      features: [
        "Feasibility studies",
        "Code compliance review",
        "Design audits",
        "Value engineering",
        "Expert witness testimony",
        "Strategic planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069"
            alt="Our Services"
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
          <h1 className="heading-1 mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-neutral-200">
            Comprehensive design and management solutions tailored to your unique needs
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-700" />
                  </div>
                  <h2 className="heading-3 mb-4">{service.title}</h2>
                  <p className="text-lg text-neutral-700 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary inline-block"
                  >
                    Discuss Your Project
                  </Link>
                </div>

                <div className={`relative h-[500px] rounded-sm overflow-hidden ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">Our Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your vision, requirements, and constraints"
              },
              {
                step: "02",
                title: "Design",
                description: "Creating innovative solutions that exceed expectations"
              },
              {
                step: "03",
                title: "Development",
                description: "Refining details and preparing for implementation"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Managing execution to ensure flawless completion"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl font-serif font-bold text-primary-200 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-neutral-600">{phase.description}</p>
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
            <h2 className="heading-2 mb-6">Let's Bring Your Vision to Life</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-100">
              Contact us today to discuss how we can help with your next project
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-sm hover:bg-neutral-100 transition-colors duration-300 font-semibold text-lg">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
