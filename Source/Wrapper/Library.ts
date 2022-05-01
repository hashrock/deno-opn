

import { OpenOptions } from './Options.ts'
import openWith from '../Open.js'
import { system , notSupported } from '../Supported.js'


/**
 *  Opens the `target` ( with the `app` ) in a system-independent sub-process.
 *  @param target Path to URL | File | Executable
 *  @param options
 *  @returns A promise for the child process
 */

export function open( target : string , options : OpenOptions = {} ){
    
    if(notSupported)
        return Promise.reject(`deno-opn doesn't support '${ system }'`);
    
    options.wait ??= true;
    options.with ??= [];
    
    const [ app , ...parameter ] = options.with;
    const { wait } = options;
    
    return openWith({ system , target , wait , app , parameter });
}