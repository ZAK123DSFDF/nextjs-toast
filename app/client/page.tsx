"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Client() {
  const [data, setData] = useState<{ joke: string }>({ joke: "" });
  const fetchData = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>{data.joke}</div>
      <Link href="/server">go to server</Link>
      <button onClick={() => toast.success("My first toast")}>
        Give me a toast
      </button>
    </>
  );
}
