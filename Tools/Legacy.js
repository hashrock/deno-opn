#!/usr/bin/env -S deno run --allow-read=../ --allow-run

import { fromFileUrl , dirname , normalize } from 'https://deno.land/std/path/mod.ts';

const { log } = console;

log(`
Testing Library
---------------
`);

const folder = executionDirectory();

log('Folder Location:',folder,'\n');

const path = normalize(`${ folder }/../opt.ts`);

log('Library Entry Point:',path,'\n');

const library = await import(path);

log('System:',Deno.build,'\n');


await library.opn('https://deno.land/',{
    app : [ 'firefox' ]
});


function executionDirectory(){
    return dirname(fromFileUrl(import.meta.url));
}
