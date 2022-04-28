

import windows from './System/Windows.js' 
import darwin from './System/Darwin.js' 
import linux from './System/Linux.js' 
import wsl from './System/WSL.js'

import exec from './Exec.js'


const Systems = { windows , darwin , linux , wsl };


export default function open(options){
    
    const { system  , wait } = options;
    
    return exec({
        detached : ! wait ,
        command : Systems[system](options)
    });
}
