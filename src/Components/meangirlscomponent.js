import React from 'react' 
import {Container, Row, Col} from 'reactstrap'
import MeanGirls from './meangirls.jpeg'
import DropDownBox from './dropdownbox'
const MeanGirlsComponent = () => {
  return(
    <div>
    <Container>
      <Row>
        <Col lg="4">
          <img src={MeanGirls} />
          </Col>
        <Col lg="8"> 
        <h1>
            Mean Girls
        </h1>
        <h6>
            <i>
              PG-13 | 2004 | Teen/Comedy | 1h 37m
            </i>
        </h6>
        
        <h4>
        Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.
        </h4>
        <DropDownBox onSelectTime={props.onSelectTime}/> />
        </Col>
      </Row>
    </Container>
    </div>
  )
}
export default MeanGirlsComponent