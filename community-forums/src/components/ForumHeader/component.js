import React from "react";
import * as S from "./style.js";
import { Button } from "semantic-ui-react";

export default function ForumHeader({ data }) {
  return (
    <S.ForumHeader>
      <S.ForumBanner src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/focaccia-f599171.jpg?quality=90&webp=true&resize=440,400" />
      <S.ForumInfoContainer>
        <h1>Forum Name</h1>
        <h5>421 members</h5>
        <div>
          <Button>Discussion</Button>
          <Button>Members</Button>
        </div>
      </S.ForumInfoContainer>
    </S.ForumHeader>
  );
}
