import PowerBtn from "./powerBtn";

type LandingProps = {
    clickFunc : () => void;
}

const LandingPage = ({clickFunc} : LandingProps) => {

    //sm:bottom-28 ::: flex items-baseline justify-center text-white w-screen relative bottom-10 sm:bottom-36

    return (

        <div>
            <div className="relative bg-yellow-700 rounded-full w-screen h-4/5 blur-3xl sm:bottom-10 ">_</div>
            <div className='flex flex-row justify-center items-center text-white relative sm:bottom-24
                text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-light font-mono z-10'>
                JACOB JOHNSTONE    
            </div>
            <div className='flex m-auto text-white w-fit absolute top-24 sm:top-1 relative '>
                <PowerBtn clickFunc={clickFunc}/>
            </div>
        </div>

    )

}

export default LandingPage;