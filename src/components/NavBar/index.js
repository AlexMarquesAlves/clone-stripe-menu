import React from "react";
import { DropdownOption, DropdownProvider, DropdownRoot } from "../Dropdown";
// Imported Content
import { Products, Developers, Company } from "../Content";
import { Container, DropdownStyles } from "./styles";

function NavBar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
                backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
                backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="Empresa"
                content={Company}
                backgroundHeight={286}
              />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default NavBar;
