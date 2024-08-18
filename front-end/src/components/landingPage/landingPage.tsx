import Name from "./name";
import PowerBtn from "./powerBtn";

type LandingProps = {
    clickFunc : () => void;
}

const LandingPage = ({clickFunc} : LandingProps) => {

    return (

        <div>
            <div className='flex items-baseline justify-center text-white w-screen'>
                <Name />
            </div>
            <div className='flex items-start justify-center text-white w-screen'>
                <PowerBtn clickFunc={clickFunc}/>
            </div>
        </div>

    )

}

export default LandingPage;