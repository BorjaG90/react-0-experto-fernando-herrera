import React from "react";
import { mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas sobre <AppRouter />', () => {
  const user = {
    id: 1,
    name: 'Borja'
  }
  const wrapper = mount(
  <UserContext.Provider value={{user}}>
    <AppRouter />
  </UserContext.Provider>
  );

  test('should de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })
})