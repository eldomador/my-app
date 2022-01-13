import React from "react";
import Video from "../../videos/video.mp4";
import Profile from "../../images/profile.jpg";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Button,
  HeroIcon,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroIcon src={Profile} />
        <HeroH1>Hi, I'm Jakub </HeroH1>
        <HeroP>I'm Creative Front End Web Developer</HeroP>
        <HeroBtnWrapper>
          <Button to="../../files/file.txt" target="_blank" download>
            Download my CV
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
