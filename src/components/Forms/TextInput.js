import { React } from 'react';
import './textinput.css';

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
                className='textinputbox rounded-3 text-base p-1 border'
                defaultValue={state[fieldName]}
            >
            </input>
        </div>
    );
};

export default TextInput;