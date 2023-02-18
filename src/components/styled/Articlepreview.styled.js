import styled from "styled-components";
import { Tooltip } from "react-tooltip";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px) {
        flex-direction: column;
    }
`
export const Styledarticlepreview = styled(Hstackflexi)`
    width: 660px;
    height: 250px;
    box-shadow: 0 15px 20px rgba(0,0,0,0.1);
    border-radius: 8px;
    @media screen and (max-width:960px){
        width:auto;
        height:auto;
        justify-content: center;
        margin: 0 20px;
    }
    @media screen and (max-width:600px){
        width:90%;
        height:auto;
        margin: 20px;
        overflow: hidden;
        border-radius: 8px;
    }
`
//Styled for left section :
export const Articleimage = styled.img`
    width: 255px;
    height: 250px;
    border-radius: 8px 0 0 8px;
    object-fit: cover;
    object-position: left;
    @media screen and (max-width:600px){
        width:auto;
        height:auto;
        border-radius: 8px 8px 0 0;
    }
`
//Styled for right section :
export const Articleinfo = styled(Vstack)`
    width: 335px;
    height: 185px;
    padding: 30px 35px 35px;
    border-radius: 0 8px 8px 0;
    background-color: #fff;
    @media screen and (max-width:600px){
        width:auto;
        height:auto;
        border-radius: 0 0 8px 8px;
    }
`
export const Profilinfo = styled(Hstack)`
    position:relative;
    width: 280px;
    height: 40px;
    margin-top: 2px;
    @media screen and (max-width:600px){
        width:auto;
    }
`
export const Profpic = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
export const NameDateButton = styled(Hstack)`
    justify-content: space-between;
    min-width: 280px;
    @media screen and (max-width:600px){
        min-width:230px;
    }
`
export const NameDate = styled(Vstack)`
    width: auto;
    height: 40px;
    padding: 3px 20px;
`
export const Sharebutton = styled.button`
    width: auto;
    height:auto;
    padding:4px 8px;
    margin-top: 10px;
    border-radius: 50%;
    border-style: none;
    cursor: pointer;
    z-index:1;
`
export const Sharetip = styled(Tooltip)`
    padding: 5px 25px;
    border-radius: 8px;
    background-color: var(--Very-Dark-Grayish-Blue);
    box-shadow: 0 8px 8px rgba(0,0,0,0.12);
    @media screen and (max-width:600px){
        position:static;
        opacity: .95;
        z-index:0;
        translate: -320px -5px;
        min-width:500px;
        height:100px;
        background-color: var(--Very-Dark-Grayish-Blue);
    }
`
export const Sharetipinfo = styled(Hstack)`
    align-items: center;
    gap: 15px;
    p{
        text-transform:uppercase;
        letter-spacing: .3rem;
        font-weight: 300;
        color:var(--Light-Grayish-Blue);
    }
    @media screen and (max-width:600px){
        scale: 1.1;
        inset:0 -10px;
        padding:8px 40px;
    }
`
//Styled for Attribution :
export const Attribution = styled.div`
    display: flex;
    margin: 10px auto 0;
    font-size: 12px;
    text-align: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px 20px 5px;
    }
`
export const AttributionA = styled(Attribution)`
    color: hsl(228, 45%, 44%);
`