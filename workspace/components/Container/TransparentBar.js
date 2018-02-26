import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const TransparentBar = ({children}) => (
    <View style={styles.transparentBar}>
        {children}
    </View>
);

TransparentBar.propTypes = {
    items: PropTypes.any
}


export default TransparentBar;