import { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./home.css";

export default function Home() {
    useEffect(() => {
        const blob = document.getElementById("blob");
        if (!blob) return;

        const handlePointerMove = (event: PointerEvent) => {
            blob.animate(
                { left: `${event.clientX}px`, top: `${event.clientY}px` },
                { duration: 900, fill: "forwards" }
            );
        };

        document.addEventListener("pointermove", handlePointerMove);
        return () => document.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return (
        <section id="inicio" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 pt-[72px] text-white">
            <div id="blob" aria-hidden="true" />
            <div id="blob-grid" aria-hidden="true" />

            <div className="relative z-10 mx-auto w-full max-w-[1120px]">
                <div className="max-w-[780px]">
                    <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#67e8d1]">
                        <span className="h-px w-10 bg-[#67e8d1]" />
                        Front-end developer
                    </p>
                    <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-black leading-[0.86] tracking-[-0.065em]">
                        Desenvolvendo
                        <span className="block bg-gradient-to-r from-[#67e8d1] via-[#c4b5fd] to-[#a78bfa] bg-clip-text text-transparent">experiências.</span>
                    </h1>
                    <p className="mt-8 max-w-[580px] text-base leading-7 text-zinc-400 sm:text-xl">
                        Interfaces rápidas, acessíveis e responsivas — combinando código limpo com atenção a cada detalhe.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <a href="#projetos" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition hover:-translate-y-1 hover:bg-[#67e8d1]">Ver projetos</a>
                        <a href="#sobre" className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-[#a78bfa]/60">Conheça meu trabalho</a>
                    </div>
                </div>

                <a href="#sobre" aria-label="Rolar para sobre mim" className="absolute -bottom-28 right-0 hidden size-12 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-[#67e8d1]/50 hover:text-[#67e8d1] md:grid">
                    <FaArrowDown />
                </a>
            </div>
        </section>
    );
}