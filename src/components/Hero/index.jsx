import Typed from 'react-typed'

const Hero = () => {
   return (
      <div className="text-white">
         <div className="flex max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex-col justify-center">
            <p className="text-[#00df9a] font-bold p-2">CRESCENDO COM ANÁLISE DE DADOS</p>
            <h1 className="sm:text-6xl text-4xl font-bold sm:py-6">Cresça com dados.</h1>
            <div className='flex justify-center items-center'>
               <p className="sm:text-4xl text-lg font-bold py-4">Financiamento rápido e flexível para</p>
               <Typed className='sm:text-4xl text-lg font-bold pl-2 text-slate-700'
               strings={['BTB', 'BTC', 'SASS']}
               typeSpeed={120}
               backSpeed={140}
               loop
               />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitore sua análise de dados para aumentar a receita das plataformas BTB, BTC e SASS</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#08ad79]'>Iniciar</button>
         </div>
      </div>
   )
}

export default Hero