import React from "react";
import { useIntl } from "react-intl";
import Icon1 from "../../images/undraw_breakfast.svg";
import Icon2 from "../../images/undraw_project_completed.svg";
import Icon3 from "../../images/undraw_weather.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  //ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  const intl = useIntl();
  return (
    <ServicesContainer id="my-apps">
      <ServicesH1>{intl.formatMessage({ id: "apps" })}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard
          href="https://randomrecipee.netlify.app/"
          target="_blank"
          aria-label="Random recipe app"
        >
          <ServicesIcon src={Icon1} />
          <ServicesH2> {intl.formatMessage({ id: "app1" })}</ServicesH2>
          {/* <ServicesP>
            Are you feeling hungry? No idea for a meal? try my app.
          </ServicesP> */}
          {/* <ServicesLink
            href="https://randomrecipee.netlify.app/"
            target="_blank"
            aria-label="Random recipe app"
          >
            Go to app
          </ServicesLink> */}
        </ServicesCard>
        <ServicesCard
          href="https://tooooodo.netlify.app/"
          target="_blank"
          aria-label="Todo app"
        >
          <ServicesIcon src={Icon2} />
          <ServicesH2> {intl.formatMessage({ id: "app2" })}</ServicesH2>
        </ServicesCard>
        <ServicesCard
          href="https://weeeatherapp.netlify.app/"
          target="_blank"
          aria-label="Weather app"
        >
          <ServicesIcon src={Icon3} />
          <ServicesH2>{intl.formatMessage({ id: "app3" })}</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
