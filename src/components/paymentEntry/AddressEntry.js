import { React } from 'react';

import TextInput from './TextInput';

const AddressEntry = ({ address, setAddress }) => {
    return (
        <div>
            <h2>Billing Address</h2>

            <div className='bg rounded p1'>
                <TextInput required={true} label='Address 1' fieldName='address1' state={address} setState={setAddress} />
                <TextInput required={false} label='Address 2' fieldName='address2' state={address} setState={setAddress} />
                <div>
                    <TextInput required={true} label='City' fieldName='city' state={address} setState={setAddress} />
                    <TextInput required={true} label='State' fieldName='state' state={address} setState={setAddress} />
                    <TextInput required={true} label='Zip' fieldName='zip' state={address} setState={setAddress} />
                </div>
            </div>
        </div>
    );
};

export default AddressEntry;