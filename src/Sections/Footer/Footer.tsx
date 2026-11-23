import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-white/[0.07] px-5 py-10 text-zinc-500">
            <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-3 text-sm sm:flex-row">
                <p className="flex items-center gap-2"><FaRegCopyright /> Gabriel Silva</p>
                <p>Desenvolvido com React & TypeScript · 2025</p>
            </div>
        </footer>
    );
}