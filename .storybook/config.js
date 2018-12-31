import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withConsole } from "@storybook/addon-console";

addDecorator(
  withInfo({
    inline: true,
    maxPropArrayLength: 1,
    maxPropObjectKeys: 60,
    maxPropsIntoLine: 90,
    maxPropStringLength: 300
  })
);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const req = require.context("../src/components", true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
