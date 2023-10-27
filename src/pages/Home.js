import React from 'react'
import { Navbar,Footer } from 'flowbite-react'
import { logo, logobg } from '../images'
import "./About.css"
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';
import "./Home.css"
import Hero from '../components/Hero'

function Home() {
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
                    <Navbar.Link href="/" active className='text-white' >
                        Home
                    </Navbar.Link >
                    <Navbar.Link className='text-white' href="/aboutus">
                        About Us
                    </Navbar.Link>
                    <Navbar.Link className='text-white'  href="/date">Important Dates</Navbar.Link>
                    <Navbar.Link className='text-white'  href="/aboutconf">About Conference</Navbar.Link >
                    <Navbar.Link className='text-white' href="/about">Comittees</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
    <Hero/>
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

export default Home