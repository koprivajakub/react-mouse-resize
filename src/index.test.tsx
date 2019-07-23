import { HTMLElementResize } from "./";
import * as React from "react";
import { create } from "react-test-renderer";
import "jest-styled-components";

describe("rendering handlers", () => {
  test("render both handlers", () => {
    const onResized = () => {};

    const component = create(
      <HTMLElementResize
        mode={"both"}
        onResized={onResized}
        size={{
          height: 100,
          width: 100
        }}
      >
        <div />
      </HTMLElementResize>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("render horizontal handler only", () => {
    const onResized = () => {};

    const component = create(
      <HTMLElementResize
        mode={"width"}
        onResized={onResized}
        size={{
          height: 330,
          width: 100
        }}
      >
        <div />
      </HTMLElementResize>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("render vertical handler only", () => {
    const onResized = () => {};

    const component = create(
      <HTMLElementResize
        mode={"height"}
        onResized={onResized}
        size={{
          height: 10,
          width: 1
        }}
      >
        <div />
      </HTMLElementResize>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("render none handlers", () => {
    const onResized = () => {};

    const component = create(
      <HTMLElementResize
        mode={"none"}
        onResized={onResized}
        size={{
          height: 30,
          width: 20
        }}
      >
        <div />
      </HTMLElementResize>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
