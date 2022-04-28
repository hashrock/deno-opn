# Deno Opn [![Badge License]][License] [![Badge Port]][Hashrock] [![Badge Opn]][Opn]

*A port of [opn].*

## Usage

```typescript
import { opn } from "https://denopkg.com/hashrock/deno-opn/opn.ts";

async function main() {
	// Opens the image in the default image viewer
	await opn("unicorn.png");

	// Opens the url in the default browser
	await opn("http://sindresorhus.com");

	// Specify the app to open in
	await opn("http://sindresorhus.com", { app: ["firefox"] });

	// Specify app arguments
	await opn("http://sindresorhus.com", {
		app: ["chrome", "--incognito"]
	});
}

main();
```

## API

Uses the command `open` on macOS, `start` on Windows, `gio open` on Linux.

Linux is still partial support. PRs welcome :)


<!----------------------------------------------------------------------------->

[Badge License]: https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge
[Badge Port]: https://img.shields.io/badge/Port-Hashrock-red.svg?style=for-the-badge
[Badge Opn]: https://img.shields.io/badge/Opn-Sindre_Sorhus-green.svg?style=for-the-badge

[Sindre Sorhus]: https://sindresorhus.com

[Hashrock]: https://github.com/hashrock
[opn]: https://github.com/sindresorhus/opn


[License]: LICENSE