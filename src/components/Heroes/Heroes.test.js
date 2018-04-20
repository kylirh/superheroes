import React from 'react';
import Heroes from './Heroes';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

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

    it("sorts", () => {
        const component = mount(
            <Heroes list={heroList} />
        );
        expect(toJson(component)).toMatchSnapshot();

        // Sort by id
        component.find("thead td").at(1).simulate("click");
        expect(toJson(component)).toMatchSnapshot();

        // Sort by name
        component.find("thead td").at(2).simulate("click");
        expect(toJson(component)).toMatchSnapshot();

        // Sort by persona
        component.find("thead td").at(3).simulate("click");
        expect(toJson(component)).toMatchSnapshot();
    });

    it("selects", () => {
        const component = mount(
            <Heroes list={heroList} />
        );

        component.find("tbody tr").at(0).find("input").simulate("change");
        component.find("tbody tr").at(3).find("input").simulate("change");
        expect(toJson(component)).toMatchSnapshot();
    });
})
