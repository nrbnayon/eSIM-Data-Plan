import successPay from '../../assets/images/successPay.svg'

const SuccessPayment = () => {
    return (
        <div className='h-[80vh] flex flex-col justify-center items-center'>
            <img src={successPay} alt="" />
            <h1 className='text-4xl text-center'>Your payment has been <br /> successfully done</h1>
        </div>
    );
};

export default SuccessPayment;