import Link from "next/link";

export default function Login() {
  return (
    <>
     <p>Login Page</p>
     <Link href="/auth/register" className="text-blue-500 hover:underline">Register</Link>
     <Link href="/" className="text-blue-500 hover:underline">Dashboard</Link>
    </>
  )
};