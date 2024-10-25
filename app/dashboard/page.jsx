import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Dashboard is working fine just for cchehing purposes</h1>
      <Link href={"/admin"}>Admin Panel</Link>
    </main>
  );
}
