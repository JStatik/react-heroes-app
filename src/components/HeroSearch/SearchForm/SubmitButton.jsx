import React from 'react';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';

const SubmitButton = React.memo(({ disabled }) => {
    return (
        <Form.Item>
            <Button
                block
                type="primary"
                htmlType="submit"
                loading={disabled}
                icon={!disabled && <SearchOutlined />}
            >
                {(!disabled) ? 'Search' : 'Searching'}
            </Button>
        </Form.Item>
    );
});

SubmitButton.displayName = 'SubmitButton';

SubmitButton.propTypes = {
    disabled: PropTypes.bool.isRequired
};

export default SubmitButton;
