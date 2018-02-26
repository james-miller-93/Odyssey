import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Top = ({children}) => (
    <View style={styles.topContainer}>
        {children}
    </View>
);

Top.propTypes = {
    items: PropTypes.any
}


export default Top;