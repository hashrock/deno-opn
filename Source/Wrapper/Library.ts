

import { OpenOptions } from './Options.ts'
import openWith from '../Open.js'


/**
 *  Opens the `target` ( with the `app` ) in a system-independent sub-process.
 *  @param target Path to URL | File | Executable
 *  @param options
 *  @returns A promise for the child process
 */

export async function open( target : string , options : OpenOptions = {} ){
    
    options.wait ??= true;
    options.app ??= [];
    
    openWith({ target , ...options });
}