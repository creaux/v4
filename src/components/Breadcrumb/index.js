/**
 * A Breadcrumb
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'config';
import { borderRadius } from '../../styled/mixins/border-radius';
import { clearfix } from '../../styled/mixins/clearfix';

const defaultProps = { theme };

class Breadcrumb extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <ol className={this.props.className}>
        {this.props.children}
      </ol>
    );
  }
}

// eslint-disable-next-line no-class-assign
Breadcrumb = styled(Breadcrumb)`
  ${(props) => `
 
    &.breadcrumb {
      padding: ${props.theme['$breadcrumb-padding-y']} ${props.theme['$breadcrumb-padding-x']};
      margin-bottom: ${props.theme['$spacer-y']};
      list-style: none;
      background-color: ${props.theme['$breadcrumb-bg']};
 
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$border-radius']
      )}
      
      ${clearfix()}
    }

    & .breadcrumb-item {
      float: left;
    
      /* The separator between breadcrumbs (by default, a forward-slash: "/") */
      + .breadcrumb-item::before {
        display: inline-block; /* Suppress underlining of the separator in modern browsers */
        padding-right: ${props.theme['$breadcrumb-item-padding']};
        padding-left: ${props.theme['$breadcrumb-item-padding']};
        color: ${props.theme['$breadcrumb-divider-color']};
        content: ${props.theme['$breadcrumb-divider']};
      }
  
      /* IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built
       without 'ul's. The '::before' pseudo-element generates an element
       *within* the .breadcrumb-item and thereby inherits the 'text-decoration'.
      
       To trick IE into suppressing the underline, we give the pseudo-element an
       underline and then immediately remove it.
      */
      
      + .breadcrumb-item:hover::before {
        text-decoration: underline;
      }
      + .breadcrumb-item:hover::before {
        text-decoration: none;
      }
    
      &.active {
        color: ${props.theme['$breadcrumb-active-color']};
      }
    }
  `}
`;

Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
