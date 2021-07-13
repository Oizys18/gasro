import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
interface HeaderProps {
  children: React.ReactNode;
  to: string;
}
export default function HeaderLink({ children, ...props }: HeaderProps) {
  return (
    <HeaderListItem className="nav-item">
      <Link to={props.to}>{children}</Link>
    </HeaderListItem>
  );
}

const HeaderListItem = styled.li`
  padding: 0 0 0 40px;
  align-self: center;
  color: white;
  font-weight: var(--font-medium);
  font-size: var(--normal-font-size);
  &:hover {
    color: red;
  }
  & a:visited {
    text-decoration: none;
    color: white;
  }
  & a:hover {
    color: red;
    font-weight: var(--font-medium);
  }
`;
