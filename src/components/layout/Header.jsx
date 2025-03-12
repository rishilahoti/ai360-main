import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import Icon from "@mdi/react";
import { mdiRocketLaunchOutline } from "@mdi/js";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (path) => location.pathname === path;

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled ? "bg-black/90 backdrop-blur-lg shadow-lg text-white" : "bg-transparent"}`}>
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity">
							<Icon path={mdiRocketLaunchOutline} size={1.2} className="text-blue-400" />
							<span className="font-extrabold text-blue-400">AI</span>
							<span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Solutions</span>
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
                    ${isActive(item.path) ? "text-blue-400" : scrolled ? "text-white hover:text-blue-400" : "text-black  hover:text-blue-300"}
                    group
                  `}>
									{item.name}
									<span
										className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300
                      ${isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
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
							className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-none rounded-full px-6 py-2.5 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
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
	);
};

export default Header;
