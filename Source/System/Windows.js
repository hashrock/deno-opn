

export default function furnish({ target , app , wait, parameter }){
    
    const command = [ 'cmd' , '/c' , 'start' , '/b' ];

    if(wait)
        command.push('/wait');

    if(app)
        command.push(app);

    command.push(...parameter);
    
    target = target.replace(/&/g,'^&');
    command.push(target);
    
    return command;
}