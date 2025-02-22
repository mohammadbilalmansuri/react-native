import React from 'react';
import {View, StyleProp, ViewStyle, useColorScheme} from 'react-native';
import Text from './Text';

interface CardProps {
  text?: string;
  styles?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({
  text = 'Text',
  styles,
}): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isDarkMode ? '#ffffff10' : '#00000010',
          borderRadius: 8,
          aspectRatio: 1,
        },
        styles,
      ]}>
      <Text>{text}</Text>
    </View>
  );
};

export default Card;
