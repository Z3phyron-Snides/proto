import { Container,  Image, Media, Video } from "./styles";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSelector } from 'react-redux';

const Index = () => {
  const {userMedia} = useSelector(state => state.user)

  return (
    <Container>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <Masonry gutter="20px">
          {userMedia && userMedia?.map((item, index) => (
            <Media key={index} className="media">
              {item.type === "image" ? (
                <Image src={item.url} alt={item.altText} />
              ) : (
                <Video src={item.url} controls />
              )}
            </Media>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};

export default Index;
