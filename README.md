# playwright-demo



## install dependencies
npm init -y 
npm install --save-dev ts-node typescript @types/node
npm install playwright mocha chai --save-dev
package.json --> add  script test: "mocha -r ts-node/register src/tests/**/*.spec.ts"

## run test
npm test 
