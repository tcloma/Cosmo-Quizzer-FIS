const UI = () => {

  const handleClick = () => {
    console.log('Hi')
  }

  return(
    <div id="ui">
      <h1 onClick={handleClick}> <span className="material-symbols-outlined" style={{fontSize:'50px'}}>
        menu
      </span></h1>
    </div>
  )
}
export default UI;