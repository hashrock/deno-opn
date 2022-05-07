/*
 *  WSL is not supported because "platform" in WSL returns just
 *  `{ arch: "x64", os: "linux" }` and there is no `os.release()`
 */

const supported = ["linux", "darwin", "windows", "wsl"];
const isWsl = false;

let { os } = Deno.build;

if (isWsl) {
  os = "wsl";
}

export const notSupported = !supported.includes(os);

export const system = os;
