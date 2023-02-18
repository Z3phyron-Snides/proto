import {
  Container,
  Profile,
  ProfileWrap,
  Side,
  Tab,
  TabContent,
  Tabs,
} from "./styles";
import Header from "../../components/profileHeader";
import { useState, useEffect } from "react";
import UserDetails from "../../components/userDetails";
import Timeline from "../../components/timeline";
import PhotoGrid from "../../components/photoGrid";
import RequestList from "../../components/requestLists";
import ContactList from "../../components/contactList";
import { useDispatch, useSelector } from "react-redux";
import { getUserMedia, getUserProfile } from "../../features/user/UserSlice";
import { GetTimeline } from "../../features/post/PostSlice";
import { useParams } from "react-router-dom";

const Index = () => {
  const { user, userProfile } = useSelector((state) => state.user);
  const tabs = [
    { label: "Timeline", content: <Timeline /> },
    { label: "About", content: <UserDetails userDetails={userProfile} /> },
    { label: "Photos", content: <PhotoGrid /> },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].label);
  const dispatch = useDispatch();
  const { id } = useParams();

  const onTabClick = (label) => setSelectedTab(label);

  useEffect(() => {
    if (id && id !== user?._id) {
      dispatch(getUserProfile(id));
      dispatch(GetTimeline(id));
      dispatch(getUserMedia(id));
    } else {
      dispatch(getUserProfile(user?._id));
      dispatch(GetTimeline(user?._id));
      dispatch(getUserMedia(user?._id));
    }
  }, [dispatch, id, user]);

  return (
    <Container>
      <ProfileWrap>
        <Profile>
          <Header user={userProfile} />
          <Tabs>
            {tabs.map((tab) => (
              <Tab
                key={tab.label}
                selected={tab.label === selectedTab}
                onClick={() => onTabClick(tab.label)}
              >
                {tab.label}
              </Tab>
            ))}
          </Tabs>
        </Profile>{" "}
        <TabContent>
          {tabs.find((tab) => tab.label === selectedTab).content}
        </TabContent>
      </ProfileWrap>
      <Side>
        <RequestList />
        <ContactList />
      </Side>
    </Container>
  );
};

export default Index;
