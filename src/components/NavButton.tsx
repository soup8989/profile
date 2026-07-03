import { useNavigate } from 'react-router-dom'

interface NavButtonProps {
  to: string;
  text: string;
}

const NavButton = ({to, text}: NavButtonProps) => {
  const navigate = useNavigate();
  return(
    <>
      <button
        onClick={() => {
          navigate(to);
        }}
        className="w-1/6 h-16 bg-black/50 rounded-lg text-white cursor-pointer"
      >
        {text}
      </button>
    </>
  )
}

export { NavButton };