import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <header className="flex justify-between w-full p-5 text-white fixed bg-black z-10">
            <h1 className="text-3xl font-bold">Portfólio</h1>
            <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/gabriel-silva-5968902b8/" target="_blank">
                    <Button>
                        <FaLinkedinIn />
                        Linkedln
                    </Button>
                </a>

                <a href="https://github.com/gabriellxz">
                    <Button>
                        <FaGithub />
                        GitHub
                    </Button>
                </a>
            </div>
        </header>
    )
}