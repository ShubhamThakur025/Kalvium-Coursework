import svg from '../assets/logo.svg'
function Card() {
  return (
    <div className='Card flex shadow-lg w-96 m-auto h-32 my-8 items-center justify-center p-3.5'>
      <img src={svg} alt="Logo-kalvium" className='w-36' />
      <div className='m-4'>
        <h1 className='text-2xl font-semibold'>Kalvium Store</h1>
        <h6 className= 'text-base text-slate-600'>You have a new course!</h6>
      </div>
    </div>
  )
}

export default Card
