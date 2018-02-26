import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Bar = ({children}) => (
    <View style={styles.bar}>
        {children}
    </View>
);

Bar.propTypes = {
    items: PropTypes.any
}


export default Bar;