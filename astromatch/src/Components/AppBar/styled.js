import styled from 'styled-components';

export const AppBarContainer = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
display:flex;
justify-content: space-between;
border-bottom: 1px solid lightgray;
align-items: center;
padding: 0 8px;
`
export const TitleContainer = styled.p `
font-family: 'Francois One', sans-serif;
font-size: 2em;
background: -webkit-linear-gradient(left, RGB(108, 66, 245) 50%, RGB(185, 66, 245) 50%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
display: inline;
`
export const IconButton = styled.img`
border-radius: 50%;
background-color: white;
right: 60px;
height: 60px;
cursor: pointer;
:hover {
    top:-2px;border-bottom:2px solid #999;padding-bottom:2px;
}
`
export const IconMatchButton = styled.button `
border-radius: 50%;
border: 0px solid white;
width: 100%;
margin-right: 5%;
background-color: white;
`