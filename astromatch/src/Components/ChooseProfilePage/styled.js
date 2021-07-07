import styled from 'styled-components';

export const ProfileContainer = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
margin: 16px;
// border: 1px solid black;
`
export const ProfilePicture = styled.img `
width:100%;
height:60%;
display: block;
max-height: 350px;
`
export const ProfileInfo = styled.div `
padding: 0 16px;
`
export const TextCard = styled.p `
font-family: 'Cardo', serif;
text-align: center;
font-size: 20px;
`

export const ButtonsContainer = styled.div `
display: flex;
justify-content: space-around;
`

export const LikedButton = styled.button `
border-radius: 50%;
border: 0px solid white;
margin-right: 5%;
background-color: white;
`
export const PicButton = styled.img`
border-radius: 50%;
background-color: white;
right: 50px;
height: 50px;
cursor: pointer;
:hover {
    top:-2px;border-bottom:2px solid #999;padding-bottom:2px;
}
`
export const UnlikedButton = styled.button `
border-radius: 50%;
border: 0px solid white;
width: 100%;
margin-right: 5%;
background-color: white;
`
