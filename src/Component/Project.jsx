import Header from "./Header"
import { Link } from "react-router"
import { projectData } from "../files/projectData"


const Project = () => {

    return (
        <section className="bg-port-white-color" id="projects">
            <Header text={"نمونه کارهای"} />

            <div className="flex flex-wrap justify-center items-center gap-4 py-4 px-2 md:px-4 dark:bg-port-dark-bg">

                {projectData?.map((data, index) => (

                    <div key={index} className="w-60 h-auto flex flex-col rounded-lg items-center gap-2 border-4 border-port-second-color bg-port-main-color hover:scale-105 transition-all">
                        <div className="p-2 w-full">
                            <img className="w-full object-contain rounded-lg" src={data?.image} alt="" />
                        </div>

                        <div>
                            <h2 className="text-port-second-color font-bold text-center">{data.title}</h2>
                            <p className="text-port-white-color dark:text-port-dark-text py-0 px-2 text-sm text-justify h-28 overflow-auto">{data.content}</p>
                        </div>

                        {/* <div className="text-center">
                            <h3 className="text-port-second-color font-bold text-sm">تکنولوژی های استفاده شده</h3>
                            <div className="flex flex-wrap justify-center gap-1 text-sm">
                                {data.skills.map((skill, index) => (
                                    <div key={index} className="ml-1 flex items-center gap-[2px] even:text-red-700 odd:text-green-900">
                                        <i className="fa fa-circle text-xs"></i>
                                        <h5>{skill}</h5>
                                    </div>
                                ))}
                            </div>
                        </div> */}

                        <div className="mb-2 flex text-sm gap-1">
                            <Link className="text-port-white-color dark:text-port-dark-text rounded inline-block p-2 border-2 border-port-second-color hover:bg-port-second-color hover:text-port-white-color hover:transition-all" to={`projects/${data.id}`}>توضیحات بیشتر</Link>
                        </div>
                    </div>

                ))}

            </div>
        </section>
    )
}

export default Project