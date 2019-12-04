import React from 'react' 
import {Container, Row, Col} from 'reactstrap'
import monstersinc from './monstersinc.jpeg'
import DropDownBox from './drop-down-box-component'
​
​
const MonstersIncComponent = (props) => {
  return(
    <div>
    <Container>
      <Row>
        <Col lg="4">
          <img src={monstersinc} />
          </Col>
        <Col lg="8"> 
        <h2>
          Monsters Inc.
        </h2>
        <h6>
            <i>
                G | 2001| Fantasy/Adventure | 1h 32m
            </i>
        </h6>
        <h4>
        In a world behind our closet doors, monsters reign supreme. The utility company Monsters Inc. specializes in fueling their world with the screams of human children. A team of monster scarers led by lovable Sulley and his wisecracking best friend Mike work hard and long hours to ensure the fuel of the screams. But things go crazy when Sulley discovers a mysterious door and a runaway little girl running amok. However, both Sulley and Mike discover that the little girl (Boo) is not actually dangerous, so they must bring her home to the human world. But what the duo doesn't know is that Boo is actually the key to a sinister conspiracy to saving the monster world from a rising crisis.
        </h4>
        <DropDownBox onSelectTime={props.onSelectTime}/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
​
export default MonstersIncComponent





