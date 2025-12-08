
export default function Button({to, children}){
  if(to){
    return(
      <a href={to} target="_self" className="px-3 py-2 bg-orange-600 rounded-[.25rem] scroll-smooth font-medium text-amber-50 cursor-pointer">
        {children}
      </a>
    )
  }
  return(
    <button className="px-3 py-2 bg-orange-600 rounded-[.25rem] font-medium scroll-smooth text-amber-50 cursor-pointer">
      {children}
    </button>
  )
}