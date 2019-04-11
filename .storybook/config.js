import { addParameters, configure, addDecorator } from '@storybook/react';
import { withConsole } from "@storybook/addon-console";
import { withInfo } from '@storybook/addon-info';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  colorSecondary: '#FE4969',

  // UI
  appBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Text colors
  textColor: '#333333',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: '#4C76E0',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
	inputBorderRadius: 4,
});

addParameters({
  options: {
    addonPanelInRight: true,
		theme: theme,
    name: 'Hungry Hippo'
  }
});

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
