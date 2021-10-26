import styled from "styled-components";

export const PostContainer = styled.div`
  width: 598px;
  border-radius: 8px;
  background-color: white;
  filter: drop-shadow(0 2px 4px 0 15% #2a2a34);
  margin: 20px;
`;

export const AuthorAvatar = styled.img.attrs((props) => ({
  alt: "Avatar",
  src: props.src,
  width: "40px",
  height: "40px",
}))`
  border-radius: 50%;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;
`;
