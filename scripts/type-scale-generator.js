document.addEventListener("DOMContentLoaded", function () {
    const baseSize = 14; // Base font size in pixels
    const scaleFactor = 1.125; // Modular scale factor
    const font = "Roboto";

    // Define type scale categories
    const typeScale = [
        { name: "H1", weight: "Light", case: "Sentence", letterSpacing: -1.5 },
        { name: "H2", weight: "Light", case: "Sentence", letterSpacing: -0.5 },
        { name: "H3", weight: "Regular", case: "Sentence", letterSpacing: 0 },
        { name: "H4", weight: "Regular", case: "Sentence", letterSpacing: 0.25 },
        { name: "H5", weight: "Regular", case: "Sentence", letterSpacing: 0 },
        { name: "H6", weight: "Medium", case: "Sentence", letterSpacing: 0.15 },
        { name: "Subtitle 1", weight: "Regular", case: "Sentence", letterSpacing: 0.15 },
        { name: "Subtitle 2", weight: "Medium", case: "Sentence", letterSpacing: 0.1 },
        { name: "Body 1", weight: "Regular", case: "Sentence", letterSpacing: 0.5 },
        { name: "Body 2", weight: "Regular", case: "Sentence", letterSpacing: 0.25 },
        { name: "Button", weight: "Medium", case: "All caps", letterSpacing: 1.25 },
        { name: "Caption", weight: "Regular", case: "Sentence", letterSpacing: 0.4 },
        { name: "Overline", weight: "Regular", case: "All caps", letterSpacing: 1.5 }
    ];

    let size = baseSize;
    let outputHTML = "<table><tr><th>Category</th><th>Size (px)</th><th>Weight</th><th>Letter Spacing</th><th>Case</th></tr>";
    
    typeScale.forEach((style, index) => {
        size = index === 0 ? size * 6 : size * scaleFactor; // Adjust size scaling
        outputHTML += `<tr>
            <td>${style.name}</td>
            <td>${Math.round(size)}</td>
            <td>${style.weight}</td>
            <td>${style.letterSpacing}</td>
            <td>${style.case}</td>
        </tr>`;
    });
    
    outputHTML += "</table>";
    document.getElementById("type-scale-table").innerHTML = outputHTML;

    // Generate Flutter & React Native Tokens
    document.getElementById("flutter-code").textContent = generateFlutterCode(typeScale);
    document.getElementById("react-code").textContent = generateReactCode(typeScale);
});

// Generate Flutter Code
function generateFlutterCode(typeScale) {
    return typeScale.map(style => `TextStyle(
        fontSize: ${style.size}px,
        fontWeight: FontWeight.${style.weight.toLowerCase()},
        letterSpacing: ${style.letterSpacing},
        textTransform: "${style.case.toLowerCase()}"
    )`).join(",\n");
}

// Generate React Native Code
function generateReactCode(typeScale) {
    return typeScale.map(style => `${style.name.toLowerCase()}: {
        fontSize: ${style.size},
        fontWeight: "${style.weight.toLowerCase()}",
        letterSpacing: ${style.letterSpacing},
        textTransform: "${style.case.toLowerCase()}"
    }`).join(",\n");
}
