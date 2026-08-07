import { RotatingLines } from "react-loader-spinner";

function Loader() {
    return (
        <div className="loader">
            <RotatingLines
                strokeColor="#2563eb"
                strokeWidth="5"
                animationDuration="0.75"
                width="60"
                visible={true}
            />
        </div>
    );
}

export default Loader;