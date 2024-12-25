import React from 'react'

function PublicLayout(WrappedComponent) {
    return (props) => {
        return <WrappedComponent {...props} />;
    };
}

export default PublicLayout