import { open } from "https://github.com/hashrock/deno-opn/raw/master/mod.ts";

// Opens the image in the default image viewer

// await open('unicorn.png');

// Opens the url in the default browser

await open("http://sindresorhus.com");

// Specify the app to open in

await open("http://sindresorhus.com", {
  with: ["firefox"],
});

// Specify app arguments

await open("http://sindresorhus.com", {
  with: ["chrome", "--incognito"],
});
