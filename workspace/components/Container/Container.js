import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Container = ({children}) => (
    <View style={styles.container}>
        {children}
    </View>
);

Container.propTypes = {
    items: PropTypes.any
}


export default Container;