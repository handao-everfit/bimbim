import styled from "styled-components";

export const ForumHeader = styled.div`
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ForumBanner = styled.img.attrs((props) => ({
  alt: "banner",
  src: props.src,
  width: "970px",
  height: "300px",
}))`
  border-radius: 8px;
`;

export const ForumInfoContainer = styled.div`
  width: 970px;
`;
