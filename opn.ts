/**
 *  Compatibility Wrapper
 *
 *  DEPRACATED
 *  If you still use this file, please update
 *  your code to use the new mod.ts file.
 *
 *  -> If you don't need to, please
 *     use a set release version.
 */

import { open } from "./mod.ts";

/** @deprecated - use `OpenOptions` instead. */
export interface OpnOptions {
  wait?: boolean;
  app?: string[];
}

/** @deprecated - use `open(target, options)` instead. */
export function opn(target: string, options: OpnOptions = {}) {
  const { app, wait } = options;

  return open(target, {
    with: app,
    wait,
  });
}
