/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '@/components/ui/background';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiRocketLaunchOutline } from '@mdi/js';

const Product = ({ title, description, features, image }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div
			ref={ref}
			className={`border-t border-gray-700 py-12 transition-all duration-1000 ${
				inView
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-10'
			}`}
		>
			<div className="grid md:grid-cols-2 gap-12 items-start">
				<div>
					<h3 className="text-4xl font-semibold text-white mb-6">
						{title}
					</h3>
					<p className="text-gray-400 text-lg mb-6">{description}</p>
					{features && (
						<div className="space-y-4">
							<h4 className="text-xl font-medium text-blue-400">
								Includes:
							</h4>
							<ul className="space-y-3">
								{features.map((feature, index) => (
									<li
										key={index}
										className="flex items-center gap-3"
									>
										<span className="block h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
										<span className="text-gray-200 text-base">
											{feature}
										</span>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
				<div className="relative">
					<div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
						<img
							src={image?.src}
							alt={image?.alt}
							loading="lazy"
							className="w-full h-full object-cover"
						/>
					</div>
					<Link
						to="#"
						className="group inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 transition-colors"
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

	const [ctaRef, ctaInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	useEffect(() => {
		const header = headerRef.current;
		if (header) {
			header.style.opacity = '1';
			header.style.transform = 'translateY(0)';
		}

		const handleScroll = () => {
			const isScrolled = window.scrollY > 20;
			setScrolled(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const isActive = (path) => location.pathname === path;

	return (
		<div className=" bg-gray-900 pt-16">
			{/* Header */}
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${
				scrolled
					? 'bg-black/90 backdrop-blur-lg shadow-lg'
					: 'bg-transparent'
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
								<span className="font-extrabold text-blue-400">
									AI
								</span>
								<span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
									Solutions
								</span>
							</Link>
							<nav className="hidden md:flex ml-12 space-x-8">
								{[
									{ name: 'Services', path: '/services' },
									{ name: 'Industries', path: '/industries' },
									{ name: 'Products', path: '/products' },
									{ name: 'Blog', path: '/blog' },
									{ name: 'Contact Us', path: '/contact' },
								].map((item) => (
									<Link
										key={item.path}
										to={item.path}
										className={`relative text-sm font-medium tracking-wide transition-colors
                      ${
							isActive(item.path)
								? 'text-blue-400'
								: 'text-gray-300 hover:text-blue-300'
						}
                      group
                    `}
									>
										{item.name}
										<span
											className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300
                        ${
							isActive(item.path)
								? 'scale-x-100'
								: 'scale-x-0 group-hover:scale-x-100'
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
								<Icon
									path={mdiRocketLaunchOutline}
									size={0.8}
								/>
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

			<main>
				{/* Hero Section */}
				<div
					ref={headerRef}
					className="container mx-auto px-4 mb-24 opacity-0 translate-y-10 transition-all duration-1000"
					style={{ transitionDelay: '300ms' }}
				>
					<h1 className="text-5xl font-semibold text-white mb-8">
						Services
					</h1>
					<p className="text-lg text-gray-300 max-w-3xl">
						We build and deploy AI solutions that serve as the
						central operating systems for our customers, enabling
						rapid transformation and unprecedented efficiency.
					</p>
				</div>

				{/* Services Section */}
				<div className="container mx-auto px-4">
					<Product
						title="Strategy for Corporate AI Transformation"
						description="Comprehensive analysis and strategic planning for integrating AI into your business operations."
						features={[
							'Audit of business processes for identification of highest potential from AI integration',
							'Integration of AI Products with option for customisation',
							'AI software & hardware development according to customized requirements',
							'Deep AI Research Conduction',
							'Corporate AI Training',
						]}
						image={{
							src: '/corporate-ai-tech.webp',
							alt: 'Corporate AI Transformation Strategy',
						}}
					/>
				</div>

				{/* Call to Action */}
				<section
					ref={ctaRef}
					className={`relative overflow-hidden transition-all duration-1000 transform ${
						ctaInView
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<BackgroundBeamsWithCollision>
						<div className="container p-16  relative bg-gradient-to-b from-gray-900 to-black">
							<div className="max-w-4xl mx-auto text-center space-y-8">
								<div className="text-yellow-50">
									<h1 className="text-center text-5xl font-semibold leading-snug">
										Ready to{' '}
										<span className="relative">
											Transform
											<svg
												viewBox="0 0 286 73"
												fill="none"
												className="absolute -left-2 -right-2 md:-top-1 -top-4 bottom-0 translate-y-1"
											>
												<motion.path
													initial={{ pathLength: 0 }}
													whileInView={{
														pathLength: 1,
													}}
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
									Let's discuss how our AI solutions can help
									you achieve your goals and stay ahead of the
									competition.
								</p>
								<div className="flex flex-col sm:flex-row justify-center gap-4">
									<Button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] hover:outline-none hover:ring-1 hover:ring-slate-400 hover:ring-offset-1 hover:ring-offset-slate-50">
										<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
										<span className="inline-flex animate-shimmer font-semibold h-full w-full cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-16 py-5 text-sm text-white backdrop-blur-3xl">
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
				</section>
			</main>
		</div>
	);
}
