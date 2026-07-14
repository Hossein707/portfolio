
const Footer = () => {
    return (
        <footer className="bg-port-main-color border-t-2 border-port-second-color b-2 md:px-4">
            <div className="flex flex-col text-center items-center gap-4 mt-2 pb-2 md:flex-row md:items-start md:justify-evenly">
                <div className="md:basis-1/3">
                    <h2 className="text-port-second-color font-bold md:text-lg md:mb-2 lg:text-xl">ارتباط با من</h2>
                    <p className="text-sm md:text-base text-port-white-color dark:text-port-dark-text">از طریق لینک های این بخش میتونید با من ارتباط برقرار کنید</p>
                </div>

                <div className="md:basis-1/3">
                    <h2 className="text-port-second-color font-bold md:text-lg md:mb-2 lg:text-xl">راه های ارتباطی</h2>
                    <div className="text-sm md:text-base lg:text-lg text-port-white-color dark:text-port-dark-text mb-1 group">
                        <i className="fa fa-location ml-1 group-hover:text-port-second-color"></i>
                        <span className="hover:text-port-second-color group-hover:text-port-second-color">ایران / تهران</span>
                    </div>

                    <div className="text-sm md:text-base lg:text-lg text-port-white-color dark:text-port-dark-text mb-1 group">
                        <i className="fa fa-phone ml-1 group-hover:text-port-second-color"></i>
                        <a className="hover:text-port-second-color group-hover:text-port-second-color" href="tel:09339919985">0933-991-9985</a>
                    </div>

                    <div className="text-sm md:text-base lg:text-lg text-port-white-color dark:text-port-dark-text group">
                        <i className="fa fa-envelope ml-1 group-hover:text-port-second-color"></i>
                        <a className="hover:text-port-second-color group-hover:text-port-second-color" href="mailto:inanloo94@gmail.com">inanloo94@gmail.com</a>
                    </div>
                </div>

                <div className="md:basis-1/3">
                    <h2 className="text-port-second-color font-bold md:text-lg md:mb-2 lg:text-xl">شبکه های اجتماعی</h2>
                    <div className="flex justify-center gap-4 text-2xl md:text-3xl lg:text-4xl lg:gap-6 text-port-white-color dark:text-port-dark-text">
                        <a className="hover:text-port-second-color transition-all" href="https://instagram.com/hossein_inanloo1"><i className="fab fa-instagram"></i></a>
                        <a className="hover:text-port-second-color transition-all" href="https://t.me/hosseinenan"><i className="fab fa-telegram"></i></a>
                        <a className="hover:text-port-second-color transition-all" href="https://github.com/Hossein707"><i className="fab fa-github"></i></a>
                        <a className="hover:text-port-second-color transition-all" href="https://www.linkedin.com/in/hossein-inanloo-194a58147"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>



        </footer>
    )
}

export default Footer