import React from 'react';

import {
    IconStyled
} from './styles';

const Icon = ({ name, size = 20, ...props }) => {
    return <IconStyled name={name} size={size} {...props} />;
}

export default Icon;