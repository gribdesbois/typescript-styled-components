import React from 'react'
import { Menu } from '@material-ui/icons'
import { Container, Wrapper, Text, LeftText } from './styles'

const Menubar: React.FC = () => (
  <>
    <Container>
      <Wrapper>
        <Wrapper>
          <Menu />
          <Text>All</Text>
        </Wrapper>
        <Wrapper>
          <Text>Today' Deals</Text>
          <Text>Customer Service</Text>
          <Text>Gift Cards</Text>
          <Text>Sell</Text>
          <Text> Registry</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <LeftText>Amazon's response to COVID-19</LeftText>
      </Wrapper>
    </Container>
  </>
)

export default Menubar
