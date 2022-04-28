const { run, build } = Deno;

//WSL is not supported
//because "platform" in WSL returns just `{ arch: "x64", os: "linux" }`
//and there is no `os.release()`.
const isWsl = false;

import { OpnOptions } from './Options.ts'
import furnish from './Furnish.js'


/**
 * Returns a promise for the child process.
 * @param target The thing you want to open. Can be a URL, file, or executable.
 * @param opnOptions
 */
 
export async function opn( target : string , options : OpnOptions = {} ){
    
    options.wait ??= true;
    options.app ??= [];
    
    let cmd: string;
    let parameter : string[] = [];
    
    const { wait , app } = options;
    
    const arguments = app.slice(1);
    const openApp: string | undefined = app
        ? app[0]
        : undefined;

    switch(build.os){
    case 'darwin':
        
        cmd = "open";

        if(wait)
            parameter.push("-W");

        if(openApp)
            parameter.push("-a", openApp);
        
        break;
    case 'windows':
    
        if(isWsl)
            return Promise.reject(`deno-opn doesn't support WSL`);
            
        cmd = "cmd" + (isWsl ? ".exe" : "");
        
        parameter.push("/c", "start", "/b");
        
        target = target.replace(/&/g,'^&');

        if(wait)
            parameter.push('/wait');

        if(openApp)
            parameter.push(openApp);

        if(arguments.length > 0)
            parameter = [ ...parameter , ...arguments ];
    
        break;
    case 'linux':
        
        if (openApp) {
            cmd = openApp;
        } else {
            cmd = 'gio';
            parameter.push('open');
        }

        if(arguments.length > 0)
            parameter = [ ...parameter , ...arguments ];
        
        break;
    default:
        return Promise.reject(`deno-opn doesn't support '${ build.os }'`);
    }


    parameter.push(target);

    if(build.os === 'darwin' && arguments.length > 0){
        parameter.push('--parameter');
        parameter = parameter.concat(arguments);
    }
    
    const process = run({
        cmd : [ cmd , ...parameter ],
        stdout : 'inherit' ,
        stderr : 'inherit' ,
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
