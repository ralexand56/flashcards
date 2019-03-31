import React, { SFC, ReactElement } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

interface Props {
  isFlipped?: boolean;
  handleFlipping?: () => void;
  front: ReactElement;
  back: ReactElement;
  width?: number;
  height?: number;
}

interface SideProps {
  width: number;
  height: number;
}

const MainContainer = styled(animated.div)`
  border: 0px solid;
  display: flex;
  justify-content: center;
  width: ${(props: SideProps) => props.width}px;
  height: ${props => props.height}px;
  overflow: hidden;
`;

const Side = styled(animated.div)`
  /* padding: 0.3em; */
  background-color: #31333f;
  display: flex;
  justify-content: center;
  will-change: transform, opacity;
  position: absolute;
  max-width: ${(props: SideProps) => props.width}px;
  max-height: ${props => props.height}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
`;

export const FlipCard: SFC<Props> = ({
  front,
  back,
  handleFlipping,
  isFlipped = true,
  width = 250,
  height = 250
}) => {
  const { opacity, transform } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <MainContainer
      width={width}
      height={height}
      onClick={handleFlipping && handleFlipping}
    >
      <Side
        width={width}
        height={height}
        style={{
          zIndex: isFlipped ? 1 : 0,
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        {back}
      </Side>
      <Side
        width={width}
        height={height}
        style={{
          zIndex: isFlipped ? 0 : 1,
          opacity: opacity.interpolate(o =>
            typeof o === "number" ? 1 - o : 1
          ),
          transform
        }}
      >
        {front}
      </Side>
    </MainContainer>
  );
};

export default FlipCard;
