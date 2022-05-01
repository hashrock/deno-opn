

export default function furnish({ target , app , wait, parameter }){
    
    const command = app ? [ app ] : [ 'gio' , 'open' ];
    
    return [ ...command , ...parameter , target ];
}