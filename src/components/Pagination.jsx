import { ArrowLongDownIcon, ArrowLongUpIcon, Bars3Icon } from "@heroicons/react/16/solid";

export default function Pagination(){
  return(
    <div className="fixed left-7 top-[7%] md:left-13 z-1">
      <Bars3Icon className="w-8 h-6 md:w-8 md:h-8 text-amber-50 cursor-pointer mix-blend-difference" />
    </div>
  )
}