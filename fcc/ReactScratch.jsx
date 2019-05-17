// React: Review Using Props with Stateless Functional Components
//

class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        Camper.defaultProps = {name: 'CamperBot'};
        Camper.propTypes = {name: PropTypes.string.isRequired};
        return (
            <div>
                <Camper />
            </div>
        );
    }
}
// change code below this line
const Camper = (props) => {
    return <p>{props.name}</p>;
};

//
// React: Create a Stateful Component
//

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        // initialize state here
        this.state = {
            name: 'Bart',
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

//
// React: Render State in the User Interface
//

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp',
        };
    }
    render() {
        return (
            <div>
                change code below this line
        <h1>{this.state.name}</h1>
                change code above this line
      </div>
        );
    }
}

// React: Render State in the User Interface Another Way

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp',
        };
    }
    render() {
        // change code below this line
        const name = this.state.name;
        // change code above this line
        return (
            <div>
                // change code below this line
                <h1>{name}</h1>
            // change code above this line
            </div>
        );
    }
}

// React: Set State with this.setState
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // change code below this line
        this.setState({
            name: 'React Rocks!',
        });
        // change code above this line
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

// React: Bind 'this' to a Class Method
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCount: 0,
        };
        // change code below this line
        this.addItem = this.addItem.bind(this);
        // change code above this line
    }
    addItem() {
        this.setState({
            itemCount: this.state.itemCount + 1,
        });
    }
    render() {
        return (
            <div>
                // change code below this line
                <button onClick={this.addItem}>Click Me</button>
                // change code above this line
                <h1>Current Item Count: {this.state.itemCount}</h1>
            </div>
        );
    }
}

// React: Use State to Toggle an Element

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
        };
        // change code below this line
        this.toggleVisibility = this.toggleVisibility.bind(this);
        // change code above this line
    }
    // change code below this line
    toggleVisibility() {
        if (this.state.visibility) {
            this.setState({
                visibility: false,
            });
        } else {
            this.setState({
                visibility: true,
            });
        }
    }
    // change code above this line
    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
}

// React: Write a Simple Counter

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        // change code below this line
        this.reset = this.reset.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        // change code above this line
    }
    // change code below this line
    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    decrement() {
        this.setState({
            count: this.state.count - 1,
        });
    }
    reset() {
        this.setState({
            count: 0,
        });
    }
    // change code above this line
    render() {
        return (
            <div>
                <button className="inc" onClick={this.increment}>         Increment!     </button>
                <button className="dec" onClick={this.decrement}>
                    Decrement!
        </button>
                <button className="reset" onClick={this.reset}>
                    Reset
        </button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
}

// React: Create a Controlled Input
class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
        // change code below this line
        this.handleChange = this.handleChange.bind(this);
        // change code above this line
    }
    // change code below this line
    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }
    // change code above this line
    render() {
        return (
            <div>
                // change code below this line
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                // change code above this line
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        ); th
    }
}

// React: Create a controlled form

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }
    handleSubmit(event) {
        // change code below this line
        event.preventDefault();
        this.setState({
            submit: this.state.input,
        });
        // change code above this line
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* change code below this line */}
                    <input value={this.state.input} onChange={this.handleChange} />
                    {/* change code above this line */}
                    <button type="submit">Submit!</button>
                </form>
                {/* change code below this line */}
                <h1>{this.state.submit}</h1>
                {/* change code above this line */}
            </div>
        );
    }
}

// React: Pass State as Props to Child Components

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot',
        };
    }
    render() {
        return (
            <div>
                <Navbar name={this.state.name} />
            </div>
        );
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello, my name is: {this.props.name} </h1>
            </div>
        );
    }
}

//React: Pass a Callback as Props

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }
    render() {
        return (
            <div>
                {/* change code below this line */}
                <GetInput
                    input={this.state.inputValue}
                    handleChange={this.handleChange}
                />
                <RenderInput input={this.state.inputValue} />
                {/* change code above this line */}
            </div>
        );
    }
}

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input value={this.props.input} onChange={this.props.handleChange} />
            </div>
        );
    }
}

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
}

// React: Use the Lifecycle Method componentWillMount

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // change code below this line
        console.log('Hello');
        // change code above this line
    }
    render() {
        return <div />;
    }
}

// React: Add Event Listeners

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // change code below this line
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    // change code above this line
    handleEnter() {
        this.setState({
            message: this.state.message + 'You pressed the enter key! ',
        });
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

// React: Manage Updates with Lifecycle Methods

class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillUpdate() {
        console.log('Component is about to update...');
    }
    // change code below this line
    componentWillReceiveProps(nextProps) {
        console.log(this.props);
        console.log(nextProps);
    }
    componentDidUpdate() {
        console.log('Blah blah blah');
    }
    // change code above this line
    render() {
        return <h1>{this.props.message}</h1>;
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'First Message',
        };
        this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage() {
        this.setState({
            message: 'Second Message',
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.changeMessage}>Update</button>
                <Dialog message={this.state.message} />
            </div>
        );
    }
}

// React: Optimize Re-Renders with shouldComponentUpdate

class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        // change code below this line
        if (nextProps.value % 2 == 0) {
            return true;
        } else {
            return false;
        }
        // change code above this line
    }
    componentWillReceiveProps(nextProps) {
        console.log('Receiving new props...');
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1>{this.props.value}</h1>;
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState({
            value: this.state.value + 1,
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        );
    }
}

// React: Introducing Inline Styles

class Colorful extends React.Component {
    render() {
        return <div style={{color: 'red', fontSize: 72}}>Big Red</div>;
    }
}

// React: Use Advanced JavaScript in React Render Method

const inputStyle = {
    width: 235,
    margin: 5,
};

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            randomIndex: '',
        };
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: '',
            });
        }
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value,
        });
    }
    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful',
        ];
        const answer = possibleAnswers[this.state.randomIndex];
        return (
            <div>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                />
                <br />
                <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
                <br />
                <h3>Answer:</h3>
                <p>
                    {/* change code below this line */}
                    {answer}
                    {/* change code above this line */}
                </p>
            </div>
        );
    }
}

// React: Render with an If/Else Condition
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        };
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState({
            display: !this.state.display,
        });
    }
    render() {
        // change code below this line
        if (this.state.display) {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    <h1>Displayed!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                </div>
            );
        }
    }
}

// React: Use && for a More Concise Conditional
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        };
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState({
            display: !this.state.display,
        });
    }
    render() {
        // change code below this line
        return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                {this.state.display && <h1>Displayed!</h1>}
            </div>
        );
    }
}

// React: Use a Ternary Expression for Conditional Rendering

const inputStyle = {
    width: 235,
    margin: 5,
};

class CheckUserAge extends React.Component {
    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
            input: '',
            userAge: '',
        };
        // change code above this line
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value,
            userAge: '',
        });
    }
    submit() {
        this.setState({
            userAge: this.state.input,
        });
    }
    render() {
        const buttonOne = <button onClick={this.submit}>Submit</button>;
        const buttonTwo = <button>You May Enter</button>;
        const buttonThree = <button>You Shall Not Pass</button>;
        return (
            <div>
                <h3>Enter Your Age to Continue</h3>
                <input
                    style={inputStyle}
                    type="number"
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <br />
                {this.state.userAge === ''
                    ? buttonOne
                    : this.state.userAge < 18
                        ? buttonThree
                        : buttonTwo}
            </div>
        );
    }
}

// React: Render Conditionally from Props

class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const youWin = 'You Win!';
        const youLose = 'You Lose!';
        return (
            <h1>
                {this.props.fiftyFifty ? youWin : youLose
                    /* change code here */
                }
            </h1>
        );
    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        th
        super(props);
        this.state = {
            counter: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1, // change code here
        });
    }
    render() {
        let expression = Math.random() > 0.3; // change code here
        //let expression = 'hello'
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                {/* change code below this line */}
                <Results fiftyFifty={expression} />
                {/* change code above this line */}
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}

// React: Change Inline CSS Conditionally Based on Component State

class GateKeeper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({input: event.target.value});
    }
    render() {
        let inputStyle = {
            border: '1px solid black',
        };
        // change code below this line
        if (this.state.input.length > 15) {
            inputStyle.border = '3px solid red';
        }
        // change code above this line
        return (
            <div>
                <h3>Don't Type Too Much:</h3>
                <input
                    type="text"
                    style={inputStyle}
                    value={this.state.input}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

// React: Use Array.map() to Dynamically Render Elements

const textAreaStyles = {
    width: 235,
    margin: 5,
};

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
            userInput: '',
            toDoList: [],
        };
        // change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray,
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value,
        });
    }
    render() {
        const items = this.state.toDoList.map((x) => <li>{x}</li>);
        return (
            <div>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    style={textAreaStyles}
                    placeholder="Separate Items With Commas"
                />
                <br />
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>My "To Do" List:</h1>
                <ul>{items}</ul>
            </div>
        );
    }
}

// React: Give Sibling Elements a Unique Key Attribute

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue',
];

function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((x, index) => (
        <li key={index}> {x} </li>
    ));
    return (
        <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>{renderFrameworks}</ul>
        </div>
    );
}

// React: Use Array.filter() to Dynamically Filter an Array

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true,
                },
                {
                    username: 'Alan',
                    online: false,
                },
                {
                    username: 'Mary',
                    online: true,
                },
                {
                    username: 'Jim',
                    online: false,
                },
                {
                    username: 'Sara',
                    online: true,
                },
                {
                    username: 'Laura',
                    online: true,
                },
            ],
        };
    }
    render() {
        const usersOnline = this.state.users.filter((user) => user.online);
        const renderOnline = usersOnline.map((user, index) => (
            <li key={index}>{user.username}</li>
        ));
        //const renderOnline = usersOnline;
        return (
            <div>
                <h1>Current Online Users:</h1>
                <ul>{renderOnline}</ul>
            </div>
        );
    }
}

// React: Render React on the Server with renderToString

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div />;
    }
}

// change code below this line
ReactDOMServer.renderToString(<App />);
