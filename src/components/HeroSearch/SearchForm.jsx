import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import { Form } from 'antd';
import useHookForm from '../../hooks/useHookForm';
import HeroInput from './SearchForm/HeroInput';
import SubmitButton from './SearchForm/SubmitButton';
import { ChildrenCol } from '../../styles/HeroSearch';

const defaultValues = { heroSearch: '' };

const schema = yup.object().shape({
    heroSearch: yup.string()
        .required('Super héroe inválido')
        .min(2, 'Super héroe inválido')
        .matches(/^[a-zA-Z]+(\s+[a-zA-Z]+)*$/, {
            message: 'Super héroe inválido',
            excludeEmptyString: true
        })
});

const SearchForm = React.memo(({ loading }) => {
    const [, setSearchParams] = useSearchParams();

    const {
        control,
        dirtyFields,
        errors,
        handleSubmit,
        reset
    } = useHookForm(defaultValues, 'heroSearch', schema);
    
    const onSubmit = ({ heroSearch }) => {
        reset();
        setSearchParams({ hero: heroSearch });
    };

    return (
        <ChildrenCol>
            <Form
                layout="vertical"
                autoComplete="off"
                onFinish={handleSubmit(onSubmit)}
                className="animate__animated animate__fadeIn animate__faster"
            >
                <HeroInput
                    control={control}
                    validating={loading}
                    error={errors.heroSearch?.message || ''}
                    success={(!errors.heroSearch && dirtyFields.heroSearch) || false}
                />

                <SubmitButton disabled={loading} />
            </Form>
        </ChildrenCol>
    );
});

SearchForm.displayName = 'SearchForm';

SearchForm.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default SearchForm;
