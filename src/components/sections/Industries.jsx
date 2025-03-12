import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function IndustriesSection() {
	const [activeIndustry, setActiveIndustry] = useState(null);

	const industries = [
		{ id: 1, name: 'Retail & Ecommerce', image: '/office.webp' },
		{ id: 2, name: 'Education', image: '/education.webp' },
		{ id: 3, name: 'Tourism', image: '/tourisim.webp' },
		{
			id: 4,
			name: 'Healthcare and Pharmaceutical',
			image: '/healthcare-lifesciences.webp',
		},
		{ id: 5, name: 'Finance', image: '/Finance.webp' },
		{ id: 6, name: 'Insurance', image: '/insurance.webp' },
		{ id: 7, name: 'Logistics', image: '/Logistics.webp' },
		{ id: 8, name: 'Mining', image: '/Mining.webp' },
		{ id: 9, name: 'Energy', image: '/energy-renewables.webp' },
		{
			id: 10,
			name: 'Manufacturing',
			image: '/manufacturing-industrials.webp',
		},
		{ id: 11, name: 'Automotive & Aerospace', image: '/Aerospace.webp' },
		{ id: 12, name: 'Land Development', image: '/LandDevelopment.webp' },
		{ id: 13, name: 'Governmental', image: '/government-security.webp' },
		{ id: 14, name: 'Legal', image: '/Legal.webp' },
		{ id: 15, name: 'Media', image: '/Media.webp' },
	];

	return (
		<section className="py-20 bg-[#111827] relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-[#111827]/90 to-[#111827]/70 z-10"></div>

			<div className="container mx-auto px-4 relative z-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="space-y-6">
						<h2 className="text-4xl md:text-5xl font-bold leading-tight">
							Solving complex problems across all industries in
							days, not years.
						</h2>
						<p className="text-gray-300 text-lg max-w-md">
							Our AI solutions are designed to address specific
							challenges in various industries, delivering
							measurable results quickly and efficiently.
						</p>
						<Button className="group bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md flex items-center gap-2">
							Explore AI Solutions
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</div>

					{/* Industry list */}
					<div className="space-y-2 relative">
						{industries.map((industry) => (
							<div
								key={industry.id}
								className="relative border-t border-gray-700 last:border-b cursor-pointer"
								onMouseEnter={() =>
									setActiveIndustry(industry.id)
								}
								onMouseLeave={() => setActiveIndustry(null)}
							>
								{/* Industry Row */}
								<div
									className={`py-5 px-4 flex items-center transition-all duration-300 ${
										activeIndustry === industry.id
											? 'text-white translate-x-2'
											: 'text-gray-400 hover:text-gray-300'
									}`}
								>
									<span className="text-sm text-gray-500 mr-6">
										{industry.id}
									</span>
									<span className="text-2xl md:text-3xl font-light tracking-wide">
										{industry.name.toUpperCase()}
									</span>
								</div>

								{/* Hover Image Display */}
								<div
									className={`absolute -z-10 top-1/2 left-1/3 transform -translate-y-1/2 ml-4 w-[250px] h-[150px] rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-all duration-500 ease-in-out ${
										activeIndustry === industry.id
											? 'opacity-50 scale-100 translate-x-0'
											: 'opacity-0 scale-90 translate-x-4 pointer-events-none'
									}`}
								>
									<img
										src={industry.image}
										alt={industry.name}
										loading="lazy"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
