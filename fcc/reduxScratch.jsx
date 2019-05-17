// Redux: Create a Redux Store

const reducer = (state = 5) => {
    return state;
};

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = Redux.createStore(reducer);

// Redux: Get State from the Redux Store

const store = Redux.createStore((state = 5) => state);

// change code below this line

const currentState = store.getState();

// Redux: Handle an Action in the Store

const defaultState = {
    login: false,
};

const reducer = (state = defaultState, action) => {
    // change code below this line
    if (action.type == 'LOGIN') {
        return Object.assign({}, state, {
            login: true,
        });
    } else {
        return state;
    }
    // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN',
    };
};

// Redux: Use a Switch Statement to Handle Multiple Actions

const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {
    // change code below this line
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {authenticated: true});
        case 'LOGOUT':
            return Object.assign({}, state, {authenticated: false});
        default:
            return state;
    }
    // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: 'LOGIN'
    }
};

const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
};

// Redux: Combine Multiple Reducers

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const authReducer = (state = {authenticated: false}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT:
            return {
                authenticated: false
            }
        default:
            return state;
    }
};

const rootReducer = Redux.combineReducers({
    count: counterReducer,
    auth: authReducer
}); // define the root reducer here

const store = Redux.createStore(rootReducer);

// Redux: Use Middleware to Handle Asynchronous Actions

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => {return {type: REQUESTING_DATA}}
const receivedData = (data) => {return {type: RECEIVED_DATA, users: data.users}}

const handleAsync = () => {
    return function (dispatch) {
        // dispatch request action here
        dispatch(requestingData());

        setTimeout(function () {
            let data = {
                users: ['Jeff', 'William', 'Alice']
            }
            // dispatch received data action here
            dispatch(receivedData(data));

        }, 2500);
    }
};

const defaultState = {
    fetching: false,
    users: []
};

const asyncDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: []
            }
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users
            }
        default:
            return state;
    }
};

const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
);

// Redux: Write a Counter with Redux

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

const incAction = () => {
    return {
        actca: cre
        type: INCREMENT
    };
}

const decAction = () => {
    return {
        type: DECREMENT
    };
}

const store = Redux.createStore(counterReducer);

// Redux: Use the Spread Operator on Arrays

const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            // don't mutate state here or the tests will fail
            return [...state, action.todo];
        default:
            return state;
    }
};

const addToDo = (todo) => {
    return {
        type: 'ADD_TO_DO',
        todo
    }
}

const store = Redux.createStore(immutableReducer);

// Redux: Copy an Object with Object.assign

const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ONLINE':
            // don't mutate state here or the tests will fail
            let newObj = {
                status: 'online'
            }
            return Object.assign({}, state, newObj);
        default:
            return state;
    }
};

const wakeUp = () => {
    return {
        type: 'ONLINE'
    }
};

const store = Redux.createStore(immutableReducer);