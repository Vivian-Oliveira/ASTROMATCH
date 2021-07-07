import React, { useEffect, useState } from "react";
import axios from "axios";
import MatchListItem from "../MatchListPage/MatchListItem";
import { ListContainer } from "./styled";

export default function MatchListPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vivian-costa-epps/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListItem profile={profile} />;
      })}
    </ListContainer>
  );
}
