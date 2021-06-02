import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Kartik Sagar</h1>
            <h3>Electrical Engineer</h3>
            <ul>
              {/* <li>Web Developer</li> */}
              <li>Circuit design</li>
              <li>Arduino Developer</li>
            </ul>
            <div className="action">
              <Button
                link="https://github.com/kartiksagar2605/kartik-resume/raw/main/kartik%20resume.pdf"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
