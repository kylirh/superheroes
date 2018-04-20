import React from 'react';
import HeroTable from './HeroTable';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe("HeroTable", () => {
    let heroList;

    beforeEach(() => {
        heroList = [
            { id: 1, name: "Konrad Sanro", persona: "Retwoner", active: false },
            { id: 2, name: "Rowan Bredal", persona: "Hyprona", active: false },
            { id: 3, name: "Ulani Kywann", persona: "The Archkay", active: false },
            { id: 4, name: "Broadrick Ikon", persona: "E-NINJA", active: false },
            { id: 5, name: "Stuard Jedrek", persona: "Blades", active: false },
            { id: 6, name: "Bruce Wayne", persona: "Batman", active: true },
            { id: 7, name: "Clark Kent", persona: "Superman", active: true },
            { id: 8, name: "Logan", persona: "Wolverine", active: true },
            { id: 9, name: "Peter Parker", persona: "Spider Man", active: true },
            { id: 10, name: "Tony Stark", persona: "Iron Man", active: true },
        ];
    });

    it("renders correctly", () => {
        const component = shallow(
            <HeroTable heroes={heroList} />
        );
        expect(shallowToJson(component)).toMatchSnapshot();
    });

    it("calls the passed sort method", () => {
        const sortBy = jest.fn();

        const component = shallow(
            <HeroTable heroes={heroList} onSort={sortBy} />
        );

        // Sort by select checkbox
        component.find("td").at(0).simulate("click");
        expect(sortBy).not.toBeCalled();

        // Sort by status
        component.find("td").at(4).simulate("click");
        expect(sortBy).not.toBeCalled();

        // Sort by id
        component.find("td").at(1).simulate("click");
        expect(sortBy).lastCalledWith("id");

        // Sort by name
        component.find("td").at(2).simulate("click");
        expect(sortBy).lastCalledWith("name");

        // Sort by persona
        component.find("td").at(3).simulate("click");
        expect(sortBy).lastCalledWith("persona");
    });
})
