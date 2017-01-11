/**
 * Testing our HeaderNavBarCollapse HoC component
 */

import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { mount } from 'enzyme';
import React from 'react';

import HeaderNavBar, { composeCollapse } from '../index';

const menu = (
  <ul>
    <li className="nav-item active">
      <a className="nav-item nav-link">a</a>
    </li>
    <li className="nav-item">
      <a className="nav-item nav-link">b</a>
    </li>
    <li className="nav-item">
      <a className="nav-item nav-link">c</a>
    </li>
  </ul>
);

const menuCollapsed = {
  menu,
  isCollapsed: false,
};

const HeaderNavBarCollapse = composeCollapse(HeaderNavBar);

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <HeaderNavBarCollapse
      className={props.className}
      menuCollapsed={menuCollapsed}
    />
  </ThemeProvider>
);

describe('<HeaderNavBarCollapse />', () => {
  it('should simulate a click', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
    });
    expect(renderedComponent.find('MenuCollapse').props().active).toBe(false);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('MenuCollapse').props().active).toBe(true);
  });
});