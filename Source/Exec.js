
const { run } = Deno;


export default function exec({ command , detached }){
    
    const process = run({
        stdout : 'inherit' ,
        stderr : 'inherit' ,
        cmd : command
    });
    
    
    if(detached)
        return Promise.resolve(process);
    
    
    return new Promise(async (resolve,reject) => {
        
        const { success , code } = await process.status();

        if(success)
            return resolve(process);
        
        reject(`Exited with code ${ code }`);
    });
}
