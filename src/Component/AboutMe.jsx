import { Link } from "react-router"
import img from "../images/IMG_5446.JPG"
import Header from "./Header"
const AboutMe = () => {
    return (

        <section className="bg-port-white-color" id="about-me">

            <Header text={"درباره ی"} />

            <div className="flex justify-center items-center flex-wrap gap-3 py-4 dark:bg-port-dark-bg">

                <div className="basis-full">
                    <img className="border-2 border-solid border-port-second-color rounded-2xl size-52 my-0 mx-auto lg:size-60" src={img} alt="" />
                </div>

                {/* <div className="flex flex-col justify-center gap-2"> */}

                <div className="flex justify-start items-center gap-2 hover:cursor-pointer">

                    <a href="#experience" className="flex flex-col items-center w-14 gap-1 bg-port-main-color py-1 px-1 text-xs md:text-sm md:w-16 md:pt-2 rounded-lg text-port-white-color dark:text-port-dark-text">
                        <i className="fa fa-award"></i>
                        <h3>تجربه</h3>
                    </a>

                    <a href="#skills" className="flex flex-col items-center w-14 gap-1 bg-port-main-color py-1 px-1 text-xs md:text-sm md:w-16 md:pt-2 rounded-lg text-port-white-color dark:text-port-dark-text" >
                        <i className="fa fa-trophy"></i>
                        <h3>مهارت</h3>
                    </a>

                    <a href="#projects" className="flex flex-col items-center w-14 gap-1 bg-port-main-color py-1 px-1 text-xs md:text-sm md:w-16 md:pt-2 rounded-lg text-port-white-color dark:text-port-dark-text">
                        <i className="fa fa-project-diagram"></i>
                        <h3>نمونه کار</h3>
                    </a>

                </div>

                <p className="px-6 text-justify md:px-20 lg:text-lg lg:px-36 dark:text-port-dark-text">حسین اینانلو هستم متولد 1374 ساکن تهران.برنامه نویس و توسعه دهنده ی front-end.فارق التحصیل از
                    دانشگاه آزاد اسلامی واحد فنی و مهندسی تهران جنوب در رشته ی فناوری اطلاعات طی سال های 1393 تا
                    1397.
                    فعالیتم در حوزه ی برنامه نویسی و توسعه ی بازی های موبایلی رو در سال 1396 آغاز و در این حوزه 2
                    سال تحت عنوان برنامه نویس c# و توسعه دهنده ی unity فعالیت کردم.
                    در سال 1400 فعالیتم رو در زمینه ی وب و برنامه نویسی front-end آغاز کردم و مفاهیمی همچون html و css و javascript و react و ... رو به طور کامل فراگرفتم .پروژه های متفاوتی رو در این حوزه انجام دادم و اطلاعات و تجربه ی خودم رو افزایش دادم . در حال حاضر هم در همین
                    حوزه فعالیت می کنم.

                </p>


                {/* </div> */}


            </div>
        </section>
    )
}

export default AboutMe