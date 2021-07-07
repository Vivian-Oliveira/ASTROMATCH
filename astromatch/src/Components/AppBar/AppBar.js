import React from "react";
import {
  AppBarContainer,
  IconMatchButton,
  TitleContainer,
  IconButton,
} from "./styled";

export default function AppBar(props) {
  return (
    <AppBarContainer>
      <IconMatchButton onClick={props.goToChooseProfilePage}>
        <IconButton src="https://png.pngtree.com/png-vector/20190810/ourlarge/pngtree-hand-love-heart-wedding-flat-color-icon-vector-icon-png-image_1653917.jpg"></IconButton>
      </IconMatchButton>
      <TitleContainer>Astromatch</TitleContainer>
      <IconMatchButton onClick={props.goToMatchListPage}>
        <IconButton src="https://png.pngtree.com/png-vector/20190806/ourlarge/pngtree-couple-love-marriage-heart-flat-color-icon-vector-icon-png-image_1651345.jpg"></IconButton>
      </IconMatchButton>
    </AppBarContainer>
  );
}
