import React from "react";
import Icon1 from "../../images/undraw_breakfast.svg";
import Icon2 from "../../images/undraw_project_completed.svg";
import Icon3 from "../../images/undraw_weather.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesLink,
  //ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const index = () => {
  return (
    <ServicesContainer id="my-apps">
      <ServicesH1>My Apps</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> Random Meal App</ServicesH2>
          {/* <ServicesP>
            Are you feeling hungry? No idea for a meal? try my app.
          </ServicesP> */}
          <ServicesLink
            href="https://randomrecipee.netlify.app/"
            target="_blank"
            aria-label="Random recipe app"
          >
            Go to app
          </ServicesLink>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> Todo App</ServicesH2>
          {/* <ServicesP>
            Having trouble organizing your day? Plan your day with Todo app.
          </ServicesP> */}
          <ServicesLink to="/signin">Go to app</ServicesLink>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Weather app</ServicesH2>
          {/* <ServicesP>
            check the weather before you leave home in my app
          </ServicesP> */}
          <ServicesLink to="/signin">Go to app</ServicesLink>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default index;
