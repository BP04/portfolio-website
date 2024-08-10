"use client"
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className="px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                        Hello, I&apos;m{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Benedict Presley',
                            1000,
                            'a Student',
                            1000,
                            'a Software Developer',
                            1000,
                            'a Competitive Programmer',
                            1000,
                            'a Programming Coach',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '0.7em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ACD7BE] text-base sm:text-lg mb-6 lg:text-xl">
                I&apos;m an undergraduate student at Bandung Institute of Technology, majoring in Informatics Engineering. I have extensive experience in competitive programming with multiple awards in the field. I enjoy teaching competitive programming and love exploring the IT world.
                </p>
                <div>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-200 to-green-400 hover:bg-slate-800 text-white mt-3">
                        <a
                            href="/piblic/CV - Benedict Presley.pdf"
                            download="CV - Benedict Presley.pdf"
                            className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                        >
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="blob-container">
                    <Image
                        src="/images/profile-picture.jpeg"
                        alt="hero image"
                        layout="fill"
                        objectFit="cover"
                        className="blob-image">
                    </Image>
                </div>
                <style jsx>{`
                    .blob-container {
                        position: relative;
                        width: 250px;
                        height: 250px;
                        border-radius: 50%;
                        overflow: hidden;
                        background: #181818;
                        animation: blobAnimation 10s infinite;
                    }

                    @media (min-width: 1024px) {
                        .blob-container {
                        width: 380px;
                        height: 380px;
                        }
                    }

                    .blob-image {
                        border-radius: 50%;
                    }

                    @keyframes blobAnimation {
                        0% {
                        border-radius: 42% 58% 67% 33% / 38% 42% 58% 62%;
                        }
                        25% {
                        border-radius: 58% 42% 33% 67% / 62% 52% 48% 38%;
                        }
                        50% {
                        border-radius: 42% 58% 67% 33% / 38% 62% 58% 42%;
                        }
                        75% {
                        border-radius: 58% 42% 33% 67% / 62% 38% 48% 52%;
                        }
                        100% {
                        border-radius: 42% 58% 67% 33% / 38% 42% 58% 62%;
                        }
                    }
                `}</style>
            </div>
        </div>
    </section>
  )
}

export default HeroSection