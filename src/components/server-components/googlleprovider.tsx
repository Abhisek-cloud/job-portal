import { signIn } from '@/auth';
import { FaGoogle } from 'react-icons/fa';



function Googlleprovider() {
  async function handleGooglesubmit() {
    "use server"
    console.log("google provider clicek")
    await signIn('google')

  }
  return (
    <form action={handleGooglesubmit}>
      <button className=' border-2 rounded-md px-4 py-3 text-lg font-semibold flex items-center justify-center gap-2' type='submit'><FaGoogle className=' text-blue-600' />Signin with Google</button>
    </form>
  )
}

export default Googlleprovider