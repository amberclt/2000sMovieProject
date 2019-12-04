import React from 'react' 
import {Container, Row, Col} from 'reactstrap'
import eternalsunshine from './eternalsunshine.jpeg'
import DropDownBox from './drop-down-box-component'
​
​
const  EternalSunshineComponent = (props) => {
  return(
    <div>
    <Container>
      <Row>
        <Col lg="4">
          <img src={eternalsunshine} />
          </Col>
        <Col lg="8"> 
        <h2>
            Eternal Sunshine of the Spotless Mind
        </h2>
        <h6>
            <i>
                R | 2004 | Drama/Sci-fi | 1h 48m
            </i>
        </h6>
        <h4>
        A man, Joel Barish, heartbroken that his girlfriend Clementine underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realizes that he still loves her, and may be too late to correct his mistake.
        </h4>
        <DropDownBox onSelectTime={props.onSelectTime}/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
export default EternalSunshineComponent

