import React, { useState } from "react";

function ChatList() {
  const [active, setActive] = useState("Home");
  const sections = [
    {
      id: "home",
      title: "Home",
      icon: <i class="fa-solid fa-house"></i>,
      description:
        "Passionate MERN Stack Developer building scalable and user-friendly web apps.",
    },
    {
      id: "about",
      title: "About",
      icon: <i class="fa-solid fa-user"></i>,
      description:
        "I am a passionate Front End Developer with expertise in ReactJS.",
    },
    {
      id: "education",
      title: "Education",
      icon: <i class="fa-solid fa-graduation-cap"></i>,
      details: [
        {
          degree: "BCA - Bachelor of Computer Applications",
          year: "2015-2018",
        },
        { degree: "MCA - Master of Computer Applications", year: "2018-2020" },
      ],
      description:
        "Completed BCA & MCA with a strong foundation in web development.",
    },
    {
      id: "skills",
      title: "Skills",
      icon: <i class="fa-solid fa-code"></i>,
      skills: ["ReactJS", "JavaScript", "Node.js", "Bootstrap", "Tailwind CSS"],
      description:
        "Proficient in ReactJS, JavaScript, Node.js, Bootstrap, and Tailwind CSS.",
    },
    {
      id: "projects",
      title: "Projects",
      icon: <i class="fa-solid fa-briefcase"></i>,
      projects: [
        { name: "E-commerce Website", description: "Built using MERN stack." },
        {
          name: "LMS System",
          description: "Online learning platform with React & Node.",
        },
      ],
      description:
        "Developed E-commerce, LMS, and ERP applications for seamless user experiences.",
    },
    {
      id: "contact",
      title: "Contact",
      icon: <i class="fa-solid fa-envelope"></i>,
      info: {
        email: "your@email.com",
        phone: "+91 98765 43210",
        linkedin: "linkedin.com/in/yourprofile",
      },
      description:
        "Reach out for collaborations, projects, or tech discussions.",
    },
  ];

  return (
    <div className="chat-list">
      {sections?.map((item, index) => {
        return (
          <div
            className={
              active == item?.title ? "active-list-card" : "chat-list-card"
            }
            onClick={() => setActive(item?.title)}
          >
            <div className="d-flex gap-2 align-items-center">
              <div className="icon-box">{item?.icon}</div>

              <div>
                <div className="fw-bold fs-6">{item?.title}</div>
                <div className="description-text">
                  {item?.description?.slice(0, 38)}...
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatList;
