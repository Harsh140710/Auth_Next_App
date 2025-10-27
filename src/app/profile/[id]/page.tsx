export default async function UserProfile({ params }: any) {
  const { id } = await params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl">Profile</h1>
      <div className="flex items-center">
        <p className="text-xl font-semibold">Profile page</p>
        <span className="text-3xl bg-orange-500 p-2 rounded-xl text-black font-bold ml-2">{id}</span>
      </div>
    </div>
  );
}
