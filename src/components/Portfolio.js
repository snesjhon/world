import React, { useState } from "react";
import { Box, Flex, Text, Image } from "rebass";
import Modal from "./Modal";
import ImgLoader from "./ImgLoader";
import styled from "styled-components";
import * as ImgH from "../assets/portfolio";
import * as ImgP from "../assets/portfolio/p";

const ModalArrow = styled(Box)`
  position: absolute;
  font-size: 1.5rem;
  top: 50%;
  left: ${props => (props.left ? "0.5rem" : undefined)};
  transform: ${props => (props.left ? "rotate(180deg)" : undefined)};
  right: ${props => (props.right ? "0.5rem" : undefined)};
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #0366d6;
  }
`;
const ModalImg = props => {
  const { images } = props;
  const [active, setActive] = useState(0);
  return (
    <Modal isOpen={true} handleClose={() => props.setCurrent(false)}>
      <ModalArrow left onClick={() => setActive(old => (old > 0 ? --old : 0))}>
        ▶︎
      </ModalArrow>
      <ImgLoader source={images[active].src} preload={images[active].preload} />
      <ModalArrow
        right
        onClick={() =>
          setActive(old =>
            old < images.length - 1 ? ++old : images.length - 1
          )
        }
      >
        ▶︎
      </ModalArrow>
    </Modal>
  );
};

const PortfolioImg = styled(Image)`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #d1d5da !important;
  padding: 0.1rem;
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

const PortfolioType = props => {
  let title, description, tech, role, img, source, year;
  switch (props.type) {
    default:
    case "condati":
      title = "conDati";
      description =
        "Apply AI and Machine Learning algorithms to build analytic solutions that transform massive volumes of customer, event, and transaction data into accessible dashboards, alerts and automatic reports";
      tech = "JavaScript, React, Redux, TypeScript, Styled-Components, Webpack";
      role = "Lead UI Developer, Infrastructure, Design";
      img = ImgH.condati1;
      year = "(2018 - Present)";
      source = "https://condati.com";
      break;
    case "akamai":
      title = "Akamai mPulse";
      description =
        "Get granular visibility into how end users perceive performance, and take action against third-party resources that are slowing you down. Maximize your business outcomes by prioritizing enhancements that matter.";
      tech = "JavaScript, React, Redux, Flow, Java, Selenium";
      role = "UI Developer, Design";
      img = ImgH.akamai1;
      year = "(2017 - 2018)";
      source = "https://akamai.com/mpulse";
      break;
    case "soasta":
      title = "SOASTA";
      description =
        "Cloud-based testing services, and created a browser-based website testing product. Website tests include load testing, software performance testing, functional testing and user interface testing.";
      tech = "Wordpress, PHP, JavaScript, Gulp, Pantheon Ops.";
      role = "Lead Designer, Wordpress Developer";
      img = ImgH.soasta1;
      year = "(2015 - 2017)";
      source = "https://soasta.com";
      break;
    case "hrs":
      title = "Hawk Ridge Systems";
      description =
        "The largest worldwide partner for Dassault Systèmes SOLIDWORKS, our goal at Hawk Ridge Systems is to provide you with the the widest selection of 3D design and manufacturing solutions, and access to the most experienced team of professionals in the industry.";
      tech = "Expression Engine, Wordpress, JavaScript, PHP";
      role = "UI Developer, Design";
      img = ImgH.hrs1;
      year = "(2013 - 2015)";
      source = "https://hawkridgesys.com/";
      break;
    case "cfega":
      title = "CrossFit Endgame";
      description =
        "CrossFit begins with a belief in fitness. The aim of CrossFit is to forge a broad, general and inclusive fitness. We have sought to build a program that will best prepare trainees for any physical contingency — not only for the unknown, but for the unknowable.";
      tech = "Wordpress, JavaScript, PHP";
      role = "Lead Designer, Lead UI Developer";
      img = ImgH.cfega1;
      year = "(2014)";
      source = "http://www.endgameathletics.com/";
      break;
  }
  return props.children({
    title,
    description,
    tech,
    role,
    img,
    source,
    year
  });
};

const Portfolio = props => {
  const [current, setCurrent] = useState();
  const types = ["condati", "akamai", "soasta", "hrs", "cfega"];
  return (
    <>
      {types.map((e, i) => {
        const isEven = i % 2;
        return (
          <PortfolioType type={e}>
            {({ title, description, tech, role, img, source, year }) => (
              <Flex
                mt={i === 0 ? 4 : 5}
                flexDirection={isEven ? "row-reverse" : "row"}
              >
                <Box width={[1, 2 / 5]}>
                  <Text
                    fontSize={4}
                    fontWeight="600"
                    mt={0}
                    mb={3}
                    sx={{ borderBottom: "1px solid #eaecef" }}
                  >
                    {title}
                    <Text
                      as="span"
                      color="gray"
                      ml={2}
                      fontSize={3}
                      fontWeight="300"
                    >
                      {year}
                    </Text>
                  </Text>
                  <p>{description}</p>
                  <p>
                    <strong>
                      <u>Tech:</u>
                    </strong>{" "}
                    {tech}
                  </p>
                  <p>
                    <strong>
                      <u>Role:</u>
                    </strong>{" "}
                    {role}
                  </p>
                  <p>
                    <strong>
                      <u>Source:</u>
                    </strong>{" "}
                    <a
                      href={source}
                      target="_blank"
                      alt="source"
                      rel="noopener noreferrer"
                    >
                      {source}
                    </a>
                  </p>
                </Box>
                <Box
                  width={[1, 3 / 5]}
                  pl={isEven ? undefined : 4}
                  pr={isEven ? 4 : undefined}
                >
                  <PortfolioImg src={img} onClick={() => setCurrent(e)} />
                </Box>
              </Flex>
            )}
          </PortfolioType>
        );
      })}
      {current && (
        <ModalImg
          current={current}
          setCurrent={setCurrent}
          images={[
            {
              src: ImgH[current + 1],
              preload: ImgP[current + 1]
            },
            {
              src: ImgH[current + 2],
              preload: ImgP[current + 2]
            },
            {
              src: ImgH[current + 3],
              preload: ImgP[current + 3]
            }
          ]}
        />
      )}
    </>
  );
};

export default Portfolio;
