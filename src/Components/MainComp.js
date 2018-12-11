import React from 'react'
import UserListContainer from '../containers/UserList';
import UserDetailContainer from '../containers/UserDetail';


class MainComp extends  React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <div >User List:
                    <UserListContainer/>
                </div>
                <hr></hr>
                <div>User Detail:
                    <UserDetailContainer/>
                </div>
            </div>
        );
    }
}
  
export default MainComp;