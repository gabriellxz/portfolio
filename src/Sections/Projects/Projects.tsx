import { FaReact } from "react-icons/fa";
import print_port from "../../assets/portPrintHome.png";
import print_toDo from "../../assets/printTodo.png";
import printCineverse from "../../assets/cineVersePrint.png";
import { SiShadcnui, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";

const projects = [
    {
        title: "Portfólio pessoal",
        description: "Meu espaço na web para apresentar projetos, habilidades e identidade profissional.",
        image: print_port,
        url: "https://portifoliogabrielsilva.vercel.app/",
        techs: [<FaReact key="react" />, <SiTypescript key="ts" />, <RiTailwindCssFill key="tailwind" />, <SiShadcnui key="shadcn" />],
    },
    {
        title: "CineVerse",
        description: "Catálogo de filmes com interface moderna para explorar títulos, informações e experiências cinematográficas.",
        image: printCineverse,
        url: "https://cineverse-pearl-eta.vercel.app/",
        techs: [<FaReact key="react" />, <SiTypescript key="ts" />, <RiTailwindCssFill key="tailwind" />],
    },
    {
        title: "Todo List",
        description: "Aplicação simples e responsiva para organização de tarefas do dia a dia.",
        image: print_toDo,
        url: "https://todolist-ruddy-pi.vercel.app/",
        techs: [<FaReact key="react" />, <SiTypescript key="ts" />, <RiTailwindCssFill key="tailwind" />],
    },
];

export default function Projects() {
    return (
        <section id="projetos" className="portfolio-section text-white">
            <div className="section-heading appearLeft">
                <span className="section-kicker">Seleção</span>
                <h1 className="section-title">Meus projetos</h1>
                <p className="section-description">Uma amostra dos trabalhos que mostram como transformo requisitos em experiências digitais.</p>
            </div>

            <div className="grid gap-6">
                {projects.map((project, index) => (
                    <article key={project.title} className={`group grid overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111114] md:grid-cols-[1.28fr_.72fr] ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                        <div className="overflow-hidden border-b border-white/[0.08] bg-zinc-950 md:border-b-0 md:border-r md:[&:nth-child(even)]:border-l md:[&:nth-child(even)]:border-r-0">
                            <img src={project.image} alt={`Prévia do projeto ${project.title}`} className="h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
                        </div>
                        <div className="flex flex-col justify-between p-6 sm:p-8">
                            <div>
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#67e8d1]">Projeto {String(index + 1).padStart(2, "0")}</p>
                                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h2>
                                <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
                            </div>
                            <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5">
                                <div className="flex gap-3 text-lg text-zinc-400">{project.techs}</div>
                                <a href={project.url} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white text-zinc-950 transition group-hover/row:rotate-45 hover:bg-[#67e8d1]" aria-label={`Ver ${project.title}`}>
                                    <MdArrowOutward className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}