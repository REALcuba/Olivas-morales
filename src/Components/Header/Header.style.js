import styled from "styled-components";


export const Wrapper = styled.div`
background: var(--darkGray);
padding: 0 20 px;

`;

export const Content = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
max-width: var(--maxWidth);
padding 10px 0;
margin: 0px ;

`;

export const Logo = styled.img`
width: 10%;
height: auto;
border-radius: 40%;
margin: 5px 10px;
animation: App-logo-spin infinite 20s linear;
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  };
}

@media (max-width: 500px) {
width: 150px;

}
`;

export const SearchBar = styled.div`
width: 100px;
padding: 0;



@media (max-width: 500px) {
width: 80px;

}

`; 