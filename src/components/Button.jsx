import React from "react"

const MyButton = ({ label, iconURL }) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-[#F0A500] rounded-md text-[#F4F4F4]">
            {label}
            {iconURL && <img src={iconURL} alt="arrow right icon" className=" ml-2 rounded-full w-5 h-5" />}
        </button>

    )
}

export default MyButton
