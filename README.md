# use-bem-css

> A BEM CSS custom hook helper

[![NPM](https://img.shields.io/npm/v/use-bem-css.svg)](https://www.npmjs.com/package/use-bem-css) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-bem-css
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-bem-css'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [ShinSpiegel](https://github.com/ShinSpiegel)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
