import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"
import { bigShoe1 } from "../assets/images"


const Hero = () => {
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 hero-container">
                <p className=" text-xl font-montserrat text-[#CF7500] ">Our Summer Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:text-6xl" >
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 text-10px">The new arrival</span>
                    <br />
                    <span className="text-[#F0A500] inline-block mt-3">Adidas </span> shoes
                </h1>
                <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm  ">Discover stylish adidas arrivals, quality comfort, and innovation for you active life.</p>



                <Button label="Shop Now" iconURL={arrowRight} />



                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-palanquin font-bold">{stat.label}</p>
                            <p className=" leading-7 font-montserrat text-slate-gray ">{stat.value}</p>

                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex items-center justify-center xl:min-h-creen max-xl:py-40 bg-primary  bg-cover center">
                <img src={bigShoe1}
                    height={610} width={500} className=" object-contain relative z-10" />



            </div>
        </section>
    )
}

export default Hero
