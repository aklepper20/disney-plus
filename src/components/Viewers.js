import React from "react";
import styled from "styled-components";

function Viewers(props) {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="Disney Viewer" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="Disney Viewer" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="Disney Viewer" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="Disney Viewer" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="Disney Viewer" />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  //if were on a phone lets do this styling NOT desktop. Desktop will have row, mobile will have a column
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;
export default Viewers;
