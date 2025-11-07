"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Globe, Heart } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const team = [
    {
      name: "Sarah Anderson",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
      bio: "20+ years of experience in sustainable architecture"
    },
    {
      name: "Michael Chen",
      role: "Interior Design Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500",
      bio: "Award-winning designer with international portfolio"
    },
    {
      name: "Emma Williams",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500",
      bio: "Expert in large-scale construction management"
    },
    {
      name: "David Martinez",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500",
      bio: "Specialist in contemporary commercial design"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069"
            alt="About Us"
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
          <h1 className="heading-1 mb-6">About Taswill</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-neutral-200">
            Pioneering design excellence and delivering transformative spaces for over 15 years
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="heading-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  Founded in 2008, Taswill emerged from a vision to redefine the architectural landscape by seamlessly integrating design excellence with sustainable practices and innovative project management.
                </p>
                <p>
                  What started as a small studio has grown into a full-service consultancy, serving clients across residential, commercial, and institutional sectors. Our multidisciplinary approach combines the creative vision of architecture with the practical precision of project management and the aesthetic refinement of interior design.
                </p>
                <p>
                  Today, we're proud to have completed over 150 projects, each reflecting our commitment to quality, sustainability, and client satisfaction. Our work has been recognized with numerous industry awards and has been featured in leading architecture publications.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-sm overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="heading-2 mb-4">Our Core Values</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Uncompromising commitment to quality in every detail"
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Working closely with clients and partners to achieve shared goals"
              },
              {
                icon: Globe,
                title: "Sustainability",
                description: "Designing for the future with environmental responsibility"
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "Building trust through transparency and ethical practice"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-primary-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="heading-2 mb-4">Meet Our Team</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-80 mb-4 overflow-hidden rounded-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-700 font-medium mb-2">{member.role}</p>
                <p className="text-neutral-600 text-sm">{member.bio}</p>
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
            <h2 className="heading-2 mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-100">
              Let's create something extraordinary together
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-sm hover:bg-neutral-100 transition-colors duration-300 font-semibold text-lg">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
