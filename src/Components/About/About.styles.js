import styled from "styled-components";
// import { BACKGROUND_IMAGES} from "../Image/ResumeData";
// import renderbackgroundImages from "../Image/dataSlider";



export const ContainerSlider = styled.div`
 max-width: 800px;
  height: 500px;
  margin:5px auto 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
@media screen and (max-width: 700px){
  
    margin: 100px 10px 0;
  }
  
`;

export const Content = styled.div`
width: 2rem;
justify-content: center;
 
`;

export const Text = styled.div `
color: var(--lightGray);
align-items: center;
`;

export const Slide = styled.div`

width: 100%;
height: 100%;
position: absolute;
opacity: 0;
transition: opasity ease-in-out 0.4s;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
   
}


`;
export const BtnSlide = styled.button`
 display: flex;
 position: absolute;
border-radius: 50%;
width: 60px;
height: 60px;
background: #f1f1f1;
border: 1px solid rgba(34, 34, 34, 0,287);
justify-content: center;
align-items: center;
cursor: pointer;

img{
    width: 25px;
  height: 25px;
  pointer-events: none;
};
.prev {
  top: 50%;
  left: 20px;
  transform: translateY(-60%);
};
.next {
  top: 50%;
  right: 20px;
  transform: translateY(-60%);
}

`;

export default Content;