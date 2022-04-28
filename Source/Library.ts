const { run , build } = Deno;
const { os } = build;

let system = os + '';

//WSL is not supported
//because "platform" in WSL returns just `{ arch: "x64", os: "linux" }`
//and there is no `os.release()`.
const isWsl = false;

import { OpenOptions } from './Options.ts'

import furnish from './Furnish.js'

const supported = [ 'linux' , 'darwin' , 'windows' , 'wsl' ];


/**
 * Returns a promise for the child process.
 * @param target The thing you want to open. Can be a URL, file, or executable.
 * @param opnOptions
 */
 
export async function opn( target : string , options : OpenOptions = {} ){
    
    if(isWsl)
        system = 'wsl';
    
    if(!supported.includes(system))
        return Promise.reject(`deno-opn doesn't support '${ system }'`);
    
    options.wait ??= true;
    options.app ??= [];
    
    
    const { wait , app } = options;
    
    const cmd = furnish({ 
        parameter : app.slice(0) ,
        app : app[0] ,
        system , target , wait 
    });   
    
    
    const process = run({
        stdout : 'inherit' ,
        stderr : 'inherit' ,
        cmd
    });

    if(wait)
        return new Promise(async (resolve, reject) => {
            
            const { success , code } = await process.status();

            if(success)
                resolve(process);
            else
                reject(`Exited with code ${ code }`);
        });
    
    return Promise.resolve(process);
}
