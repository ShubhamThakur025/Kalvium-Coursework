import { useForm } from 'react-hook-form'
import { useState } from 'react'
import './App.css'



function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [submit, setSubmit] = useState(false)
  const handleData = (data) => {
    console.log(data)
    setSubmit(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleData)}>
        {submit ? <div className='regDone'>Registration Done!</div> : null}
        <input
          type="text"
          placeholder='Enter your First Name'
          id="fname"
          {...register("fname", { required: "First Name is required" })} />
        <div className='Error'>{errors.fname?.message}</div>

        <input
          type="text"
          placeholder='Enter your Last Name'
          id="lname"
          {...register("lname", { required: "Last Name is required" })} />
        <div className='Error'>{errors.lname?.message}</div>

        <input
          type="email"
          placeholder='Enter your Mail'
          id="mail"
          {...register("mail", { required: "Mail Name is required", pattern:{value:/^\S+@\S+$/i, message:"Invalid email"}})} />
        <div className='Error'>{errors.mail?.message}</div>


        <input
          type="password"
          id="pass"
          placeholder='Enter your Password'
          {...register("password", { required: "Password is required",
          minLength: {value: 4, message: "Password should be more than 4 characters"},
          maxLength: {value: 20, message: "Password can't be more than 20 characters"}
          })} />
        <div className='Error'>{errors.password?.message}</div>


        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default App
