import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
			<div className="flex flex-col items-center gap-0.5">
				<Link to="/" className="text-3xl font-bold tracking-tight text-slate-900">
					the<span className="font-semibold text-[#a5d765]">uni</span>dream
				</Link>
				<p className="text-sm text-slate-500">Affiliated with UniRely.com</p>
			</div>

			<div className="flex items-center gap-4">
				<Link
					to="/testimonials"
					className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#a5d765] hover:text-[#a5d765]"
				>
					Testimonials
				</Link>
				<a
					href="https://calendly.com/tahafirozkhan39/unidream-com"
					className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#a5d765] hover:text-[#a5d765]"
				>
					Book a Call
				</a>
			</div>
		</header>
	);
}