import React from 'react'
import { ListItemContainer, Avatar, NameMatch } from './styled'

export default function MatchListItem(props) {
    const profile = props.profile
    return (
        <ListItemContainer>
            <Avatar src={profile.photo} />
            <NameMatch>{profile.name}</NameMatch>
        </ListItemContainer>
    )
}
