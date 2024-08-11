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
        description: "2023 - Present",
        tag: ["education"],
    },
    {
        id: 3,
        title: "Python",
        description: "Intermediate level. Able to use many external Python libraries such as pandas, numpy, cryptodome, etc.",
        tag: ["skills"],
    },
    {
        id: 4,
        title: "C++",
        description: "Able to use procedural and OOP concepts to compete in high level competitions",
        tag: ["skills"],
    },
    {
        id: 5,
        title: "Haskell",
        description: "Understand the concepts of Functional Programming",
        tag: ["skills"],
    },
    {
        id: 6,
        title: "ROS",
        description: "Able to build software for autonomous drones",
        tag: ["skills"],
    },
    {
        id: 7,
        title: "HTML/CSS/JS",
        description: "Intermediate proficiency",
        tag: ["skills"],
    },
    {
        id: 8,
        title: "OSN Informatika 2022 Gold Medalist",
        description: "Achieved Gold medal at Indonesia's most prestigious competition for high school students",
        tag: ["achievements"],
    },
    {
        id: 9,
        title: "2024 ICPC Asia Pacific Championship Finalist",
        description: "Participated in the largest competitive programming competition in Asia region",
        tag: ["achievements"],
    },
    {
        id: 10,
        title: "2023 ICPC Asia-Jakarta Regional Finalist",
        description: "Participated in the largest competitive programming competition in Indonesia region",
        tag: ["achievements"],
    },
    {
        id: 11,
        title: "2nd Runner Up CompFest 15 UI",
        description: "5th place in CompFest 15 senior competitive programming category",
        tag: ["achievements"],
    },
    {
        id: 12,
        title: "VTOL Drone",
        description: "Developed software for autonomous drones with vertical takeoff and landing capabilities",
        tag: ["projects"]
    },
    {
        id: 13,
        title: "STEI-K ITB'23 Election System",
        description: "Created a software to help ensure fair voting in STEI-K ITB'23 leader election",
        tag: ["projects"]
    },
    {
        id: 14,
        title: "Coach at Kokocoder Group",
        description: "Conducted over 250 hours of comprehensive coaching sessions for more than 60 students, ranging from beginner to advanced levels.",
        tag: ["experiences"]
    },
    {
        id: 15,
        title: "42nd Place in IEEEXtreme 17.0 Programming Competition",
        description: "Placed 42nd out of 7091 teams world-wide.",
        tag: ["achievements"],
    },
    {
        id: 16,
        title: "Head of Competition of IMPACT 4.0",
        description: "Led a team of 12 staff members in creating and developing complex and engaging problems for a nation-wide competition.",
        tag: ["experiences"]
    },
    {
        id: 17,
        title: "2nd Runner Up at IDEAFUSE Mikroskil",
        description: "2nd runner up at a nation-wide competitive programming competition.",
        tag: ["achievements"]
    },
    {
        id: 18,
        title: "5th Place at Find IT UGM CP Category",
        description: "5th place at a nation-wide programming competition held by Gadjah Mada University.",
        tag: ["achievements"]
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
            <div className="relative w-max mx-auto h-18 w-90 grid grid-cols-5 items-center px-[3px] rounded-full bg-slate-900 overflow-hidden shadow-2xl shadow-900/20 transition">
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
                <TabButton selectTab={() => handleTabChange("experiences")} active={tab === "experiences"}  className="mr-5">
                    {" "}
                    Experiences{" "}
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
