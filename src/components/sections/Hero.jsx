import { Button } from "@/components/ui/button";
import IndustriesSection from "./Industries";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [marketRef, marketInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`min-h-screen bg-black text-white relative overflow-hidden transition-all duration-1000 transform
          ${
            heroInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
      >
        <div className="absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Leading International Developer of <br />
            <span className="text-blue-400">AI Solutions</span>
          </h1>
          <div className="grid grid-cols-2 gap-16 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-5xl font-bold text-blue-400 mb-2">100+</h2>
              <p className="text-xl text-gray-300">Projects Globally</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-5xl font-bold text-blue-400 mb-2">20+</h2>
              <p className="text-xl text-gray-300">
                Corporate AI Transformations
              </p>
            </div>
          </div>
          <p className="text-2xl mt-8 mb-16 bg-white/10 backdrop-blur-sm text-white rounded-full px-8 py-4 inline-block">
            Your Goal, Our Task!
          </p>
        </div>

        {/* Side text similar to Palantir */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-xs space-y-8 hidden lg:block">
          <div className="border-l border-white/30 pl-4 py-2">
            <p className="text-blue-400">EXPLORE</p>
            <p className="text-white">OUR ARTIFICIAL</p>
            <p className="text-white">INTELLIGENCE PLATFORM</p>
          </div>
          <div className="border-l border-white/30 pl-4 py-2">
            <p className="text-blue-400">SCROLL</p>
            <p className="text-white">TO EXPLORE</p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section
        ref={introRef}
        className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 transform
          ${
            introInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Transforming Businesses Through AI
            </h2>
            <p className="text-xl text-gray-300">
              We develop cutting-edge AI solutions that help businesses optimize
              processes, enhance performance, and unlock new opportunities. Our
              team of experts works closely with clients to understand their
              unique challenges and deliver tailored solutions that drive real
              results.
            </p>
          </div>

          <div
            ref={cardsRef}
            className={`grid md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-300 transform
              ${
                cardsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all hover:transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Process Optimisation & Automation
              </h3>
              <p className="text-gray-300">
                Streamline your operations with AI-powered automation that
                reduces costs, minimizes errors, and frees your team to focus on
                high-value tasks.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all hover:transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                KPI Enhancement
              </h3>
              <p className="text-gray-300">
                Leverage data-driven insights to improve key performance
                indicators across your organization, from sales and marketing to
                operations and finance.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all hover:transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Added Value Enhancement
              </h3>
              <p className="text-gray-300">
                Discover new ways to create value for your customers and
                stakeholders through innovative AI applications that set you
                apart from competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Market Segments */}
      <section
        ref={marketRef}
        className={`py-20 bg-black transition-all duration-1000 transform
          ${
            marketInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-4xl font-bold mb-6">
                Entry to New Customer & Market Segments
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI solutions help you identify and capitalize on untapped
                market opportunities, enabling you to reach new customers and
                expand your business horizons.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transform transition-transform hover:scale-105">
                Learn More
              </Button>
            </div>
            <div className="md:w-1/2 bg-white/5 backdrop-blur-sm rounded-lg p-8 transform transition-all hover:scale-105">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                <img
                  src="/ai-market-analysis.webp"
                  alt="AI Market Analysis"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        ref={ctaRef}
        className={`pt-20 pb-0 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden transition-all duration-1000 transform
          ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-600/30 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's discuss how our AI solutions can help you achieve your goals
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Button
                variant="outline"
                className="bg-grey-400 border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-md transform transition-transform hover:scale-105"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="bg-grey-400 border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-md transform transition-transform hover:scale-105"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
        <IndustriesSection />
      </section>
    </div>
  );
}
