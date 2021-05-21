import * as React from 'react'

import { Card } from 'src/components/Card'
import { Phone } from 'src/components/Phone'
import { StyledCardList } from './CardList.style'

const CardList: React.FC = (props) => {
  return (
    <StyledCardList {...props}>
      <Phone />

      <Card background="images/images2.jpeg" title="title2" />
      <Card background="images/images3.jpeg" title="title3" />
      <Card background="images/images4.jpeg" title="title4" />
    </StyledCardList>
  )
}

export default CardList
