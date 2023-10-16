import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    // Hook modified to reset input values
    const reset = () => {
        setValues(initialState);
    };
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setValues({
            ...value,
            [name]: value,
        });
    }

    const onResetForm = () => {
        setValues(initialState);
    }
    return {
        ...values,
        handleInputChange,
        onInputChange,
        reset,
        onResetForm
    };
};
