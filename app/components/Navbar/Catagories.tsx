'use client'
import CatagoryBox from "../CatagoryBox"
import Container from "../Container"
import {categories} from '@/app/ultils/Constant'

const Catagories = () => {
  return (
    <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((el)=>(
                <CatagoryBox key={el.label} label={el.label} desc={el.description} icon={el.icon} />
            ))}
        </div>
    </Container>
  )
}

export default Catagories