import Header from "./Header"

const Skill = () => {
    const primarySkillData = [
        {
            name: "front-end development",
            progress: "70"
        }
        ,
        {
            name: "react",
            progress: "80"
        }
        ,
        {
            name: "javascript",
            progress: "70"
        }
        ,
        {
            name: "html",
            progress: "90"
        }
        ,
        {
            name: "css",
            progress: "90"
        }
        ,
        {
            name: "nodejs",
            progress: "60"
        }
    ]

    const secondarySkillData = [
        {
            name: "tailwind",
            progress: "90"
        }
        ,
        {
            name: "typescript",
            progress: "70"
        }
        ,
        {
            name: "sass",
            progress: "90"
        }
        ,
        {
            name: "css flexbox",
            progress: "90"
        }
        ,
        {
            name: "css grid",
            progress: "90"
        }
        ,
        {
            name: "git & github",
            progress: "80"
        }

    ]

    return (<>



        <section className="bg-port-white-color" id="skills">
            <Header text={"مهارت های"} />
            <div className="flex justify-center gap-2 px-6 py-4 lg:px-10 lg:gap-4 flex-wrap bg-port-main-color dark:bg-port-dark-bg">

                <div className="box border-2 w-full sm:flex-1 border-port-second-color rounded-md p-2 lg:p-3">
                    {primarySkillData.map((data, index) => (
                        <div key={index} className="item mb-3 lg:mb-4 last:mb-0">
                            <div className="header text-sm lg:text-base lg:mb-1 flex justify-between items-center text-port-white-color dark:text-port-dark-text">
                                <h2>{data.name}</h2>
                                <b>{`${data.progress}%`}</b>
                            </div>
                            <div className="progress-bar relative w-full h-6 lg:h-8 bg-port-white-color border-4 border-port-second-color rounded-md dark:bg-port-dark-text">
                                <div style={{ width: `${data.progress}%` }} className="bg-port-second-color h-3 lg:h-5 rounded mr-[1px] absolute top-1/2 -translate-y-1/2"></div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="box border-2 w-full sm:flex-1 border-port-second-color rounded-md p-2 lg:p-3">
                    {secondarySkillData.map((data, index) => (
                        <div key={index} className="item mb-3 lg:mb-4 last:mb-0">
                            <div className="header text-sm lg:text-base lg:mb-1 flex justify-between items-center text-port-white-color dark:text-port-dark-text">
                                <h2>{data.name}</h2>
                                <b>{`${data.progress}%`}</b>
                            </div>
                            <div className="progress-bar relative w-full h-6 lg:h-8 bg-port-white-color border-4 border-port-second-color rounded-md dark:bg-port-dark-text">
                                <div style={{ width: `${data.progress}%` }} className="bg-port-second-color h-3 lg:h-5 rounded mr-[1px] absolute top-1/2 -translate-y-1/2"></div>
                            </div>

                        </div>
                    ))}
                </div>



            </div>


        </section>
    </>
    )
}

export default Skill