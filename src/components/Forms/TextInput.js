import { React } from 'react';
import './textinput.css';

const TextInput = ({ required, label, fieldName, state, setState }) => {
    return (
        <div className='flex-column gap-1 border-box'>
            <label>
                {label}
            </label>
            <input
                type='text'
                required={required}
                onChange={(e) => {
                    const copy = { ...state };
                    copy[fieldName] = e.target.value;
                    setState(copy);
                }}
                className='textinputbox rounded-3 text-base p-1 border'
                defaultValue={state[fieldName]}
            >
            </input>
        </div>
    );
};

export default TextInput;