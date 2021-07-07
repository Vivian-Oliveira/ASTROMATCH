import React from "react";
import axios from "axios";


export default function ResetButton () {
    const onClickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/viviancosta/clear')
        .then(response => {
            console.log(response)
        })
    }
    return (
        <div>
            <button onClick={onClickReset}>Resetar curtidas e Matches</button>
        </div>
    )
}
