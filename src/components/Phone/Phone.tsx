import * as React from 'react'

import { Card } from 'src/components/Card'
import { StyledPhone } from './Phone.style'
// import Slider, { Settings } from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const Phone: React.FC = (props) => {
  // const slickSettings: Settings = {
  //   fade: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // }

  return (
    <StyledPhone>
      <div className="smartphone">
        <div className="content">
          <Card
            background="images/images1.jpeg"
            title="title1"
            description="It's the desert you've always dreamed of"
          />
        </div>
      </div>
    </StyledPhone>
  )
}

export default Phone
