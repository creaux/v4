/**
 * Testing our Summary component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import Summary from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Summary
    className={props.className}
  >
    {props.children}
  </Summary>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Summary
      className={props.className}
    >
      {props.children}
    </Summary>
  </ThemeProvider>
);


describe('<Summary />', () => {
  it('should render an <Summary> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Summary').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <summary> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('summary').length).toBe(1);
    expect(renderedComponent.find('Summary').length).toBe(1);
  });
  it('should have class .summary by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('summary').hasClass('summary')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});