import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const services = [
    {
      name: "Essential Website",
      timeline: "1-3 weeks",
      description: "A Clean, professional site with everything your customers need to find you.",
      features: [
        "Business info, hours, & location",
        "Professional contact form", 
        "Responsive sizing for phones & tablets",
        "Optimized for search",
        "Up to 3 pages"
      ],
      popular: false
    },
    {
      name: "Professional Website", 
      timeline: "2-4 weeks",
      description: "A custom site to showcase your brand and grow your business online.",
      features: [
        "Everything in Essential",
        "Custom forms (cake orders, quotes, etc.)",
        "Photo galleries to showcase your work",
        "6 months of small updates included",
        "Up to 6 custom pages"
      ],
      popular: true
    },
    {
      name: "Custom Solution",
      timeline: "4-8 weeks",
      description: "A functional webapp with specialized features to serve your customers online.", 
      features: [
        "Everything in Professional",
        "Customer logins and accounts",
        "Online booking & reservations",
        "Online payments through PayPal/Stripe",
        "Training on use and management"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Websites for Local Businesses
          </h2>
          <p className="text-lg text-slate-300">
            Fast, accessible websites that work for your customers and grow with your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl border p-6 bg-slate-800/50 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-rose-900/20 ${
                service.popular 
                  ? 'border-rose-400 ring-1 ring-rose-400/20' 
                  : 'border-fuchsia-400'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Header */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-rose-300 mb-1">
                  {service.name}
                </h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-400">{service.timeline}</span>
                </div>
                <p className="text-sm text-slate-300">{service.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-500 mt-1 flex-shrink-0">✓</span>
                    <span className={featureIdx === 0 && idx > 0 ? 'text-slate-400 italic' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href="#contact" 
                className={`block text-center rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  service.popular
                    ? 'bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white hover:opacity-90'
                    : 'border border-rose-300 text-rose-300 hover:bg-rose-500/10'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <p>All options come with a discovery call to better understand your specific business needs.</p>
          <p className="text-sm text-slate-400 mb-4">
            Not sure which option fits your needs? Let's chat about your project.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center rounded-xl border border-amber-400 px-6 py-3 font-medium text-amber-400 hover:bg-amber-400/10 transition-colors"
          >
            Schedule a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}