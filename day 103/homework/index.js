// ფუნქციები არის მრავალჯერადი გამოყენების კოდის ბლოკები, რომლებიც შექმნილია კონკრეტული დავალების შესასრულებლად.
// ფუნქციები სრულდება მათი გამოძახების ან გამოძახების დროს.
// ფუნქციები ყველა პროგრამირების ფუნდამენტური ელემენტია.
// Arrow function to calculate and print the mean
const calculateMean = () => {
    let sum = 0;
    const totalNumbers = 5;
    for (let i = 0; i < totalNumbers; i++) {
        let num = parseFloat(prompt(`Enter number ${i + 1}:`));
        if (isNaN(num)) {
            alert("Invalid input. Please enter a valid number.");
            i--;
        } else {
            sum += num;
        }
    }
    const mean = sum / totalNumbers;
    console.log(`The numbers entered have an arithmetic mean of: ${mean}`);
    alert(`The arithmetic mean is: ${mean}`);
};
calculateMean();
