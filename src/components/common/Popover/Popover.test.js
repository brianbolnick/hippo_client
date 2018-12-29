import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Popover from './Popover';
import { shallow } from "enzyme";

describe("Popover", () => {
    it("renders without crashing", () => {
        shallow(<Popover target={<button>Button</button>}>
            This is some text
		</Popover>);
    });
    test('renders snapshot', () => {
        const tree = renderer.create(<Popover target={<button>Button</button>}>
            This is some text
		</Popover>).toJSON()
        expect(tree).toMatchSnapshot()
    });
});