import React from 'react'
import "./hero.css"
import Typewriter from "typewriter-effect";
import { Button } from 'flowbite-react';
import { Card } from 'flowbite-react';
import '../pages/About.css'

function Hero() {
    return (
        // <div className='banner h-screen w-full text-white text-center align-bottom '>Hero</div>
        <div class="banner">
            <div class="absolute mt-[calc(50vh-184px)] px-4 py-3  w-full">
                <div class="text-white font-semibold ">

                    <h1 className='text-box text-4xl ml-8'><Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Welcome to 1st Annual QEDS Conference 2k24")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Welcome to 1st Annual QEDS Conference 2k24")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Welcome to 1st Annual QEDS Conference 2k24")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Welcome to 1st Annual QEDS Conference 2k24")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Welcome to 1st Annual QEDS Conference 2k24")
                                .start();
                        }}
                    /></h1>
                    <h4 className='mt-8 w-1/2 ml-11'>
                        Welcome everyone to our 1st Annual QEDS Conference 2K24, a milestone moment in our journey of knowledge and collaboration.
                        May this conference be a catalyst for forging a new connections,sharing wisdom and driving process in our respective fields.
                    </h4>
                    <Button href='/register' className='w-16 mt-4 ml-11'>Register </Button>
                </div>
                <Card
                    className="footer overflow-x-scroll h-[186px] md:h-[280px] mr-4 ml-11 mt-4 md:mt-8"
                    href="#"
                >
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                        <p>
                            About Conference
                        </p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>
                        1st Annual QEDS Conference 2024 aims at bringing together researchers and specialists in data science, 
                        economics, statistics, and other relevant disciplines. The rapid advancement of databases and technologies 
                        with the development of improved methodologies have led to the use of data science in various fields including 
                        economics. The applications in economics data have been growing exponentially and producing promising results. 
                        The conference will consider different original articles focusing mainly on methodological, theoretical, and 
                        applied research in various domains of economics and business. The objective of this conference is to provide 
                        insight into the recent advancements of data analytics tools and techniques in emerging economic applications. 
                        Our goal is to create a resource-rich environment through the active participation of key invited speakers from 
                        different reputed institutions with their valuable talks. It will create an ideal platform for engaging in 
                        meaningful conversation that will exchange data-driven ideas which will be beneficial for the advancement of 
                        research activities. This will also promote possible collaborations in multidisciplinary areas of science among 
                        the participants which will promote research and development activities. To summarise, the goal of this conference 
                        is to cover a broad range of data topics and provide a great venue for exchanging solutions for data analytical 
                        methods along with the proper conclusions drawn from the studies in quantitative economics.
                        </p>
                    </p>
                </Card>

            </div>


        </div>
    )
}

export default Hero