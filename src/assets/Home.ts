import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background: black;
  padding-bottom: 200px;
`;

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px; ;
`;

export const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

export const SliderWrapper = styled.div`
  position: relative;
  top: -100px;
`;

export const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

export const Box = styled(motion.div) <{ bgPhoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  font-size: 66px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

export const Overley = styled(motion.div)`
    position : fixed;
    top : 0;
    width : 100%;
    height : 100%;
    background-color : rgba(0,0,0,0.5);
    opacity : 0;
`;

export const BigMovie = styled(motion.div)`
    position: absolute;
    width : 40vw;
    height : 80vh;
    left : 0;
    right : 0;
    margin : 0 auto;
    border-radius : 15px;
    overflow : hidden;
    background-color : ${(props) => props.theme.black.lighter};
`;

export const BigCover = styled.div`
  width : 100%;
  background-size : cover;
  background-position : center center;
  height : 400px;
`;

export const BigTitle = styled.h3`
  color : ${(props) => props.theme.black.lighter};
  padding : 20px;
  font-size : 46px;
  position : relative;
  top : -80px;
`;

export const BigOverview = styled.div`
  padding : 20px;
  position : relative;
  top : -80px;
  color : ${(props) => props.theme.white.lighter};
`;