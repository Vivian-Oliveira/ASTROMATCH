import React, { useEffect, useState } from "react";
import ProfileCard from "../ChooseProfilePage/ProfileCard";
import ChooseButtons from "../ChooseProfilePage/ChooseButtons";
import axios from "axios";

export default function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vivian-costa-epps/person"
      )
      .then((res) => {
        setProfileToChoose(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id,
    };

    setProfileToChoose(undefined)
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vivian-costa-epps/choose-person",
        body
      )
      .then((res) => {
        console.log(res);
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const onClickNo = () => {
    chooseProfile(false);
  };

  const onClickYes = () => {
    chooseProfile(true);
  };

  return (
    <div>
      {profileToChoose ? 
       ( <>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>) : <p> Carregando...</p>
      }
    </div>
  );
}
