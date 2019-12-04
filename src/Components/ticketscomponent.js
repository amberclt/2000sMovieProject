import React from 'react' 
import {Container, Jumbotron} from 'reactstrap'
import { connect } from 'react-redux'
​
​
const TicketsComponent = (props) => {
    let[total, setTotal] = React.useState(0);
    
    const onMultiply = () => {
        var test = 8.95;
        setTotal(
            parseFloat(test)
            *
            parseFloat(document.getElementById('amount').value))
    }
​
    
​
    return (<div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className = "display-3">Purchase Tickets!</h1>
                    <p className="lead">Fill out the information below to complete transaction</p>
                </Container>
            </Jumbotron>
​
            How Many Tickets would you like to Purchase <input type="text" id='amount' />
            <button onClick= {onMultiply}>Buy</button>
            <div> The total cost will be ${total}. Showtime is{props} Enjoy the film 😊 </div>
​
            
​
​
        </div>
    );
}
​
​
​
const mapStateToProps = state => {
    return state
}
​
export default connect(mapStateToProps)(TicketsComponent)
​




