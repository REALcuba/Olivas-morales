import { createGlobalStyle } from "styled-components";
// import { BACKGROUND_IMAGES} from "../src/Components/Image/ResumeData";
export const GlovalStyle = createGlobalStyle`

:root{

    --maxWidth : 1280px;
    --white: #fff;
    --lightGray: #eee;
    --midGray: #353535;
    --darkGray: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMedium: 1.2rem;
    --fontSmall: 1rem;
    --backgroundImage:  src= "../Image/background_campo_olive.jpg";
    }


*{
    box-sizing: border-box;
    font-family: "Abel", sans-serif;
}

body{
    margin: 0;
    padding: 0;

  h1 {
      font-size: 2rem;
      font-weight:600;
      color: var(--white);
  }

  h3 {
    font-size: 1.1rem;
    font-weight:600;

  }

  p{
     font-size: 1rem;
    color: var(--white);

  }

}


`