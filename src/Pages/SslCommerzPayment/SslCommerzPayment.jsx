import { useParams } from "react-router-dom";

 

const SslCommerzPayment = () => {
    const {tran_id}=useParams()
    return (
        <div>
            <h1 className="text-5xl text-center">payment success-----------</h1>
            <p className="mt-3 text-xl text-center text-red-500">tran_id = {tran_id}</p>
        </div>
    );
};

export default SslCommerzPayment;