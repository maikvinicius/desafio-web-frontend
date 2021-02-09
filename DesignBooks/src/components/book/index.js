import React from 'react';

import {
    Photo
} from './styles';

const Book = ({ photo = 'https://www.solucoesinnova.com.br/sem_foto.jpg' }) => {
    return <Photo source={{ uri: photo }} resizeMode="stretch" />;
}

export default Book;