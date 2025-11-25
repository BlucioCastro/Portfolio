import { ArrowLongDownIcon, ArrowLongUpIcon, Bars3Icon } from "@heroicons/react/16/solid";

export default function Pagination(){
  return(
    <div className="absolute left-10 top-[7%] md:left-16 md:top-[41%]">
      <ArrowLongUpIcon className="hidden md:block md:w-8 md:h-16 text-amber-50 cursor-pointer" />
      <Bars3Icon className="w-8 h-6 md:w-8 md:h-8 text-amber-50 cursor-pointer" />
      <ArrowLongDownIcon className="hidden md:block md:w-8 md:h-16 text-amber-50 cursor-pointer" />
    </div>
  )
}