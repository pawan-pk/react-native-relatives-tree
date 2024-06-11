import { FlatList, ScrollView, View } from 'react-native';
import React, { Component } from 'react';
import type {
  RelativeItem,
  RelativeItemProps,
  RelativesTreeProps,
} from './types';
import Svg, { Line } from 'react-native-svg';

import { styles } from './styles';

class RelativesTree<RelativesT extends RelativeItem> extends Component<
  RelativesTreeProps<RelativesT>
> {
  public static defaultProps = {
    style: styles.container,
    spouseKey: 'spouse',
    childKeyExtractor: (_: any, index: number) => index,
    pathColor: 'black',
    strokeWidth: 1,
    gap: 20,
  };

  renderNode = (props: RelativeItemProps<RelativesT>): React.ReactNode => {
    if (this.props.relativeItem) {
      return this.props.relativeItem(props);
    } else {
      return null;
    }
  };

  renderSpouse = (level: number, spouse: RelativesT) => {
    return this.renderNode({
      level,
      info: spouse,
      style: styles.marginLeftZero,
    });
  };

  renderTree(data: RelativesT[], level: number) {
    return (
      <FlatList
        data={data}
        nestedScrollEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.renderViewPadding}
        keyExtractor={this.props.levelKeyExtractor}
        initialScrollIndex={0}
        renderItem={({ item }) => {
          const spouse = item[this.props.spouseKey];
          const isChildren = item.children && item.children.length > 0;
          return (
            <View style={styles.lavelsView}>
              <View style={styles.nodesView}>
                {spouse && (
                  <View
                    style={{
                      width: this.props.cardWidth,
                      marginHorizontal: this.props.gap / 2,
                    }}
                  />
                )}
                {this.renderNode({
                  level,
                  info: item,
                  style: spouse
                    ? {
                        marginHorizontal: this.props.gap / 2,
                        ...styles.marginRightZero,
                      }
                    : { marginHorizontal: this.props.gap },
                })}
                {spouse && (
                  <Svg height="20" width={this.props.gap}>
                    <Line
                      x1="0"
                      y1="50%"
                      x2={this.props.gap}
                      y2="50%"
                      stroke={this.props.pathColor}
                      strokeWidth={this.props.strokeWidth}
                    />
                  </Svg>
                )}
                {spouse &&
                  typeof spouse === 'object' &&
                  this.renderSpouse(level, spouse as RelativesT)}
              </View>
              {isChildren && (
                <Svg height="50" width="20">
                  <Line
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="150"
                    stroke={this.props.pathColor}
                    strokeWidth={this.props.strokeWidth}
                  />
                </Svg>
              )}
              <View style={styles.childrensLines}>
                {item.children &&
                  item.children.map((child, index) => {
                    return (
                      <View
                        key={this.props.childKeyExtractor(child, index)}
                        style={styles.childrensLines}
                      >
                        <View>
                          <Svg height="50" width="100%">
                            <Line
                              x1="50%"
                              y1="0"
                              x2="50%"
                              y2="100%"
                              stroke={this.props.pathColor}
                              strokeWidth={this.props.strokeWidth}
                            />
                            {/* Right side horizontal line */}
                            {item.children &&
                              item.children.length !== 1 &&
                              item.children.length - 1 !== index && (
                                <Line
                                  x1="100%"
                                  y1={this.props.strokeWidth / 2}
                                  x2="50%"
                                  y2={this.props.strokeWidth / 2}
                                  stroke={this.props.pathColor}
                                  strokeWidth={this.props.strokeWidth}
                                />
                              )}
                            {/* Left side horizontal line */}
                            {item.children &&
                              item.children.length !== 1 &&
                              index !== 0 && (
                                <Line
                                  x1="50%"
                                  y1={this.props.strokeWidth / 2}
                                  x2="0"
                                  y2={this.props.strokeWidth / 2}
                                  stroke={this.props.pathColor}
                                  strokeWidth={this.props.strokeWidth}
                                />
                              )}
                          </Svg>
                          {this.renderTree([child], level + 1)}
                        </View>
                      </View>
                    );
                  })}
              </View>
            </View>
          );
        }}
      />
    );
  }
  render() {
    return (
      <View style={this.props.style}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderTree(this.props.data, 1)}
        </ScrollView>
      </View>
    );
  }
}

export default RelativesTree;
