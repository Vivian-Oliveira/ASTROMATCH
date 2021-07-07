import React from "react";
import {
  ButtonsContainer,
  UnlikedButton,
  PicButton,
  LikedButton,
} from "./styled";

export default function ChooseButtons(props) {

  return (
    <ButtonsContainer>
      <UnlikedButton onClick={props.onClickNo}>
        <PicButton  src="https://fiqueisemcracha.com.br/wp-content/uploads/2017/11/7-erros-sucesso-como-afiliado.png" />
      </UnlikedButton>
      <LikedButton onClick={props.onClickYes}>
        <PicButton src="https://i.fbcd.co/products/original/4cb3dfa788bdb2c97db08616a58304e4b6dd72d374e551cc419a77c4af6ec16e.jpg" />
      </LikedButton>
    </ButtonsContainer>
  );
}
