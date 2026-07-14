import myimg from "../images/hossein2.png"
import myResume from "../files/MyResume.pdf"

const Main = () => {

    return (
        <section className="home flex flex-wrap mt-11 lg:h-[768px] sm:h-[600px] bg-port-white-color dark:bg-port-dark-bg" id="home">

            <div className="basis-full text-center mb-4 sm:mb-0 sm:text-start sm:absolute sm:w-1/2 sm:top-0 sm:right-0 sm:z-10 right-box flex-grow flex-shrink-0 lg:basis-2/5 sm:pr-4 lg:pr-6 mt-4 sm:mt-20 md:mt-32 lg:mt-40">

                <h3 className="text-2xl lg:text-4xl sm:text-3xl sm:text-port-second-color lg:text-port-main-color dark:text-port-dark-text sm:dark:text-port-dark-bg dark:lg:text-port-dark-text">سلام من</h3>
                <h1 className="text-3xl lg:text-5xl sm:text-4xl mb-4 sm:mb-8 sm:text-port-second-color lg:text-port-main-color font-bold dark:text-port-dark-text sm:dark:text-port-dark-bg dark:lg:text-port-dark-text">حسین اینانلو</h1>


                <p className="lg:text-lg text-base mb-5 sm:text-white/95 lg:text-port-black-color dark:text-port-dark-text2 sm:dark:text-port-dark-bg px-8 sm:px-4 lg:pl-24 dark:lg:text-port-dark-text">برنامه نویس و توسعه دهنده ی front-end هستم .مسلط به مفاهیمی همچون html ، css ، javascript و react .
                    فارق
                    التحصیل از دانشگاه آزاد اسلامی واحد تهران جنوب در رشته ی فناوری اطلاعات.میتونید برای انجام پروژه های
                    وب ، front-end و پروژه هایی که متناسب با توانایی های من هست به من اعتماد کنید و پروژه هاتون رو به من
                    بسپارید.از طریق این سایت میتونید با توانایی های من آشنا بشید و از طریق لینک هایی که در سایت موجوده
                    نمونه کارهای من رو مشاهده کرده و با من ارتباط برقرار کنید </p>
                <a className="p-2 sm:mr-4 text-port-white-color rounded bg-port-main-color hover:bg-port-second-color sm:bg-port-second-color sm:hover:bg-port-white-color sm:hover:text-port-second-color lg:bg-port-main-color lg:hover:bg-port-second-color lg:hover:text-port-white-color dark:sm:text-port-dark-text sm:dark:bg-port-dark-bg dark:sm:hover:bg-port-second-color dark:lg:bg-port-main-color" href={myResume} download="رزومه">دانلود رزومه</a>
            </div>
            
            <div className="basis-full h-[400px] sm:h-[600px] lg:h-[768px] left-box flex-grow flex-shrink-0 lg:basis-3/5 relative">
                <div className="parent-container absolute top-1/2 bottom-0 flex justify-center items-center left-0 -translate-y-1/2 w-full h-[400px] sm:w-[800px] md:w-full sm:h-[600px] lg:h-[768px] overflow-hidden pointer-events-none">
                    <div className="item-container absolute top-0 sm:left-8 md:left-24 lg:left-0 w-[400px] h-[400px] sm:w-[500px] md:w-[600px] lg:h-[768px] sm:h-[600px] rounded-full flex justify-center items-center transition-all animate-rotator">
                        <div className="item  absolute flex left-0 items-center flex-col origin-[200px] sm:origin-[250px] md:origin-[300px] lg:origin-[300px] rotate-0 bg-port-white-color text-port-main-color p-2 w-[190px] dark:bg-port-dark-bg">
                            <h3 className="split sm:reverse">توسعه دهنده ی وب</h3>
                            <i className="fa fa-globe split sm:reverse"></i>
                        </div>

                        <div className="item absolute flex left-0 items-center flex-col origin-[200px] sm:origin-[250px] md:origin-[300px] lg:origin-[300px] rotate-90 bg-port-white-color text-port-main-color p-2 w-[190px] dark:bg-port-dark-bg">
                            <h3 className="split sm:reverse">برنامه نویس جاوا اسکریپت</h3>
                            <i className="fa-brands fa-js split sm:reverse"></i>
                        </div>

                        <div className="item absolute flex left-0 items-center flex-col origin-[200px] sm:origin-[250px] md:origin-[300px] lg:origin-[300px] rotate-180 bg-port-white-color text-port-main-color p-2 w-[190px] dark:bg-port-dark-bg">
                            <h3 className="split sm:reverse">front-end توسعه دهنده </h3>
                            <i className="fa fa-code split sm:reverse"></i>
                        </div>
                        <div className="item absolute flex left-0 items-center flex-col origin-[200px] sm:origin-[250px] md:origin-[300px] lg:origin-[300px] rotate-[270deg] bg-port-white-color text-port-main-color p-2 w-[190px] dark:bg-port-dark-bg">
                            <h3 className="split sm:reverse">react توسعه دهنده</h3>
                            <i className="fa-brands fa-react split sm:reverse"></i>
                        </div>

                        <div className="circle w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] border-4 border-port-main-color rounded-full"></div>
                    </div>
                    <div className="overlay absolute top-0 w-full  sm:left-0 sm:w-0 h-0 border-t-[200px] border-b-[200px] border-r-[320px] border-l-[320px] border-t-transparent border-b-port-main-color border-l-port-main-color border-r-port-main-color sm:border-t-[300px] sm:border-b-[300px] sm:border-r-[460px] sm:border-l-[310px] sm:border-t-port-main-color sm:border-r-port-main-color sm:border-l-transparent md:border-l-[400px] md:border-r-[620px] lg:border-b-[384px] lg:border-t-[384px] lg:border-r-[350px]  lg:border-r-transparent lg:border-l-[350px] lg:border-l-port-main-color"></div>
                </div>

                <div className="home-img">
                    <img className="absolute h-[700px] bottom-0 left-8 pointer-events-none hidden lg:block" src={myimg} alt="" />
                </div>

            </div>

        </section>
    )
}

export default Main