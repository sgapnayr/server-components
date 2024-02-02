import ServerSideList from "@/components/list.server";
import ClientSideList from "@/components/list";

export default function Home() {
  return (
    <div className="w-full flex min-h-screen justify-start items-center p-16 gap-8 flex-col">
      <div className="flex gap-8">
        <ServerSideList />
        <ClientSideList />
      </div>
    </div>
  );
}
