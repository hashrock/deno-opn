
import * as Systems from './Systems.js'


export default function furnish(system,args){
    return Systems[system].default(args);
}