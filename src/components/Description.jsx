import List from './List'
import Text from './Text'

const items = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const message = 'This is My Txt components to show my message'
const Description = () => {
  return (
    <div>
      <List data={items} title='People'/>
      <Text message={message}/>
    </div>
  )
}

export default Description
