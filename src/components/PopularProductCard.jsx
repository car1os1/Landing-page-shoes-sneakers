import { star } from '../assets/icons'


const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">

            <img src={imgURL} alt={name} className="w-[280] h-[280]" />

            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="" width={24} height={24} />
                <p className=' font-montserrat leading-normal text-slate-gray '>(4.5)</p>

            </div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>

    )
}

export default PopularProductCard


