
export default async function Page ({params}) {
  const { coin } = params;
  const coin = await fetchCoin(coin);
  return (
    <div> This page will give details about </div>
  );
}
