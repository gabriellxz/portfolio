import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
    return (
        <header className="fixed z-30 top-0 left-0 w-full border-b border-white/7 bg-[#09090b]/80 backdrop-blur-xl">
            <div className="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between px-4 sm:px-6">
                <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir para o início">
                    <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#67e8d1] to-[#a78bfa] text-sm font-black text-[#09090b] transition-transform group-hover:-rotate-6">GS</span>
                    <span className="font-bold tracking-tight">Gabriel Silva</span>
                </a>

                <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex" aria-label="Navegação principal">
                    <a className="transition-colors hover:text-white" href="#sobre">Sobre</a>
                    <a className="transition-colors hover:text-white" href="#skills">Skills</a>
                    <a className="transition-colors hover:text-white" href="#projetos">Projetos</a>
                </nav>

                <div className="flex items-center gap-2">
                    <a href="https://www.linkedin.com/in/gabriel-silva-5968902b8/" target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:-translate-y-0.5 hover:border-[#67e8d1]/50 hover:text-[#67e8d1]" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/gabriellxz" target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:-translate-y-0.5 hover:border-[#a78bfa]/50 hover:text-[#a78bfa]" aria-label="GitHub">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </header>
    );
}