import { useState } from 'react'
import './App.css'
import FormInput from './components/forminput'

function App() {
  const [values, setValues] = useState({
    username: "",
    email:"",
    birthday:"",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name : "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "UserName should be 3-10 characters and shouldn't include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name : "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "it should be a valid email id",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name : "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday"
    },
    {
      id: 4,
      name : "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and it should include at least 1 letter, 1 special character and 1 number",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name : "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ]
  
  // console.log(userName);

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  }

  console.log(values);
  return (
     <div className='app'>
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => {
              return <FormInput key={input.id} {...input} value={values[input.name]}
               onChange={onChange}
              />
            })}
          
            <button>Submit</button>
          </form>
     </div>
  )
}

export default App
