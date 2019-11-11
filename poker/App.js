// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    const card1 = cards[0]
    const card2 = cards[1]
    return (
        <span>
            <img src={`./cards/${card1.value + card1.suit}.png`}></img>
            <img src={`./cards/${card2.value + card2.suit}.png`}></img>
        </span>
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = null;  