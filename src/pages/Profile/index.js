import { UserOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';
import { Avatar, Space } from 'antd';

export default function AllBlogsfromOneUsr() {
    const oldpasswordRef = useRef()
    const newpasswordRef = useRef()
    const updatepasswordRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault();
        const oldpassword = oldpasswordRef.current.value;
        const newpassword = newpasswordRef.current.value;
        const updatepassword = updatepasswordRef.current.value;


    }

    return(<div>
        <div  className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm formBorder">
        <div style={{textAlign:'center', marginTop:50}}><Avatar size={64} icon={<UserOutlined />} /></div>   
        <h1>User Name</h1>
        <form onSubmit={submitHandler}>
        <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    ref={oldpasswordRef}
                    placeholder="Old password"
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
                    ref={newpasswordRef}
                    placeholder="New password"
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
                    ref={updatepasswordRef}
                    placeholder="update password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div style={{textAlign:"center"}}>
                <button
                  type="submit"
                  className="btnUpdate w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update password
                </button>
              </div>
        </form>
        </div>
    </div>)
}