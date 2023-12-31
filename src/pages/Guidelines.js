import React from 'react'
import { Navbar, Footer, Button } from 'flowbite-react'
import { bitlogo, logobg } from '../images'
import {  BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import "./Home.css"
import "./About.css"
import Hero from '../components/Hero'

function Guidelines() {
  return (
    <div><Navbar className='bg-blue-500 text-white' fluid >
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
      <Navbar.Link className='text-white' href="/date">Important Dates</Navbar.Link>
      <Navbar.Link className='text-white' href="/aboutconf">About Conference</Navbar.Link >
      <Navbar.Link className='text-white' href="/about">Committees</Navbar.Link>
      <Navbar.Link className='text-white' active href="/guidelines">Guidelines</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  <div className='md:h-[60vh] align-center text-center mt-24 mb-32'>
    <center className='  '>
    <p className="text-white text-4xl block mt-4 ">Author Guidelines</p>
          
    <hr
            className="w-64 bg-blue-400 text-blue-500 mb-4"
            style={{
              color: "white",
              height: 5,
            }}
          />


          <p className="w-3/4 text-2xl mb-8 ">
          Preparation of Paper: Your Contribution may be prepared in LaTeX or Ms-Word and submitted in pdf format only.
          Manuscripts should be formatted in Times New Roman with Font Size 12 and 1.5 line spacing
          </p>
          
      </center>


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

export default Guidelines