import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white border-blue-500 rounded-full border-2' : 'text-[#ADB7BE] border-transparent'

    return (
        <button onClick={selectTab} className="focus:outline-none">
            <p className={`font-semibold px-8 py-3 cursor-pointer hover:text-white hover:rounded-full hover:border-white text-xl border-2 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton
