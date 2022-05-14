export default function furnish({ target, app, wait, parameter }) {
  const command = ["open"];

  if (wait) {
    command.push("-W");
  }

  if (app) {
    command.push("-a", app);
  }

  command.push(target);

  if (parameter.length) {
    command.push("--args");
  }

  command.push(...parameter);

  return command;
}
