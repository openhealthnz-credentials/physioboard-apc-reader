
# NZ Physioboard APC Reader ![](https://img.shields.io/badge/lang-TS-blue?style=flat-square) [![License][]](LICENSE) [![NPM Package]](https://npmjs.org/package/physioboard-apc-reader)

[license]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[npm package]: https://img.shields.io/npm/v/@openhealthnz-credentials/physioboard-apc-reader.svg?style=flat-square


Parses and extracts info from NZ Physio board issued certificates.


## Installation

This package is designed for a node-js enviroment. Install with yarn or npm

```bash
  npm install @openhealthnz-credentials/physioboard-apc-reader # or
  yarn add @openhealthnz-credentials/physioboard-apc-reader
```
    
## Usage

### From a file:

```javascript
import { ApcFromPDFBuffer } from '@openhealthnz-credentials/physioboard-apc-reader'
...
let details = await ApcFromPDFBuffer(fileBuffer);
```

### From a file buffer 

```javascript
import { ApcFromPDFFile } from '@openhealthnz-credentials/physioboard-apc-reader'
...
let details = await ApcFromPDFFile("./path/to/file.pdf");
```

### Error Handling
```javascript
import { ApcFromPDFFile } from '@openhealthnz-credentials/physioboard-apc-reader'

try {
    let details = await ApcFromPDFFile("./path/to/file.pdf");
    if (details) {
        // Sucessfully parsed
        console.log(details)
    } else {
        // details===null
        // Means it failed to parse
        // Likely not the correct kind of certifcate
    }
} catch (e) {
    // PDF was invalid, or file could not be read
}
```
## Demo

[Demo site here!](https://physioboard-apc-reader.pages.dev/)

![](./demo.gif)

## Contributing

Contributions are always welcome!
Please adhere to this project's [`code of conduct`](./CODE_OF_CONDUCT.md).


### Core Library
```bash
# Install dependencies
yarn
# Run Tests
yarn test
```

For breaking changes, check how it that effects `docker-service` and `lambda-service`, and make appropriate changes.

### Demo Site
```bash
cd demo-site
# Install dependencies
yarn
# Start development environment
yarn dev
```
### Docker Service
```bash
cd docker-service
# Install dependencies
yarn
# Start server locally
yarn start
# Run as Docker Container
docker build -t container-name .
docker run -d container-name -p 3000
```

### Lambda Service
```bash
cd lambda-service
# Install dependencies
yarn
# Start server locally
sam build
sam local start-api
```

### Git Commit Messages & Semantic Versioning

Commits on the `Main` branch, with changes to the to the Core Library need to follow the [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) for semantic-release to work.

In summary, your commits should have this structure: `<type>(optional scope): <description>`

Where `<type>` is one of the following:
 - **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
 - **ci**: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
 - **docs**: Documentation only changes
 - **feat**: A new feature
 - **fix**: A bug fix
 - **perf**: A code change that improves performance
 - **refactor**: A code change that neither fixes a bug nor adds a feature
 - **test**: Adding missing tests or correcting existing tests

<br/>
<br/>
<h2 align="center">
	Supported By
</h2>
<p align="center">
	<a href="https://www.provida.nz/">
		<img width="250" src="./ProvidaKeaLogo.png"></img>
	</a>
</p>