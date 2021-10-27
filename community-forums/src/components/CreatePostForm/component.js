import React, { useState } from "react";
import * as S from "./style.js";
import PopUpForm from "./components/PopUpForm/component";
import { Button, Form, TextArea, Icon } from "semantic-ui-react";
import axios from "axios";

export default function CreatePostForm({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [caption, setCaption] = useState("");

  const instance = axios.create({
    baseURL: "https://api-dev.everfit.io/api",
    headers: {
      "Content-Type": "application/json",
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlSWQiOiI2MDdkMDljNTFmYjFjMjAwMWE1NWU4ZGEiLCJ0ZWFtSWQiOiI2MDdkMDlkODFmYjFjMjAwMWE1NWU4ZGUiLCJpc190cmFpbmVyIjp0cnVlLCJ0ZWFtUm9sZSI6MCwidGVhbVBlcm1pc3Npb24iOnsiYXV0b2Zsb3ciOnRydWUsImF1dG9mbG93X2ludGVydmFsIjp0cnVlLCJwcm9ncmFtIjp0cnVlLCJmb29kX2pvdXJuYWwiOnRydWUsIm1hY3JvIjp0cnVlLCJzZWdtZW50Ijp0cnVlLCJkaWdlc3RfZW1haWwiOnRydWUsInRlYW0iOnRydWUsImJyYW5kaW5nIjp0cnVlLCJjdXN0b21fbWV0cmljcyI6dHJ1ZSwiYXNzaWdubWVudF9zY2hlZHVsaW5nIjotMSwic3R1ZGlvX3Jlc291cmNlX2NvbGxlY3Rpb24iOnRydWUsInN0dWRpb19wcm9ncmFtIjp0cnVlLCJub19jbGllbnRzIjoxNTAsIm1hc3NfY29weSI6dHJ1ZSwiYnVsa19pbnZpdGVfY2xpZW50cyI6dHJ1ZSwiZm9ydW0iOnRydWUsImxlYWRlcmJvYXJkIjp0cnVlLCJyZXBlYXRfdGFzayI6dHJ1ZSwicmVwZWF0X3Rhc2tfYXV0b2Zsb3ciOnRydWUsIm11bHRpcGxlX3N0dWRpb19wcm9ncmFtIjp0cnVlLCJwYXltZW50Ijp0cnVlLCJwcmVtaXVtQ3VzdG9tQnJhbmQiOnRydWV9LCJpYXQiOjE2MzUyNzc0OTcsImV4cCI6MTYzNTMyNzQ5N30.dsIKt5WBlZ5VMlqc4uD_F06M2dWR3sBJUKznl3ej1dg",
    },
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    instance
      .post(`/forum-post/add-post`, {
        groupId: "60d9b8c643edd200141777d8",
        caption: `${caption}`,
        post_type: 1,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    togglePopup();
  };

  return (
    <S.CreatePostForm>
      <S.AuthorAvatar src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg" />
      <S.WriteSomethingField
        type="button"
        value="Write something..."
        onClick={togglePopup}
      />
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
