import React, { useState } from "react";
import * as S from "./style.js";
import { Button, Divider, Icon } from "semantic-ui-react";
import CommentSection from "./components/Comment/component";

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

export default function Post({ data }) {
  const [shouldOpenComment, setShouldOpenComment] = useState(false);

  function handleComment(e) {
    e.preventDefault();
    setShouldOpenComment(!shouldOpenComment);
  }

  function handleLike(e) {
    console.log("Liked");
  }

  return (
    <S.PostContainer>
      <S.PostHeader>
        {data.author && <S.AuthorAvatar src={data.author.avatar} />}
        <S.AuthorNameContainer>
          {data.isPin && <Icon name="pin" color="red" />}
          {data.author && (
            <h4>
              {data.author.first_name} {data.author.last_name}
            </h4>
          )}
          <h6>{timeSince(new Date(data.createdAt))} ago</h6>
        </S.AuthorNameContainer>
      </S.PostHeader>
      <p>{data.caption}</p>
      {data.attachments &&
        data.attachments.map((att) => {
          if (att.type === "image") {
            return <img src={att.url} alt={att.name} id={att["_id"]} />;
          }
        })}
      <S.PostStatsContainer>
        <h5>
          {data.liker.length ? `${data.liker.length} people like this` : ``}{" "}
        </h5>
        <a onClick={handleComment}>
          <h5>
            {data.total_comment !== 0 ? `${data.total_comment} comments` : ``}
          </h5>
        </a>
      </S.PostStatsContainer>
      <Divider />
      <div>
        <Button onClick={handleLike}>Like</Button>
        <Button onClick={handleComment}>Comment</Button>
      </div>
      {shouldOpenComment && <CommentSection />}
    </S.PostContainer>
  );
}
