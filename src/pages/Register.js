import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { Button, Label, TextInput, Checkbox, Card, FileInput } from "flowbite-react";
import { HiMail } from 'react-icons/hi';
import { NavLink, Link } from "react-router-dom";
import { logobg } from "../images";

function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [file, setFile] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [exam, setexam] = useState("");

  const navigate = useNavigate();
  const [error, setError] = useState("")

  

  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.752130688": "",
    "entry.1939908270": "",
    "entry.84347739": "",
    "entry.44790295": "",
    "entry.2036977325": "",
    "entry.773319340": "",
    "entry.2088734036": "",
    "entry.1940062922": "",
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url ='https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2ZI2j2zfMMCmTrjMlVj1-R9monyqdUcmqs_2TpMzHBgDSCw/formResponse?entry.752130688=${formData["entry.752130688"]}&entry.1939908270=${formData["entry.1939908270"]}&entry.84347739=${formData["entry.84347739"]}&entry.44790295=${formData["entry.44790295"]}&entry.2036977325=${formData["entry.2036977325"]}&entry.773319340=${formData["entry.773319340"]}&entry.2088734036=${formData["entry.2088734036"]}&entry.1940062922=${formData["entry.1940062922"]}'
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    navigate('/about')
  }
//https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2ZI2j2zfMMCmTrjMlVj1-R9monyqdUcmqs_2TpMzHBgDSCw/formResponse

//https://docs.google.com/forms/d/e/1FAIpQLSe2ZI2j2zfMMCmTrjMlVj1-R9monyqdUcmqs_2TpMzHBgDSCw/viewform?usp=pp_url
  return (
    <div class=" md:flex">
      <div
        class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">QEDS</h1>
          <p class="text-white mt-1">First Annual QEDS Conference 2024</p>
          <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
        </div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <div className="flex items-center justify-center p-12">

          <div className="mx-auto w-full max-w-[550px]">
            <img src={logobg} className="w-36 mb-8" />
            <p className="mb-3 block text-base font-medium text-[#07074D] " >Name of the Presenter</p>
            <form className="signupForm" onSubmit={handleSubmit} target="_self">

              <div className="-mx-3 flex flex-wrap">

                <div className="w-full px-3 sm:w-1/2">


                  <div className="mb-5">
                    <label
                      htmlFor="entry.752130688"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="entry.752130688"
                      placeholder="First Name"
                      value={formData["entry.752130688"]}
                      onChange={handleInputData("entry.2037917220")}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="entry.1939908270"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="entry.1939908270"
                      placeholder="Last Name"
                      value={formData["entry.1939908270"]}
                      onChange={handleInputData("entry.1939908270")}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label
                    htmlFor="entry.84347739"
                    value="Your email"
                  />
                </div>
                <TextInput
                  id="email4"
                  placeholder="name@email.com"
                  required
                  value={formData["entry.84347739"]}
                      onChange={handleInputData("entry.84347739")}
                  rightIcon={HiMail}
                  type="email"
                />
              </div>
              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label
                    htmlFor="entry.44790295"
                    value="Contact No"
                  />
                </div>
                <TextInput
                  id="mobile"
                  required
                  placeholder="contact no"
                  value={formData["entry.44790295"]}
                      onChange={handleInputData("entry.44790295")}
                  type="text"
                />
              </div>

              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label
                    htmlFor="entry.2036977325"
                    value="Affliation"
                  />
                </div>
                <TextInput
                  id="email4"
                  placeholder="Affliation"
                  required
                  value={formData["entry.2036977325"]}
                      onChange={handleInputData("entry.2036977325")}
                  type="text"
                />
              </div>
              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label
                    htmlFor="entry.773319340"
                    value="Author(s)"
                  />
                </div>
                <TextInput
                  id="email4"
                  placeholder="Author(s)"
                  required
                  value={formData["entry.773319340"]}
                      onChange={handleInputData("entry.773319340")}
                  type="text"
                />
              </div>
              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label
                    htmlFor="entry.2088734036"
                    value="Title of the Paper"
                  />
                </div>
                <TextInput
                  id="email4"
                  placeholder="Title of the Paper"
                  required
                  value={formData["entry.2088734036"]}
                      onChange={handleInputData("entry.2088734036")}
                  type="text"
                />
              </div>

              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label
                    htmlFor="entry.1940062922"
                    value="Abstract"
                  />
                </div>
                <TextInput
                  id="email4"
                  placeholder="Abstract (Maximum 250 words)"
                  required
                  value={formData["entry.1940062922"]}
                      onChange={handleInputData("entry.1940062922")}
                  type="text"
                />
              </div>



              <div
                className="max-w-md mb-5"
                id="fileUpload"
              >
                <div className="mb-2 block underline ">
                  <Label
                    htmlFor="file"
                    value="Upload your file here"
                  />
                </div>
                <FileInput
                  helperText="Upload a pdf file"
                  id="file"
                //   onChange={onUpload}
                />
              </div>

              <div
                className="flex max-w-md flex-col gap-4"
                id="checkbox"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Checkbox
                    defaultChecked
                    id="accept"
                  />
                  <Label
                    className="flex"
                    htmlFor="agree"
                  >
                    <p>
                      I agree with the
                    </p>
                    <a
                      className="text-cyan-600 pl-1 hover:underline dark:text-cyan-500"
                      href="/termsandcontions"
                    >
                      <p>
                        {" "}terms and conditions
                      </p>
                    </a>
                  </Label>
                </div>
              </div>
              <div className="mb-8" >
                <Link to='/guidelines'>
                  <p className="text-blue-600 underline" >
                    Guideline for Authors
                  </p>
                </Link >
              </div>

              <div>
                <button
                type="submit"
                  className={`w-full hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register;