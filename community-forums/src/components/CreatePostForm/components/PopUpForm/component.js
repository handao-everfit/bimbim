import React from "react";
import * as S from "./style.js";

const Popup = (props) => {
  return (
    <S.PopUpBox>
      <S.Box>
        <S.CloseIcon onClick={props.handleClose} />
        {props.content}
      </S.Box>
    </S.PopUpBox>
  );
};

export default Popup;
