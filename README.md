# react-native-relatives-tree

Create relatives trees and creates , calculates families and notes for rending relatives tree.

[Check out the Example app](https://github.com/pawan-pk/react-native-relatives-tree/example)

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

```js
import RelativesTree from 'react-native-relatives-tree';

// To create family tree

<RelativesTree
  data={relatives}
  spouseKey="spouse"
  cardWidth={100}
  gap={10}
  relativeItem={({ level, info, style }) => (
    <View
      style={[
        {
          height: 100,
          width: 100, // Equal value of cardWidth
        },
        style,
      ]}
    >
      {info.name} ({level})
    </View>
  )}
/>;
```

Sample relatives data

```json
[
  {
    "name": "John",
    "spouse": {
      "name": "Anne",
      "spouse": null,
      "dob": "04/05/2007",
      "dod": null
    },
    "dob": "01/05/2004",
    "dod": null,
    "children": [
      {
        "name": "Dan",
        "spouse": {
          "name": "Ella",
          "spouse": null,
          "dob": "04/05/2007",
          "dod": null
        },
        "dob": "01/05/2004",
        "dod": null,
        "children": [
          {
            "name": "Olivia",
            "spouse": null,
            "dob": "01/05/2004",
            "dod": null
          },
          {
            "name": "Mary",
            "spouse": null,
            "dob": "01/05/2004",
            "dod": null
          }
        ]
      },
      {
        "name": "Jack",
        "spouse": {
          "name": "Rachel",
          "spouse": null,
          "dob": "04/05/2007",
          "dod": null
        },
        "dob": "01/05/2004",
        "dod": "03/03/2017"
      }
    ]
  }
]
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
