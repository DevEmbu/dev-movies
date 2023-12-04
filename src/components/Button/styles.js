import styled, { css } from 'styled-components'

export const buttonStyles = css`
      border: 3px solid #ffffff;
      background: transparent;
      color: #ffffff; 
      border-radius:30px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 20px;
      font-weight: 500;

      &:hover{
        color:#ff0000;
        background: #ffffff;
        

      }
`
export const ButtonWhite = styled.button` 
     ${buttonStyles}
`

export const ButtonRed = styled.button` 
     ${buttonStyles}

     background: #ff0000;
     border: 4px solid transparent;

     &:hover{ 
        box-shadow: 0px 0px 46px 23px rgba(199,204,45,1);
     }
     

`