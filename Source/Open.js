const { build } = Deno;
const { os } = build;

let system = os + '';

//WSL is not supported
//because "platform" in WSL returns just `{ arch: "x64", os: "linux" }`
//and there is no `os.release()`.
const isWsl = false;

import * as Systems from './Systems.js'
import exec from './Exec.js'

const supported = [ 'linux' , 'darwin' , 'windows' , 'wsl' ];


export default async function open(options){
    
    if(isWsl)
        system = 'wsl';
    
    if(!supported.includes(system))
        return Promise.reject(`deno-opn doesn't support '${ system }'`);
    
    const { wait , app } = options;
    
    const furnish = Systems[system].default;
    
    const command = furnish({
        parameter : app.slice(1) ,
        app : app[0] ,
        target : options.target , wait 
    });   
    
    exec({ command , detached : !wait });
}
