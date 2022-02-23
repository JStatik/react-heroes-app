import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormState } from 'react-hook-form';

const useHookForm = (defaultValues, focusField, schema) => {
    const { control, handleSubmit, reset, setFocus } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues
    });

    const { dirtyFields, errors } = useFormState({ control });

    useEffect(() => {
        setFocus(focusField);
    }, [setFocus, focusField]);

    return {
        control,
        dirtyFields,
        errors,
        handleSubmit,
        reset
    };
};

export default useHookForm;
