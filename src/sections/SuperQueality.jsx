import Button from "../components/Button"
import { shoe8 } from "../assets/images"



const SuperQueality = () => {
    return (
        <section id="about" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className=" flex-1 flex flex-col">

                <h2 className=" font-palanquin text-4xl capitalize  font-bold lg:max-w-lg" >
                    We provide you
                    <span className="text-[#F0A500] "> Super</span>
                    <span className="text-[#F0A500] "> Quality </span>shoes

                </h2>
                <p className=" mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance </p>

                <p className=" mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures you satisfication </p>
                <div className="mt-11">


                    <Button label="View Details" />
                </div>

            </div>
            <div className="flex flex-1 justify-center items-center">
                <img
                    src={shoe8}
                    alt="shoe8"
                    width={570}
                    height={522}
                />
            </div>
        </section>
    )
}

export default SuperQueality
