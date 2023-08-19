import { useRef, useState } from "react";
export default function SingUp({setLog}) {
    const firstnameRef =  useRef();
    const lastnameRef =  useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef =  useRef();
    const [check, setCheck] = useState(true);
    const [check1, setCheck1] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
      const firstname = firstnameRef.current.value;
      const lastname = lastnameRef.current.value;
      const name = firstname+ lastname;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const repeatPassword = repeatPasswordRef.current.value;
    //   let blogs = [];
      console.log(name,email,password)
      const newProduct = JSON.stringify({name,email, password, repeatPassword });
      // POST method
      fetch("/api/signup/", {
        method: "POST",
        body: newProduct,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((json) => console.log(json));

      // Get Data
      fetch('/api/signup')
      .then(res => res.json())
      .then(json => {
      const users =   json.userId;
      let val = false;
      for(let a = 0; a < users.length; a++) {
        if( users[a].email === email && users.length >= 0){
        val = true;
        break;
      }
      }
      if(val){
      setCheck(false);
      setCheck1(true);
      }
      else{
      setCheck(false);
      }
      
      })
      
      }




    return (
      <>

    
        <div className="sign-header">Singup</div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm formBorder">
            <form className="space-y-6" onSubmit={submitHandler}>
           
                <div className="mt-2">
                  <input
                    id="first name"
                    name="first name"
                    type="text"
                    ref={firstnameRef}
                    placeholder="First Name"
                    autoComplete="first Name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="Last Name"
                    name="Last Name"
                    ref={lastnameRef}
                    type="text"
                    placeholder="Last Name"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    ref={emailRef}
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
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
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    ref={repeatPasswordRef}
                    placeholder="Repeat password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
           
                {check  ?  <p>Complete the above blanks</p> : check1 ? <p style={{color: "#f00"}}>This Account already exist</p> : <p style={{color: "#10781a", fontWeight: 500}}>Account created successfully</p>}
              <div style={{textAlign:"center"}}>
                <button
                  type="submit"
                  className="btn w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }