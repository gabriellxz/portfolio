import { MdOutlineArrowForward } from "react-icons/md"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img_profile from "../../assets/img_profile.png"
// import img_animate from "../../assets/devFronEndimg-removebg-preview.png"

export default function About() {
    return (
        <section className="text-white w-full">
            <h1 className="text-center text-3xl uppercase font-bold appearLeft">Sobre mim</h1>
            <div className="m-5 md:flex md:items-center md:flex-row-reverse md:h-screen gap-5">
                <div className="w-full flex justify-center appearRight">
                    <img src={img_profile} alt="Imagem de perfil" className="rounded-full max-w-[300px] w-full h-[300px] md:max-w-[600px] md:h-[600px] object-cover object-[0_20%]" />
                </div>
                <div className="w-full mt-7 md:mt-0 appearLeft">
                    <div className="w-full">
                        <h2 className="text-3xl font-bold">Olá, eu sou o Gabriel</h2>
                        <p className="text-justify font-extralight">
                            Sou um desenvolvedor front-end apaixonado por criar interfaces de usuário
                            atraentes e funcionais. Com experiência em React, TypeScript e outras
                            tecnologias modernas, estou sempre em busca de novos desafios e oportunidades
                            para aprender e crescer.
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-5">
                        <a href="https://www.linkedin.com/in/gabriel-silva-5968902b8/" target="_blank" className="flex justify-between items-center w-full border-b-1 border-white py-3">
                            <span className="flex items-center gap-2">
                                LinkedIn
                                <FaLinkedinIn />
                            </span>
                            <MdOutlineArrowForward />
                        </a>
                        <a href="https://github.com/gabriellxz" target="_blank" className="flex justify-between items-center w-full border-b-1 border-white py-3">
                            <span className="flex items-center gap-2">
                                GitHub
                                <FaGithub />
                            </span>
                            <MdOutlineArrowForward />
                        </a>
                        <a href="https://www.instagram.com/gsylvaaa/" target="_blank" className="flex justify-between items-center w-full border-b-1 border-white py-3">
                            <span className="flex items-center gap-2">
                                Instagram
                                <FaInstagram />
                            </span>
                            <MdOutlineArrowForward />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}