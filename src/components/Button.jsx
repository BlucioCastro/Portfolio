
export default function Button({to, children, where}){
  if(to){
    return(
      <a href={to} target={where} className="px-3 py-2 bg-orange-600 rounded-sm font-medium text-amber-50 cursor-pointer">
        {children}
      </a>
    )
  }
  return(
    <button className="px-3 py-2 bg-orange-600 rounded-sm font-medium text-amber-50 cursor-pointer">
      {children}
    </button>
  )
}