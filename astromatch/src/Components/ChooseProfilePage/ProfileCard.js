import React from "react";
import { ProfileContainer, ProfilePicture, ProfileInfo, TextCard } from "./styled";

export default function ProfileCard(props) {
  const profile = props.profile
  return (
    <ProfileContainer>
      <ProfilePicture src={profile.photo} />
      <ProfileInfo>
        <TextCard>{profile.name}, {profile.age}</TextCard>
        <TextCard> {profile.bio} </TextCard>
      </ProfileInfo>
    </ProfileContainer>
  );
}
