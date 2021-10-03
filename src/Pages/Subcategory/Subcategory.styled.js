import styled from "styled-components";

import {
    CommonGridStyle,
    CommonButton,
    FlexboxStyle
} from '../../style/commomStyle'


export const Headerstyle = styled.h1`

  text-align:center;

  margin: 3rem 0rem;

`


export const Categorystyle = styled.main`

${CommonGridStyle({
    columns: "repeat(4 , 1fr)"
})}
.box{
    width:15.8rem;
    height:15.4rem;
    box-shadow: 1rem 1rem 0.6rem -0.5rem rgb(230 218 218 / 50%);
    border: .1rem solid rgb(230 218 218 / 10);
    margin:auto;
    margin-bottom:1rem;
    border-radius: 2rem;
    &:hover{
        background:rgb(110 101 101 / 50%);
    }
}


`

export const Buttonstyle = styled.main`

${FlexboxStyle({
    justify: "center"

})};

text-align: center;
margin: 2rem;

.login-btn{
    margin-right: 2rem;
    font-size: 2rem;
    ${CommonButton({ padding: '1.8rem 18rem' })} ;
}


`

