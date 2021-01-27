import styled from 'styled-components'

export const Header = styled.header`
  border-bottom: 1px solid rgba(134, 134, 134, 0.5);
  display: grid;
  grid-template-areas: 'logo navbar';
`

export const ImgLogo = styled.img`
  grid-area: logo;
`

export const Navbar = styled.nav`
  grid-area: navbar;
  justify-self: end;
  align-self: center;
`

export const ListItem = styled.li`
  display: inline-flex;
  margin: 1rem;
`

export const Link = styled.a`
  color: #007f56;
  font-weight: 300;
  text-decoration: none;
  text-transform: uppercase;
`
