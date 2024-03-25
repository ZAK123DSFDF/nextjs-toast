import Link from "next/link";

async function fetchData() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      next: { revalidate: 5 },
      headers: { accept: "application/json" },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
export default async function Server() {
  const data = await fetchData();
  return (
    <>
      <div>{data.joke}</div>
      <Link href="/client">go to client</Link>
    </>
  );
}
