import React from "react";
import {
  IoNewspaperOutline as ListIcon,
  IoSettingsOutline as SettingsIcon,
} from "react-icons/io5";
import { SlPeople as PeopleIcon } from "react-icons/sl";
import {
  CiUser as UserIcon,
} from "react-icons/ci";
import { Container, Description, IconWrapper, StyledLink } from "./styles";

const routes = [

  {
    path: "/",
    icon: ListIcon,
    description: "News Feed",
  },
  {
    path: "/chat",
    icon: PeopleIcon,
    description: "Messages",
  },


  {
    path: "/profile",
    icon: UserIcon,
    description: "Profile",
  },
  {
    path: "/settings",
    icon: SettingsIcon,
    description: "Settings",
  },
];

const RouteList = ({ toggleOpen }) => (
  <Container>
    {routes.map(({ path, icon: Icon, description }, index) => (
      <React.Fragment key={path}>
        <StyledLink
          to={path}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={toggleOpen}
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
