import Lottie from "react-lottie";
import * as animationData from "../assets/animations/loading.json";

const loading = ()=>{
    const defaultOption={
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings:{
            preserveAspectRatio: 'xMidYmid slice'
        }
    };
    return (
        <div style={{}}>
            <Lottie options = {defaultOptions}
                height={250}
                width={250}
                isStopped={false}
                isPaused={false}
            />
        </div>
    )
}