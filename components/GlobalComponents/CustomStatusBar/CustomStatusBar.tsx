import { FunctionComponent } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  ColorValue,
  StatusBarStyle,
  Platform,
} from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

interface CustomStatusBarProps {
  backgroundColor?: ColorValue;
  barStyle: StatusBarStyle;
}
const CustomStatusBar: FunctionComponent<CustomStatusBarProps> = ({
  backgroundColor,
  ...props
}) => (
  <View
    style={[
      Platform.OS == "ios" ? styles.statusBar : null,
      { backgroundColor },
    ]}
  >
    <SafeAreaView>
      <StatusBar backgroundColor={backgroundColor} barStyle={props.barStyle} />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default CustomStatusBar;
