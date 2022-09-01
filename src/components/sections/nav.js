import React, {Component} from "react";
import styled from "styled-components";

import {ReactComponent as GithubLogo} from '../../assets/github.svg'
import {ReactComponent as LinkedinLogo} from "../../assets/linkedin.svg";

const Header = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    top: 0;
    max-height: 7vh;
    justify-content: space-between;
    border-bottom: .5vh solid darkorange;
`;

const ItemContainer = styled.div`
  flex-direction: row;
  justify-content: right;
  text-align: right;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const NavItem = styled.a`
  text-decoration: none;
  font-size: 2.2vw;
  font-family: "Arial Rounded MT Bold";
  color: antiquewhite;
  margin-right: 2vw;
  margin-left: 1vw;
  margin-top: 1vh;
  justify-content: center;
`;

const SvgContainer = styled.div`
    width: 2.5vw;
`;

class Nav extends Component {
    render(){
        const app = '#App'
        const about = '#About'
        const work = '#Work'
        const projects = '#Projects'
        const contact = "#Contact"

        return(
            <Header>
                <Socials>
                    <NavItem href={app}>  </NavItem>
                    <NavItem target="_blank" rel="noreferrer" href="https://github.com/alecjuknievich">
                        <SvgContainer>
                            <GithubLogo/>
                        </SvgContainer>
                    </NavItem>
                    <NavItem target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alec-juknievich/">
                        <SvgContainer>
                            <LinkedinLogo/>
                        </SvgContainer>
                    </NavItem>
                </Socials>
                <ItemContainer>
                    <NavItem href={about}>About</NavItem>
                    <NavItem href={work}>Work</NavItem>
                    <NavItem href={projects}>Projects</NavItem>
                    <NavItem href={contact}>Contact</NavItem>
                </ItemContainer>
            </Header>
        )
    }
}

export default Nav
