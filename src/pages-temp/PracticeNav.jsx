export default function App() {
  return (
    <div className="flex h-screen">
      <aside className="w-50 bg-blue-950 text-white flex flex-col gap-4 p-4">
        <h2 className="text-lg font-semibold">SideBar</h2>
        <nav className="flex flex-col gap-2">
          <a href="#" className="hover:bg-blue-800 px-3 py-2 ">Dashboard</a>
          <a href="#" className="hover:bg-blue-800 px-3 py-2 ">Users</a>
          <a href="#" className="hover:bg-blue-800 px-3 py-2 ">Settings</a>
          <a href="#" className="hover:bg-blue-800 px-3 py-2 ">Logout</a>
        </nav>
      </aside>
 
      <main className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </main>

    </div>
  );
}