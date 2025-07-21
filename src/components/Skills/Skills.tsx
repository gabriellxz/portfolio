import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { Card, CardContent } from "../ui/card";

export default function Skills() {

    const skillsIcons = [
        {
            icon: <FaReact />
        },
        {
            icon: <SiTypescript />
        },
        {
            icon: <IoLogoJavascript />
        },
        {
            icon: <FaHtml5 />
        },
        {
            icon: <FaCss3Alt />
        },
        {
            icon: <FaGitAlt />
        },
        {
            icon: <SiNextdotjs />
        },
        {
            icon: <RiTailwindCssFill />
        }
    ]

    return (
        <section className="w-full text-white mt-16 h-screen flex flex-col justify-center">
            <div className="appearLeft">
                <h1 className="text-center text-3xl uppercase font-bold">Minhas Skills</h1>
                <p className="text-center font-extralight">Estas são as tecnologias com as quais eu trabalho</p>
            </div>

            <div className="bg-zinc-400 flex justify-center p-5 overflow-hidden mt-5">
                <div className="relative w-full max-w-7xl">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {skillsIcons.map((skills, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/8"
                                >
                                    <div className="p-2">
                                        <Card className="bg-zinc-400 border-none">
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-[100px] font-semibold">{skills.icon}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="bg-zinc-950 left-0 absolute top-1/2 -translate-y-1/2 z-10" />
                        <CarouselNext className="bg-zinc-950 right-0 absolute top-1/2 -translate-y-1/2 z-10" />
                    </Carousel>
                </div>
            </div>
        </section>


    )
}