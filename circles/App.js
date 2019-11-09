// Render the circles using React!
// this recieneves the state
const App = (props) => {
    let { circles } = props;
    console.log('This is the props that is passed in the App: ', props)
    let renderAllCircles = circles.map(Circle)
    return (
        <span>
            <div>{renderAllCircles}</div>
        </span>
    )
}

//const Circle = null;  // CHALLENGE: Write a separate Circle component for use in the App component

const Circle = (props) => {
    // Create the style object to pass into the return
    const circleStyle = {
        margin: 'auto',
        width: `${props.radius * 2}px`,
        height: `${props.radius * 2}px`,
        borderRadius: `${props.radius}px`,
        background: `${props.color}`
    }
    return <div style={circleStyle}></div>
}