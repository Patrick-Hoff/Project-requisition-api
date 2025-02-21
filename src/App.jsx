import './App.css'

import Route from "./routes"

function App() {
  return (
    <div className="app">
      <Route />
    </div>
  )
}

export default App





// import { useState } from 'react'

// import './App.css'

// function App() {

//   const [name, setName] = useState('');
//   const [userName, setUserName] = useState('');

//   const [email, setEmail] = useState('');
//   const [useEmail, setUseEmail] = useState('');


//   function send(event) {

//     event.preventDefault()
    
//     setUserName(name)
//     setUseEmail(email) 
//   }


//   return (
//     <div className='app'>
//       <form onSubmit={send}>
//         <label htmlFor="Name">Name</label>
//         <input
//           type="text"
//           placeholder='Name'
//           name='Name'
//           onChange={(e) => setName(e.target.value)}
//         />

//         <label htmlFor="Email">E-mail</label>
//         <input
//           type="email"
//           placeholder='E-mail'
//           name='Email'
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input type='submit' placeholder='Enviar' className='toSend' />
//       </form>

//       {useEmail && userName &&  (
//         <div>
//           <p><span>Name:</span>{userName}</p>
//           <p><span>E-mail:</span>{useEmail}</p>
//         </div>
//       )}


//     </div>
//   )
// }

// export default App