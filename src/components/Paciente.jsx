const Paciente = () => {
  return (
    <div className=" mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className=" font-bold mb-3 text-gray-700 uppercase">
          Nombre: {' '}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">
          Propietario: {' '}
          <span className="font-normal normal-case">Juan</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">
          Email: {' '}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">
          Fecah de Alta: {' '}
          <span className="font-normal normal-case">Fecha de Alta</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {' '}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quis sapiente voluptatibus vel maxime esse quae nulla labore est, ducimus temporibus sit ad in cumque minus nesciunt aut, rerum autem</span>
        </p>
      </div>
  )
}

export default Paciente
