import React, { useState } from "react";
import * as S from "./style.js";
import PopUpForm from "./components/PopUpForm/component";
import { Button, Form, TextArea, Icon, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";

function CreatePostForm(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [caption, setCaption] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPost({
      groupId: "60d9b8c643edd200141777d8",
      caption: `${caption}`,
      post_type: 1,
    });
    togglePopup();
  };

  return (
    <S.CreatePostForm>
      <S.Container>
        <S.AuthorAvatar src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg" />
        <S.WriteSomethingField
          type="button"
          value="Write something..."
          onClick={togglePopup}
        />
      </S.Container>
      {isOpen && (
        <PopUpForm
          content={
            <>
              <h2>Create a post</h2>
              <S.AuthorAvatar src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg" />
              <Form onSubmit={handleSubmit}>
                <TextArea
                  type="text"
                  placeholder="Write something"
                  id="caption"
                  onChange={(e) => setCaption(e.target.value)}
                />
                <Button icon labelPosition="right">
                  Photo/Video
                  <Icon name="camera" />
                </Button>
                <>
                  <Button onClick={togglePopup}>Cancel</Button>
                  <Button
                    type="submit"
                    color="violet"
                    style={{ width: "250px" }}
                  >
                    Post
                  </Button>
                </>
              </Form>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      <Button icon labelPosition="right">
        Photo/Video
        <Icon name="camera" />
      </Button>
    </S.CreatePostForm>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    // createPost: (post) => dispatch({ type: "CREATE_POST", post: post }),
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(CreatePostForm);
