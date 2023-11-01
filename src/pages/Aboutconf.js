import React from 'react'
import { Navbar, Footer, Button } from 'flowbite-react'
import { logo, logobg } from '../images'
import "./About.css"
import { BsFacebook,BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import "./Home.css"

function Aboutconf() {
    return (
        <div>
            <Navbar className='bg-blue-500 text-white' fluid >
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logobg} className="mr-3 h-6 sm:h-9 " alt="Flowbite React Logo" />
                    <div className='hidden md:flex'  >
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">1<sup>st</sup>ANNUAL QEDS </span>
                        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white text-amber-500'> CONFERENCE 2024</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/" className='text-white' >
                        Home
                    </Navbar.Link >
                    <Navbar.Link className='text-white'  href="/aboutus">
                        About Us
                    </Navbar.Link>
                    <Navbar.Link className='text-white'  href="/date">Important Dates</Navbar.Link>
                    <Navbar.Link className='text-white' active href="/aboutconf">About Conference</Navbar.Link >
                    <Navbar.Link className='text-white' href="/about">Committees</Navbar.Link>
                    <Navbar.Link className='text-white'  href="/guidelines">Guidelines</Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
            <div className='md:h-[60vh] align-center text-center mt-24 mb-8'>
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
                <center>
                    <Button href='/Submit Your Paper' className='w-36 mt-4 ml-11' >Submit Your Paper </Button></center>

            </div>
            <Footer className='bg-blue-800 ' container>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div className='text-white' >
                            <Footer.Brand id='footer' className='footer hidden md:flex'
                                alt="Logo"
                                href="#"
                                name="1st Annual QEDS Conference"
                                src={logobg}
                            />
                        </div>
                        <div className="">
                            <div>
                                <Footer.Title className='text-white' title="Quick Links" />
                                <Footer.LinkGroup className='text-white' col>
                                    <Footer.Link href="/aboutus">
                                        About Us
                                    </Footer.Link>
                                    <Footer.Link href="/date">
                                        Important Dates
                                    </Footer.Link>
                                    <Footer.Link href="/aboutconf">
                                        About Conference
                                    </Footer.Link>
                                    <Footer.Link href="/about">
                                        Committees
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>

                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright className='text-white'
                            by="QEDS BIT Mesra™"
                            href="#"
                            year={2023}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-white">
                            <Footer.Icon className='text-white'
                                href="https://www.linkedin.com/school/b.i.t.-mesra-ranchi/?originalSubdomain=in"
                                icon={BsLinkedin}
                            />
                            <Footer.Icon className='text-white'
                                href="https://instagram.com/bitmesra1955?igshid=MzRlODBiNWFlZA=="
                                icon={BsInstagram}
                            />
                            <Footer.Icon className='text-white'
                                href="https://twitter.com/bit_mesra?lang=en"
                                icon={BsTwitter}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}

export default Aboutconf