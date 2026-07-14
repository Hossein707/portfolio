
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <title>صفحه 404</title>

            <div className="flex flex-col items-center justify-center gap-3 h-screen w-full px-2 md:px-4">

                <div>
                    <h1 className="text-8xl text-center md:text-9xl text-port-second-color">404</h1>
                    <h2 className="text-lg md:text-5xl bg-port-second-color text-white py-2 px-2 mb-3 md:py-3 md:px-8 rounded-xl md:mb-8">صفحه ی مورد نظر یافت نشد</h2>
                </div>
                <p className="text-center md:text-3xl mb-3 md:mb-8 text-red-700">صفحه ای که دنبالش می گردید وجود ندارد. از لینک زیر برای دسترسی به صفحه ی اصلی استفاده کنید.</p>

                <Link className="font-bold rounded-md text-white bg-port-main-color md:text-3xl border-2 border-port-second-color p-2 md:p-4 hover:bg-port-second-color hover:text-white" to="/">
                    برگشت به صفحه اصلی
                </Link>
            </div>
        </>
    );
};

export default NotFound;
