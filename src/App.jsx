import Chat from "./componets/chat/Chat";
import Detail from "./componets/details/Detail";
import List from "./componets/list/List";
const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
      
    </div>
  )
}

export default App