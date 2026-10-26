const testimonials = [
    {
        picture: "https://cdn.filestackcontent.com/haSexiUzTQqdbnALeqMi",
        quote:
            "My experience with UniRely has been wonderful so far. And if you plan on studying abroad, I strongly recommend that you go with them!",
        name: "Goutham Veeramachaneni",
        university: "Darthmouth College",
        otherAcceptances: [
            "The University Of Chicago", "University Of Richmond", "Drexel University", "University Of Amsterdam"
        ],
        scholarship: "US$60,000/Year from Dartmouth College (Ivy League)",
        SAT: 1560,
    },
    {
        picture: "https://cdn.filestackcontent.com/0KsTKVuqSs2x8N3UD0EA",
        quote:
            "If you looking for a cooperative and reliable platform to help with your application process I suggest UniRely College Counseling. It worked great for me, the counselor was excellent. I recommend people to connect with them for university counseling.",
        name: "Kshitiz Garg",
        university: "University of Pennsylvania",
        otherAcceptances: [],
        scholarship: 0,
        SAT: 0,
    },
    {
        picture: "https://cdn.filestackcontent.com/htyd14mXRgOIA21rzvMT",
        quote:
            "UniRely is one stop solution for students applying abroad for their undergraduate or postgraduate studies, and working with expertise mentor network is a plus point.",
        name: "Parv Patodia",
        university: "Nanyang Technological University (NTU), Singapore",
        otherAcceptances: ["Purdue University", "University Of Washington", "Drexel University", "University Of Wisconsin-Madison", "The Pennsylvania State University", "Rose-Hulman Institute Of Technology"],
        scholarship: "US$40,800/Year from Drexel University",
        SAT: 1420,
    },
    {
        picture: "https://cdn.filestackcontent.com/y9pzjFhtQC2DHhCIIkQN",
        quote:
            "The resources available on UniRely like the Uni deadlines, Explainer videos, sample essays and others were very helpful when I was applying abroad for college. After seeing their website, I decided to use them for my college counseling services as well. They were very good and I will definitely recommend them.",
        name: "Sumit Choudhary",
        university: "University of California, Berkeley",
        otherAcceptances: ["Durham University", "King's College London", "University Of California, San Diego"],
        scholarship: 0,
        SAT: 1540,
    },
    {
        picture: "https://cdn.filestackcontent.com/pkDaVAa6QHq4Q9XrEaj8",
        quote:
            "I definitely recommend UniRely and their exceptional services.",
        name: "Vanshika Yadav",
        university: "Hong Kong University of Science and Technology",
        otherAcceptances: ["New York University", "University Of Washington", "University Of California, Davis", "The University Of Queensland", "The University Of Hong Kong", "University Of Minnesota, Twin Cities"],
        scholarship: 0,
        SAT: 1240,
    },
    {
        picture: "https://cdn.filestackcontent.com/JXiEsfYeTdinkofwpTwF",
        quote: "UniRely is an excellent platform that helps you get into an IVY League. UniRely's counselor help with everything ranging from the application processes to University List creation and post-application flow. Thank you for your service.",
        name: "Mrinal Sharan",
        university: "University of Oxford",
        otherAcceptances: ["New York University", "University Of Washington", "University Of California, Davis", "The University Of Queensland", "The University Of Hong Kong", "University Of Minnesota, Twin Cities"],
        scholarship: 0,
        SAT: 1510,
    },

];


export default function Testimonials() {
    return (
        <div className="min-h-screen bg-[#f7f8fc] px-6 py-[72px] text-[#172033] antialiased font-sans">
            <section className="mx-auto max-w-[1080px]">
                <header className="mx-auto mb-12 max-w-[620px] text-center">
                    <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#6658d3]">
                        UniRely's
                    </p>
                    <h1 className="mb-[14px] text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1]">
                        <span className="text-[#a5d765]">Success</span> Stories
                    </h1>
                    <p className="m-0 text-[17px] leading-[1.7] text-[#687386]">
                        Join the pool of 1200+ students who got admitted to their dream universities
                    </p>
                </header>

                <div className="grid gap-[22px] grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="flex min-h-[250px] flex-col rounded-[16px] border border-[#e9ebf2] bg-white p-7 shadow-[0_10px_30px_rgba(31,42,68,0.05)]"
                        >
                            <div className="flex justify-start items-center gap-2">
                                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                                    <img className="block h-full w-full object-cover rounded-full" src={testimonial.picture} alt="" />
                                </div>
                                <div>
                                    <p className="m-0 font-bold">{testimonial.name}</p>
                                    <p className="mt-1 text-[15px] text-[#494a4c]">{testimonial.university}</p>
                                </div>
                            </div>

                            <blockquote className="my-5 text-[15px] italic font-semibold leading-[1.75] text-[#465166]">
                                “{testimonial.quote}”
                            </blockquote>
                            <div className="font-light text-[12px] flex flex-wrap gap-2 self-end">
                                {testimonial.otherAcceptances.map((i)=> (
                                 <div className="py-1 rounded-full px-2 border border-zinc-400">
                                    {i}
                                </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
