import React from 'react'
import { Navbar, Footer, Button } from 'flowbite-react'
import { Avatar } from 'flowbite-react';
import { gopal, logo, logobg, manna, mousami, partha, rahul, salabh, vimal } from '../images'
// import "./About.css"
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
// import "./Home.css"

function Aboutconfcomp() {
    return (
        <div className='md:h-[200vh] align-center text-center mt-24 mb-8'>
            <center className=' mr-8 md:mr-48 '>
                <div className='flex align-middle justify-center'>

                    <img src={logobg} className='w-48'></img>
                    <h5 className="text-2xl font-bold text-white dark:text-white mt-8">
                        <p>
                            About Conference
                        </p>
                    </h5>
                </div>
            </center>

            <p className="font-normal text-white dark:text-gray-400 px-8 mt-10">
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

            <div className='flex flex-col grid-col-2 align-middle  mt-4 text-center justify-center content-center md:flex-row   '>
                <div className=' text-center content-center w-full md:w-1/2' >
                    <h3 className='text-2xl text-blue-400 align-middle text-center justify-center' >Date</h3>
                    <p>8, 9 AND 10 FEBRUARY, 2024</p>
                    <h3 className='text-2xl text-blue-400 align-middle text-center justify-center' >Last Submission Date</h3>
                    <p>10 DECEMBER, 2023</p>
                </div>
                <div className='text-center w-full md:w-1/2 ' >
                    <h3 className='text-2xl text-blue-400   ' >Venue</h3>
                    <p>
                        CENTRE FOR QUANTITATIVE ECONOMICS AND DATA SCIENCE
                    </p>
                    <p>
                        BIRLA INSTITUTE OF TECHNOLOGY, MESRA ,RANCHI
                    </p>
                </div>


            </div>

            <div>
                <div className='mt-4 md:mb-8' >
                    <h3 className='text-3xl text-blue-400   ' >Invited Speakers</h3>
                    <div className='flex flex-col align-middle text-center justify-center content-center md:flex-row mt-8' >
                        <div className="w-full h-[180px]  md:w-[280px] md:ml-4 md:mr-4 ">
                            <div className="flex flex-col  pb-10">
                                <Avatar img={rahul} size="lg" alt="avatar of Jese" rounded />
                                <h5 className="mb-1 text-xl font-medium text-white dark:text-white">Prof. Rahul Mukerjee</h5>
                                <span className="text-sm text-white dark:text-gray-400">Indian Institute of Management Calcutta</span>
                            </div>
                        </div>
                        <div className="w-full h-[180px]  md:w-[280px] md:ml-4 md:mr-4 ">
                            <div className="flex flex-col  pb-10">
                                <Avatar img={partha} size="lg" alt="avatar of Jese" rounded />
                                <h5 className="mb-1 text-xl font-medium text-white dark:text-white">Prof. Partha Ray.</h5>
                                <span className="text-sm text-white dark:text-gray-400"> Director NIBM pune,(Retd.Professor IIM Calcutta)</span>
                            </div>
                        </div>
                        <div className="w-full h-[180px]  md:w-[280px] md:ml-4 md:mr-4 ">
                            <div className="flex flex-col  pb-10">
                                <Avatar img={salabh} size="lg" alt="avatar of Jese" rounded />
                                <h5 className="mb-1 text-xl font-medium text-white dark:text-white">Prof. Shalabh</h5>
                                <span className="text-sm text-white dark:text-gray-400"> Indian Institute of Technology Kanpur</span>
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col align-middle text-center justify-center content-center md:flex-row mt-8' >
                        <div className="w-full h-[180px]  md:w-[280px] md:ml-4 md:mr-4 ">
                            <div className="flex flex-col  pb-10">
                                <Avatar img={vimal} size="lg" alt="avatar of Jese" rounded />
                                <h5 className="mb-1 text-xl font-medium text-white dark:text-white">Prof. Vimal Kumar</h5>
                                <span className="text-sm text-white dark:text-gray-400">Indian Institute of Management Kanpur</span>
                            </div>
                        </div>
                        <div className="w-full h-[180px]  md:w-[280px] md:ml-4 md:mr-4 ">
                            <div className="flex flex-col  pb-10">
                                <Avatar img={gopal} size="lg" alt="avatar of Jese" rounded />
                                <h5 className="mb-1 text-xl font-medium text-white dark:text-white">Prof. Gopal Krishna Basak.</h5>
                                <span className="text-sm text-white dark:text-gray-400"> Indian Statistical Institute, Kolkata</span>
                            </div>
                        </div>
                        <div className="w-full h-[180px]  md:w-[280px] md:ml-4 md:mr-4 ">
                            <div className="flex flex-col  pb-10">
                                <Avatar img={mousami} size="lg" alt="avatar of Jese" rounded />
                                <h5 className="mb-1 text-xl font-medium text-white dark:text-white">Prof. Mousumi Dutta</h5>
                                <span className="text-sm text-white dark:text-gray-400"> Presidency University, Kolkata</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='mt-4 md:mb-16' >
                    <h3 className='text-3xl text-blue-400   ' >Advisory Committee</h3>
                    <div className='mt-4 mb-4'>
                        <p>
                            Prof. Anup Dewanji.
                        </p>
                        <p>
                            Professor of ISI Kolkata
                        </p>
                    </div>
                    <div className='mt-4 mb-4'>
                        <p>
                            Prof. Rajat Acharyya.
                        </p>
                        <p>
                            Professor of Economics, Director UGC HRDC. Jadavpur University, Kolkata
                        </p>
                    </div>
                    <div className='mt-4 mb-4'>
                        <p>
                            Prof. Vivekananda Mukherjee.
                        </p>
                        <p>
                            Professor, BITS Pilani, Hyderabad campus 4. Prof Malabika Roy, Professor. Jadavpur University, Kolkata.
                        </p>
                    </div>
                    <div className='mt-4 mb-4'>
                        <p>
                            Prof. S Karthikeyan,
                        </p>
                        <p>
                            Professor, Institute of Science, Banaras Hindu University Varanasi

                        </p>
                    </div>
                    <div className='mt-4 mb-4'>
                        <p>
                            Prof. Annapurna Shaw
                        </p>
                        <p>
                            Professor(retired), Indian Institute of Management Calcutta, Kolkat.
                        </p>
                    </div>
                    <div className='mt-4 mb-4'>
                        <p>
                            Prof. Geetanjali Panda
                        </p>
                        <p>
                            Professor, Indian Institute of Technology, Kharagpur.
                        </p>
                    </div>
                    <div className='mt-4 mb-4'>
                        <p>
                            Prof. Praveen Dhyani
                        </p>
                        <p>
                            Banasthali University
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutconfcomp