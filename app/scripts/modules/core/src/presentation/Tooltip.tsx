import React from 'react';
import { OverlayTrigger, Tooltip as BSTooltip } from 'react-bootstrap';
import { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';

import { Markdown } from './Markdown';
import { Placement } from './Placement';

export interface ITooltipProps {
  id?: string;
  value?: string;
  template?: JSX.Element;
  placement?: Placement;
  delayShow?: number;
}

export class Tooltip extends React.Component<ITooltipProps> {
  public static defaultProps: Partial<ITooltipProps> = {
    placement: 'top',
    value: '',
  };

  public render() {
    const { delayShow, id, placement, template, value } = this.props;
    const useId = id || value || 'tooltip';

    let tooltip = null;
    if (value) {
      tooltip = (
        <BSTooltip id={useId}>
          <Markdown message={value} />
        </BSTooltip>
      );
    }
    if (template) {
      tooltip = <BSTooltip id={useId}>{template}</BSTooltip>;
    }

    const hasValue = (value && value.length > 0) || template;
    const trigger: OverlayTriggerType[] = hasValue ? ['hover', 'focus'] : [];

    return tooltip ? (
      <OverlayTrigger
        delay={{ show: delayShow || 0, hide: 0 }}
        placement={placement}
        overlay={tooltip}
        trigger={trigger}
      >
        <span>{this.props.children}</span>
      </OverlayTrigger>
    ) : (
      this.props.children
    );
  }
}
