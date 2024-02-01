import ServerSideList from "@/components/list.server";
import ClientSideList from "@/components/list";

export default function Home() {
  return (
    <div className="w-full flex min-h-screen justify-center items-start p-16 gap-8">
      <ServerSideList />
      <ClientSideList />
    </div>
  );
}
