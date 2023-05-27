import { baseUrl } from "../utils/api";
import Home from "../components/Home";
import MainLayout from "../components/MainLayout";

const Index = ({ roomList, roomLives, roomTrainee }) => {
  return (
    <MainLayout>
      <Home
        roomList={roomList}
        roomLives={roomLives}
        roomTrainee={roomTrainee}
      />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const rooms = await fetch(`${baseUrl}/rooms`);
  const roomList = await rooms.json() ?? [];

  const trainee = await fetch(`${baseUrl}/rooms/trainee`);
  const roomTrainee = await trainee.json();

  const onLives = await fetch(`${baseUrl}/rooms/onlives`);
  const roomLives = await onLives.json();

  return {
    props: {
      roomList,
      roomLives,
      roomTrainee,
    },
  };
}

export default Index;
