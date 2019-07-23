import * as React from "react";
import { Wrapper } from "./styled/Wrapper";
import { Handler } from "./styled/Handler";
import { memo, ReactNode, useEffect, useRef, useState } from "react";
import {isBrowser} from "./utils/isBrowser";
import {registerMouseMove} from "./utils/registerMouseMove";
import {registerMouseButtonEvents} from "./utils/registerMouseButtonEvents";
import {clearSelection} from "./utils/clearSelection";

export type Size = {
  width: number;
  height: number;
}

type ScreenCoordinates = {
  x: number;
  y: number;
}

export type HTMLElementResizeProps = {
  size: Size;
  children: ReactNode | ReactNode[];
  onResized: (size: Size) => void;
  mode: "none" | "width" | "height" | "both";
};

export const HTMLElementResize: React.FC<HTMLElementResizeProps> = memo(
  ({ size, mode, children, onResized }) => {
    const heightResizeActive = useRef<boolean>(false);
    const widthResizeActive = useRef<boolean>(false);
    const [resizeActive, setResizeActive] = useState(false);

    const sizeBeforeStart = useRef<Size | null>(null);

    const heightHandlerRef = useRef<HTMLDivElement>(null);
    const widthHandlerRef = useRef<HTMLDivElement>(null);
    let timeout: number | null = null;

    const mousePositionDragStart = useRef<ScreenCoordinates | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const mouseMoveFunction = (e: MouseEvent) => {
      if (heightResizeActive || widthResizeActive) {
        if (mousePositionDragStart.current) {
          if (timeout !== null) {
            window.cancelAnimationFrame(timeout);
          }

          // Setup the new requestAnimationFrame()
          timeout = window.requestAnimationFrame(function() {
            clearSelection();

            if (
              sizeBeforeStart.current !== null &&
              mousePositionDragStart.current !== null
            ) {
              onResized({
                height: heightResizeActive.current
                  ? sizeBeforeStart.current.height +
                    (e.y - mousePositionDragStart.current.y)
                  : size.height,
                width: widthResizeActive.current
                  ? sizeBeforeStart.current.width +
                    (e.x - mousePositionDragStart.current.x)
                  : size.width
              });
            }
          });
        }
      }
    };

    const mouseDownFunction = (e: MouseEvent) => {
      if (wrapperRef.current !== null) {
        sizeBeforeStart.current = {
          height: wrapperRef.current.clientHeight,
          width: wrapperRef.current.clientWidth
        };
        mousePositionDragStart.current = { x: e.x, y: e.y };

        if (e.target === heightHandlerRef.current) {
          heightResizeActive.current = true;
          setResizeActive(true);
        }
        if (e.target === widthHandlerRef.current) {
          widthResizeActive.current = true;
          setResizeActive(true);
        }
      }
    };

    const mouseUpFunction = (_e: MouseEvent) => {
      heightResizeActive.current = false;
      widthResizeActive.current = false;
      mousePositionDragStart.current = null;
      setResizeActive(false);
    };

    useEffect(registerMouseMove.bind(null, resizeActive, mouseMoveFunction), [resizeActive]);
    useEffect(registerMouseButtonEvents.bind(null, isBrowser() && mode !== "none", mouseDownFunction, mouseUpFunction), []);

    return (
      <Wrapper ref={wrapperRef} w={size.width} h={size.height}>
        {(mode === "height" || mode === "both") && (
          <Handler ref={heightHandlerRef} orientation={"HORIZONTAL"} />
        )}
        {(mode === "width" || mode === "both") && (
          <Handler ref={widthHandlerRef} orientation={"VERTICAL"} />
        )}
        {children}
      </Wrapper>
    );
  }
);
