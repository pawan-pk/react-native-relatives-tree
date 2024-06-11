import type { ColorValue, StyleProp, ViewStyle } from 'react-native';

export type RelativeItemProps<RelativesT> = {
  level: number;
  info: RelativesT;
  style: StyleProp<ViewStyle>;
};

export type RelativeItemComponent<RelativesT> = (
  props: RelativeItemProps<RelativesT>
) => React.ReactNode | null;

export interface RelativeItem {
  children?: this[];
  // parent?: this[];
}

export type RelativesTreeProps<RelativesT extends RelativeItem> = {
  data: RelativesT[];
  spouseKey: keyof RelativesT;
  style: StyleProp<ViewStyle>;
  cardWidth: number;
  relativeItem?: RelativeItemComponent<RelativesT>;
  levelKeyExtractor?: (item: RelativesT, index: number) => string;
  childKeyExtractor: (item: RelativesT, index: number) => string;
  pathColor: ColorValue;
  strokeWidth: number;
  gap: number;
};
