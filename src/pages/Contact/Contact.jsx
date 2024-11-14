import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import Jello from "react-reveal/Jello";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Invalid email address"); // Log for debugging
      return;
    }

    emailjs
      .sendForm(
        "service_d5n0h3v", // Your Service ID
        "template_inn1k6e", // Your Template ID
        form.current, // Your form reference
        "CYGqw-jeKJp9xKm76" // Your Public Key (without an object)
      )
      .then(
        () => {
          toast.success("Message Sent, I'll contact you soon!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("Success"); // Log for debugging
        },
        (error) => {
          toast.error("Failed to send message, try again later.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("Failed", error.text); // Log for debugging
        }
      );
  };

  const linkedinUrl = "https://www.linkedin.com/in/avijit-dam-a45814208/";
  const githubUrl = "https://github.com/Avijitdam98";
  const gmailUrl = "mailto:avijitdam003@gmail.com";

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xl-6">
              <div className="card1">
                <div className="row border-line">
                  <Jello>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="contact"
                      className="image"
                    />
                  </Jello>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <div className="card2 d-flex card border-0 px-4 py-3">
                  <h6>
                    Contact With
                    <a href={linkedinUrl}>
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                    </a>
                    <a href={githubUrl}>
                      <BsGithub color="black" size={30} className="ms-2" />
                    </a>
                    <a href={gmailUrl}>
                      <BiLogoGmail color="red" size={30} className="ms-2" />
                    </a>
                  </h6>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Write your Name"
                      className="input-field mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Enter your Email Address"
                      className="input-field mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      name="message"
                      placeholder="Write your Message"
                      className="input-field mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
