// Render the rectangle using React!
const App = (props) => {
  const { rectangle } = props
  const style = {
    width: rectangle.width + 'px',
    height: rectangle.height + 'px',
    backgroundColor: rectangle.color
  }
  return (
    <div style={style} />
  )
}
