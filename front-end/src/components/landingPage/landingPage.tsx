import Name from "./name";
import PowerBtn from "./powerBtn";

type LandingProps = {
    clickFunc : () => void;
}

const LandingPage = ({clickFunc} : LandingProps) => {

    return (

        <>
            <Name />
            <PowerBtn clickFunc={clickFunc} />
        </>

    )

}

export default LandingPage;