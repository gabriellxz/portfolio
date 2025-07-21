import { FaReact } from "react-icons/fa"
import print_port from "../../assets/portPrintHome.png"
import print_toDo from "../../assets/printTodo.png"
import printTeacherHunt from "../../assets/printTeacherhunt.png"
import { SiShadcnui, SiTypescript } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { Button } from "@/components/ui/button"

export default function Projects() {
    return (
        <section className="text-white w-full flex flex-col justify-center">
            <h1 className="text-center text-3xl uppercase font-bold flex flex-col items-center gap-2">
                Meus Projetos
                <span className="w-full max-w-[300px] p-[0.5px] bg-white appearLine"></span>
            </h1>
            <p className="text-center font-extralight">Estes são alguns dos meus projetos</p>
            <div className="flex flex-col gap-5 m-5">
                <div className="bg-zinc-800 p-5 appearLeft rounded-md">
                    <img src={print_port} alt="" />
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold mb-5">
                                Portfólio pessoal
                            </p>
                            <a href="https://portifoliogabrielsilva.vercel.app/" target="_blank">
                                <Button>
                                    Ver projeto
                                </Button>
                            </a>
                        </div>
                        <div className="flex gap-3 text-xl">
                            <FaReact />
                            <SiTypescript />
                            <RiTailwindCssFill />
                            <SiShadcnui />
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-800 p-5 appearRight rounded-md">
                    <img src={printTeacherHunt} alt="" />
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold mb-5">
                                Telas de login e cadastro plataforma TeacherHunt
                            </p>
                            <a href="https://teacherhunt.vercel.app/" target="_blank">
                                <Button>
                                    Ver projeto
                                </Button>
                            </a>
                        </div>
                        <div className="flex gap-3 text-xl">
                            <FaReact />
                            <SiTypescript />
                            <RiTailwindCssFill />
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-800 p-5 appearLeft rounded-md">
                    <img src={print_toDo} alt="" />
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold mb-5">
                                Todo List
                            </p>
                            <a href="https://todolist-ruddy-pi.vercel.app/" target="_blank">
                                <Button>
                                    Ver projeto
                                </Button>
                            </a>
                        </div>
                        <div className="flex gap-3 text-xl">
                            <FaReact />
                            <SiTypescript />
                            <RiTailwindCssFill />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}