const { run , build } = Deno;
const { os } = build;

let system = os + '';

//WSL is not supported
//because "platform" in WSL returns just `{ arch: "x64", os: "linux" }`
//and there is no `os.release()`.
const isWsl = false;


import furnish from './Furnish.js'

const supported = [ 'linux' , 'darwin' , 'windows' , 'wsl' ];


export default async function open(options){
    
    if(isWsl)
        system = 'wsl';
    
    if(!supported.includes(system))
        return Promise.reject(`deno-opn doesn't support '${ system }'`);
    
    options.wait ??= true;
    options.app ??= [];
    
    
    const { wait , app } = options;
    
    
    const cmd = furnish(system,{
        parameter : app.slice(1) ,
        app : app[0] ,
        target : options.target , wait 
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
