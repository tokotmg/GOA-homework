#upper() მეთოდი აბრუნებს სტრიქონს, სადაც ყველა სიმბოლო დიდი ასოთია დაწერილი.
#lower() მეთოდი აბრუნებს სტრიქონს, სადაც ყველა სიმბოლო პატარა ასოთია დაწერილი.
#capitalize() მეთოდი აბრუნებს სტრიქონს, სადაც პირველი სიმბოლო დიდი ასოთია და დანარჩენი პატარა ასოებით.
#find() მეთოდი პოულობს მითითებული მნიშვნელობის პირველ შემთხვევას
print("GOA".lower())
print("examplename@hotmail.com".upper())
text = "little red riding hood"
title = text.title()
print(title)
word = "I have 100$ on my bank account"
x = word.count("0")
print(x)
sentence = "Hi everybody"
if sentence.isupper():
    print("სიტყვა უკვე დიდია!")
else:
    print(sentence)