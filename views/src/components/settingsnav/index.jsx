import React from "react";
import { RiUserSettingsLine as GeneralIcon } from "react-icons/ri";
import {
  MdOutlinePrivacyTip as PrivacyIcon,
  MdOutlineSecurity as SecurityIcon,
} from "react-icons/md";

import { Container, Description, IconWrapper, StyledLink } from "./styles";

const routes = [
  {
    path: "/settings/general",
    icon: GeneralIcon,
    description: "General",
  },
  {
    path: "/settings/privacy",
    icon: PrivacyIcon,
    description: "Privacy",
  },

  {
    path: "/settings/security",
    icon: SecurityIcon,
    description: "Security",
  },
];

const RouteList = () => (
  <Container>
    {routes.map(({ path, icon: Icon, description }, index) => (
      <React.Fragment key={path}>
        <StyledLink
          to={path}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Description>{description}</Description>
        </StyledLink>
        {index < routes.length - 1 && <hr />}
      </React.Fragment>
    ))}
  </Container>
);

export default RouteList;
