# react-mouse-resize

> Controlled component allowing to resize the content by mouse dragging

[![NPM](https://img.shields.io/npm/v/react-mouse-resize.svg)](https://www.npmjs.com/package/react-mouse-resize) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

This library has a peer dependency on `react` and `react-dom` 16.8.x since it is using a react hooks. And `styled-components`. So please be sure to have it installed.

```bash
npm install --save styled-components react-mouse-resize
yarn add styled-components react-mouse-resize
```

## Usage

```tsx
import * as React from 'react'

import HTMLElementResizer from 'react-mouse-resize'

interface Props {}

const App: React.FC<Props> = () => {
  const [size, setSize] = useState({
    width: "auto",
    height: "auto"
  });
  return (
      <HTMLElementResizer size={size} onResized={(size) => {
        setSize(size);
      }} mode={"none"}>
        <div
          style={{
            background: "red",
            width: "100%",
            height: "100%",
            minWidth: "100px",
            minHeight: "100px",
          }}
        >
        </div>
      </HTMLElementResizer>
  );
};
```

## Component properties
| property | description |
|---|---|
| `onResized(size: Size)` | callback that is triggered once the component resizes |
| `size`  | object defining the current size of the component |
| `mode`  | union type defining the resize mode<br>`none` resize handlers are not available<br>`width` only width handler is available<br>`height` only height resize handler is available<br>`both` width and height resize handlers are available |

## License

MIT © [koprivajakub](https://github.com/koprivajakub)
