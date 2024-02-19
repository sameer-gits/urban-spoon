import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" w-full h-screen flex flex-col gap-2 justify-center items-center">
      <p>Short Url is Invalid!</p>
      <Link href={"/"} className="font-bold">
        Go to Home
      </Link>
    </div>
  );
}
