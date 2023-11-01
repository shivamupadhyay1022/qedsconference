import React from 'react'
import "./hero.css"
import Typewriter from "typewriter-effect";
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Glowingbut from './Glowingbut.tsx'
import { Card } from 'flowbite-react';
import '../pages/About.css'
import { bitlogo, qedslogo } from '../images';

function Hero() {
    return (
        // <div className='banner h-screen w-full text-white text-center align-bottom '>Hero</div>
        <div class="banner h-[130vh] md:h-[110vh] ">
            <div className='flow-root w-full mt-4  z-500 ' >
                <img src={bitlogo} className='h-32 float-left ml-4 ' >
                </img>
                <img src={qedslogo} className='h-48 float-right mr-4' >
                </img>
            </div>
            <div class="absolute  md:mt-[calc(50vh-324px)]  w-full">

                <div class="text-white font-semibold ">
                    <center>
                        <h1 className='text-box text-5xl ml-8'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("1st Annual QEDS Conference 2024")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("1st Annual QEDS Conference 2024")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("1st Annual QEDS Conference 2024")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("1st Annual QEDS Conference 2024")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("1st Annual QEDS Conference 2024")
                                        .start();
                                }}
                            />
                        </h1>
                        <h4 className='mt-4'>
                            8, 9 AND 10 FEBRUARY, 2024
                        </h4>
                        <h3 className='mt-4'>
                            ORGANIZED BY
                        </h3>
                        <hr className='w-24 bg-blue-400 text-blue-500 mb-4' style={{
                            color: 'blue',
                            height: 5
                        }} />
                        <p className='text-1xl'>
                            CENTRE FOR QUANTITATIVE ECONOMICS AND DATA SCIENCE
                        </p>
                        <p className='text-1xl'>
                            BIRLA INSTITUTE OF TECHNOLOGY, MESRA,RANCHI,JHARKHAND
                        </p>
                        <p className='text-1xl'>
                            INDIA
                        </p>
                        <p className='text-2xl mt-4'>
                            THEME
                        </p>
                        <h4 className='mt-4 text-2xl md:w-1/2 md:ml-11'>
                            Data Driven Analytics in Contemporary Economics and Business Issues
                        </h4>
                        <p className='text-2xl mt-4'>
                            Broad theme for invited lectures:

                        </p>
                        <h4 className='mt-4 text-2xl md:w-1/2 md:ml-11'>
                            Frontiers of research and recent applications in Economics, Statistics and Data Science focussing on economic development and public policy
                        </h4>
                        <div className='mt-4 mb-4' >
                            <Link to='/register'>
                                <Glowingbut children="Submit your paper now" />
                            </Link >
                        </div>
                    </center>
                </div>

            </div>


        </div>
    )
}

export default Hero