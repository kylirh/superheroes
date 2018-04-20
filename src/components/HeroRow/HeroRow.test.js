import React from 'react';
import HeroRow from './HeroRow';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("HeroRow", () => {
    let hero;

    beforeEach(() => {
        hero = { id: 1, name: "Konrad Sanro", persona: "Retwoner", active: false };
    });

    it("renders correctly", () => {
        const component = shallow(
            <HeroRow hero={hero} key={hero.id} />
        );
        expect(toJson(component)).toMatchSnapshot();
    });

    it("calls the passed select method", () => {
        const handleSelect = jest.fn();
        const component = shallow(
            <HeroRow hero={hero} key={hero.id} onSelect={handleSelect} />
        );
        component.find("input").simulate("change");
        expect(handleSelect).toBeCalledWith(hero);
    });
})
