import React from 'react'

import Navbar from './navbar'

export default function Login() {
  return (
    <>

<Navbar></Navbar>

 <div className="myform bg-dark">
    <h1 className="text-center">Login Form</h1>
    <form>
        <div className="mb-3 mt-4">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-light mt-3">LOGIN</button>
        <p>Not a member? <a href="/">Signup now</a></p>
    </form>
</div>
    </>
    )
}
