/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
const Wrapper = styled.div`
  height: ${({ size }) =>
    size === "small" ? 10 : size === "medium" ? 15 : 20}px;
  width: 300px;
  border-radius: 8px;
  box-shadow: inset -1px 1px 5px 1px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  padding: 3px;
`;
const BarWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
`;
const Bar = styled.div`
  width: ${({ value }) => value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size}>
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
      <VisuallyHidden>{value}</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
