import React from 'react'
import {connect} from 'react-redux'
class UserDetailContainer extends React.Component {
 
    render() { 
            if(this.props.activeUser === null){
                return(<div>Click the Names to fetch details....</div>)
            }
            else{
                return(
                        <div>
                            <br></br>
                            <b>Name:</b> {this.props.activeUser.first} &nbsp;{this.props.activeUser.last}
                            &nbsp; at {this.props.activeUser.age} says &nbsp;
                            <br></br>
                            <b>{this.props.activeUser.desc}</b>
                        </div>
                    )
            }
    }       
}

function convertStoreToProps(store){
    return{
        activeUser:store.clickeduser
    }
}
export default connect(convertStoreToProps)(UserDetailContainer);