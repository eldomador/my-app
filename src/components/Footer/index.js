import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const index = () => {
  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              {" "}
              Jakub Kosmalski © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.codewars.com/users/eldomador"
                target="_blank"
                aria-label="Codewars"
              >
                <SiCodewars />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/kosmalski_jakub/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UC_O6ta5vYQpGNidXR0Q2kEg/featured"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/eldomador"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/jakub-kosmalski-profil/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default index;
