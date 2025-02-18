document.addEventListener("DOMContentLoaded", function () {
    const primaryColorPicker = document.getElementById("primary-color");
    const secondaryColorPicker = document.getElementById("secondary-color");
    const button = document.getElementById("demo-button");
    const card = document.getElementById("demo-card");
    const slider = document.getElementById("demo-slider");

    function updateColors() {
        let primaryColor = primaryColorPicker.value;
        let secondaryColor = secondaryColorPicker.value;

        // Apply colors to UI components as per M3 guidelines
        button.style.backgroundColor = primaryColor;
        button.style.color = "#ffffff";

        card.style.backgroundColor = secondaryColor;
        card.style.color = "#000000";

        slider.style.accentColor = primaryColor;
    }

    primaryColorPicker.addEventListener("input", updateColors);
    secondaryColorPicker.addEventListener("input", updateColors);
});