# react-native-relatives-tree

Create family trees and calculate relationships, generate nodes, and render the family tree.

[Check out the Example app](https://github.com/pawan-pk/react-native-relatives-tree/tree/main/example)

## I forked this project to continue working on it.

This project is a fork of https://github.com/Johncy1997/react-native-family-tree the original repository is not maintained anymore.

## Installation

### With expo

> ✅ The [Expo client app](https://expo.io/tools) comes with the native code installed!

Install the JavaScript with:

```bash
npx expo install react-native-relatives-tree
npx expo install react-native-svg
```

📚 See the [**Expo docs**](https://docs.expo.io/versions/latest/sdk/svg/) for more info or jump ahead to [Usage](#usage).

### with react-native-cli

1. Install library

   from npm

   ```bash
   npm install react-native-relatives-tree
   npm install react-native-svg
   ```

   from yarn

   ```bash
   yarn add react-native-relatives-tree
   yarn add react-native-svg
   ```

2. Link native code

   ```bash
   cd ios && pod install
   ```

## Usage

### Items type

```ts
import { type RelativeItem } from 'react-native-relatives-tree';

type Items = RelativeItem & {
  name: string;
  spouse?: Items;
  dob: string;
  dod?: string;
};
```

### RelativesTree

```tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import RelativesTree from 'react-native-relatives-tree';

// To create family tree
const relatives: Items[] = [
  {
    name: 'John',
    spouse: {
      name: 'Anne',
      spouse: undefined,
      dob: '04/05/2007',
      dod: undefined,
    },
    dob: '01/05/2004',
    dod: undefined,
    children: [
      {
        name: 'Dan',
        spouse: {
          name: 'Ella',
          spouse: undefined,
          dob: '04/05/2007',
          dod: undefined,
        },
        dob: '01/05/2004',
        dod: undefined,
        children: [
          {
            name: 'Olivia',
            spouse: undefined,
            dob: '01/05/2004',
            dod: undefined,
          },
          {
            name: 'Mary',
            spouse: undefined,
            dob: '01/05/2004',
            dod: undefined,
          },
        ],
      },
      {
        name: 'Jack',
        spouse: {
          name: 'Rachel',
          spouse: undefined,
          dob: '04/05/2007',
          dod: undefined,
        },
        dob: '01/05/2004',
        dod: '03/03/2017',
      },
    ],
  },
];

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <RelativesTree
        data={relatives}
        spouseKey="spouse"
        cardWidth={60}
        gap={10}
        relativeItem={RelativeItem}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
```

### RelativeItem

```tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RelativeItemComponent } from 'react-native-relatives-tree';

const RelativeItem: RelativeItemComponent<Items> = ({ level, info, style }) => (
  <View style={[styles.item, style]}>
    <Text>{info.name}</Text>
    <Text>({level})</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    height: 60,
    width: 60, // Equal value of cardWidth
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
```

## Props

| Prop                | Type                    | Default     | Note                                                                                                                   |
| ------------------- | ----------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| `data`              | `array`                 |             | Required array of data that will be represent in relatives tree 'must be array of objects' extends type RelativeItem   |
| `spouseKey`         | `string`                | `spouse`    | The spouseKey is use to show spouse of relative                                                                        |
| `style`             | `ViewStyle`             | `{flex: 1}` | Provide style of the container                                                                                         |
| `cardWidth`         | `number`                |             | Required it is the width of node **Note** This creates gaps betweens nodes and draw lines.                             |
| `relativeItem`      | `RelativeItemComponent` |             | function returns React component for the relative card                                                                 |
| `levelKeyExtractor` | `function`              |             | This is use to provide key of each level for memorization, 'function' type `(_: any, index: number) => index`          |
| `childKeyExtractor` | `function`              | `index`     | This is use to provide key of each child node view for memorization 'function' type `(_: any, index: number) => index` |
| `pathColor`         | `ColorValue`            | `black`     | The color of path or linker line `string` or `hex`                                                                     |
| `strokeWidth`       | `number`                | `1`         | The width of stroke line default value is 1                                                                            |
| `gap`               | `number`                | `20`        | The gap between each node default value is 20                                                                          |

### RelativeItemComponent Props

```js
export type RelativeItemComponent<RelativesT> = (
  props: RelativeItemProps<RelativesT>
) => React.ReactNode | null;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
