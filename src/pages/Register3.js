import React, { useId, useState, useEffect } from "react";
import database from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Label,
  TextInput,
  Checkbox,
  Card,
  FileInput,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";
import { logobg } from "../images";
import convertToBase64 from "../helper/convert";
import {
  uploadBytes,
  getDownloadURL,
  getStorage,
  listAll,
  list,
} from "firebase/storage";
import { ref as ref2 } from "firebase/storage";
import { v4 } from "uuid";

function Register3() {
  
  const storage = getStorage();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const db = getDatabase();
  const [file, setFile] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [mobile, setMobile] = useState("");
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [urls, setUrl] = useState("");

  const imagesListRef = ref2(storage, "docs/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref2(storage, `docs/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        setUrl(url);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          setUrl(url);
        });
      });
    });
  }, []);

  const handleSubmit = (e) => {
    uploadFile();
    e.preventDefault();
    console.log(urls);
    function onRegister() {
      set(ref(db, "conference/" + firstName + "_" + lastName), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mob: mobile,
        affiliation: affiliation,
        author: author,
        title: title,
        abstract: abstract,
        file: urls,
      }).catch((error) => setError(error));
      // console.log(error),
      console.log("Success")
      // navigate("/");
    }
    onRegister();
  };

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div class=" md:flex">
      <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">QEDS</h1>
          <p class="text-white mt-1">First Annual QEDS Conference 2024</p>
          <button
            type="submit"
            class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
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
            <p className="mb-3 block text-base font-medium text-[#07074D] ">
              Name of the Presenter
            </p>
            <form className="signupForm" onSubmit={handleSubmit}>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="lastname"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label htmlFor="email4" value="Your email" />
                </div>
                <TextInput
                  id="email4"
                  placeholder="name@email.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  rightIcon={HiMail}
                  type="email"
                />
              </div>
              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label htmlFor="mobile" value="Contact No" />
                </div>
                <TextInput
                  id="mobile"
                  required
                  placeholder="contact no"
                  onChange={(e) => setMobile(e.target.value)}
                  type="text"
                />
              </div>

              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label htmlFor="number" value="Affliation" />
                </div>
                <TextInput
                  id="email4"
                  placeholder="Affliation"
                  required
                  onChange={(e) => setAffiliation(e.target.value)}
                  type="text"
                />
              </div>
              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label htmlFor="number" value="Author(s)" />
                </div>
                <TextInput
                  id="email4"
                  placeholder="Author(s)"
                  required
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
                />
              </div>
              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label htmlFor="number" value="Title of the Paper" />
                </div>
                <TextInput
                  id="email4"
                  placeholder="Title of the Paper"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                />
              </div>

              <div className="mb-5">
                <div className="mb-3 block text-base font-medium text-[#07074D]">
                  <Label htmlFor="number" value="Abstract" />
                </div>
                <TextInput
                  id="email4"
                  placeholder="Abstract (Maximum 250 words)"
                  required
                  onChange={(e) => setAbstract(e.target.value)}
                  type="text"
                />
              </div>

              <div className="max-w-md mb-5" id="fileUpload">
                <div className="mb-2 block underline ">
                  <Label htmlFor="file" value="Upload your file here" />
                </div>
                <FileInput
                  helperText="Upload a pdf file"
                  id="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                {/* {imageUrls.map((url) => {
                  setUrl(url);
                  return ;
                })} */}
              </div>

              <div className="flex max-w-md flex-col gap-4" id="checkbox">
                <div className="flex items-center gap-2 mb-5">
                  <Checkbox defaultChecked id="accept" />
                  <Label className="flex" htmlFor="agree">
                    <p>I agree with the</p>
                    <a
                      className="text-cyan-600 pl-1 hover:underline dark:text-cyan-500"
                      href="/termsandcontions"
                    >
                      <p> terms and conditions</p>
                    </a>
                  </Label>
                </div>
              </div>
              <div className="mb-8">
                <Link to="/guidelines">
                  <p className="text-blue-600 underline">
                    Guideline for Authors
                  </p>
                </Link>
              </div>

              <div>
                <button
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
  );
}

export default Register3;
