import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Where's Rahul?</title>
        <meta name="description" content="Moto Vlogs, Travel, Food, Lifestyle" />
      </Head>
      <main>
        <h1>Welcome to Where's Rahul?</h1>
        <p>Explore Moto Vlogs, Travel Diaries, Food Trips & More</p>
        <ul>
          <li><a href="https://youtu.be/VtonaDDruP8?si=h2agHJR8SUFVAoRt">Trip to Mysore</a></li>
          <li><a href="https://youtu.be/uuX4aC9Czl8?si=Cz2nVBDiN3Rzx7R-">Sunset Rides</a></li>
          <li><a href="https://youtu.be/XNtJwhbFUj0?si=4y2NK9341gSDGAgF">Monsoon Trails</a></li>
          <li><a href="https://youtu.be/A3jBRZxDllE?si=Td1WNhGFug4-KzI_">Temple Route</a></li>
        </ul>
      </main>
    </>
  )
}
