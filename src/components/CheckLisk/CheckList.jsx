import React from 'react';
import { FaFolder } from "react-icons/fa";
import { Link } from 'react-router-dom';
const CheckList = () => {
    return (
        <div className='my-container'>
            <h2 className='p-2 text-center bg-sky-600 text-white text-xl font-medium'>All Packages TO Run A Template From Scratch!</h2>
            {/* Create Vite with react app */}
            <div className='text-center border-b-2 border my-2'>
                <h2 className=' p-1 my-4 font-medium'><FaFolder className='text-green-500 inline'></FaFolder> Create Vite Project and Install React!</h2>
                <div className='space-y-2'>
                    <p>npm create vite@latest document -- --template react</p>
                    <p>npm install react-router-dom localforage match-sorter sort-by</p>
                </div>
            </div>
            <div className='text-center border-b-2 border my-2'>
                <h2 className=' p-1 my-4 font-medium'><FaFolder className='text-green-500 inline'></FaFolder> Framework Installation</h2>
                <div className='space-y-2'>
                    <span>1. Tailwind Css</span>
                    <p>npm install -D tailwindcss postcss autoprefixer</p>
                    <p>npx tailwindcss init -p</p>
                    <p>Add Files: <Link className='text-green-600' to="https://raw.githubusercontent.com/ashaansojib/template-one/main/tailwind.config.js">confiq</Link></p>
                    <span>2. If need Plagin: DaisyUI or Flowbite</span>
                    <p>plugins: [require("daisyui")],</p>
                    <p>plugins: [require('flowbite/plugin')]</p>
                    <span>3. React Bootstrap</span>
                    <p>npm i react-bootstrap bootstrap</p>
                    <p>import 'bootstrap/dist/css/bootstrap.min.css';</p>
                    <span>Note: then import any item as like components from react-bootstrap at last use a tag as a component like, </span>
                </div>
            </div>
            <div className='text-center border-b-2 border my-2'>
                <h2 className=' p-1 my-4 font-medium'><FaFolder className='text-green-500 inline'></FaFolder> Popular icons Installation</h2>
                <div className='space-y-2'>
                    <p>HeroIcons: npm install @heroicons/react</p>
                    <p>ReactIcons: npm install react-icons</p>
                </div>
            </div>
            <div className='text-center border-b-2 border my-2'>
                <h2 className=' p-1 my-4 font-medium'><FaFolder className='text-green-500 inline'></FaFolder> Lottie Animation & Marquee Installation</h2>
                <div className='space-y-2'>
                    <p>npm i lottie-react</p>
                    <span>Note : and then use json file to your public folders</span>
                    <p>npm install react-fast-marquee</p>
                    <span>Note : And then need to import Marquee from "react-fast-marquee";</span>
                </div>
            </div>
            <div className='text-center border-b-2 border my-2'>
                <h2 className=' p-1 my-4 font-medium'><FaFolder className='text-green-500 inline'></FaFolder> reChart Installation</h2>
                <div className='space-y-2'>
                    <p>npm install recharts then follow doc..</p>
                </div>
            </div>
        </div>
    );
};

export default CheckList;