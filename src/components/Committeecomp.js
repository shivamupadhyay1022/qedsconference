import React from 'react'
import "../pages/About.css"
import { BiLogoGmail } from 'react-icons/bi'
import { kusum, manish, mrinal, saheli, shrimoyee, tamalika, tina, Mukhopadhyay, manna } from '../images'
import { Navbar, Footer, Button } from 'flowbite-react'
import { logo, logobg } from '../images'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs'

function Committeecomp() {
    return (
        <div>

            <div class="Team-body">

            <h3 className='text-3xl text-blue-400  w-full text-center mb-4 ' >Organizing Committee</h3>
            <center><hr
            className="w-64 bg-blue-400 text-blue-500 mb-4"
            style={{
              color: "white",
              height: 5,
            }}
          /></center>
            
                <div class="Team-row">
                    <div class="TeamCard-card">
                        <div class="TeamCard-img-container"><img src={manna}
                            alt="Dr. Indranil Manna" /></div>
                        <h3>Dr. Indranil Manna</h3>
                        <p>Patron</p>
                        <p>Hon'ble Vice Chancellor</p>
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
                        <div class="TeamCard-img-container"><img src={shrimoyee}
                            alt="Dr. Shrimoyee Ganguly" /></div>
                        <h3>Dr. Shrimoyee Ganguly</h3>
                        <p>Convenor</p>
                        <div class="TeamCard-icons">
                            <a href="mailto:shrimoyee@bitmesra.ac.in">
                                <BiLogoGmail /></a>
                            <a href="https://www.linkedin.com/in/shrimoyee-ganguly-2ba402216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
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
        </div>
    )
}

export default Committeecomp