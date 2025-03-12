/* eslint-disable no-unused-vars */
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const IndustriesSection = () => {
	const industries = [
		{ heading: 'Retail & Ecommerce', imgSrc: '/office.webp' },
		{ heading: 'Education', imgSrc: '/education.webp' },
		{ heading: 'Tourism', imgSrc: '/tourisim.webp' },
		{ heading: 'Insurance', imgSrc: '/insurance.webp' },
		{ heading: 'Finance', imgSrc: '/Finance.webp' },
		{
			heading: 'Healthcare & Pharmaceutical',
			imgSrc: '/healthcare-lifesciences.webp',
		},
		{ heading: 'Logistics', imgSrc: '/Logistics.webp' },
		{ heading: 'Mining', imgSrc: '/Mining.webp' },
		{ heading: 'Energy', imgSrc: '/energy-renewables.webp' },
		{ heading: 'Manufacturing', imgSrc: '/manufacturing-industrials.webp' },
		{ heading: 'Automotive & Aerospace', imgSrc: '/Aerospace.webp' },
		{ heading: 'Land Development', imgSrc: '/LandDevelopment.webp' },
		{ heading: 'Governmental', imgSrc: '/government-security.webp' },
		{ heading: 'Legal', imgSrc: '/Legal.webp' },
		{ heading: 'Media', imgSrc: '/Media.webp' },
	];

	return (
		<section className="bg-[#111827] w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 m-auto">
			<div className="space-y-8">
				<h2 className="text-4xl md:text-[52px] font-semibold leading-none">
					Solving complex problems across all industries in days, not
					years.
				</h2>
				<p className="text-gray-300 text-2xl">
					Our AI solutions are designed to address specific challenges
					in various industries, delivering measurable results quickly
					and efficiently.
				</p>
				<Button className="group bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md flex items-center gap-2">
					Explore AI Solutions
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Button>
			</div>
			<div className="relative">
				<div className="mx-auto py-2 max-w-5xl overflow-y-auto max-h-[500px]">
					{industries.map((industry, index) => (
						<Link
							key={index}
							heading={industry.heading}
							imgSrc={industry.imgSrc}
						/>
					))}
				</div>
				<div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-10">
					<ArrowDown />
				</div>
			</div>
		</section>
	);
};

const Link = ({ heading, imgSrc }) => {
	const ref = useRef(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
	const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

	const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
	const left = useTransform(mouseXSpring, [0.5, -0.5], ['80%', '90%']);

	const handleMouseMove = (e) => {
		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;
		x.set(xPct);
		y.set(yPct);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			initial="initial"
			whileHover="whileHover"
			className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
		>
			<div>
				<motion.span className="relative z-10 block text-2xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-5xl">
					{heading.split(' ').map((word, i) => (
						<span key={i} className="inline-block">
							{word}&nbsp;
						</span>
					))}
				</motion.span>
			</div>

			<motion.div
				style={{
					top,
					left,
					translateX: '-50%',
					translateY: '-50%',
					willChange: 'transform, opacity',
				}}
				variants={{ initial: { scale: 0 }, whileHover: { scale: 1.3 } }}
				transition={{ type: 'spring' }}
				className="absolute z-0"
			>
				<img
					src={imgSrc}
					width={0}
					height={0}
					className={`h-full w-full object-cover rounded-lg`}
					alt={`Image representing a link for ${heading}`}
					loading="lazy"
					decoding="async"
				/>
			</motion.div>
		</motion.div>
	);
};

export default IndustriesSection;
