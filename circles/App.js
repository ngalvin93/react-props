// Render the circles using React!
// App recieves the current state
const App = (props) => {
    // Destructure the object
    const { circles } = props;
    // console.log('This is the props that is passed in the App: ', props)
    // Map through all circles in the current state with the Circle() function
    const renderAllCircles = circles.map(Circle)
    return (
        <span>
            <div>{renderAllCircles}</div>
        </span>
    )
}

//const Circle = null;  // CHALLENGE: Write a separate Circle component for use in the App component

// This renders a single circle
const Circle = (props) => {
    // Create the style object for each circle
    const circleStyle = {
        margin: 'auto',
        // Can access props different ways
        // width: `${props.radius * 2}px`,
        width: (props.radius * 2) + 'px',
        height: `${props.radius * 2}px`,
        borderRadius: `${props.radius}px`,
        background: props.color
    }
    return <div style={ circleStyle }></div>
}