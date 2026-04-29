//textContent-სა და innerText-ს შორის მთავარი განსხვავება ისაა, თუ როგორ ამუშავებენ ისინი CSS სტილს და ხილვადობას. მიუხედავად იმისა, რომ textContent აბრუნებს მთელ ტექსტს ზუსტად ისე, როგორც ის ჩანს საწყის კოდში, innerText აბრუნებს მხოლოდ იმას, რასაც ადამიანი ხედავს რენდერირებულ გვერდზე.
const divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].textContent = "Updated Content " + (i + 1);
}