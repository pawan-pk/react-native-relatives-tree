import 'react-native-svg';

import * as React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { RelativeItem } from './RelativeItem';
import RelativesTree from 'react-native-relatives-tree';
import { StatusBar } from 'expo-status-bar';
import relatives from './relatives';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor="white" />
      <View style={styles.headingView}>
        <Text style={styles.heading}>Relatives Tree</Text>
      </View>
      <RelativesTree
        data={relatives}
        spouseKey="spouse"
        style={styles.releativesView}
        cardWidth={100}
        gap={10}
        pathColor="blue"
        strokeWidth={2}
        relativeItem={RelativeItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingView: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  releativesView: {
    flex: 1,
  },
});
