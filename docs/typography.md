# Overview
Typography is an important part of a design system that brings consistency across experiences and platforms. Good typography rules help present content clearly and efficiently.

## Introduction
We use Roboto as the main font for both Android as iOS. It can be downoaded via Google fonts [here.](https://fonts.google.com/specimen/Roboto)
Material Design defines a **type scale** that maintains consistency across different screen sizes and platforms.



## Principles
- **Clarity:** Text should be legible and accessible across all devices.
- **Consistency:** A unified type system ensures harmonious UI.
- **Adaptability:** Type scales adjust to different screen sizes.
- **Expressiveness:** Typography should align with a brand’s personality.



## Type Scale
Use the interactive type scale generator below to create typography settings for **Flutter** or **React Native**, while ensuring compatibility with **Material 3 tokens**.

=== "Flutter"
```dart
const TextStyle h1 = TextStyle(
  fontFamily: 'Roboto',
  fontWeight: FontWeight.w300,
  fontSize: 96,
  letterSpacing: -1.5,
);

const TextStyle h2 = TextStyle(
  fontFamily: 'Roboto',
  fontWeight: FontWeight.w300,
  fontSize: 60,
  letterSpacing: -0.5,
);

const TextStyle h3 = TextStyle(
  fontFamily: 'Roboto',
  fontWeight: FontWeight.w400,
  fontSize: 48,
  letterSpacing: 0,
);
```

=== "React Native"
```js
const typography = {
  h1: { fontFamily: "Roboto", fontSize: 96, fontWeight: "300", letterSpacing: -1.5 },
  h2: { fontFamily: "Roboto", fontSize: 60, fontWeight: "300", letterSpacing: -0.5 },
  h3: { fontFamily: "Roboto", fontSize: 48, fontWeight: "400", letterSpacing: 0 },
};
```

## Letter Spacing Units (Android & iOS)
### **Android (dp & sp)**
- Uses **sp (scale-independent pixels)** for text size.
- Uses **dp (density-independent pixels)** for spacing.

### **iOS (points & ems)**
- Uses **points** for font sizes.
- Uses **ems** for letter spacing.


## Applying the Type Scale
Our text is classified into various categories based on function and hierarchy:

### **Headlines**
- Large, bold text for primary content.
- Example:

    ```css
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    ```

### **Subtitles**
- Used for secondary information or section titles.
- Example:

    ```css
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    ```

### **Body**
- Standard content text used across UI.
- Example:

    ```css
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    ```

### **Caption & Overline**
- Used for small supporting text.
- Example:

    ```css
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-transform: uppercase;
    ```



## Dev tools
Here are some tools to simplify typography management:
- **[Material Theme Builder](https://m3.material.io/theme-builder/typography)** - Interactive typography customization.
- **[Google Fonts](https://fonts.google.com/)** - Access and integrate Material Design fonts.
- **[React Native Paper](https://callstack.github.io/react-native-paper/typography.html)** - Typography tokens for React Native.
- **[Flutter Material Typography](https://api.flutter.dev/flutter/material/Typography-class.html)** - Documentation for Flutter typography.

