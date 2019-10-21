import React, { Component } from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56vh;
  overflow: hidden;
  border: 1px solid #d1d5da;
  & .fade-in {
    opacity: 1;
  }
`;
const ImgPreloader = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
`;

const ImgLoaded = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  opacity: 0;
  transition: opacity 1s ease;
`;

class IronImage extends Component {
  constructor(props) {
    super(props);
    this.imgHD = null;
  }

  componentDidUpdate() {
    this.loaderImg();
  }

  componentDidMount() {
    this.loaderImg();
  }

  render() {
    return (
      <ImgContainer>
        <ImgLoaded ref={node => (this.imgHD = node)}></ImgLoaded>
        <ImgPreloader
          style={{ backgroundImage: `url('${this.props.preload}')` }}
        ></ImgPreloader>
      </ImgContainer>
    );
  }

  loaderImg = () => {
    const { source } = this.props;
    const hdLoaderImg = new Image();
    hdLoaderImg.src = source;
    hdLoaderImg.onload = () => {
      this.imgHD.setAttribute("style", `background-image: url('${source}')`);
      this.imgHD.classList.add("fade-in");
    };
  };
}

export default IronImage;
