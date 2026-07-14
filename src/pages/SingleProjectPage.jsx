import { Link, useParams } from "react-router"
import { projectData } from "../files/projectData"
import { useEffect, useRef } from "react"


const SingleProjectPage = () => {


    const { projectId } = useParams()
    let data = projectData.find((data) => data.id === projectId)

    const myinput = useRef(null);

    useEffect(() => {
        myinput.current.innerHTML = data.fullcontent
    }, [])




    return (
        <div id="home" className="mt-20 px-4">
            {data
                ? <>
                    {data.video
                        ?
                        <>
                            <video className="aspect-video md:w-[48rem] md:h-[27rem] mx-auto" controls title={data.title} src={data.video}></video>
                            <span className="flex text-port-second-color dark:text-port-main-color justify-center md:text-lg">پیش نمایش پروژه</span>
                        </>
                        : <img className="md:w-[48rem] md:h-[27rem] mx-auto" src={data.image}></img>
                    }



                    <div className="flex flex-col items-center gap-4 my-6 md:gap-6">
                        <div className="px-4 lg:px-6">
                            <h2 className="text-center text-port-second-color dark:text-port-main-color font-bold mb-1 md:mb-2 md:text-xl">{data.title}</h2>
                            <p ref={myinput} className="leading-7 md:leading-8 dark:text-port-dark-text"></p>

                        </div>
                        <div>
                            <h3 className="text-port-second-color dark:text-port-main-color font-bold text-sm text-center mb-1 md:mb-2 md:text-xl">تکنولوژی های استفاده شده</h3>
                            <div className="flex flex-wrap justify-center gap-1 px-2 md:gap-2 text-sm">
                                {data.skills.map((skill, index) => (
                                    <div key={index} className=" flex items-center text-port-black-color dark:text-port-dark-text">
                                        <h5 className="bg-port-bg-color px-2 py-1 rounded md:text-base">{skill}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-port-second-color dark:text-port-main-color font-bold text-sm text-center mb-1 md:mb-2 md:text-xl">لینک های مهم</h3>
                            <div className="flex justify-center gap-2 md:gap-4">
                                {data.githubHref
                                    ? <a className="text-port-white-color bg-port-main-color dark:text-port-dark-text rounded inline-block px-2 py-1 border-2 border-port-second-color hover:bg-port-second-color hover:text-port-white-color hover:transition-all" target="_blank" href={data.githubHref}>github</a>
                                    : null
                                }

                                {data.livedemoHref
                                    ? <a className="text-port-white-color bg-port-main-color dark:text-port-dark-text rounded inline-block px-2 py-1 border-2 border-port-second-color hover:bg-port-second-color hover:text-port-white-color hover:transition-all" target="_blank" href={data.livedemoHref}>live demo</a>
                                    : null
                                }
                                {data.downloadLink
                                    ? <a className="text-port-white-color bg-port-main-color dark:text-port-dark-text rounded inline-block px-2 py-1 border-2 border-port-second-color hover:bg-port-second-color hover:text-port-white-color hover:transition-all" target="_blank" href={data.downloadLink}>دانلود از کافه بازار</a>
                                    : null
                                }
                            </div>

                        </div>
                    </div>

                </>
                :
                <div className="text-center mb-4">
                    <p className="mb-2 dark:text-port-dark-text">صفحه ی مورد نظر یافت نشد</p>
                    <Link className="bg-port-main-color px-2 py-1 rounded text-port-white-color hover:bg-port-second-color" to={"/portfolio"}>صفحه ی اصلی</Link>
                </div>
            }

        </div>
    )
}

export default SingleProjectPage