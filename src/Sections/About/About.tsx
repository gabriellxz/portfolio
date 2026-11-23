import { MdOutlineArrowForward } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img_profile from "../../assets/img_profile.png";

export default function About() {
    const socialLinks = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/gabriel-silva-5968902b8/", icon: <FaLinkedinIn /> },
        { name: "GitHub", url: "https://github.com/gabriellxz", icon: <FaGithub /> },
        { name: "Instagram", url: "https://www.instagram.com/gsylvaaa/", icon: <FaInstagram /> },
    ];

    return (
        <section id="sobre" className="portfolio-section text-white">
            <div className="section-heading appearLeft">
                <span className="section-kicker">Perfil</span>
                <h1 className="section-title">Sobre mim</h1>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-[0.78fr_1.22fr] md:gap-14">
                <div className="appearLeft">
                    <div className="relative mx-auto max-w-[390px] md:mx-0">
                        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#67e8d1]/20 via-transparent to-[#a78bfa]/20 blur-sm" />
                        <img src={img_profile} alt="Gabriel Silva" className="relative aspect-[4/5] w-full rounded-[2rem] border border-white/10 object-cover object-[center_20%] grayscale-[15%]" />
                    </div>
                </div>

                <div className="appearRight">
                    <p className="mb-3 text-sm font-semibold text-[#67e8d1]">Olá, eu sou o Gabriel</p>
                    <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Transformo ideias em interfaces claras, rápidas e memoráveis.</h2>
                    <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                        Sou desenvolvedor front-end apaixonado por criar experiências acessíveis e funcionais. Trabalho principalmente com React, TypeScript e tecnologias modernas, sempre buscando unir qualidade técnica com bons detalhes de design.
                    </p>

                    <div className="mt-8 grid gap-2">
                        {socialLinks.map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/[0.08] px-4 py-3.5 transition hover:border-[#67e8d1]/30 hover:bg-white/[0.025]">
                                <span className="flex items-center gap-3 text-sm font-semibold"><span className="text-lg text-zinc-400 transition group-hover:text-[#67e8d1]">{social.icon}</span>{social.name}</span>
                                <MdOutlineArrowForward className="text-zinc-500 transition group-hover:translate-x-1 group-hover:text-white" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}