import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>PAINEL DE ANÁLISE DE DADOS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Gerencie a análise de dados</h1>
          <p>
          Um painel de dados é uma ferramenta que muitas empresas usam para rastrear, analisar e exibir dados, geralmente para obter insights sobre a integridade geral de uma organização, departamento ou processo específico.
          </p>
          <button className='bg-black hover:bg-[#00df9a] text-[#00df9a] hover:text-[#000] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Iniciar</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
