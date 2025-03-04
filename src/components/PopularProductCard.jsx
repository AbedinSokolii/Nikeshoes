import { star } from '../assets/icons';

function PopularProductCard({imgURL, name ,price}) {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]'/>
        <div className='mp-8 flex justify-start gap-2.5'> 
            <img src={star} alt="raiting" width={24} height={24} />
            <p className='font-montserrat text-xl leading-normal
             text-slate-gray'>(4.5)
                </p></div>
                <h3 className='mt-2 text-2x1 leading-normal font-semibold
                font-palanquin'>{name} <p className='mt-2 font-semibold font-montserrat 
                text-coral-red text-2xl leading-normal'>{price}</p></h3>
    </div>
    
  )
}

export default PopularProductCard