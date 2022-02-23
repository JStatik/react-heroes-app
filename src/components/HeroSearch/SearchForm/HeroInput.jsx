import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

const HeroInput = ({ control, error, success, validating }) => {
    return (
        <Form.Item
            hasFeedback
            name="heroSearch"
            label="Super Hero"
            validateStatus={
                (error)         ?   'error'         :
                (validating)    ?   'validating'    :
                (success)       &&  'success'
            }
        >
            <Controller
                name="heroSearch"
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        placeholder="Super Hero"
                    />
                )}
            />
        </Form.Item>
    );
};

HeroInput.propTypes = {
    control: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
    validating: PropTypes.bool.isRequired
};

export default HeroInput;
