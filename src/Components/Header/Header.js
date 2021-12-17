import React from "react";

import main_logo from './main_logo.jpg';

//style
import "./Header.style.js";


//components
import { Wrapper, Content, Logo} from "./Header.style";
import  SearchBar from '../SearchBar/Searchbar';

const Header = () => (
 <Wrapper>
   <Content>
     <Logo className="App-logo" src={main_logo} alt="Olive logo"></Logo>
     <SearchBar/>
   </Content>
 </Wrapper>
);

  // return(
  //   <header className="header">
  //   <img src={main_logo} className="App-logo" alt="logo" />
  //   <p>
  //     My dream Olive.
  //   </p>
  //   <a
  //     className="App-link"
  //     href="https://reactjs.org"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     Learn React
  //   </a>
  // </header>
  //   );





export default Header;