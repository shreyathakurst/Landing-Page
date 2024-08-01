import React from 'react'

function Feature({reverse}) {
  return (
    <div>
      <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'}  gap-36 px-20`}>
      <div className=' w-[2500px]'>
        <img className='w-[100%]' src="https://media.istockphoto.com/id/1288965449/vector/graphic-designer-creating-logo-design-vector-flat-isometric-illustration.jpg?s=612x612&w=0&k=20&c=G-Nhw42gJpuf72LBeh7dXHZddr7UV7bTt72ZEsqevzY=" alt="" />
      </div>
      <div className=' flex flex-col justify-center items-start gap-7'>
        <h1 className='text-5xl text-blue-500 font-bold'>Heading</h1>
        <span className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquid quaerat distinctio. Repudiandae, sed cupiditate ullam nemo maxime magnam ad voluptas facere et officia. Sapiente iste maiores doloribus in suscipit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusantium quo nulla exercitationem ex reiciendis, placeat esse obcaecati dolor doloribus officia animi rerum sed explicabo perspiciatis, maxime quasi! Eaque, in!</span></div>
    </div>
    </div>
  )
}

export default Feature