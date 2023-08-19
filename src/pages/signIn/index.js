import { useRef, useState } from "react";
import Dashboard from "../dashboard"; 
//  const dashboardHandler = () => {
//     return (
//         <div>
//             <Dashboard></Dashboard>
//         </div>
//     )
// }
export default function SingIn({setLog1}) {
    const [check, setCheck] = useState(false);
   let userName = "";
    const nameRef = useRef();
    const passwordRef = useRef();
  
    const checkHandler = (event) => {
      event.preventDefault();
      const name = nameRef.current.value;
      const password = passwordRef.current.value;
      console.log(name,password)
  
      fetch('/api/signin')
      .then(res => res.json())
      .then(json => {
     const users =   json.userId;
      let val = false;
      for(let a = 0; a < users.length; a++) {
        if( users[a].name === name && users[a].password === password){
            userName = name;
        val = true;
        break;
      }
    }
    if(val){
      setCheck(true);
      setLog1(userName)

      }
    else{
      setCheck(false);
      }
  
      })
    }

    return (
      <>
        <div className="sign-header">Login</div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm formBorder">
            <form className="space-y-6" onSubmit={checkHandler}>
            <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    ref={nameRef}
                    placeholder="Name"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
               
        
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    ref={passwordRef}
                    placeholder="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
    
           
                {check ? <p style={{color: "#10781a", fontWeight: 500}}>Login Successfully</p> : <p style={{color: "#f00"}}>Please enter a valid email and password</p>}
              <div style={{textAlign:"center"}}>
                <button
                  type="submit"
                  className="btn w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }