'use client'
import { useSearchParams,usePathname } from "next/navigation"
import CatagoryBox from "../CatagoryBox"
import Container from "../Container"
import {categories} from '@/app/ultils/Constant'

const Catagories = () => {
  const params=useSearchParams()
  const category=params?.get('category')
  const pathname=usePathname()

  const isMainPage=pathname==='/';
  if(!isMainPage){
    return null;
  }
  return (
    <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((el)=>(
                <CatagoryBox key={el.label} label={el.label} desc={el.description} icon={el.icon} selected={category===el.label} />
            ))}
        </div>
    </Container>
  )
}

export default Catagories