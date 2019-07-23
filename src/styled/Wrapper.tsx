import styled from "styled-components";
import { WidthProperty } from "csstype";

interface Props {
  w: WidthProperty<number>;
  h: WidthProperty<number>;
}

export const Wrapper = styled.div.attrs((props: Props) => ({
  style: {
    width: props.w !== "auto" ? `${props.w}px` : "auto",
    height: props.h !== "auto" ? `${props.h}px` : "auto"
  }
}))<Props>`
  position: relative;
  display: inline-flex;
`;
