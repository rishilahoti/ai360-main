"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiRocketLaunchOutline } from "@mdi/js";

const Product = ({ title, description, features, image }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`border-t border-gray-200 py-12 transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-3xl font-light mb-6">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          {features && (
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Includes:</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="block h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={image?.src}
              alt={image?.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <Link
            to="#"
            className="group inline-flex items-center gap-2 mt-6 text-blue-500 hover:text-blue-600 transition-colors"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      header.style.opacity = "1";
      header.style.transform = "translateY(0)";
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${
            scrolled
              ? "bg-black/90 backdrop-blur-lg shadow-lg"
              : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center gap-2 text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
              >
                <Icon
                  path={mdiRocketLaunchOutline}
                  size={1.2}
                  className="text-blue-400"
                />
                <span className="font-extrabold text-blue-400">AI</span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </Link>
              <nav className="hidden md:flex ml-12 space-x-8">
                {[
                  { name: "Services", path: "/services" },
                  { name: "Industries", path: "/industries" },
                  { name: "Products", path: "/products" },
                  { name: "Blog", path: "/blog" },
                  { name: "Contact Us", path: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative text-sm font-medium tracking-wide transition-colors
                      ${
                        isActive(item.path)
                          ? "text-blue-400"
                          : "text-gray-300 hover:text-blue-300"
                      }
                      group
                    `}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300
                        ${
                          isActive(item.path)
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-none rounded-full px-6 py-2.5 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                Get Started
                <Icon path={mdiRocketLaunchOutline} size={0.8} />
              </Button>
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 pb-16">
        {/* Hero Section */}
        <div
          ref={headerRef}
          className="container mx-auto px-4 mb-24 opacity-0 translate-y-10 transition-all duration-1000"
          style={{ transitionDelay: "300ms" }}
        >
          <h1 className="text-6xl font-light mb-8">Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We build and deploy AI solutions that serve as the central operating
            systems for our customers, enabling rapid transformation and
            unprecedented efficiency.
          </p>
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-4">
          <Product
            title="Strategy for Corporate AI Transformation"
            description="Comprehensive analysis and strategic planning for integrating AI into your business operations."
            features={[
              "Audit of business processes for identification of highest potential from AI integration",
              "Integration of AI Products with option for customisation",
              "AI software & hardware development according to customized requirements",
              "Deep AI Research Conduction",
            ]}
            image={{
              src: "/corporate-ai-tech.webp",
              alt: "Corporate AI Transformation Strategy",
            }}
          />

          <Product
            title="Matrix MLLM"
            description="World's leading multimodal language model processing text, audio, image and video data. Surpasses the widely available solutions on the market on benchmark scoring, accuracy, pricing, and speed of answers."
            image={{
              src: "/multimodel-ai.webp",
              alt: "Matrix Multimodal Language Model",
            }}
          />

          <Product
            title="AI360 Corporate"
            description="A packet of comprehensive AI solutions for corporates under one platform with individualised integration within the company's processes."
            features={[
              "General chat-bot for the employees",
              "Document automation system (data extraction, reports generation, etc.)",
              "Chat-bot customer service",
              "Data analysis and visualisation",
              "Transcription and analysis of online calls and meetings",
              "Content creation for the marketing division",
              "Process Automation for HR, Finance, Sales Departments",
            ]}
            image={{
              src: "/360-corporate.webp",
              alt: "AI360 Corporate Solutions",
            }}
          />

          <Product
            title="AI360 Plus"
            description="A packet of unique AI solutions for significant efficiency enhancement of the business processes"
            features={[
              "AI90 R&D: solution for real-time market tracking and analysis",
              "AI90 Code: Best in class code generation service",
              "AI90 Cybersecurity",
              "Competitors research & monitoring",
              "Identification of innovations with high potential",
            ]}
            image={{
              src: "/360-plus.webp",
              alt: "AI360 Plus Solutions",
            }}
          />

          <Product
            title="AI180 Individual"
            description="A packet offering for individuals, allowing for selection of highest priority AI solutions, with an option for individual customisation"
            image={{
              src: "/ai180-indi.webp",
              alt: "AI180 Individual Solutions",
            }}
          />
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 mt-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI solutions can help you achieve your goals
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
