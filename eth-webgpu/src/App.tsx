import { useEffect } from 'react'
import './App.css'
import { gpu } from './gpu'

function App() {

  useEffect(() => {
    ; (async () => {
      const gp = await gpu("aa", "bbb", (e: any) => {
        console.log(e);
      }, (e: any) => {
        console.log("STAT", e);
      })
      await gp.init();
      console.log("READY");
      gp.run()

    })()
  }, [])

  return (
    <>

    </>
  )
}

export default App
