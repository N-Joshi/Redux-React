import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import clickUserAction from '../action/userclick'
 
class UserListContainer extends React.Component {
        
    renderPropsReceived(){
        return this.props.myusers.map((u)=>{
            return(   
                <li key={u.id} onClick={()=> this.props.clickUser(u)}>
                {u.first}&nbsp;{u.last}</li>
            )
        })
            
    }
    
    render() { 
        return ( 
            <div>
                 <br></br>
                {this.renderPropsReceived()}
            </div>
         );
    }
}

function convertStoreToProps(store){
    return {
        myusers:store.users
    }
}

function mapPropsToAction(dispatch){
    return bindActionCreators({
        clickUser:clickUserAction
    },dispatch)
}


export default connect(convertStoreToProps,mapPropsToAction)(UserListContainer);