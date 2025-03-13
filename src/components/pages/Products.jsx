/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export const Products = () => {
	return (
		<div className="bg-white">
			<TextParallaxContent
				imgUrl="/multimodel-ai.webp"
				heading="Matrix MLLM"
			>
				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
					<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
						Additional content explaining the above card here
					</h2>
					<div className="col-span-1 md:col-span-8">
						<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
							World's leading multimodal language model processing
							text, audio, image and video data. Surpasses the
							widely available solutions on the market on
							benchmark scoring, accuracy, pricing, and speed of
							answers.
						</p>
						<button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
							Learn more <FiArrowUpRight className="inline" />
						</button>
					</div>
				</div>
			</TextParallaxContent>
			<TextParallaxContent
				imgUrl="360-corporate.webp"
				heading="AI360 Corporate"
			>
				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
					<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
						Additional content explaining the above card here
					</h2>
					<div className="col-span-1 md:col-span-8">
						<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
							A packet of comprehensive AI solutions for
							corporates under one platform with individualised
							integration within the company's processes.
						</p>
						<div class="styled-list mb-8 text-neutral-600">
							<ul class="space-y-4 text-xl md:text-2xl">
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>
										General chat-bot for the employees
									</span>
								</li>
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>
										Document automation system (data
										extraction, reports generation, etc.)
									</span>
								</li>
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>Chat-bot customer service</span>
								</li>
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>Data analysis and visualisation</span>
								</li>
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>
										Transcription and analysis of online
										calls and meetings
									</span>
								</li>
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>
										Content creation for the marketing
										division
									</span>
								</li>
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>
										Process Automation for HR, Finance,
										Sales Departments
									</span>
								</li>
							</ul>
						</div>

						<button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
							Learn more <FiArrowUpRight className="inline" />
						</button>
					</div>
				</div>
			</TextParallaxContent>
			<TextParallaxContent imgUrl="/360-plus.webp" heading="AI360 Plus">
				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
					<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
						Additional content explaining the above card here
					</h2>
					<div className="col-span-1 md:col-span-8">
						<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
							A packet of unique AI solutions for significant
							efficiency enhancement of the business processes
						</p>
						<div class="styled-list mb-8 text-neutral-600">
							<ul class="space-y-4 text-xl md:text-2xl">
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>
										AI90 R&D: Solution for real-time market
										tracking and analysis
									</span>
								</li>
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>
										AI90 Code: Best in class code generation
										service
									</span>
								</li>
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>AI90 Cybersecurity</span>
								</li>
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>
										Competitors research & monitoring
									</span>
								</li>
								<li class="flex items-start">
									<span class="bullet">•</span>
									<span>
										Identification of innovations with high
										potential
									</span>
								</li>
							</ul>
						</div>
						<button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
							Learn more <FiArrowUpRight className="inline" />
						</button>
					</div>
				</div>
			</TextParallaxContent>
			<TextParallaxContent
				imgUrl="/ai180-indi.webp"
				heading="AI180 Individual"
			>
				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
					<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
						Additional content explaining the above card here
					</h2>
					<div className="col-span-1 md:col-span-8">
						<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
							A packet offering for individuals, allowing for
							selection of highest priority AI solutions, with an
							option for individual customisation
						</p>
						<button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
							Learn more <FiArrowUpRight className="inline" />
						</button>
					</div>
				</div>
			</TextParallaxContent>
		</div>
	);
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, heading, children }) => {
	return (
		<div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
			<div className="relative h-[150vh]">
				<StickyImage imgUrl={imgUrl} />
				<OverlayCopy heading={heading} />
			</div>
			{children}
		</div>
	);
};

const StickyImage = ({ imgUrl }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end end', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<motion.div
			style={{
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: `calc(100vh - ${IMG_PADDING * 2}px)`,
				top: IMG_PADDING,
				scale,
			}}
			ref={targetRef}
			className="sticky z-0 overflow-hidden rounded-3xl"
		>
			<motion.div
				className="absolute inset-0 bg-neutral-950/70"
				style={{ opacity }}
			/>
		</motion.div>
	);
};

const OverlayCopy = ({ heading }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

	return (
		<motion.div
			style={{ y, opacity }}
			ref={targetRef}
			className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
		>
			<p className="text-center text-4xl font-bold md:text-7xl">
				{heading}
			</p>
		</motion.div>
	);
};

export default Products;

{
	/*
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
*/
}
