import React from "react";
import { Button, UncontrolledTooltip } from "reactstrap";

export const ButtonWithIcon = ({
  text,
  color,
  click,
  size,
  icon,
  id,
  type,
}) => (
  <>
    <Button color={color} id={id} onClick={click} size={size}>
      <span className="btn-inner--text">{text}</span>
      <span className="btn-inner--icon">
        <i className={icon}></i>
      </span>
    </Button>
  </>
);

export const OutlineButton = ({ bgcolor, text, click }) => (
  <>
    <Button color={bgcolor} outline type="button" onClick={click}>
      {text}
    </Button>
  </>
);

export const Link = ({ bgcolor, text }) => (
  <>
    <Button color={bgcolor} outline>
      {text}
    </Button>
  </>
);
export const IconButton = ({ color, size, icon, click }) => (
  <Button color={color} type="button" size={size} onClick={click}>
    <span className="btn-inner--icon">
      <i className={icon}></i>
    </span>
  </Button>
);
export const IconButtonWithToolTip = ({
  id,
  color,
  size,
  icon,
  text,
  place,
  click,
  toggler,
  hide
}) => (
  <>
    <Button color={color} id={id} type="button" onClick={click} size={size}>
      <span className="btn-inner--icon">
        <i className={icon}></i>
      </span>
    </Button>
    <Tooltip place={place} target={id} text={text} hide={hide} />
  </>
);

export const Tooltip = ({ place, target, text , hide }) => (
  <UncontrolledTooltip delay={0} placement={place} autohide={hide} target={target}>
    {text}
  </UncontrolledTooltip>
);
