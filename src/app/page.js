import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome To Home Page</h1>
      <Link href='/users'><button>Go To User Data Page</button></Link>
    </div>
  );
}

export default Home;