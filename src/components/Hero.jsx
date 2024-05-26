import myPp from "../assets/image/pp.png"
import DownloadCv from "./DownloadCv"

function Hero() {
  return (
    <section id="home" className="pt-36">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full self-center px-4 lg:w-1/2">
                    <h1 className="text-base font-semibold text-primary md:text-xl ">Halo Semua, saya <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl" >Puji Laksono</span> </h1>
                    <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Web Developer<span className="text-dark"></span> </h2>
                    <p className="font-medium text-secondary mb-10 leading-relaxed"></p>

                    <a href="#contact" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out sm:mb-5 lg:mb-10">Hubungi Saya</a>
                    <DownloadCv />
                </div>
                <div className="w-full self-end px-4 lg:w-1/2">
                    <div className="relative mt-10 lg:mt-9 lg:right-0">
                       
                        <img src={myPp} alt="photo" className="max-w-full mx-auto" />
                        <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                            <svg width="330" height="330" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#14b8a6" d="M45.5,-46.3C59.2,-31.8,70.7,-15.9,73.6,2.9C76.5,21.7,70.8,43.4,57.1,57.9C43.4,72.3,21.7,79.6,3.7,75.9C-14.3,72.2,-28.7,57.6,-43.8,43.2C-59,28.7,-74.9,14.3,-75,-0.1C-75.1,-14.5,-59.3,-29.1,-44.2,-43.5C-29.1,-58,-14.5,-72.4,0.7,-73.1C15.9,-73.7,31.8,-60.7,45.5,-46.3Z" transform="translate(100 100) scale(1.1)" />
                              </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>                             
    </section>
  )
}

export default Hero