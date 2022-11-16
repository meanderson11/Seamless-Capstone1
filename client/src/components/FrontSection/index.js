import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { FrontContainer, FrontBg, VideoBg, FrontContent, FrontH1, FrontP, FrontBtnWrapper, ArrowForward, ArrowRight } from './FrontElements';
import { useNavigate } from 'react-router-dom';

const FrontSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/registration`; 
      navigate(path);
    }

  return (
    <FrontContainer>
        <FrontBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </FrontBg>
        <FrontContent>
            <FrontH1>Time is Money Let us save you both</FrontH1>
            <FrontP>
                Come to us for your payroll and timekeeping solutions in one place, Sign up today!
            </FrontP>
           
            <FrontBtnWrapper>
                <Button  onClick={routeChange} onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true' 
                >
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </FrontBtnWrapper>
        </FrontContent>
    </FrontContainer>
  )
}

export default FrontSection;