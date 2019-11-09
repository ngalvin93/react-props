const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => {
    ReactDOM.render(<App circles={getState()}/>, document.getElementById('circlesContainer'))
});

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const addButton = document.getElementById('addCircle');
addButton.addEventListener('click', (_e) => {
    dispatch({
        type: 'ADD_CIRCLE',
        radius: Math.floor(Math.random() * 10 + 1) * 10,
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    })
})

const removeButton = document.getElementById('removeCircle')
removeButton.addEventListener('click', (_e) => {
    dispatch({
        type: 'REMOVE_CIRCLE'
    })
})
