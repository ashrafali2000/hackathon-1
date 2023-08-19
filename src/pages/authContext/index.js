import { useEffect, useState } from "react"
import SingIn from "../signIn";
import Dashboard from "../dashboard";
export default function MyCheck(){
    const [tocheck, setTocheck] = useState(true);
    return(<div>
  {tocheck ? <SingIn setTocheck={setTocheck}></SingIn> : <Dashboard></Dashboard>}
    </div>)
}