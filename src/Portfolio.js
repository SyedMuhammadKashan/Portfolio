import React,{useState} from "react";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import "./Style/portfolio.css"
import resume from "./info/kashan.pdf"
import pic from "./info/pic.PNG";
const Portfolio = function () {
const [list] = useState([{ name: "Javascript",id:1 }, { name: "Html",id:2 } ,{name:"Css" ,id:3} ,{name:"Bootstrap",id:4}, {name:"React", id:5}, {name:"Redux" ,id:6} ,{name:"Contextapi" ,id:7}]);
  return (
    <React.Fragment>
      <div className="snav">
        <h4>
          Portfolio<span>React</span>
        </h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#hire"> HireMe.</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="banr img-fluid ">
            <div className="col-12 col-md-6 col-sm-6 col-lg-6 ">
              <h4
                style={{
                  fontFamily: "Caveat",
                  fontWeight: "bold",
                  fontSize: "33px",
                  marginTop: "27px",
                }}
              >
                <span>Hello, </span>I'm Syed Muhammad KaShan
              </h4>
              <p style={{ color: "grey", fontWeight: "bold" }}>
                Software Engineer{" "}
                <span style={{ color: "grey", fontWeight: "bold" }}>
                  {" "}
                  / Front-end React
                </span>
              </p>
            </div>
            <div className="col-12 col-md-6 col-sm-6 col-lg-6 ">
              <button
                style={{ backgroundColor: "#dbcda9", borderRadius: "12px",fontFamily: "Caveat" }}
              >
                <a
                  href={resume}
                  style={{
                    listStyle: "none",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  DownloadResume
                </a>
              </button>
              <div>
                <p style={{ color: "grey", fontWeight: "bold" }}>
                  Beginner But Passionate..!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about portion */}
      <div className="container mt-5 abt">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6  col-lg-6">
            <img src={pic} className="img-fluid py-3 kpic" />
          </div>
          <a name="about"></a>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <h3 className="text-center mb-4 " style={{ fontFamily: "Caveat" }}>
              About
            </h3>
            <p className="intro-para">
              This is Syed Muhammad Kashan Completed Bachelor in Software
              Engineering from Sir Syed university Of Engg &technology in the
              year 2021 Having skill set related to front end web development
              (ReactJs) willing to join a training program in order to enhance
              my skills through a continues learning process
            </p>
          </div>
        </div>
      </div>
      {/* hireme portion */}

      <div className="container ">
        <h3 className="h mt-5">
          Hireme<span>.</span>
        </h3>
        <p>
          I am available for work .Connect with me via phone
          <span style={{ fontWeight: "bold", color: "black" }}>
            +923122112722
          </span>
          or email at
          <span style={{ fontWeight: "bold", color: "black" }}>
            syedkashan38@gmail.com
          </span>
        </p>
        <a name="hire"></a>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="your name *"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="your email *"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="write a subject"
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="your message"
            ></textarea>
          </div>
        </form>
      </div>

      {/* skills portion */}

      <div className="container">
        <h2
          style={{
            marginTop: "43px",
            fontFamily: "Caveat",
            fontWeight: "bold",
          }}
        >
          Skills
        </h2>
        <div className="row">
          {list.map((list) => {
            return (
              <div
                key={list.id}
                className="list_name col-12 col-md-3 col-sm-3 col-lg-3 col-xl-3 "
              >
                <h4
                  key={list.id}
                  className="text-center"
                  style={{ paddingTop: "13px" }}
                >
                  {list.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services */}

      <div className="container">
        <h3 className="text-center py-5">Services</h3>
        <div className="row">
          <div className="col-12 col-md-4 col-sm-4 col-lg-4 ">
            <h4 className="serv">Ux/Ui Design</h4>
          </div>

          <div className="col-12 col-md-4 col-sm-4 col-lg-4 ">
            <h4 className="serv">Web Development</h4>
          </div>

          <div className="col-12 col-md-4 col-sm-4 col-lg-4 ">
            <h4 className="serv">Web Research</h4>
          </div>
        </div>
      </div>

      {/* github */}

      <div className="git container">
        <h2
          style={{
            marginTop: "43px",
            fontFamily: "Caveat",
            fontWeight: "bold",
          }}
        >
          GitHub
        </h2>
        <a href="https://github.com/SyedMuhammadKashan">
          <RiArrowGoForwardFill
            color="black"
            size="3rem"
            style={{ marginLeft: "12px", marginBottom: "34px" }}
          />
        </a>
      </div>

      <div className="container">
        <h2 style={{ fontFamily: "Caveat", fontWeight: "bold" }}>
          <a name="contact"></a>
          Contact me <span>.</span>
        </h2>
        <a href="mailto:syedkashan38@gmail.com">
          <MdEmail color="black" size="4rem" />
        </a>
      </div>
    </React.Fragment>
  );
};
export default Portfolio;
