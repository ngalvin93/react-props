// Render the cards using React!
const App = (props) => {
  const { cards } = props
  // console.log('App comp: ',cards)
  return (
    cards.map((card, index) => {
      return <Card key={index} card={card} />
    }
    ))
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
// const Card = null;
const Card = (props) => {
  // this should render single card
  const { card } = props
  // console.log('Props in Card comp: ', card)
  const src = './cards/' + card.value + card.suit + '.png'
  return (
    <span><img src={src} style={{ width: 50 }} /></span>
  )
}
