import React from "react";
import * as S from "./style.js";

export default function Post({ data }) {
  return (
    <S.PostContainer>
      <S.PostHeader>
        <S.AuthorAvatar src={data.author.avatar} />
        <div>
          <h4>
            {data.author.first_name} {data.author.last_name}
          </h4>
          <h6>13m ago</h6>
        </div>
      </S.PostHeader>
      <p>{data.caption}</p>
      <div>
        <h6>3 others like this</h6>
        <h6>3 comments</h6>
      </div>
      <hr />
      <div>
        <button>Like</button>
        <button>Comment</button>
      </div>
    </S.PostContainer>
  );
}
