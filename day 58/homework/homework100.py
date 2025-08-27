#split() მეთოდი სტრიქონს სიად ყოფს.
#join მეთოდი იღებს იტერაბელურ ფაილში არსებულ ყველა ელემენტს და აერთიანებს მათ ერთ სტრიქონად.
sentence = input("Please enter a sentence: ")
for item in sentence.split(" "):
    print(item)
my_list = ["hello", "my", "world"]
separator = "-"
result_sentence = separator.join(my_list)
print(result_sentence)
