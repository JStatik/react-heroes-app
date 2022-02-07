import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Controller } from 'react-hook-form';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import useHookForm from '../../hooks/useHookForm';
import getHeroesByName from '../../selectors/getHeroesByName';
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

const SearchForm = ({ loading, setHeroesByName }) => {
    const navigate = useNavigate();

    const {
        control,
        dirtyFields,
        errors,
        isSubmitting,
        handleSubmit,
        reset
    } = useHookForm(defaultValues, 'heroSearch', schema);
    
    const onSubmit = ({ heroSearch }) => {
        reset();
        navigate(`?hero=${ heroSearch }`);

        setHeroesByName(heroesByName => ({
            ...heroesByName,
            loading: true
        }));

        setTimeout(() => {
            const heroes = getHeroesByName(heroSearch);

            setHeroesByName({
                ...heroes,
                loading: false
            });
        }, 2000);
    };

    return (
        <ChildrenCol>
            <Form
                layout="vertical"
                autoComplete="off"
                onFinish={handleSubmit(onSubmit)}
                className="animate__animated animate__fadeIn animate__faster"
            >
                <Form.Item
                    hasFeedback
                    name="heroSearch"
                    label="Super Hero"
                    validateStatus={
                        (errors.heroSearch)                             ?   'error'         :
                        (isSubmitting)                                  ?   'validating'    :
                        (!errors.heroSearch && dirtyFields.heroSearch)  &&  'success'
                    }
                >
                    <Controller
                        name="heroSearch"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                prefix={<UserOutlined />}
                                placeholder="Super Hero"
                            />
                        )}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        icon={!loading && <SearchOutlined />}
                    >
                        {(!loading) ? 'Search' : 'Searching'}
                    </Button>
                </Form.Item>
            </Form>
        </ChildrenCol>
    );
};

SearchForm.propTypes = {
    loading: PropTypes.bool.isRequired,
    setHeroesByName: PropTypes.func.isRequired
};

export default SearchForm;
