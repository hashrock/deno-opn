# Deno Opn [![Badge License]][License] [![Badge Port]][Hashrock] [![Badge Opn]][Opn]

***A port of [OPN]***

<br>
<br>

## Usage

#### Import

```js
import { open } from 'https://github.com/hashrock/deno-opn/raw/master/mod.ts'
```

<br>

#### File

*Open a file with the default image viewer.*

```js
await open('unicorn.png');
```

<br>

#### URL

*Open a URL in the default browser.*

```js
await open('http://sindresorhus.com');
```

<br>

#### With

*Open the target with a specific program.*

```js
await open('http://sindresorhus.com',{ 
    with: [ 'firefox' ] 
});
```

<br>

#### Arguments

*Supply the program with arguments.*

```js
await open('http://sindresorhus.com',{
    with: [ 'chrome' , '--incognito' ]
});
```

<br>
<br>

## Design

*Internally system specific commands* <br>
*are used to start the child processes.*





| System | Command
|:------:|:-------
| ![Badge Linux]  | `gio open`
| ![Badge MacOS]  | `start`
| ![Badge Windows] | `open`


## Contributions

***PRs welcome :)***


<!----------------------------------------------------------------------------->

[Badge License]: https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge
[Badge Port]: https://img.shields.io/badge/Port-Hashrock-red.svg?style=for-the-badge
[Badge Opn]: https://img.shields.io/badge/Opn-Sindre_Sorhus-green.svg?style=for-the-badge

[Badge Windows]: https://img.shields.io/badge/-0078D6.svg?style=for-the-badge&logo=windows&logoColor=white&logoWidth=200
[Badge Linux]: https://img.shields.io/badge/-87CF3E.svg?style=for-the-badge&logo=linux&logoColor=white&logoWidth=200
[Badge MacOS]: https://img.shields.io/badge/-darkgray.svg?style=for-the-badge&logo=apple&logoColor=white&logoWidth=200

[Sindre Sorhus]: https://sindresorhus.com

[Hashrock]: https://github.com/hashrock
[opn]: https://github.com/sindresorhus/opn


[License]: LICENSE