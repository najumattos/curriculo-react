import BackButton from '../components/BackButton';
import HeaderCV from '../components/HeaderCV';
import EntreEmContato from '../components/EntreEmContato';
import Mural from '../components/Mural';
import './style.css';

export default function Sobre() {
  return (
    <div className="container">
      <div>
     <HeaderCV/>  
     <EntreEmContato/>
     <Mural/>      
</div>  
    <BackButton />
    </div>
  );
}
