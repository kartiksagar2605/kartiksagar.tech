import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpeg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Kartik Sagar, a passionate Electrical Engineer.
              My passion is using engineering to improve pepople's lives,
              and giving pepole the tools they need to do the same.
              currently, I'am  pursuing my third year Bachelor of Engineering in Electrical.
              from Gujarat Technological University- at Ahmedabad Gujarat,
              in 2021,I am available for any kind of job opportunity that suits my interests.
              and this site is a collection of my work throughout my undergraduate studies.
              Please have a look around.
            </p>
            <div className="about-action">
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
