import { React } from 'react';

import TextInput from '../../Forms/TextInput';

import './addressentry.css';

const AddressEntry = ({ address, setAddress, title }) => {
    const header = title ? `${title} Address` : 'Address';
    return (
        <div className='w-100'>
            <h3>{header}</h3>

            <div className='rounded-3'>
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