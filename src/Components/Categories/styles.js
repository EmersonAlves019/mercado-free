import styled from "styled-components";
import { RiArrowDropDownLine } from 'react-icons/ri'


export const CategoryDropdownContainer = styled.div`
    display: flex;
    align-items: center;
    width: 110px;
    justify-content: center;
    position: relative;

`

export const CategoryDropdown = styled.div`
    z-index: 5 ;
    cursor: pointer;

    width: 100%;
    text-align: center;
    color: #4B4B4B;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    p{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
    }
    
    div {
        left: -72px ;
        position: absolute;
        top: 50px;
        text-align: center;
        visibility: hidden;
        background-color: #292b2e;
        color: #FFF;
        padding: 20px 0;
        border-radius: 5px;
        transition: all 0.3s;
        

        &:after {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 75%;
            margin-left: -8px;
            width: 0; height: 0;
            border-bottom: 8px solid #292b2e;
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
        }
        
        button {
            padding-left: 30px;
            text-align: left;
            width: 220px;
            font-size: 14px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 400;
            height: 30px;
            border: none;
            background: none;
            color: white;
            cursor: pointer;

            &:hover {
                background: #008AFF;
            }
        }
        
    }
    &:hover, div {
        svg {
            color: black;
        }
        color: black;
        transition: all 0.3s;
        div{
          visibility: visible;
          z-index: 999;
        }
    }
`

export const ArrowDropDown = styled(RiArrowDropDownLine)`
    margin-top: 5px;
    color: #4B4B4B;
    width: 25px;
    height: 25px;
`