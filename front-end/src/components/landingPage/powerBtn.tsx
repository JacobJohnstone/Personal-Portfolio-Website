type ButtonProps = {
    clickFunc : () => void;
}

const PowerBtn = ({ clickFunc } : ButtonProps) => {
    return (
        <>
            <button onClick={clickFunc}>Power</button>
        </>
    );
}

export default PowerBtn;