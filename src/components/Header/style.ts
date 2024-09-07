import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    align-items: center;
    justify-content: space-around;
`

export const Logo = styled.div`
    width: 3rem;
    height: 3rem;
    border: 1px solid gray;
    border-radius: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`

export const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Menu = styled.div`
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    border-radius: 1rem;
    height: 2rem;
    align-items: center;
    overflow: hidden;
    font-size: 14px;
`

export const MenuItem = styled(NavLink)`
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    color: black;
    border-radius: 1rem;

    &:hover {
        color: gray;
    }

    &.active {
        color: white;
        background-color: black;
    }
`

export const ToggleDarkMode = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: lightgray;
    }
`