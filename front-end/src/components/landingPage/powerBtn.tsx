import power from "../../images/Power-Btn.png";

type ButtonProps = {
    clickFunc : () => void;
}

const PowerBtn = ({ clickFunc } : ButtonProps) => {
    return (
        <div className="">
            <img src={power} alt="Click-Here" onClick={clickFunc} className="flex items-center justify-center cursor-pointer bg-btn-colour p-2 rounded-full h-9 w-9 sm:h-12 sm:w-12"/>
        </div>
    );
}

export default PowerBtn;