numbers = [1, 4, 7, 10, 15]
for i in numbers:
    if i % 2 == 0:
        print("Number is even")
    else:
        print('Number is odd')

names = ["Gocha", "Demetre", "Natali", "Mariami", "Inga", "Elene", "Barbare", "Daviti", "Nukri", "Lana"]
for i in names[1::2]:
    print(i)

officer = "CEO"
for i in officer:
    print(i)

numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)

mylist1 = ["apple", "banana", "cherry"]
x = len(mylist1)
print(x)

mylist2 = "Hello"
x = len(mylist2)
print(x)

names = ["Nika", "Giorgi", "Guga", "Galina", "Zura"]
for i in range(1, len(names), 2):
    names[i] = "Tornike"
print(names)