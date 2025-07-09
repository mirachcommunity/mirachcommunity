import Link from "next/link";

export default function Register() {
  return (
    <>
     <p>Register Page</p>
     <Link href="/auth/login" className="text-blue-500 hover:underline">Login</Link>
     <Link href="/" className="text-blue-500 hover:underline">Dashboard</Link>
    </>
  )
};