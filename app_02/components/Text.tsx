import React from 'react';
import {
  Text as RNText,
  useColorScheme,
  TextProps,
  StyleProp,
  TextStyle,
} from 'react-native';

interface CustomTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<CustomTextProps> = ({
  style,
  children,
  ...props
}): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <RNText style={[{color: textColor}, style]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
