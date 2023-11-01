import React from 'react'
import "./About.css"
import { BiLogoGmail } from 'react-icons/bi'
import { kusum, manish, mrinal, saheli, shrimoyee, tamalika, tina,manna, Mukhopadhyay } from '../images'
import { Navbar, Footer, Button } from 'flowbite-react'
import { logo, logobg } from '../images'
import { BsFacebook, BsGithub, BsInstagram,  BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs'

function About() {
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
                    <Navbar.Link className='text-white' active href="/aboutus">
                        About Us
                    </Navbar.Link>
                    <Navbar.Link className='text-white'  href="/date">Important Dates</Navbar.Link>
                    <Navbar.Link className='text-white'  href="/aboutconf">About Conference</Navbar.Link >
                    <Navbar.Link className='text-white' href="/about">Committees</Navbar.Link>
                    <Navbar.Link className='text-white'  href="/guidelines">Guidelines</Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        <div class="Team-body">
                
            <h1 class="Team-heading">OUR TEAM</h1>
            <div class="Team-row">
                    <div class="TeamCard-card">
                        <div class="TeamCard-img-container"><img src={manna}
                            alt="Dr. Indranil Manna" /></div>
                        <h3>Dr. Indranil Manna</h3>
                        <p>Patron</p>
                        <div class="TeamCard-icons">
                            <a href="mailto:imanna.kgp@gmail.com">
                                <BiLogoGmail /></a>
                            <a href="linkedin.com/in/indranil-manna-3851a01aap" target="_blank">
                                <BsLinkedin /></a>
                        </div>
                    </div>

                </div>
                <div class="Team-row">

                    <div class="TeamCard-card">
                        <div class="TeamCard-img-container"><img src={Mukhopadhyay}
                            alt="Dr. Kunal Mukhopadhyay" /></div>
                        <h3>Dr. Kunal Mukhopadhyay</h3>
                        <p>Head of Department</p>
                        <div class="TeamCard-icons">
                            <a href="mailto:hoc.eds@bitmesra.ac.in">
                                <BiLogoGmail /></a>
                            <a href="" target="_blank">
                                <BsLinkedin /></a>
                        </div>
                    </div>
                <div class="TeamCard-card">
                    <div class="TeamCard-img-container"><img src={mrinal}
                        alt="Dr. Mrinal Jana" /></div>
                    <h3>Dr. Mrinal Jana</h3>
                    <p>Co-Convener</p>
                    <div class="TeamCard-icons"><a href="mailto:mjana@bitmesra.ac.in">
                            <BiLogoGmail /></a>
                        <a href="https://www.linkedin.com/in/prashant-jha-8109866b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                            <BsLinkedin /></a></div>
                </div>
                <div class="TeamCard-card">
                    <div class="TeamCard-img-container"><img src={tamalika}
                        alt="Dr. Tamalika Koley" /></div>
                    <h3>Dr. Tamalika Koley</h3>
                    <p>Secretary</p>
                    <div class="TeamCard-icons"><a href="mailto:tamalika@bitmesra.ac.in">
                            <BiLogoGmail /></a>
                        <a href="https://www.linkedin.com/in/tamalika-koley-9b5565170?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                            <BsLinkedin /></a></div>
                </div>
                <div class="TeamCard-card">
                    <div class="TeamCard-img-container"><img src={saheli}
                        alt="Dr. Saheli Bose" /></div>
                    <h3>Dr. Saheli Bose</h3>
                    <p>Program Chair</p>
                    <div class="TeamCard-icons"><a href="mailto:sahelib@bitmesra.ac.in">
                            <BiLogoGmail /></a>
                        <a href="https://www.linkedin.com/in/saheli-bose-08b6611aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                            <BsLinkedin /></a></div>
                </div>
                <div class="TeamCard-card">
                    <div class="TeamCard-img-container"><img src={manish}
                        alt="Dr. Manish K. Pandey" /></div>
                    <h3>Dr. Manish K. Pandey</h3>
                    <p>Publication Chair</p>
                    <div class="TeamCard-icons"><a href="mailto:manishkpandey@bitmesra.ac.in">
                            <BiLogoGmail /></a>
                        <a href="https://www.linkedin.com/in/manish-pandey-21928228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                            <BsLinkedin /></a></div>
                </div>
                <div class="TeamCard-card">
                    <div class="TeamCard-img-container"><img src={kusum}
                        alt="Dr. Kusum Lata Mishra" /></div>
                    <h3>Dr. Kusum Lata Mishra</h3>
                    <p>Hospitality Chair</p>
                    <div class="TeamCard-icons"><a href="mailto:dr.kusum@bitmesra.ac.in">
                            <BiLogoGmail /></a>
                        <a href="https://www.linkedin.com/in/saheli-bose-08b6611aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                            <BsLinkedin /></a></div>
                </div>
                <div class="TeamCard-card">
                    <div class="TeamCard-img-container"><img src={tina}
                        alt="Dr. Tina Dutta" /></div>
                    <h3>Dr. Tina Dutta</h3>
                    <p>Finance Chair</p>
                    <div class="TeamCard-icons"><a href="mailto:tina.dutta@bitmesra.ac.in">
                            <BiLogoGmail /></a>
                        <a href="https://www.linkedin.com/in/dr-tina-dutta-67412015?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                            <BsLinkedin /></a></div>
                </div>

            </div>
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

export default About