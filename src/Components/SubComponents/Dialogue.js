import conversations from '../../conversations'

const Dialogue = ({ planetId }) => {

  const currentConvo = conversations[planetId-1]
  // console.log(currentConvo)

  const classArray = []
  currentConvo.classes.map((classe) => {
    return (
      classArray.push(classe)
    )
  })

  return (
    <>
      {currentConvo.messages.map((convo, index) => {
        return (
          <p key={index} className={classArray[index]}>{convo}</p>
        )
      })}
    </>
  )
}
export default Dialogue;