# Overview
Icons are a fundamental element of visual communication in user interfaces, providing clear and recognizable representations of actions, concepts, and navigation. In this design system, we standardize the use of **Material Symbols by Google** to ensure consistency, accessibility, and efficiency across all platforms.

This document outlines the principles, usage guidelines, and implementation details for integrating icons effectively into the system.


## **Principles**
Our approach to iconography is guided by the following principles:

- **Clarity** – Icons should convey meaning at a glance, reducing cognitive load.
- **Consistency** – A unified visual language ensures seamless user experiences across products.
- **Scalability** – Icons should be adaptable across different screen sizes and resolutions.
- **Customizability** – Icons should support modifications such as weight, fill, and size adjustments without losing their visual integrity.
- **Accessibility** – Icons must be perceivable by all users, including those using assistive technologies.


## **Material Symbols**
We leverage **Material Symbols**, a highly flexible and comprehensive icon set designed by Google, which aligns with **Material Design 3** guidelines.  

### **Why Material Symbols?**
- **Extensive Library** – Covers a broad range of use cases.
- **Dynamic Customization** – Supports variations in weight, fill, grade, and optical size.
- **Performance-Optimized** – Designed for modern UI frameworks with minimal impact on load times.
- **Cross-Platform Compatibility** – Works seamlessly across web, mobile, and desktop environments.


## **Implementation in React Native**
For React Native projects, we use `react-native-vector-icons` with Material Symbols.

### **Installation**
If using **Expo**, Material Symbols are included by default. Otherwise, install them manually:

```sh
npm install react-native-vector-icons
react-native link react-native-vector-icons
```

For projects using **Expo**, install the dedicated package:

```sh
npm install @expo/vector-icons
```

### **Usage**
To integrate Material Symbols into a React Native application:

```jsx
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function IconExample() {
  return (
    <View>
      <MaterialIcons name="home" size={32} color="black" />
      <Text>Home</Text>
    </View>
  );
}
```

### **Customization Options**
Material Symbols allow fine-tuned control over appearance:

```jsx
<MaterialIcons name="favorite" size={40} color="red" />
<MaterialIcons name="settings" size={30} color="gray" />
```

!!! info

    For the full icon library, refer to the official **[Material Symbols Library](https://fonts.google.com/icons)**.


### **Styling and Customization**
Material Symbols support variable font properties, allowing developers to adjust icon appearance dynamically:

```css
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
```

| Property  | Description | Values |
|-----------|------------|--------|
| `FILL`    | Icon fill style | `0` (outline), `1` (filled) |
| `wght`    | Weight (thickness) | `100 - 700` |
| `GRAD`    | Grade (fine-tuning of weight) | `-25 - 200` |
| `opsz`    | Optical size | `20 - 48` |

These properties allow greater control over how icons adapt to different UI contexts.


## **Best Practices**
✔ **Use icons to enhance, not replace text** – Icons should complement labels rather than stand alone in ambiguous contexts.  
✔ **Ensure accessibility** – Always include proper **aria-labels** or alternative text for screen readers.  
✔ **Maintain a consistent visual hierarchy** – Icon sizes and styles should align with the typography and UI structure.  
✔ **Avoid unnecessary complexity** – Stick to the predefined icon set to reduce cognitive overload.  

