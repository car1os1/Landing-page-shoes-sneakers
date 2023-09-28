import Button from '../components/Button'
import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"



const SpecialOfert = () => {
    return (
        <section className=" flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773} height={687} className=" object-contain w-full" />
            </div>


            <div className=" flex-1 flex flex-col">

                <h2 className=" font-palanquin text-4xl capitalize  font-bold lg:max-w-lg" >

                    <span className="text-[#F0A500] ">Special </span>
                    Offer

                </h2>
                <p className=" mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footewear is designed to elevate your experience , providing you with unmatched queality, innovation, and a touch of elegance. </p>

                <p className=" mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fultfill your unique desires, surpassing the lofttiest expectations. your journey with us is nothing short of exceptional </p>

                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop now" iconURL={arrowRight} />
                    <Button label="Learn more" backgroundColor='bg-white'
                        borderColor='border-slate-gray' textColor='text-slate-gray' />

                </div>

            </div>
        </section>
    )
}

export default SpecialOfert
