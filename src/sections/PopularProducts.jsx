import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
    return (
        <section id="products" className="max-container max-sm:mt-12 pt-16">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold ">
                    <span className="text-[#F0A500]">Popular</span>
                    Porducts
                </h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experince top-notch queality and style with out sought-after sections. discover a world of comfort, design, and value    </p>
            </div>
            <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14" >
                {
                    products.map((product) => (
                        <PopularProductCard key={product.name}
                            {...product} />
                    ))
                }

            </div>

        </section>
    )
}

export default PopularProducts
