# Hippo (Client)


## Installation
1. Install dependencies with `yarn install`

2. Run the server `yarn start` (this opens a window on localhost:3002)

3. Run storybook `yarn run storybook`

## Storybook
You can view the prod version of the component library at https://brianbolnick.github.io/hippo_client/

## Troubleshooting
This application is using React version `16.7.0-alpha.2`. If you see the error `TypeError: Object(...) is not a function` when starting the server, you may need to manually upgrade your react and react-dom versions: `yarn add react@next react-dom@next`
