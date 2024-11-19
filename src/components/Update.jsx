import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { updateUser } from '../redux/UserReducer'
const Update = () => {
  const {id} = useParams()
  const users = useSelector((state)=>state.users)
  const existingUser = users.find((user)=> user.id==id)
  const [uname,setName] = useState(existingUser ? existingUser.name: '')
  const [uemail,setEmail]= useState(existingUser?existingUser.email: '')



  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleUpdate = (e)=>{
    e.preventDefault()
    dispatch(updateUser({
      id:id,
      name:uname,
      email:uemail
    }))
    navigate('/')

  }
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Update existing user
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleUpdate} action="#" method="POST" className="space-y-6">
          <div>
              <div className="flex items-center justify-between">
                <label  className="block text-sm/6 font-medium text-gray-900">
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={uname}
                  onChange={(e)=>setName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={uemail}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            

            <div>
              <button
              onClick={handleUpdate}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </>
  )
}

export default Update