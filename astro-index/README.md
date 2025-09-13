# astro-index [![download count](https://img.shields.io/npm/dw/astro-index) ![version](https://img.shields.io/npm/v/astro-index)](https://www.npmjs.com/package/astro-index)

`apache2` like index in Astro. Useful for listing files in a directory.

> Does not generate the tree full !

Demo : <https://its-just-nans.github.io/astro-index/>

## Usage

```astro
---
import AstroIndex from "astro-index";
import { join } from "path";
const pathExpose = join(process.cwd(), "public");
---

<AstroIndex path={pathExpose} />
```

## License

Licensed under the MIT License - [LICENSE](LICENSE)
