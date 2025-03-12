import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<footer className="bg-black border-t border-white/10 py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
					<div>
						<h3 className="text-lg font-semibold mb-4">Services</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									AI Consulting
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									Custom AI Development
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									AI Integration
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									AI Training
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Industries
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									Healthcare
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									Finance
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									Manufacturing
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									Retail
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Products</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									AI Platform
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									Data Analytics
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									Predictive Models
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									AI Assistants
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Company</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<Link href="/" className="text-2xl font-bold">
							<span className="text-white">AI</span>
							<span className="text-blue-400">Solutions</span>
						</Link>
					</div>
					<div className="text-gray-400 text-sm">
						&copy; {new Date().getFullYear()} AISolutions Inc. All
						rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
