import { useEffect } from "react";
import Header from "./Header"

const Experience = () => {

    const experienceData = [
        {
            year: "1393 - 1397",
            title: "لیسانس فناوری اطلاعات",
            content: "طی سال های 1393 تا 1397 در دانشکده ی فنی و مهندسی دانشگاه تهران جنوب تحصیل کردم و مدرک لیسانس خودم رو با معدل 15/49 در رشته ی فناوری اطلاعات بدست آوردم.طی این سال ها در این رشته دروسی همچون برنامه نویسی ، پایگاه داده ، شبکه ، نرم افزار ، الگوریتم های برنامه نویسی ، طراحی وب و ... رو گزروندم و با مفاهیمش به طور کامل آشنا شدم."
        }
        ,
        {
            year: "1397 - 1398",
            title: "بازی سازی - استودیو staring abyss",
            content: "طی مدت 1 سال با استودیو staring abyss همکاری داشتم که این همکاری منجر به تولید و انتشار بازی موبایلی افسانه ی زابین شد . در این پروژه من روی بخش هایی مثل سیستم save و load بازی ، کار با فایل های json ، حرکت کاراکتر ، بخش ui بازی ، scriptableObject و سیستم animator کار کردم."
        }
        ,
        {
            year: "1400 - 1402",
            title: "یادگیری مفاهیم front-end",
            content: "طی این 2 سال من به آموزش و یادگیری مفاهیمی همچون html ، css ، sass ، flex box ، css grid ، javascript ، react ، git ، github پرداختم و این موارد رو به طور کامل آموختم."
        }
        ,
        {
            year: "1402 - 1403",
            title: "انجام پروژه های front-end",
            content: "طی این 1 سال از طریق آموخته هام پروژه هایی رو در زمینه ی برنامه نویسی وب و front-end انجام دادم.در این پروژه ها از مفاهیمی همچون html و css و javascript و react بهره بردم."
        }
        ,
        {
            year: "1403 - 1404",
            title: "یادگیری مفاهیم پیشرفته front-end",
            content: "در این دوره به یادگیری مفاهیم پیشرفته تری از دنیای وب و front-end پرداختم و مفاهیمی همچون redux(برای مدیریت state) ، axios(برای ارتباط با سرور) ، موارد پیشرفته javascript(promise ، debounce ، throttle و ...) ، موارد پیشرفته react(context api ، هوک ها ، redux toolkit) ، Authentication ، Authorization ، typescript و tailwind رو فراگرفتم.همچنین نمونه کاری رو انجام دادم که اکثر این موارد رو درون اون پروژه به کار بردم که تحت عنوان سایت آموزش آنلاین در قسمت نمونه کارهای من در این سایت موجود است."
        }
    ]

    return (
        <section className="experience bg-port-white-color" id="experience">
            <Header text={"تجربیات"} />

            <div className="flex justify-center items-center flex-col overflow-hidden gap-24 py-4 lg:gap-0 dark:bg-port-dark-bg">

                {experienceData.map((data, index) => (
                    <div key={index} className="item-container relative w-[57rem] h-72 flex justify-center group sm:w-[25.5rem] sm:h-52 lg:even:justify-end">
                        <div className="item even:-left-full absolute border-2 text-port-second-color border-port-second-color w-64 h-72 text-center p-2 rounded-md hover:cursor-pointer hover:bg-port-main-color sm:w-[25.5rem] sm:h-52 group/txt lg:group-even:-left-56 lg:group-odd:left-56 dark:bg-port-dark-bg2 dark:hover:bg-port-main-color">
                            <div className="mb-2 py-1 border-b-2 border-port-second-color">
                                <i className="fa fa-calendar ml-1"></i>
                                <span>{data.year}</span>
                            </div>
                            <h2 className="text-port-second-color font-bold mb-1">{data.title}</h2>
                            <p className="text-port-text-color h-48 overflow-y-auto group-hover/txt:text-port-black-color sm:h-28 dark:text-port-dark-text">{data.content}</p>

                        </div>
                        <div className="line group-last:hidden before:absolute before:top-0 before:rounded-full before:w-5 before:bg-port-second-color before:h-5 before:-right-2 absolute top-[17.5rem] sm:top-[12.5rem] right-1/2 h-[6.5rem] w-1 bg-port-second-color lg:top-1/2 lg:h-52 lg:group-last:block lg:group-last:h-0"></div>
                    </div>
                ))}


            </div>
        </section>
    )
}

export default Experience