# deno-opn

A Deno port of [opn](https://github.com/sindresorhus/opn).

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

## License

Original version:

MIT © [Sindre Sorhus](https://sindresorhus.com)

Ported by hashrock.

This port version inherits the above license.
