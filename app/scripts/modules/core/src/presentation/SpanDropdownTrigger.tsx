import React from 'react';

/**
 * A react-bootstrap dropdown toggle that doesn't render as a button.
 * Use in place of <Dropdown.Toggle />
 */
export const SpanDropdownTrigger = React.forwardRef<HTMLSpanElement, { onClick: () => void }>((props, ref) => {
  return (
    <span onClick={props.onClick} ref={ref}>
      {' '}
      {props.children}{' '}
    </span>
  );
});
