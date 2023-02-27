import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Text = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    color: rgba(82, 85, 95, 0.7);
    margin-left: 16px;
    cursor: pointer;
  }
`;