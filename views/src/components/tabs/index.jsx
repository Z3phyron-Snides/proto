import { Container, Tab, TabContainer, TabContent } from "./styles";

const Index = ({ tabs, selectedTab, onTabClick }) => {
  return (
    <Container>
      <TabContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            selected={tab.label === selectedTab}
            onClick={() => onTabClick(tab.label)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabContainer>
      <TabContent>
        {tabs.find((tab) => tab.label === selectedTab).content}
      </TabContent>
    </Container>
  );
};

export default Index;
