import React from 'react'
import Image from 'next/image'

const ItemCard = ({ title, description }) => {
  return (
    <div className="mb-10">
        <div className="text-white rounded-xl bg-[#181818] py-6 px-4 transform transition-transform duration-300 hover:scale-105
            w-full sm:w-[480px] md:w-[600px] lg:w-[700px]">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
        </div>
    </div>
  )
}

export default ItemCard
