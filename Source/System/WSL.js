import furnishWindows from "./Windows.js";

export default function furnish(args) {
  return ["cmd.exe", ...furnishWindows(args).slice(1)];
}
