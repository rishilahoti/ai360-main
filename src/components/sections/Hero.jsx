/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import IndustriesSection from './Industries';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '@/components/ui/background';

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
	const [ctaRef, ctaInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Hero Section */}
			<section
				ref={heroRef}
				className={`min-h-screen bg-black text-white relative overflow-hidden transition-all duration-1000 transform
          ${
				heroInView
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-10'
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
							<h2 className="text-5xl font-bold text-blue-400 mb-2">
								100+
							</h2>
							<p className="text-xl text-gray-300">
								Projects Globally
							</p>
						</div>
						<div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
							<h2 className="text-5xl font-bold text-blue-400 mb-2">
								20+
							</h2>
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
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-10'
			}`}
			>
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-4xl font-bold mb-6">
							Transforming Businesses Through AI
						</h2>
						<p className="text-xl text-gray-300">
							We develop cutting-edge AI solutions that help
							businesses optimize processes, enhance performance,
							and unlock new opportunities. Our team of experts
							works closely with clients to understand their
							unique challenges and deliver tailored solutions
							that drive real results.
						</p>
					</div>

					<div
						ref={cardsRef}
						className={`grid md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-300 transform
              ${
					cardsInView
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-10'
				}`}
					>
						<div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all hover:transform hover:scale-105 hover:shadow-xl">
							<h3 className="text-2xl font-bold mb-4 text-blue-400">
								Process Optimisation & Automation
							</h3>
							<p className="text-gray-300">
								Streamline your operations with AI-powered
								automation that reduces costs, minimizes errors,
								and frees your team to hover on high-value
								tasks.
							</p>
						</div>
						<div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all hover:transform hover:scale-105 hover:shadow-xl">
							<h3 className="text-2xl font-bold mb-4 text-blue-400">
								KPI Enhancement
							</h3>
							<p className="text-gray-300">
								Leverage data-driven insights to improve key
								performance indicators across your organization,
								from sales and marketing to operations and
								finance.
							</p>
						</div>
						<div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all hover:transform hover:scale-105 hover:shadow-xl">
							<h3 className="text-2xl font-bold mb-4 text-blue-400">
								Added Value Enhancement
							</h3>
							<p className="text-gray-300">
								Discover new ways to create value for your
								customers and stakeholders through innovative AI
								applications that set you apart from
								competitors.
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
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-10'
			}`}
			>
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
							<h2 className="text-4xl font-bold mb-6">
								Entry to New Customer & Market Segments
							</h2>
							<p className="text-xl text-gray-300 mb-8">
								Our AI solutions help you identify and
								capitalize on untapped market opportunities,
								enabling you to reach new customers and expand
								your business horizons.
							</p>
							<Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transform transition-transform hover:scale-105">
								Learn More
							</Button>
						</div>
						<div className="md:w-1/2 bg-white/5 backdrop-blur-sm rounded-lg p-8 transform transition-all">
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
				className={`pb-0 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden transition-all duration-1000 transform
          ${
				ctaInView
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-10'
			}
        `}
			>
				<BackgroundBeamsWithCollision>
					<div className="container m-8 p-8 relative">
						<div className="max-w-4xl mx-auto text-center space-y-8">
							<div className="text-yellow-50">
								<h1 className="text-center text-5xl font-semibold leading-snug">
									Ready to{' '}
									<span className="relative">
										Transform
										<svg
											viewBox="0 0 286 73"
											fill="none"
											className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
										>
											<motion.path
												initial={{ pathLength: 0 }}
												whileInView={{ pathLength: 1 }}
												transition={{
													duration: 1.25,
													ease: 'easeInOut',
												}}
												d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
												stroke="#FACC15"
												strokeWidth="3"
											/>
										</svg>
									</span>{' '}
									your Business?
								</h1>
							</div>
							<p className="text-xl text-gray-300">
								Let's discuss how our AI solutions can help you
								achieve your goals and stay ahead of the
								competition.
							</p>
							<div className="flex flex-col sm:flex-row justify-center gap-4">
								<Button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] hover:outline-none hover:ring-1 hover:ring-slate-400 hover:ring-offset-1 hover:ring-offset-slate-50">
									<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
									<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl">
										Get Started
									</span>
								</Button>
								<Button className="inline-flex h-12 font-semibold animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-16 text-slate-400 transition-colors hover:outline-none hover:ring-1 hover:ring-slate-400 hover:ring-offset-1 hover:ring-offset-slate-50">
									View Docs
								</Button>
							</div>
						</div>
					</div>
				</BackgroundBeamsWithCollision>
				<IndustriesSection />
			</section>
		</div>
	);
}
