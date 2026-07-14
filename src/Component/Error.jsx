import { Link } from "react-router";

const Error = () => {

    return (
        <div className="flex flex-col w-full h-screen items-center justify-center px-2 sm:px-6 lg:px-8">
            <p className="text-lg text-red-600 mb-4">اشتباهی رخ داده دوباره تلاش کنید</p>

            <p className="p-1 px-4 text-white bg-port-second-color rounded-md mb-1"><i className="fa-solid fa-link ml-2"></i>لینک های مفید</p>

            <Link className="px-2 py-1 rounded-md mb-2 hover:text-port-second-color" to={"/"}><i className="fa-solid fa-home ml-2"></i>صفحه اصلی</Link>

        </div>
    )

}

export default Error;