const getDDD = async (id: string) => {
  return await fetch(`http://localhost:3000/api/user/${id}`).then((res) =>
    res.json()
  );
};

export default async function Profile({ params }: { params: { id: string } }) {
  const res = await getDDD(params.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      내프로필
      {JSON.stringify(res)}
    </main>
  );
}
