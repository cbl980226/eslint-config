# @cbl980226/eslint-config [![NPM version](https://img.shields.io/npm/v/@cbl980226/eslint-config.svg)](https://www.npmjs.com/package/@cbl980226/eslint-config)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used by cbl980226.

> ESLint in a monorepo([nx](https://nx.dev/)|[turbo](https://turbo.build/repo)) [shareable config](https://turbo.build/repo/docs/handbook/linting/eslint) used by cbl980226.

## Install

```shell
$ npm install --save-dev @cbl980226/eslint-config
```

## Requires

```shell
$ npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```shell
$ npm install --save-dev nx @nrwl/eslint-plugin-nx
```

### Options

```shell
$ npm install --save-dev eslint-config-prettier
```

## Usage

Create an `.eslintrc` file:

```json
{
  "extends": "@cbl980226"
}
```

### Vue | Ts | JS

```json
{
  "extends": "@cbl980226",
  "overrides": [
    {
      "files": ["*.vue", "*.ts", "*.js"],
      "rules": {}
    }
  ]
}
```

### Uniapp

```json
{
  "globals": {
    "uni": "readonly"
  },
  "extends": "@cbl980226",
  "overrides": [
    {
      "files": ["*.vue", "*.ts", "*.js"],
      "rules": {}
    }
  ]
}
```

### React

```json
{
  "extends": ["plugin:@nrwl/nx/react", "@cbl980226"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {}
    },
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "rules": {}
    }
  ]
}
```
