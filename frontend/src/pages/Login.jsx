

const Login = () => {
  return (
    <div className=' min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'> 
        <div className='flex justify-center mb-4'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png" alt="Pinterest" className='h-12'/>
        </div>
        <h2 className='text-2xl font-semibold text-center mb-6'>
        Log in to see more
        </h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 '>
              Email
            </label>
            <input type='email' id="email" className='common-input' ></input>
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 '>
              Password
            </label>
            <input type='password' id="password" className='common-input' ></input>
          </div>
          <h1>Forgot your password?</h1>
          <button type='submit' className='common-btn'>
            Log in
          </button>
          <p>Already a member?Log in</p>
        </form>
      </div>
    </div>
  )
}

export default Login