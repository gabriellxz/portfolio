import "./home.css"

export default function Home() {

    const blob = document.getElementById('blob');

    document.body.onpointermove = event => {
        const { clientX, clientY } = event;

        if (blob) {
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, {
                duration: 1000,
                fill: 'forwards'
            });
        }
    }


    return (
        <section className="w-full h-screen flex justify-center items-center">

            <div id="blob"></div>
            <div id="blob-blur"></div>

            <div className="text-center text-white m-5 z-10">
                <div className="mb-5">
                    <p className="text-5xl uppercase font-bold">
                        desenvolvedor
                    </p>
                    <p className="text-4xl font-extralight">
                        Front-End
                    </p>
                </div>
                <p className="font-extralight text-xl">
                    Criando experiências digitais rápidas, acessíveis e responsivas — pixel por pixel.
                </p>
            </div>
        </section>
    )
}