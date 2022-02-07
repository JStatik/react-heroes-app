import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = React.lazy(() => import('../components/ErrorBoundary/ErrorComponent'));

class ErrorBoundary extends React.Component {
    constructor (props) {
        super(props);
        this.state = { hasError: false };
    };

    static getDerivedStateFromError () {
        return { hasError: true };
    };

    render () {
        const { hasError } = this.state;
        const { children } = this.props;

        if(hasError)
            return <ErrorComponent />;
        
        return children;
    };
};

ErrorBoundary.propTypes = {
    children: PropTypes.object.isRequired
};

export default ErrorBoundary;
