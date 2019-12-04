import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { timeSelected } from '../actions/actions'
​
​
​
const DropDownBox = (props) => {
  
  const [dropdownOpen, setOpen] = useState(false);
​
  const onSelectTime = event => {
    props.onSelectTime(event.target.innerText)
  } 
  const toggle = () => setOpen(!dropdownOpen);
    return (<div>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Get Tickets!
        </DropdownToggle>
        <div>
            <DropdownMenu>
              <DropdownItem  header>Movie Times:</DropdownItem>
              <DropdownItem onClick={onSelectTime}><Link to="/ticket">2:30pm</Link></DropdownItem>
              <DropdownItem onClick={onSelectTime}><Link to="/ticket">4:45pm</Link></DropdownItem>
              <DropdownItem onClick={onSelectTime}><Link to="/ticket">7:00pm</Link></DropdownItem>
            </DropdownMenu>
        </div>
      </ButtonDropdown>
    </div>
      
    )
  }
​
  
​
​
​
const mapStateToProps = state => {
  return state
}
​
export default  connect(mapStateToProps)(DropDownBox)










