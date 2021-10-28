import styled from "styled-components";

export const CreatePostForm = styled.div`
  width: 598px;
  height: 142px;
  border-radius: 8px;
  background-color: white;
  filter: drop-shadow(0 2px 4px 0 15% #2a2a34);
  margin: 20px 19px 0 230px;
  padding: 15px;
`;

export const AuthorAvatar = styled.img.attrs((props) => ({
  alt: "Avatar",
  src: props.src,
  width: "40px",
  height: "40px",
}))`
  border-radius: 50%;
`;

export const WriteSomethingField = styled.input`
  width: 500px;
  height: 44px;
  border-radius: 12px;
  background-color: #e9ecf2;
  border: none;
  margin: 0 10px 15px 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
