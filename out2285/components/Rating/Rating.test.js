import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Rating from './Rating';
import { shallow } from "enzyme";

describe("Rating", () => {
    it("renders without crashing", () => {
        shallow(<Rating value={4} />);
    });
    test('renders snapshot', () => {
        const tree = renderer.create(<Rating value={4} />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});