import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiLoader } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const [loader,setLoader] = useState()

  const sendMessage = (e) => {
    setLoader(true)
    e.preventDefault();
    emailjs
      .sendForm(
        "service_90qz8hm",
        "template_ps1uw0o",
        form.current,
        "Exdw2cdNIQWZPCB05"
      )
      .then(
        (result) => {
          console.log( result.text);
          toast("Email berhasil dikirim!")
          setLoader(false)
          form.current.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Hubungi Kami
            </h2>
          </div>
        </div>
        <form ref={form} onSubmit={sendMessage}>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label className="text-base font-bold text-primary">Name :</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label className="text-base font-bold text-primary">
                Email :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label className="text-base font-bold text-primary">
                Pesan :
              </label>
              <textarea
                type="text"
                id="message"
                name="pesan"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button
                className="text-base font-semibold text-white items-center bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg "
                type="submit"
                name="button1"
              >
                {loader ?<FiLoader className="animate-spin " />: 'Kirim' }
                <ToastContainer />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
