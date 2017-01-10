import { mediaBreakpointUp } from '../mixins/breakpoints';

export const defaultProps = {
  '$enable-flex': false,
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export function getFlexUtilities(enableFlex = defaultProps['$enable-flex'], gridBreakpoints = defaultProps['$grid-breakpoints']) {
  if (enableFlex) {
    const flexUtilityList = [];
    Object.keys(gridBreakpoints).forEach((breakpoint) => {
      flexUtilityList.push(`
        /* Flex column reordering */
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .flex-${breakpoint}-first { order: -1; }
          .flex-${breakpoint}-last { order: 1; }
          .flex-${breakpoint}-unordered { order: 0; }
        `)}
    
        /* Alignment for every item */
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .flex-items-${breakpoint}-top { align-items: flex-start; }
          .flex-items-${breakpoint}-middle { align-items: center; }
          .flex-items-${breakpoint}-bottom { align-items: flex-end; }
        `)}
    
        /* Alignment per item */
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .flex-${breakpoint}-top   { align-self: flex-start; }
          .flex-${breakpoint}-middle { align-self: center; }
          .flex-${breakpoint}-bottom { align-self: flex-end; }
        `)}
    
        /* Horizontal alignment of item */
        ${mediaBreakpointUp(breakpoint, gridBreakpoints, `
          .flex-items-${breakpoint}-left { justify-content: flex-start; }
          .flex-items-${breakpoint}-center { justify-content: center; }
          .flex-items-${breakpoint}-right { justify-content: flex-end; }
          .flex-items-${breakpoint}-around { justify-content: space-around; }
          .flex-items-${breakpoint}-between { justify-content: space-between; }
        `)}
      `);
    });
    return flexUtilityList.join('\n');
  }
  return '';
}

export default {
  defaultProps,
  getFlexUtilities,
};
