import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
// import java from "../../public/java.png";
import reactjs from "../../public/reactjs.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/frony.png";
import aws from "../../public/aws.png";
// import spring from "../../public/spring.png";
// import springBoot from "../../public/springBoot.jpg";
import future from "../../public/future.png";
import gov from "../../public/gov.png";
function Certifications() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      link: "https://drive.google.com/file/d/1M06n0n0lN5p2liIu17mpBQxbT-U7qAZn/view?usp=drive_link",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      link: "https://drive.google.com/file/d/1M06n0n0lN5p2liIu17mpBQxbT-U7qAZn/view?usp=drive_link",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
      link: "https://drive.google.com/file/d/1KZtx0SicrgxfPUHXUmPJf8264tE6qohF/view?usp=drive_link",
    },
    {
      id: 4,
      logo: reactjs,
      name: "React Basics",
      link: "https://drive.google.com/file/d/1B2R9vsB_tN1mVEJdkhlDxTOYcc30-lBe/view?usp=drive_link",
    },
    {
      id: 5,
      logo: reactjs,
      name: "Adv. React",
      link: "https://drive.google.com/file/d/1GsFFRoJU9yJaw6rP8_9St4KaAhj8AblP/view?usp=drive_link",
    },
    {
      id: 6,
      logo: oracle,
      name: "FrontEnd",
      link: "https://drive.google.com/file/d/1ZnR4b37cD1IeCImQvDjf7ns-4ec39Ak5/view?usp=sharing",
    },
    {
      id: 7,
      logo: aws,
      name: "AWS Cloud",
      link: "https://drive.google.com/file/d/1RX0L3qZke8CBxqSPHoetIHMCAzUG_jJV/view?usp=drive_link",
    },
    {
      id: 8,
      logo: future,
      name: "AWS CPE",
      link: "https://drive.google.com/file/d/1oqHHt8I6FFARY4sXqqoJeR0b-gNM2HLf/view?usp=drive_link",
    },
    {
      id: 9,
      logo: gov,
      name: "ISEA Digital",
      link: "https://drive.google.com/file/d/1uQ9UQStz74OtYjaBD8pzadQFiK26FIi9/view?usp=drive_link",
    },
  ];
  return (
    <div
      name="Certifications"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Certifications</h1>
        <p className="  ">
          I am a certified developer in below technologies.
          <br />
          Click On ! <span className="text-green-600">Green Text</span> in logo
          to show certificates.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name, link }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <a href={link} target="_blank">
                  {" "}
                  <button className="text-green-600 font-semibold">
                    {name}
                  </button>{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Certifications;
