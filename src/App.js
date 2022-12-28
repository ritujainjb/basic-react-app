import React from 'react'
import axios from 'axios';

export default function App() {

  const [state, setState] = React.useState([]);




  React.useEffect(() => {
    console.log("testing");
  }, [])

  return (
    <div>
      <div>Checklist</div>
      {
        state.map((data) => {
          return (<p>{data.key} {data.value}</p>)
        })
      }
    </div>
  )
}
