import React from "react";
import * as S from "./style.js";
import { Button } from "semantic-ui-react";

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
  return (
    <S.PostContainer>
      <S.PostHeader>
        <S.AuthorAvatar src={data.author.avatar} />
        <div>
          <h4>
            {data.author.first_name} {data.author.last_name}
          </h4>
          <h6>{timeSince(new Date(data.createdAt))} ago</h6>
        </div>
      </S.PostHeader>
      <p>{data.caption}</p>
      {data.attachments &&
        data.attachments.map((att) => {
          if (att.type === "image") {
            return <img src={att.url} alt={att.name} id={att["_id"]} />;
          }
        })}
      <div>
        <h5>3 others like this</h5>
        <h5>
          {data.total_comment !== 0 ? `${data.total_comment} comments` : ``}
        </h5>
      </div>
      <hr />
      <div>
        <Button>Like</Button>
        <Button>Comment</Button>
      </div>
    </S.PostContainer>
  );
}
