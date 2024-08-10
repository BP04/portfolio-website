"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import ItemCard from './ItemCard'

const itemData = [
    {
        id: 1,
        title: "SMA Swasta Sutomo 1",
        description: "2020-2023",
        tag: ["education"],
    },
    {
        id: 2,
        title: "Institut Teknologi Bandung",
        description: "2023-2027",
        tag: ["education"],
    },
    {
        id: 3,
        title: "OSN Informatika 2022 Gold Medalist",
        description: "Achieved Gold medal at Indonesia's most prestigious competition for high school students",
        tag: ["achievements"],
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("education")
    const [isPending, startTransition] = useTransition()
    
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section id="about" className="text-white mt-20 flex flex-col items-center justify-center">
            <div className="relative w-max mx-auto h-18 w-90 grid grid-cols-4 items-center px-[3px] rounded-full bg-slate-900 overflow-hidden shadow-2xl shadow-900/20 transition">
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} className="mr-5">
                    {" "}
                    Education{" "}
                </TabButton>
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} className="mr-5">
                    {" "}
                    Skills{" "}
                </TabButton>
                <TabButton selectTab={() => handleTabChange("achievements")} active={tab === "achievements"}  className="mr-5">
                    {" "}
                    Achievements{" "}
                </TabButton>
                <TabButton selectTab={() => handleTabChange("projects")} active={tab === "projects"}>
                    {" "}
                    Projects{" "}
                </TabButton>
            </div>
            <div className="mt-8">
                {itemData
                    .filter((item) => item.tag.includes(tab))
                    .map((filteredItem) => (
                        <ItemCard
                            key={filteredItem.id}
                            title={filteredItem.title}
                            description={filteredItem.description}
                        />
                    ))}
            </div>
        </section>
    )
}

export default AboutSection
