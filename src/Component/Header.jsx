
const Header = ({ text }) => {
    return (
        <div className="text-center sm:text-lg md:text-xl lg:text-2xl bg-port-bg-color">
            <h2 className="py-1 font-bold md:py-2"><span className="text-port-second-color">{text}</span> من </h2>
        </div>
    )
}

export default Header