import { React } from 'react';

const TextInput = ({ required, label, fieldName, state, setState }) => {
    return (
        <div className='flex-column gap-1 my-1'>
            <label>
                {label}
            </label>
            <input
                type='text'
                required={required}
                onChange={(e) => {
                    state[fieldName] = e.target.value;
                    setState(state);
                }}
                className='height-1-5 rounded text-base p-25'
                defaultValue={state[fieldName]}
            >
            </input>
        </div>
    );
};

export default TextInput;