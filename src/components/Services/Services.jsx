import { useLoaderData } from "react-router-dom";
import './Services.css';
const Services = () => {
    const service = useLoaderData();
    
    return (
        <div className='grid my-container grid-cols-4 gap-2 my-2'>
            {
                service.map( singleService => <div key={singleService.id} className='cartAnimate border p-4'>
                <div className="p-4 flex justify-center">
                    <img src={singleService.img} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className="font-medium text-2xl">{singleService.title}</h2>
                    <p className="text-sky-600">{singleService.sub}</p>
                    <p className="pt-6 text-gray-600">{singleService.info}</p>
                </div>
            </div>)
            }
        </div>
    );
};

export default Services;