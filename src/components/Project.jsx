import proGo from "../assets/image/book inventory.png"
import proFlask from "../assets/image/blog.png"
import proRan from "../assets/image/picker.png"
import mini from "../assets/image/mini_store.png"

function Project() {
  return (
    <section id="portofolio" className="pt-32 pb-32 bg-slate-100">
        <div className="container">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Portofolio</h4>
                    <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
                   
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 text-justify">
                        <img src={proGo} alt="pro" className="w-full" />
                        <div className="py-8 px-6">
                            <h3><a href="#" className="block mb-1 font-semibold text-xl  text-dark hover:text-primary truncate">Book Inventory</a></h3>
                            <p className="font-medium text-base text-secondary mb-3">Web book inventory merupakan web yang dibuat untuk mempermudahkan pengolah buku seperti menambahkan buku baru, menampilkan detail buku, mengupdate buku dan menghapus buku.</p>
                            <p className="font-medium text-base text-secondary mb-3">GO, GORM, GIN,  POSTGRESQL, JWT, BOOSTRAP 5. </p>
                            <a href="#" className="font-medium text-sm bg-primary py-2 px-4 mr-1 rounded-lg hover:opacity-80">Demo</a>
                            <a href="https://github.com/puji29/Book_inventory.git" target="_blank" className="font-medium text-sm bg-primary py-2 px-4 rounded-lg hover:opacity-80">Github</a>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 text-justify">
                        <img src={proFlask} alt="pro" className="w-full" />
                        <div className="py-8 px-6">
                            <h3><a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Plaform Blog</a></h3>
                            <p className="font-medium text-base text-secondary mb-6">Web aplikasi ini dibuat untuk memudahkan pengolahan post seperti tambah blog, melihat detail blog, update blog, dan menghapus blog serta filter kategori blog.  </p>
                            <p className="font-medium text-base text-secondary mb-3">FLASK, SQLALCHEMY, SQLITE 3, TAILWINDCSS.</p>
                            <a href="#" className="font-medium text-sm bg-primary py-2 px-4 mr-1 rounded-lg hover:opacity-80">Demo</a>
                            <a href="https://github.com/puji29/final_project.git" target="_blank" className="font-medium text-sm bg-primary py-2 px-4 rounded-lg hover:opacity-80">Github</a>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 text-justify">
                        <img src={proRan} alt="pro" className="w-full" />
                        <div className="py-8 px-6">
                            <h3><a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Random Picker</a></h3>
                            <p className="font-medium text-base text-secondary mb-12">Web Random Picker atau Pemilih Acak di Web adalah alat yang dirancang untuk memilih atau mengambil entitas secara acak dari sejumlah opsi yang diberikan</p>  
                            <p className="font-medium text-base text-secondary mb-6">VUE (basic)</p>
                            <a href="https://puji29.github.io/random-picker/" target="_blank" className="font-medium text-sm bg-primary py-2 px-4 mr-1 rounded-lg hover:opacity-80">Demo</a>
                            <a href="https://github.com/puji29/random-picker.git" target="_blank" className="font-medium text-sm bg-primary py-2 px-4 rounded-lg hover:opacity-80">Github</a>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 text-justify">
                        <img src={mini} alt="pro" className="w-full"/>
                        <div className="py-8 px-6">
                            <h3><a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Simple ecommerce</a></h3>
                            <p className="font-medium text-base text-secondary mb-12">Web simpel ecommerce yang dibangun menggunakan express.js dengan layer artchitecture sebagai backendnya dan frontend menggunakan next.js 14 dengan framework ui shadcn ui. Payment gateway menggunakan paypal</p>  
                            <p className="font-medium text-base text-secondary mb-6">MENN(MYSQL,EXPRESS,NEXTJS,NODE) </p>
                            <a href="https://puji29.github.io/frontend-mini-store/" target="_blank" className="font-medium text-sm bg-primary py-2 px-4 mr-1 rounded-lg hover:opacity-80">Demo</a>
                            <a href="https://github.com/puji29/frontend-mini-store" target="_blank" className="font-medium text-sm bg-primary py-2 px-4 mr-1 rounded-lg hover:opacity-80" title="github fontend">Github</a>
                            <a href="https://github.com/puji29/backend-mini-store" target="_blank" className="font-medium text-sm bg-primary py-2 px-4 rounded-lg hover:opacity-80" title="github backend">Github</a>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        
    </section>
  )
}

export default Project