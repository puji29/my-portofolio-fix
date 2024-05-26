import html5 from "../assets/image/html51.svg"
import css from "../assets/image/CSS3_logo.svg"
import javascript from "../assets/image/javascript.svg"
import bootsrap from "../assets/image/Bootstrap_logo.svg"
import tailwindcss from "../assets/image/Tailwind_CSS_Logo.svg"
import go from "../assets/image/Go_Logo_Blue.svg"
import flask from "../assets/image/Flask.svg"
import django from "../assets/image/django.svg"
import node from "../assets/image/nodejs-icon.svg"
import express from "../assets/image/express.svg"
import vue from "../assets/image/vuejs-icon.svg"
// import react from ""
function TechStack() {
  return (
    <section id="techStack" className="pt-36 pb-16 bg-slate-700">
        <div className="container">
            <div className="w-full px-4">
                <div className="mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Tech Stack</h4>
                    <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Tech Stack Pernah dipelajari</h2>
                </div>
            </div>
        <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={html5} alt="html" width="50px" title="HTML5" />
                </a>
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={css} alt="html" width="50px" title="CSS3" />
                </a>
               <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={javascript} alt="html" width="50px" title="JAVASCRIPT" />
                </a>
               <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={bootsrap} alt="html" width="50px" title="BOOTSRAP 5" />
                </a>
               <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={tailwindcss} alt="html" width="50px" title="TAILWIND CSS" />
                </a>
               <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={go} alt="html" width="50px" title="GOLANG" />
                </a>
               
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={flask} alt="html" width="50px" title="FLASK" />
                </a>
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={django} alt="html" width="50px" title="DJANGO" />
                </a>
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={node} alt="html" width="50px" title="NODE.JS" />
                </a>
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={express} alt="html" width="50px" title="EXPRESS.JS" />
                </a>
                <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src={vue} alt="html" width="50px" title="VUE.JS" />
                </a>
               
               
            </div>
        </div> 
        </div>
    </section>
  )
}

export default TechStack