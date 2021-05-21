import * as React from 'react'
import { StyledCard } from './Card.style'
// import { ReactComponent as Phone } from './phone_frame.svg'
// import Icon from '../ /phone_frame.svg'
// import Icon from 'src/static/phone_frame.svg'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string
  borderRadius?: string
  background?: string
  round?: boolean
  cancel?: boolean
  title?: string
  description?: string
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <StyledCard {...props}>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="copy">{props.description}</div>
      </div>
    </StyledCard>
  )
}

export default Card
