import React from 'react'
import { Navbar, Footer, Button } from 'flowbite-react'
import { logo, logobg } from '../images'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import "./Home.css"
import "./About.css"
import Hero from '../components/Hero'

function Important() {
  return (
    <div>
            <Navbar className='bg-blue-500 text-white' fluid >
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logobg} className="mr-3 h-6 sm:h-9 " alt="Flowbite React Logo" />
                    <div className='hidden md:flex'  >
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">1<sup>st</sup>ANNUAL QEDS </span>
                        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white text-amber-500'> CONFERENCE 2K24</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/" className='text-white' >
                        Home
                    </Navbar.Link >
                    <Navbar.Link className='text-white' href="/aboutus">
                        About Us
                    </Navbar.Link>
                    <Navbar.Link className='text-white' active href="/date">Important Dates</Navbar.Link>
                    <Navbar.Link className='text-white'  href="/aboutconf">About Conference</Navbar.Link >
                    <Navbar.Link className='text-white' href="/about">Comittees</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <div className='md:h-[60vh] align-center text-center mt-24 mb-8'>
                <center className=' mr-8 md:mr-48 '>
                    <div className='flex align-middle justify-center'>
                    
                        <img src={logobg} className='w-48'></img>
                        <h5 className="text-4xl font-bold text-white dark:text-white mt-8">
                            <p>
                                Important Dates
                            </p>
                        </h5>
                    </div>
                </center>

                <p className="font-normal text-3xl text-white dark:text-gray-400 px-8 mt-10">
                    <p>
                    February 8,2024(Thrusday)
                    </p>
                    <p>
                    February 9,2024(Friday)
                    </p>
                    <p>
                    February 10,2024(Saturday Half)
                    </p>
                </p>
                <center>
                    <Button href='/register' className='w-36 mt-4 ml-11' >Register Now</Button></center>

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
                                        Comittees
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

export default Important