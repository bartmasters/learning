// React and Redux: Getting Started with React Redux
// React and Redux: Manage State Locally First
//
// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    };
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.message];
        default:
            return state;
    }
};

const store = Redux.createStore(messageReducer);

class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    // add handleChange() and submitMessage() methods here
    handleChange(e) {
        this.setState({input: e.target.value});
    }
    submitMessage() {
        this.props.submitNewMessage(this.state.input);
        this.setState({input: ''});
    }

    render() {
        const myList = this.props.messages.map((x) => <li>{x}</li>);
        return (
            <div>
                <h2>Type in a new Message:</h2>
                { /* render an input, button, and ul here */}
                <input type='text'
                    value={this.state.input}
                    onChange={this.handleChange} />
                <button onClick={this.submitMessage}>Click me</button>
                <ul>{myList}</ul>
                { /* change code above this line */}
            </div>
        );
    }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
    // render the Provider here
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
    // change code above this line
};












// React and Redux: Connect Redux to React

const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

const mapStateToProps = (state) => {
    return {
        messages: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
};

class Presentational extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3>This is a Presentational Component</h3>
    }
};

const connect = ReactRedux.connect;
// change code below this line
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);