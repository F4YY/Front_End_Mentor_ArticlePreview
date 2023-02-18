import styled from "styled-components";

export const Container = styled.div`
    --Very-Dark-Grayish-Blue: hsl(217, 19%, 35%);
    --Desaturated-Dark-Blue: hsl(214, 17%, 51%);
    --Grayish-Blue: hsl(212, 23%, 69%);
    --Light-Grayish-Blue: hsl(210, 46%, 95%);
    font-size: 13px;
    font-family: Manrope;
    --semibold:700;
    --reguler:500;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width:100wh;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: var(--Light-Grayish-Blue);
    h1{
        font-size: 1.4em;
        font-weight: var(--semibold);
        color: var(--Very-Dark-Grayish-Blue);
        line-height: 1.4em;
        margin: 0;
    }
    h2{
        font-size: .95em;
        font-weight: var(--semibold);
        color: var(--Very-Dark-Grayish-Blue);
        padding: 0 0 2px 0;
        margin: 0;
    }
    h3{
        font-size: .9em;
        font-weight: var(--reguler);
        color: var(--Desaturated-Dark-Blue);
        line-height: 1.6em;
        margin: 10px 0;
    }
    h4{
        font-size: .9em;
        font-weight: var(--reguler);
        color: var(--Grayish-Blue);
        padding: 2px 0;
        margin:0;
    }
`