import { Image, StyleSheet, Text, View } from 'react-native';

import React, { type FC } from 'react';
import type { RelativeItemProps } from 'react-native-relatives-tree';
import type { RelativeDataType } from './relatives';

export const RelativeItem: FC<RelativeItemProps<RelativeDataType>> = (
  props
) => {
  const { level, info, style } = props;
  return (
    <View style={[styles.nodeStyle, style]}>
      <Image style={styles.imageStyle} source={{ uri: info.profile }} />
      <Text style={styles.nodeTitleStyle}>
        {info.name}({level})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nodeStyle: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },
  nodeTitleStyle: {
    fontSize: 14,
    textAlign: 'center',
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
});
