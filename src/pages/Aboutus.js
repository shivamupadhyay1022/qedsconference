import React from 'react'

import { Navbar, Footer, Button } from 'flowbite-react'
import { bitlogo, logo, logobg } from '../images'
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import "./Home.css"
import "./About.css"

function Aboutus() {
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
          <Navbar.Link className='text-white' active href="/aboutus">
            About Us
          </Navbar.Link>
          <Navbar.Link className='text-white' href="/date">Important Dates</Navbar.Link>
          <Navbar.Link className='text-white' href="/aboutconf">About Conference</Navbar.Link >
          <Navbar.Link className='text-white' href="/about">Comittees</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className='md:h-[60vh] align-center text-center mt-24 mb-8'>
        <center className='  '><img src={bitlogo} className='w-36'></img>
          <div className='flex align-middle justify-center'>


            <h5 className="text-3xl font-bold text-white dark:text-white mt-8">
              <p>
                About Us
              </p>
            </h5>
          </div>
        </center>

        <p className="font-normal text-white dark:text-gray-400 px-8 mt-10">
          <p>
            The Centre for Quantitative Economics and Data Science was established in the year 2021 with the aim to provide fundamental knowledge and problem-solving skills in the area of Quantitative Economics and Data Sciences. This will help in disseminating the acquired knowledge towards improving analytical skills, research and practical application.
            The Centre is recognized at par with existing leading Centers in terms of available computational facilities and academic & research infrastructure. The Centre remains committed to its two-fold mission.

            Centre’s Vision

            To become a globally recognized centre of excellence in teaching and research by producing academicians, professionals, and innovators to create a better world where a profound understanding of the field of Quantitative Economics and Data Sciences drives positive change in business and society.
            <br />
            Centre’s Mission

            •    To set-up a world-class Quantitative Economics and Data Science centre by producing original & robust research insights, delivering high-quality & evidence-based education and engaging with people & organisations worldwide, across the private & public sectors, who are motivated to transform the world by tackling real world challenges.
            •    To intellectually transform students for productive and stimulating careers by providing them a strong grasp of fundamentals through a diverse living environment, exposure to new ideas and interaction with people who come from different walks of life and have evolving identities.
          </p>
        </p>

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

export default Aboutus