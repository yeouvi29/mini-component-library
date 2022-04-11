import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
const Wrapper = styled.div`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  padding-left: var(--height);
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const STYLES = {
  small: { fontSize: 14, iconSize: "16px", borderThickness: 1, height: 24 },
  large: {
    fontSize: 18,
    iconSize: "24px",
    borderThickness: 2,
    height: 36,
  },
};
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...props
}) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <IconWrapper style={{ "--size": styles.iconSize }}>
        <Icon id={icon} size={styles.iconSize + "px"} />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--height": styles.height / 16 + "rem",
          "--border-thickness": styles.borderThickness + "px",
          "--font-size": styles.fontSize / 16 + "rem",
        }}
        {...props}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
