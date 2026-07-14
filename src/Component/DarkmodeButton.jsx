import { useEffect } from "react";

function DarkmodeButton() {

    const themeToggler = () => {
        const themeToggler = document.querySelector("#theme");
        const rootElement = document.body;

        themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');

        if (localStorage.getItem("theme") == "light") {
            localStorage.setItem("theme", "dark")
            rootElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light")
            rootElement.classList.remove("dark")
        }
    }

    const setTheme = () => {
        const themeToggler = document.querySelector("#theme")
        if (localStorage.getItem("theme") == "light") {
            themeToggler.querySelector('i:nth-child(1)').classList.remove('active');
            themeToggler.querySelector('i:nth-child(2)').classList.add('active');
            document.body.classList.remove("dark")
        } else if (localStorage.getItem("theme") == "dark") {
            themeToggler.querySelector('i:nth-child(1)').classList.add('active');
            themeToggler.querySelector('i:nth-child(2)').classList.remove('active');
            document.body.classList.add("dark")
        } else {
            localStorage.setItem("theme", "light")
        }
    }

    useEffect(() => {
        setTheme();
    }, []);


    return (
        <div id="theme" onClick={themeToggler} className="flex  justify-between items-center w-[56px] cursor-pointer rounded-full  p-[2px] border-2 border-port-main-color mx-1 transition-all dark:bg-port-dark-bg3 dark:border-gray-300" >
            <i className="fa-solid fa-moon text-sm rounded-full px-[6px]"></i>
            <i className="active fa-solid fa-sun text-sm px-1"></i>
        </div>
    );
}

export default DarkmodeButton;