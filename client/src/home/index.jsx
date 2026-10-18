export default function Home() {

	const categories = [
		{
			title: 'Find your university',
			description: 'Explore programs and discover a place where your next chapter can begin.',
			label: 'Explore universities',
			icon: (
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
					<path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
					<path d="M6.5 11.5v5.2c3.3 2.5 7.7 2.5 11 0v-5.2M21 9.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			),
		},
	];

	return (
		<main className="min-h-screen bg-white text-slate-900">
			<header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
				<div className="flex flex-col items-center gap-0.5">
					<a href="#home" className="text-3xl font-bold tracking-tight text-slate-900">
						the<span className="font-semibold text-[#a5d765]">uni</span>dream
					</a>
					<p className="text-sm text-slate-500">
						Affiliated with UniRely.com
					</p>
				</div>

				<div className="flex items-center gap-4">

					<a
						href="#explore"
						className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#a5d765] hover:text-[#a5d765]"
					>
						Testimonials
					</a>	
					<a
						href="#explore"
						className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#a5d765] hover:text-[#a5d765]"
					>
						Explore
					</a>
				</div>


			</header>

			<section id="home" className="relative overflow-hidden">
				<div className="absolute -right-32 -top-36 h-96 w-96 rounded-full bg-indigo-100/70 blur-3xl" />
				<div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-10">
					<div>
						<span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium font-semibold text-[#a5d765]">
							<span className="h-2 w-2 rounded-full bg-[#a5d765]" /> Your future starts here
						</span>
						<h1 className="mt-7 max-w-xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
							Dream big. <span className="font-semibold text-[#a5d765]">Find your way.</span>
						</h1>
						<p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
							Your next chapter is out there. Discover opportunities, explore your options, and take the first step toward a future you love.
						</p>
						<a
							href="#explore"
							className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#a5d765] px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
						>
							Start exploring
							<span aria-hidden="true">→</span>
						</a>
					</div>

					<div className="relative mx-auto w-full max-w-md">
						<div className="absolute inset-5 rotate-3 rounded-[2rem] bg-indigo-200" />
						<div className="relative rounded-[2rem] bg-gradient-to-br from-[#a5d765] to-[#D1F788] p-8 text-white shadow-2xl shadow-indigo-900/20 sm:p-10">
							<div className="flex h-64 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
								<svg viewBox="0 0 220 180" fill="none" aria-hidden="true" className="h-48 w-56">
									<circle cx="110" cy="88" r="67" fill="white" fillOpacity=".12" />
									<path d="M55 78 110 51l55 27-55 27-55-27Z" fill="white" fillOpacity=".95" />
									<path d="M76 91v32c20 15 48 15 68 0V91l-34 17-34-17Z" fill="white" fillOpacity=".8" />
									<path d="M165 79v36" stroke="white" strokeWidth="4" strokeLinecap="round" />
									<circle cx="165" cy="121" r="5" fill="#4f4f4f" />
									<path d="m84 69 26-13 26 13-26 13-26-13Z" fill="#AFF569" />
								</svg>
							</div>
							<p className="mt-6 text-sm font-medium text-[#3F403E]">Make your next move count</p>
							<p className="mt-1 text-2xl font-bold">A world of possibility awaits.</p>
						</div>
					</div>
				</div>
			</section>

			<section id="explore" className="bg-[#ffffff] px-6 py-20 lg:px-10">
				<div className="mx-auto max-w-7xl">
					<div className="max-w-2xl">
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a5d765] text-semibold">Explore</p>
						<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Where will your curiosity take you?</h2>
						<p className="mt-4 text-slate-600">Start with a direction and find the opportunities that fit your dreams.</p>
					</div>
					<div className="mt-10 max-w-md">
						{categories.map((category) => (
							<a
								key={category.title}
								href="#explore"
								className="group block rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/60"
							>
								<span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-[#a5d765] transition group-hover:bg-indigo-600 group-hover:text-white">
									{category.icon}
								</span>
								<h3 className="mt-6 text-xl font-bold">{category.title}</h3>
								<p className="mt-2 leading-7 text-slate-600">{category.description}</p>
								<span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#a5d765]">
									{category.label}<span aria-hidden="true">→</span>
								</span>
							</a>
						))}
					</div>
				</div>
			</section>

			<footer className="mx-auto max-w-7xl px-6 py-7 text-sm text-slate-500 lg:px-10">
				© {new Date().getFullYear()} theunidream
			</footer>
		</main>
	);
}
