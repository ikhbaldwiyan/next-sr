import { baseUrl } from "../utils/api";
import Home from "../components/Home";
import MainLayout from "../components/MainLayout";

const Index = ({room}) => {
  return (
    <MainLayout>
      <Home room={room}/>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/rooms`)
  const data = await res.json()

  return { props: { room: data } }
}

export default Index;