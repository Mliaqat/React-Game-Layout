import styled from "styled-components";

import {
    CommonButton,
    FlexboxStyle,
    CommonGridStyle,
} from "../../style/commomStyle";


export const Headerstyle = styled.h3`

  text-align:center;

  margin: 3rem 0rem;

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

export const Formstyle = styled.main`

text-align: center;
width:80%;
margin:auto;
input{
    height:5rem;
    font-size:2.5rem;
}

label{
    font-size: 2.5rem;
    align-items: baseline;
}

.select{
    height: 4rem;
    font-size: 2.5rem;
    text-align: left;
}

${CommonGridStyle({
    columns: "repeat(2, 1fr)"
})}





`