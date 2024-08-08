import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex bento items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      Mas que Solo un Evento
    </div>
  );
};

export default Generating;
