export default function(state=null,action){

    switch(action.type){
        case "USER_CLICKED":
                console.log("Action is Received in Reducer!")
                console.log(action.payload);
                return action.payload
        default:
            break;
    }
    return state;
}