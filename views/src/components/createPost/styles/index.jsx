import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: ${(p) => p.theme.cards};
  padding: 20px;
  border-radius: 10px;
  position: relative;

  .submit {
    position: absolute;
    bottom: 35px;
    right: 5%;
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    outline: none;
    float: right;
    font-size: 30px;
    color: ${(p) => p.theme.colored};
    transition: all 0.3s ease;

    @media screen and (max-width: 900px) {
      font-size: 35px;
      bottom: 35px;
      right: 10%;
    }

    &:hover {
      color: rgba(75, 111, 255, 0.745);
      transform: scale(1.1);
    }
  }
`;
export const Title = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;
  color: ${(p) => p.theme.text};
  span {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 5px;
    font-size: 15px;
    background: ${(p) => p.theme.shadow};
    color: ${(p) => p.theme.colored};
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Field = styled.div`
  display: flex;
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 6px;
  padding: 10px;
`;
export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  width: 100%;

  textarea {
    width: 100%;
    background: transparent;
    border: none;
    /* padding: 10px; */
    color: ${(p) => p.theme.text};
    max-height: 15vh;
    outline: none;
  }
`;
export const Thumbs = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;

  small {
    color: #ccc;
  }

  @media screen and (max-width: 900px) {
    /* gap: 10px; */
  }
`;
export const Tags = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  color: ${(p) => p.theme.text};
  @media screen and (max-width: 900px) {
    /* gap: 10px; */
  }
`;
export const Tag = styled.p`
  font-size: 10px;
  padding: 5px 8px;
  border-radius: 4px;
  background: ${(p) => p.theme.shadow};

  @media screen and (max-width: 900px) {
    /* gap: 10px; */
  }
`;
export const Thumb = styled.div`
  width: 40px;
  height: 40px;

  /* overflow: hidden; */
  position: relative;

  .delete-icon {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    font-size: 12px;
    background: #ff6060;
    color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    border-radius: 10px;
  }

  @media screen and (max-width: 900px) {
    /* gap: 10px; */
  }
`;
export const Attachments = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    gap: 10px;
  }
`;
export const Cta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.068);
  padding: 7px;
  padding-right: 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 400;
  transition: all 0.3s ease;
  color: ${(p) => p.theme.text};

  @media screen and (max-width: 900px) {
    padding: 7px;
    /* padding-right: 0; */

    small {
      display: none;
    }
  }

  &:hover {
    transform: scale(1.04);
  }

  &.tag {
    background: rgba(238, 32, 90, 0.302);
    color: ${(p) => p.theme.text};
    .icon {
      background: #ee205b;
      color: #fff;
    }
  }
  &.gallery {
    background: rgba(32, 59, 238, 0.302);
    position: relative;
    overflow: hidden;

    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      color: ${(p) => p.theme.text};
    }

    .icon {
      background: #203bee;
      color: #fff;
    }
  }
  &.feeling {
    background: rgba(254, 206, 13, 0.302);

    .icon {
      background: rgba(244, 241, 90, 0.55);
      color: #ffffff;
    }
  }

  span {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 5px;
    font-size: 17px;
    background: rgba(0, 0, 0, 0.068);

    @media screen and (max-width: 900px) {
      /* width: 17px; */
      /* height: 17px; */
      margin-right: 0;
      /* font-size: 13px; */
    }
  }
`;
