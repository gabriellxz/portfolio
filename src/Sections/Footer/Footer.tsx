import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full text-white bg-black p-5 flex justify-center py-[100px]">
            <p className="text-center flex items-center gap-2">
                <FaRegCopyright />
                Desenvolvido por Gabriel Silva - 2025
            </p>
        </footer>
    )
}