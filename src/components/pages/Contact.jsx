export default function Contact() {
	return (
		<div className="mx-auto flex w-full flex-col-reverse overflow-hidden shadow-lg lg:flex-row">
			<form className="w-full p-8 text-white transition-colors duration-[750ms] bg-violet-600">
				<h3 className="mb-6 text-4xl font-bold">Contact us</h3>

				<div className="mb-6">
					<p className="mb-2 text-2xl">Hi 👋! My name is...</p>
					<input
						type="text"
						placeholder="Your name..."
						className="bg-violet-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
					/>
				</div>

				<div className="mb-6">
					<p className="mb-2 text-2xl">and I represent...</p>
					<div className="w-fit overflow-hidden rounded border-[1px] border-white font-medium">
						<button className="text-violet-600 relative px-3 py-1.5 text-sm transition-colors duration-[750ms]">
							<span className="relative z-10">An individual</span>
							<div
								className="absolute inset-0 z-0 bg-white"
								style={{
									transform:
										'translate3d(0.0540477px, 0px, 0px)',
									transformOrigin: '50% 50% 0px',
								}}
							/>
						</button>
						<button className="text-white relative px-3 py-1.5 text-sm transition-colors duration-[750ms]">
							<span className="relative z-10">A company</span>
						</button>
					</div>
				</div>

				<div className="mb-6">
					<p className="mb-2 text-2xl">I'd love to ask about...</p>
					<textarea
						placeholder="Whatever your heart desires :)"
						className="bg-violet-700 min-h-[150px] w-full resize-none rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
					/>
				</div>

				<button
					type="submit"
					className="bg-white text-violet-600 w-full rounded-lg py-3 text-center text-lg font-semibold transition-colors duration-[750ms]"
					tabIndex={0}
				>
					Submit
				</button>
			</form>

			<div className="relative min-h-[100px] w-full overflow-hidden bg-white">
				<div
					className="absolute inset-0 bg-slate-200"
					style={{
						backgroundImage:
							'url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						transform: 'translateX(0.0488%) translateZ(0px)',
					}}
				/>
				<div
					className="absolute inset-0 bg-slate-200"
					style={{
						backgroundImage:
							'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80")',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						transform: 'translateX(-99.9512%) translateZ(0px)',
					}}
				/>
			</div>
		</div>
	);
}
