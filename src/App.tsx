import React, { useState } from 'react';
import ListaRegalos from './components/ListaRegalos';
import { IRegalo } from './interfaces/Regalo';

function App() {

  const [regalos, setRegalos] = useState<IRegalo[]>([{id: "1", nombre: "Medias"}, {id: "2", nombre: "Caramelos"}, {id: "3", nombre: "Vitel Tone"}])

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Regalos</h1>
      <ListaRegalos regalos={regalos}/>
    </div>
  );
}

export default App;
