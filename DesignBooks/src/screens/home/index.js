import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Alert,
    ActivityIndicator
} from 'react-native';

import {
    Api
} from '../../config'

import {
    Header,
    Book
} from '../../components'

import {
    Container
} from './styles';

const Home = () => {

    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('Design Books')
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(false)

    const getBooks = async (quantity = index) => {
        if (!loading && search.length > 3) {
            setIndex(quantity)
            setLoading(true)
            await Api.get(`/volumes?q=${search}&startIndex=${quantity}&maxResults=18`)
                .then(response => response.data)
                .then(response => {
                    const { items } = response;
                    const moreBooks = [...books, ...items];
                    setBooks(moreBooks)
                    setLoading(false)
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response)
                        const { detail } = error.response.data
                        if (detail) {
                            Alert.alert('Atenção', detail);
                        } else {
                            Alert.alert('Atenção', 'Não foi possível trazer os livros');
                        }
                    } else {
                        Alert.alert('Atenção', 'Não foi possível trazer os livros, tente novamente mais tarde.');
                    }
                    setLoading(false)
                })
        }
    }

    useEffect(() => {
        getBooks();
    }, [search]);

    const haveImage = (item) => {
        if (!item || !item.volumeInfo || !item.volumeInfo.imageLinks || !item.volumeInfo.imageLinks.thumbnail) {
            return false
        }
        return true
    }

    const searchBooks = (value) => {
        setSearch(value)
    }

    const emptyBooks = () => {
        setBooks([])
        setIndex(0)
        setSearch('')
    }

    return (
        <Container>
            <Header
                search={search}
                searchBooks={searchBooks}
                getBooks={getBooks}
                emptyBooks={emptyBooks} />
            <FlatList
                ListFooterComponent={() => books.length > 10 && loading ? <ActivityIndicator /> : null}
                numColumns={3}
                contentContainerStyle={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                data={books}
                extraData={[]}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Book photo={
                    haveImage(item) ? item.volumeInfo.imageLinks.thumbnail : null
                } />}
                onEndReached={() => getBooks(index + 10)}
                onEndReachedThreshold={0.2}
                onRefresh={() => getBooks()}
                refreshing={loading}
            />
        </Container>
    );
}

export default Home;