import styled from "styled-components";
import React from "react";
import ImgSlider from "./ImgSlider";

function Home(props) {
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
}

//pushes container down so the whole home component is not hiding behind the header component.
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
