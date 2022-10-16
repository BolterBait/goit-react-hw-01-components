import styled from "styled-components";

export const Card = styled.div`
background-color: whitesmoke;
width: 300px;
display: flex;
flex-direction: column;
border: 1px solid lightgray`

export const Img = styled.img`
width: 200px;
border-radius: 50%`

export const Avatar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;`

export const UserName = styled.p`
font-size: 28px;
font-weight: 700;
margin-top: 40px;`

export const UserTag = styled.p`
font-size: 18px;
font-weight: 500;
margin-top: 10px;`

export const UserLocation = styled.p`
font-size: 18px;
font-weight: 500;
margin-top: 10px;`

export const StatsItem = styled.ul`
background-color: lightgray;
border-top: 1px solid gray;
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 20px;`

export const StatsList = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
font-size: 18px;
font-weight: 500;
padding-right: 20px`