import React, {Component} from 'react';
import { connect } from 'react-redux';
import BedButton from './BedButton';


class App extends Component {

    render() {
        return (
            <div className="App">
                <span>{this.props.number}</span><br/>
                <BedButton/>
            </div>
        );
    }
};

let mapStateToProps = (state/*, ownProps */) => {
    return {
        number: state.data.number,
    };
};

App = connect(mapStateToProps, null,
    // (stateProps, dispatchProps, ownProps) => {
    //     console.log(stateProps, dispatchProps, ownProps);
    //     return {
    //         number: stateProps.number + 10
    //     };
    // }
)(App);

export default App;