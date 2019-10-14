import React from 'react';
import styled from 'styled-components'

// div
const CardDiv = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;
`;

function UserCard(props) {
    
        console.log(props.player, 'UserCard')

        
    return(
        <>
            <CardDiv>
                <h3>Player Name: {props.player.name}</h3>
                <p>Country: {props.player.country}</p>
                <p>Google Searches: {props.player.searches}</p>
                
            </CardDiv>
        </>
    )
}


export default UserCard;

