"use client;"

import React from 'react'

const Footer = () => {
  return (
    <footer className='h-40 bg-blue-600 '>
      <div className='flex p-5 justify-between rounded'>
        <div className='text-center'>
            <h1>Welcom to work manager</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati numquam corporis ea quidem facilis adipisci in, inventore cupiditate qui, repellat nesciunt, animi placeat aspernatur unde voluptatibus rem rerum perspiciatis voluptate!</p>
        </div>
        <div className="text-center flex flex-col justify-center">
            <h1 className='flex'>Importent Link</h1>
            <ul>
                <li><a href="#!">Facebook</a></li>
                <li><a href="#!">Youtube</a></li>
                <li><a href="#!">Instagram</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
