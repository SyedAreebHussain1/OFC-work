import React , {createContext , Component} from 'react';

export const StateContext = createContext();

class StateContextProvider extends Component{
    state = {
        id : 0,
    }
    ChangeState = (value) => {
        this.setState({id : value})
    }
    render(){
        return (
            <StateContext.Provider value={{... this.state , data : (val) => this.ChangeState(val)}} >
                {this.props.children}
            </StateContext.Provider>
        );
    }
}


export default StateContextProvider;