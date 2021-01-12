import React from 'react';
import { shallow } from "enzyme"
import GifGridItem from '../../components/GifGridItem';

describe('Tests in GifGridItem', () => {
    const title = 'Gif Title';
    const id = 1;
    const url = 'https://localhost:3000';
    test('should display component correctly', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url} />);
        expect(wrapper).toMatchSnapshot();
    });
})
