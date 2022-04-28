
export default function furnish({ target , system , wait , app , parameter }){
    
    let cmd;
    let args = [];
    
    switch(system){
    case 'darwin':
        
        cmd = 'open';

        if(wait)
            args.push('-W');

        if(app)
            args.push('-a',app);
        
        break;
    case 'windows':
    case 'wsl':
    
        cmd = 'cmd';
        
        if(system == 'wsl')
            cmd += '.exe';
        
        args.push('/c','start','/b');
        
        target = target.replace(/&/g,'^&');

        if(wait)
            args.push('/wait');

        if(app)
            args.push(app);

        if(parameter.length > 0)
            args = [ ...args , ...parameter ];
    
        break;
    case 'linux':
        
        if (app) {
            cmd = app;
        } else {
            cmd = 'gio';
            args.push('open');
        }

        if(parameter.length > 0)
            args = [ ...args , ...parameter ];
        
        break;
    }


    args.push(target);

    if(system === 'darwin' && parameter.length > 0){
        args.push('--args');
        args = args.concat(parameter);
    }
    
    
    return [ cmd , ...args ];
}