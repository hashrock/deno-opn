import { opn } from "./opn.ts";

async function main() {
  // Opens the image in the default image viewer
  await opn("unicorn.png").then(() => {
    // image viewer closed
  });

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
