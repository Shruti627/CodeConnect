import React, { useState } from "react";
import "./Home.css";
import studentImg from "../assets/courses/course-mern.jpg";

// Company Logos
import googleLogo from "../assets/companies/google.png";
import microsoftLogo from "../assets/companies/microsoft.jpg";
import facebookLogo from "../assets/companies/facebook.jpg";
import amazonLogo from "../assets/companies/amazon.jpg";
import ibmLogo from "../assets/companies/ibm.jpg";
import appleLogo from "../assets/companies/apple.jpg";
import oracleLogo from "../assets/companies/oracle.jpg";

// Why Choose Icons
import trainerIcon from "../assets/why/trainer.png";
import internshipIcon from "../assets/why/internship.png";
import careerIcon from "../assets/why/career.png";
import handsonIcon from "../assets/why/handson.png";
import liveIcon from "../assets/why/live.png";
import buildIcon from "../assets/why/build.png";
import softskillIcon from "../assets/why/softskill.png";
import placementIcon from "../assets/why/placement.png";

// Courses Images
import javaImg from "../assets/courses/course-java.jpg";
import pythonImg from "../assets/courses/course-python.jpg";
import mernImg from "../assets/courses/course-mern.jpg";
import androidImg from "../assets/courses/course-andriod.jpg";
import devopsImg from "../assets/courses/course-devops.jpg";
import awsImg from "../assets/courses/course-aws.jpg";
import hadoopImg from "../assets/courses/course-hadoop.jpg";
import blockchainImg from "../assets/courses/course-blockchain.jpg";
import dsaImg from "../assets/courses/course-dsa.jpg";
import analyticsImg from "../assets/courses/course-analytics.jpg";
import dataScienceImg from "../assets/courses/course-datascience.jpg";
import genAIImg from "../assets/courses/course-genai.jpg";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const whyChoose = [
    { icon: trainerIcon, title: "Experienced and Certified Trainers" },
    { icon: internshipIcon, title: "Internship Opportunities with real clients" },
    { icon: careerIcon, title: "Support and Career Guidance" },
    { icon: handsonIcon, title: "Hands-on projects from Day One" },
    { icon: liveIcon, title: "Internship on Live Projects" },
    { icon: buildIcon, title: "Build Your Own Projects" },
    { icon: softskillIcon, title: "Soft Skill Training" },
    { icon: placementIcon, title: "Get Placed in Top MNCs" },
  ];

  const courses = [
    {
      img: javaImg,
      title: "Java Full-Stack Development",
      desc: "Java Full Stack Development is an in-demand skill set that covers both frontend and backend technologies.",
      syllabus: [
        "Core Java Basics",
        "OOP Concepts",
        "Advanced Java",
        "Spring Framework",
        "Hibernate",
        "Front-End Technologies",
        "Project Work"
      ]
    },
    {
      img: pythonImg,
      title: "Python Full-Stack Development",
      desc: "Python Full-Stack Development course with classroom and online training.",
      syllabus: [
        "Python Basics",
        "OOP in Python",
        "Django / Flask Framework",
        "Front-End Technologies",
        "Database Connectivity",
        "Project Work"
      ]
    },
    {
      img: mernImg,
      title: "Mean/Mern Stack Development",
      desc: "Become a full-stack developer by mastering MongoDB, Express.js, Angular/React, and Node.js.",
      syllabus: [
        "HTML, CSS, JS Basics",
        "Node.js & Express.js",
        "MongoDB",
        "React / Angular",
        "REST APIs",
        "Project Work"
      ]
    },
    {
      img: androidImg,
      title: "Android Development",
      desc: "This course trains you in Android app development using Java and Kotlin.",
      syllabus: ["Java & Kotlin Basics", "Android UI/UX", "Database Integration", "API Calls", "Project Work"]
    },
    {
      img: devopsImg,
      title: "DevOps Development",
      desc: "CodeConnect Technology’s IT Training Institute in Pune offers a DevOps Development course.",
      syllabus: ["Linux Basics", "CI/CD Pipelines", "Docker & Kubernetes", "Monitoring & Logging", "Project Work"]
    },
    {
      img: awsImg,
      title: "AWS Cloud Infrastructure",
      desc: "This course covers AWS fundamentals, cloud computing, serverless architecture.",
      syllabus: ["AWS Basics", "EC2, S3, RDS", "Serverless Architecture", "Cloud Security", "Project Work"]
    },
    {
      img: hadoopImg,
      title: "Big Data Hadoop",
      desc: "Big Data Hadoop is an essential skill for data professionals to manage and analyze data.",
      syllabus: ["Hadoop Ecosystem", "MapReduce", "HDFS", "Spark", "Project Work"]
    },
    {
      img: blockchainImg,
      title: "Blockchain Expert",
      desc: "Blockchain is revolutionizing industries with decentralized and secure solutions.",
      syllabus: ["Blockchain Basics", "Smart Contracts", "Ethereum", "Solidity", "Project Work"]
    },
    {
      img: dsaImg,
      title: "DSA (Data Structure & Algorithm)",
      desc: "Master DSA with Java to build strong problem-solving skills and crack interviews.",
      syllabus: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Trees & Graphs", "Sorting & Searching", "Problem Solving"]
    },
    {
      img: analyticsImg,
      title: "Data Analytics",
      desc: "Join our Data Analytics course in Pune and land your dream job! Gain industry-relevant skills.",
      syllabus: ["Excel & SQL", "Python for Data Analytics", "Data Visualization", "Statistical Analysis", "Project Work"]
    },
    {
      img: dataScienceImg,
      title: "Data Science",
      desc: "Learn data science with CodeConnect IT Training Institute in Pune & get certified.",
      syllabus: ["Python & R", "Statistics", "Machine Learning", "Deep Learning", "Project Work"]
    },
    {
      img: genAIImg,
      title: "Gen AI",
      desc: "Get hands-on experience with Generative AI and learn to build AI-powered solutions.",
      syllabus: ["AI Fundamentals", "Generative Models", "Python AI Libraries", "Projects with GPT Models"]
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div id="home" className="home-container">
        <div className="home-left">
          <p className="tagline">100% Placement Assistance</p>
          <h1 className="home-title">
            Excellence in <span>IT Training in Pune</span> with Assured Jobs at Top Multinationals
          </h1>
          <p className="home-desc">
            Elevate your IT skills with our Pune-based training programs, crafted to meet industry needs. 
            Our placement assistance guarantees opportunities with leading MNCs.
          </p>
          <button
            className="explore-btn"
            onClick={() => {
              const section = document.getElementById('courses');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Courses
          </button>

          <div className="contact-box">
            <p>📞 Have any Question?</p>
            <h3>960-443-0489</h3>
          </div>
        </div>

        <div className="home-right">
          <img src={studentImg} alt="Student" />
        </div>
      </div>

      {/* ================= COUNTERS SECTION ================= */}
      <div className="counter-section">
        <div className="counter-box">
          <h2>15+</h2>
          <p>Years</p>
        </div>

        <div className="counter-box">
          <h2>20K+</h2>
          <p>Students Trained</p>
        </div>

        <div className="counter-box">
          <h2>60LPA+</h2>
          <p>Highest Package Received</p>
        </div>

        <div className="counter-box">
          <h2>5K+</h2>
          <p>Students Placed</p>
        </div>
      </div>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <div id="about" className="why-section">
        <h2 className="why-title">
          Why To Choose <span>CodeConnect IT Training Institute</span> in Pune, India
        </h2>
        <div className="why-grid">
          {whyChoose.map((item, index) => (
            <div className="why-card" key={index}>
              <img src={item.icon} alt={item.title} className="why-icon" />
              <p className="why-text">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= COURSES SECTION ================= */}
      <div id="courses" className="courses-section">
        <h2 className="courses-title">
          Transform Your Career: <span>CodeConnect IT Training Institute</span> Unveils Specialized Courses
        </h2>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div 
              className="course-card" 
              key={index} 
              onClick={() => handleCourseClick(course)}
              style={{ cursor: "pointer" }}
            >
              <img src={course.img} alt={course.title} className="course-img" />
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SYLLABUS MODAL ================= */}
      {selectedCourse && (
        <div className="syllabus-modal">
          <div className="syllabus-content">
            <h2>{selectedCourse.title} - Syllabus</h2>
            <ul>
              {selectedCourse.syllabus.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setSelectedCourse(null)}>Close</button>
          </div>
        </div>
      )}

      {/* ================= VISION TO VICTORY SECTION ================= */}
      <div className="vision-section">
        <h2 className="vision-title">
          From <span>Vision to Victory</span> – Steps to Success
        </h2>

        <div className="vision-grid">
          <div className="vision-card">
            <h3>01</h3>
            <p className="vision-subtitle">Programming Fundamentals</p>
            <ul className="vision-list">
              <li>C Programming</li>
              <li>C++</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </div>

          <div className="vision-card">
            <h3>02</h3>
            <p className="vision-subtitle">Full Stack Development</p>
            <ul className="vision-list">
              <li>Java - Core & Advance</li>
              <li>Python - Core & Advance</li>
              <li>Angular / React</li>
              <li>Node.js</li>
              <li>Web & Mobile Projects</li>
            </ul>
          </div>

          <div className="vision-card">
            <h3>03</h3>
            <p className="vision-subtitle">Project Based Learning</p>
            <ul className="vision-list">
              <li>Projects</li>
              <li>Mobile / Web Application</li>
              <li>Internship</li>
              <li>Real-Time Application</li>
            </ul>
          </div>

          <div className="vision-card">
            <h3>04</h3>
            <p className="vision-subtitle">Deploy Real-Time Projects</p>
            <ul className="vision-list">
              <li>Hosting Server</li>
              <li>AWS & DevOps</li>
              <li>LinkedIn & GitHub Optimization</li>
              <li>Resume Building</li>
              <li>Mock Interviews & HR Questions</li>
            </ul>
            <p className="vision-internship">
              Internship of 6 months – Work on Live Project – Work on Client's Project
            </p>
          </div>
        </div>
      </div>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <div className="testimonials-section">
        <h2 className="testimonials-title">
          Our <span>Testimonials</span>
        </h2>
        <p className="testimonials-subtitle">What’s Our Students Think</p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "CodeConnect IT Training helped me transform my career. The trainers were knowledgeable and supportive."
            </p>
            <h4 className="testimonial-name">Shruti P. Sangvikar</h4>
            <p className="testimonial-course">Full-Stack Developer</p>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "I gained real-world experience through live projects and internship opportunities. Highly recommended!"
            </p>
            <h4 className="testimonial-name">Rohit K.</h4>
            <p className="testimonial-course">DevOps Engineer</p>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "The curriculum is industry-relevant and helped me land my dream job in top MNCs."
            </p>
            <h4 className="testimonial-name">Harshad Desai</h4>
            <p className="testimonial-course">Data Scientist</p>
          </div>
        </div>
      </div>

      {/* ================= STUDENTS PLACED SECTION ================= */}
      <div id="placements" className="placed-section">
        <h2 className="placed-title">
          Worldwide <span>Our Achievement</span>
        </h2>
        <p className="placed-subtitle">Our Students Placed At</p>

        <div className="placed-logos">
          <div className="logos-track">
            <img src={googleLogo} alt="Google" />
            <img src={microsoftLogo} alt="Microsoft" />
            <img src={facebookLogo} alt="Facebook" />
            <img src={amazonLogo} alt="Amazon" />
            <img src={ibmLogo} alt="IBM" />
            <img src={appleLogo} alt="Apple" />
            <img src={oracleLogo} alt="Oracle" />
            <img src={googleLogo} alt="Google" />
            <img src={microsoftLogo} alt="Microsoft" />
            <img src={facebookLogo} alt="Facebook" />
          </div>
        </div>
      </div>

      {/* ================= CONTACT US SECTION ================= */}
      <div id="contact" className="contact-section">
        <h2 className="contact-title">Contact Us For More Information</h2>
        <p className="contact-desc">
          Have questions about our courses, admissions, or academic programs? Our team is here to assist you. Get in touch with us for detailed information, guidance, and support to help you make the right educational choices.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Description</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {submitted && (
          <p className="success-msg">Thank you! Your message has been submitted successfully.</p>
        )}
      </div>

      {/* ================= FOOTER SECTION ================= */}
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-box">
            <h3>CodeConnect Technologies</h3>
            <p>
              Pune’s No. 1 IT training and placement institute, committed to shaping careers
              and bridging the gap between talent and opportunity.
            </p>
          </div>

          <div className="footer-box">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#training">Technical Training</a></li>
              <li><a href="#placements">Placements</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#hire">Hire from Us</a></li>
            </ul>
          </div>

          <div className="footer-box">
            <h4>Courses</h4>
            <ul>
              <li><a href="#courses">Java Full Stack</a></li>
              <li><a href="#courses">Python Full Stack</a></li>
              <li><a href="#courses">MEAN / MERN Stack</a></li>
              <li><a href="#courses">Mobile App Development</a></li>
              <li><a href="#courses">DevOps Development</a></li>
            </ul>
          </div>

          <div className="footer-box">
            <h4>Contact</h4>
            <p>Office no.19, 8rd Floor, Lotus Complex, Opposite to Goodwill square, Dhanori Road, Pune, 411015</p>
            <p>+91 7057336919</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 CodeConnect. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
