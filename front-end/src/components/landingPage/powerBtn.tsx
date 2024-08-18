type ButtonProps = {
    clickFunc : () => void;
}

const PowerBtn = ({ clickFunc } : ButtonProps) => {
    return (
        <>
            <button className="m-4 text-center p-3 font-bold px-2" onClick={clickFunc}>Power</button>
        </>
    );
}

export default PowerBtn;