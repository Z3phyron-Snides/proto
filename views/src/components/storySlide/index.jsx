import React from "react";
import AddStory from "../addStory";
import Story from "../storyCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Container } from "./styles";

const StoryCarousel = () => {
  const users = [
    {
      id: 1,
      name: "User 1",
      profileImage: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      stories: [
        {
          url: "https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: {
            heading: "Damian",
            subheading: `Damian's Story`,
            profileImage: "https://i.pravatar.cc",
          },
        },
        {
          url: "https://images.pexels.com/photos/4197932/pexels-photo-4197932.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: {
            heading: "Damian",
            subheading: `Damian's Story`,
            profileImage: "https://i.pravatar.cc",
          },
        },
      ],
    },
    {
      id: 2,
      name: "User 2",
      profileImage: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      stories: [
        {
          url: "https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: {
            heading: "Damian",
            subheading: `Damian's Story`,
            profileImage: "https://i.pravatar.cc",
          },
        },
        {
          url: "https://images.pexels.com/photos/4197932/pexels-photo-4197932.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: {
            heading: "Damian",
            subheading: `Damian's Story`,
            profileImage: "https://i.pravatar.cc",
          },
        },
      ],
    },
    {
      id: 3,
      name: "User 3",
      profileImage: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      stories: [
        {
          url: "https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: {
            heading: "Damian",
            subheading: `Damian's Story`,
            profileImage: "https://i.pravatar.cc",
          },
        },
        {
          url: "https://images.pexels.com/photos/4197932/pexels-photo-4197932.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: {
            heading: "Damian",
            subheading: `Damian's Story`,
            profileImage: "https://i.pravatar.cc",
          },
        },
      ],
    },
    {
      id: 4,
      name: "User 4",
      profileImage: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      stories: [
        {
          url: "https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: {
            heading: "Damian",
            subheading: `Damian's Story`,
            profileImage: "https://i.pravatar.cc",
          },
        },
        {
          url: "https://images.pexels.com/photos/4197932/pexels-photo-4197932.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: {
            heading: "Damian",
            subheading: `Damian's Story`,
            profileImage: "https://i.pravatar.cc",
          },
        },
      ],
    },
    {
      id: 5,
      name: "User 5",
      profileImage: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      stories: [
        {
          url: "https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: {
            heading: "Damian",
            subheading: `Damian's Story`,
            profileImage: "https://i.pravatar.cc",
          },
        },
        {
          url: "https://images.pexels.com/photos/4197932/pexels-photo-4197932.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: {
            heading: "Damian",
            subheading: `Damian's Story`,
            profileImage: "https://i.pravatar.cc",
          },
        },
      ],
    },
  ];

const options = {
  type: "slide",
  autoplay: true,
  interval: 3000,
  width: "77%",
  autoWidth: true,
  gap: 15,
  isNavigation: false,
};


  return (
    <Container>
      <AddStory />
      <Splide
       
        options={options}
      >
        {users &&
          users.map((user) => (
            <SplideSlide key={user?.id} className="slider">
              <Story user={user} />
            </SplideSlide>
          ))}
      </Splide>
    </Container>
  );
};

export default StoryCarousel;
