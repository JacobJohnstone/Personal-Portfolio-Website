import power from "../../images/Power-Btn.png";

type ButtonProps = {
    clickFunc : () => void;
}

const PowerBtn = ({ clickFunc } : ButtonProps) => {
    return (
        <>
            <img src={power} alt="Click-Here" width="50" height="50" onClick={clickFunc} className="flex items-center justify-center cursor-pointer bg-white p-2 rounded-full"/>
        </>
    );
}

export default PowerBtn;