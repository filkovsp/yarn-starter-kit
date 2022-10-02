# Yarn Starter Kit
This is a React JS monorepo where Client and Server run simultaneously.

Prerequisites:
- installed NodeJS v14 or higher


## Installation of Yarn and npm packages:
Install yarn with the cmd below:
```sh
npm install --global yarn
```

After installation run
```sh
yarn install
```

if you see networ errors like below:
```
[1/4] 🔍  Resolving packages...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
```

try re-running install script with timeout:
```sh
yarn cache clean
yarn install --network-timeout 1000000
```

## Running project:
- both Clent and Server
```sh
yarn dev
```
- start server only:
```sh
yarn --cwd server dev
```
- start client only:
```sh
yarn --cwd client start
```


## More about Yarn and Workspaces:
- Installation: [https://classic.yarnpkg.com/en/docs/install]
- Usage: [https://classic.yarnpkg.com/en/docs/usage]
- Workspaces: [https://classic.yarnpkg.com/en/docs/workspaces]
