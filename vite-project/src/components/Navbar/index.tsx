import React from 'react'
import {
  ShoppingCartOutlined,
  SearchOutlined,
  ArrowDropDown,
  RoomOutlined,
} from '@material-ui/icons'
import {
  Container,
  Logo,
  Flag,
  Text,
  Wrapper,
  SearchBox,
  Select,
  SearchIconWrapper,
} from './styles'
import logo from './assets/logo.png'
import flag from './assets/flag.png'

const Navbar: React.FC = () => (
  <>
    <Container>
      <Logo src={logo} />
      <Wrapper flexDirection="row" alignItems="center">
        <RoomOutlined />
        <Wrapper>
          <Text fontSize=".7em">Deliver in</Text>
          <Text>Nigeria</Text>
        </Wrapper>
      </Wrapper>

      {/* search button */}

      <Select>
        <option value="All">All</option>
      </Select>
      <SearchBox />
      <SearchIconWrapper>
        <SearchOutlined />
      </SearchIconWrapper>

      {/* flag image */}
      <Wrapper flexDirection="row" alignItems="flex-start">
        <Flag src={flag} />
        <ArrowDropDown />
      </Wrapper>
      <Wrapper>
        <Text fontSize=".7em">Hello, Sign in</Text>
        <Wrapper flexDirection="row" alignItems="center">
          <Text>Account & Lists</Text>
          <ArrowDropDown>
        </Wrapper>
      </Wrapper>
    </Container>
  </>
)

export default Navbar
