import { useSelector } from "react-redux"

export default function Username() {
  const username = useSelector((state) => state.user.username);

  if(!username) return null;

  return (
    <span className="text-slate-50 font-extrabold text-xs uppercase">
      {username}
    </span>
  )
}
