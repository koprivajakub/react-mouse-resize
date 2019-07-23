import styled from "styled-components";
import {Wrapper} from "./Wrapper";

interface Props {
  orientation: "HORIZONTAL" | "VERTICAL";
}

export const Handler = styled.div.attrs<Props>((props: Props) => ({
  className: props.orientation.toLowerCase()
}))`
  width: ${(props: Props) =>
    props.orientation === "HORIZONTAL" ? "100%" : "0"};
  height: ${(props: Props) =>
    props.orientation === "VERTICAL" ? "100%" : "0"};
  position: absolute;
  top: ${(props: Props) => (props.orientation === "HORIZONTAL" ? "100%" : "0")};
  left: ${(props: Props) => (props.orientation === "VERTICAL" ? "100%" : "0")};
  cursor: ${(props: Props) =>
    props.orientation === "HORIZONTAL" ? "row-resize" : "col-resize"};
  
  ${Wrapper}:hover & {
    border-right: ${(props: Props) => (props.orientation === "VERTICAL" ? "#9d9d9d dashed 3px" : "none")}
    border-bottom: ${(props: Props) => (props.orientation === "HORIZONTAL" ? "#9d9d9d dashed 3px" : "none")}
  }
  
`;
