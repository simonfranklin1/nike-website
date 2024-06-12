import React from 'react'
import { shoe8 } from '../assets/images'
import { Button, Text } from '../../testComponents'

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span> <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          <Text text={"Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance."} />
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button onClick={() => console.log("View details")} children={"View details"} background={"rgb(255 100 82)"} borderRadius={"9999px"} textColor={"#fff"} padding={"1rem 1.75rem"} />
          <Button onClick={() => console.log("Learn more")} children={"Learn more"} background="#fff" border={"1px solid rgb(109 109 109)"} borderRadius={"9999px"} textColor="rgb(109 109 109)" padding={"1rem 1.75rem"} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>

    </section>
  )
}

export default SuperQuality