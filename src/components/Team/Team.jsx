import { FaGooglePlusG, FaVimeoV, FaDropbox} from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import './Team.css'
import { Link } from "react-router-dom";

const Team = () => {
    const [team, SetTeam] = useState([]);
    useEffect(() => {
        fetch('/Team.json')
            .then(res => res.json())
            .then(data => SetTeam(data))
    }, []);

    return (
        <div className='my-container py-10 grid grid-cols-4 gap-5'>
            {
                team.map(item =>
                    <div key={item.id} className='TeamCard'>
                        <div className='relative'>
                            <div>
                                <img className='overflow-hidden rounded-t-md' src={item.image} alt="" />
                            </div>
                            <div className='card-social'>
                                <span className="bg-white hover:bg-orange-500 hover:text-white p-1 rounded-full text-2xl"><Link><FaGooglePlusG></FaGooglePlusG></Link></span>
                                <span className="bg-white hover:bg-orange-500 hover:text-white p-1 rounded-full text-2xl"><Link><FaVimeoV></FaVimeoV></Link></span>
                                <span className="bg-white hover:bg-orange-500 hover:text-white p-1 rounded-full text-2xl"><Link><FaDropbox></FaDropbox></Link></span>
                            </div>
                        </div>
                        <div className='text-center border'>
                            <h2 className='p-2 font-semibold text-xl'>{item.title}</h2>
                            <p>{item.position}</p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Team;