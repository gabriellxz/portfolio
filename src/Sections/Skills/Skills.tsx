import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
    const skillsIcons = [
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <IoLogoJavascript /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind", icon: <RiTailwindCssFill /> },
    ];

    return (
        <section id="skills" className="portfolio-section text-white">
            <div className="section-heading appearLeft">
                <span className="section-kicker">Tecnologias</span>
                <h1 className="section-title">Minhas skills</h1>
                <p className="section-description">Ferramentas que utilizo para construir interfaces modernas e consistentes.</p>
            </div>

            <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-6 appearRight">
                <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                    <CarouselContent className="-ml-3">
                        {skillsIcons.map((skill) => (
                            <CarouselItem key={skill.name} className="basis-1/2 pl-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                                <div className="group flex aspect-[4/5] flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#111114] transition duration-300 hover:-translate-y-1 hover:border-[#67e8d1]/30 hover:shadow-[0_20px_50px_rgba(103,232,209,.06)]">
                                    <span className="text-[clamp(3.5rem,8vw,5.25rem)] text-zinc-300 transition duration-300 group-hover:scale-110 group-hover:text-[#67e8d1]">{skill.icon}</span>
                                    <span className="mt-4 text-sm font-semibold text-zinc-500 transition group-hover:text-zinc-200">{skill.name}</span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-5 top-[calc(100%+28px)] size-10 border-white/10 bg-[#111114] text-white hover:bg-[#67e8d1] hover:text-black" />
                    <CarouselNext className="left-10 top-[calc(100%+28px)] size-10 border-white/10 bg-[#111114] text-white hover:bg-[#67e8d1] hover:text-black" />
                </Carousel>
                <div className="h-12" />
            </div>
        </section>
    );
}