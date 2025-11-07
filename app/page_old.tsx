"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Lightbulb, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
            alt="Modern Architecture"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <motion.div 
          className="relative z-20 container-custom text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="heading-1 mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Designing Spaces That Inspire Excellence
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-neutral-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Integrated architecture, interior design, and project management solutions delivered to global standards
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/portfolio" className="btn-primary inline-flex items-center justify-center gap-2">
              View Our Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="heading-2 mb-4">Our Expertise</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive design and management services tailored to bring your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Project Management",
                description: "End-to-end project coordination ensuring timely delivery within budget",
                icon: Target,
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
              },
              {
                title: "Architecture",
                description: "Innovative architectural solutions that blend form, function, and sustainability",
                icon: Lightbulb,
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031"
              },
              {
                title: "Interior Design",
                description: "Bespoke interior spaces that reflect your brand and enhance user experience",
                icon: Award,
                image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="w-10 h-10 mb-2" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <Link href="/services" className="text-primary-700 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "25+", label: "Team Members" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-400">{stat.number}</div>
                <div className="text-neutral-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="heading-2 mb-4">Featured Projects</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A showcase of our most impactful work across diverse sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Modern Corporate Headquarters",
                category: "Commercial Architecture",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              },
              {
                title: "Luxury Residential Complex",
                category: "Interior Design",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2035"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative h-96 overflow-hidden rounded-sm cursor-pointer"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform">
                  <div className="text-accent-400 text-sm font-medium mb-2">{project.category}</div>
                  <h3 className="text-3xl font-serif font-semibold mb-4">{project.title}</h3>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 text-white font-medium">
                    View Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/portfolio" className="btn-primary inline-flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Why Choose Taswill</h2>
              <p className="text-lg text-neutral-600 mb-8">
                We bring together decades of experience, innovative thinking, and a commitment to excellence that sets us apart in the industry.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Award-Winning Design",
                    description: "Recognized globally for innovative and sustainable design solutions"
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Multidisciplinary professionals with international experience"
                  },
                  {
                    icon: Target,
                    title: "Client-Focused",
                    description: "Tailored solutions that exceed expectations and deliver results"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative h-[600px] rounded-sm overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </motion.div>
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
            <h2 className="heading-2 mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-100">
              Let's collaborate to create something extraordinary. Get in touch with our team today.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-sm hover:bg-neutral-100 transition-colors duration-300 font-semibold text-lg">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
