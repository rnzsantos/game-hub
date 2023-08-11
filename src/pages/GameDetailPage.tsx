import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const params = useParams();
  const { data } = useGame(params.slug!);

  console.log(data);

  return <div>GameDetail</div>;
};

export default GameDetailPage;
