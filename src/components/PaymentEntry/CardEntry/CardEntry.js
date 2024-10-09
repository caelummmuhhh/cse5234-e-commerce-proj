import { React } from 'react';

import TextInput from '../../Forms/TextInput';

const PaymentInfo = ({ card, setCard }) => {
    return (
        <div>
            <h2>Card Information</h2>

            <div className='bg rounded p1'>
                <TextInput required={true} label='Card Number' fieldName='number' state={card} setState={setCard} />
                <TextInput required={true} label='Expiration Date' fieldName='expiration' state={card} setState={setCard} />
                <TextInput required={true} label='CVV' fieldName='cvv' state={card} setState={setCard} />
            </div>

        </div>
    );
};

export default PaymentInfo;