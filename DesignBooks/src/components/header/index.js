import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
    Icon
} from '../'

import {
    Container,
    Row,
    Base,
    Input
} from './styles';

const Header = ({
    leftIcon,
    search,
    rightIcon,
    searchBooks = () => { },
    getBooks = () => { },
    emptyBooks = () => { }
}) => {

    const navigation = useNavigation();

    const handleDrawer = () => {
        navigation.openDrawer();
    }

    const SearchButton = () => {
        if (search.length > 0) {
            return <Icon name="close" onPress={() => emptyBooks()} />
        }
        return <Icon name="search" onPress={() => getBooks()} />
    }

    return (
        <Container>
            <Base>
                {
                    leftIcon ? leftIcon : <Icon name="bars" onPress={handleDrawer} />
                }
                <Input
                    placeholder="Gênero dos livros"
                    onChangeText={text => searchBooks(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                />
                {
                    rightIcon ? rightIcon : <SearchButton />
                }
            </Base>
            <Row />
        </Container>
    );
}

export default Header;