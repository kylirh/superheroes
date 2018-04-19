import React from 'react';
import HeroRow from './HeroRow';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe("HeroRow", () => {
    it("renders correctly", () => {
        const hero = { id: 1, name: "Konrad Sanro", persona: "Retwoner", active: false };
        const component = shallow(
            <HeroRow hero={hero} key={hero.id} />
        );
        expect(shallowToJson(component)).toMatchSnapshot();
    });

    it("calls the passed select method", () => {
        const hero = { id: 1, name: "Konrad Sanro", persona: "Retwoner", active: false };
        const handleSelect = jest.fn();
        const component = shallow(
            <HeroRow hero={hero} key={hero.id} onSelect={handleSelect} />
        );
        component.find("input").simulate("change");
        expect(handleSelect).toHaveBeenCalledWith(hero);
    });
})
