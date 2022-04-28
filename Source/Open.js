

import * as Systems from './Systems.js'
import exec from './Exec.js'


export default async function open(options){
    
    const { system  , wait } = options;
    
    const furnish = Systems[system].default;
    
    const command = furnish(options);   
    
    const detached = ! wait;
    
    exec({ command , detached });
}
