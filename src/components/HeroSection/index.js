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
import { useIntl } from "react-intl";

const HeroSection = () => {
  const intl = useIntl();
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroIcon src={Profile} />
        <HeroH1>{intl.formatMessage({ id: "hi" })} </HeroH1>
        <HeroP>{intl.formatMessage({ id: "heroText" })}</HeroP>
        <HeroBtnWrapper>
          <Button to="../../files/file.txt" target="_blank" download>
            {intl.formatMessage({ id: "download" })}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
