const UI = () => {

  const handleClick = () => {
    console.log('Hi')
  }

  return(
    <div id="ui">
      <h1 onClick={handleClick}>
        X
      </h1>
    </div>
  )
}
export default UI;