import styled from "styled-components";

import {
  CommonButton,
  FlexboxStyle,
  CommonGridStyle
} from '../../style/commomStyle';

export const Dropdownstyle = styled.main`

width:80%;

 ${CommonGridStyle({
  columns: "repeat(4 , 1fr)"
})}



 `

export const Headerstyle = styled.h3`

  text-align:center;

  margin: 3rem 0rem;

`

export const Cardstyle = styled.main`


box-shadow: 1rem 1rem 0.6rem -0.5rem rgb(230 218 218 / 50%);
padding:5rem;

border: .1rem solid rgb(230 218 218 / 10%);


.icon{
  
  >svg{
    width:5rem;
  }
}

.crossicon{
  background:red;
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

