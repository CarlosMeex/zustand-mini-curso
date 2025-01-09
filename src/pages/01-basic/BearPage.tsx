import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores/bear/bears.store';

export const BearPage = () => {

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">


        <BlackBears />


        <PolarBears />


        <PandaBears />

        <Pandas/>

      </div>

    </>
  );
};


const BlackBears = () => {
  const blackBears = useBearStore(state => state.blackBears);
  const increaseBears = useBearStore(state => state.increaseBears);
  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button onClick={() => increaseBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  )
}

const PolarBears = () => {

  const polarBears = useBearStore(state => state.polarBears);
  const increasePolarBears = useBearStore(state => state.increasePolarBears);

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePolarBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBears}</span>
        <button onClick={() => increasePolarBears(-1)}>-1</button>

      </div>

    </WhiteCard>
  )
}

const PandaBears = () => {

  const pandaBears = useBearStore(state => state.pandaBears);
  const increasePandaBears = useBearStore(state => state.increasePandaBears);
  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
      <button onClick={() => increasePandaBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button onClick={() => increasePandaBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  )
}


const Pandas = () => {

  const pandas = useBearStore( useShallow(state => state.pandas) );
  const pandasChanged = useBearStore(state => state.pandasChanged);
  const agregarPanda = useBearStore(state => state.addBear);
  const limpiarPanda = useBearStore(state => state.CleanBear);
  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <button 
        onClick={agregarPanda}
      >
        Aumentar
      </button>

      <button 
        onClick={limpiarPanda}
      >
        Limpiar pandas
      </button>
      
      {
        JSON.stringify(pandas, null, 2)
      }

    </WhiteCard>
  )
}
