#insert() მეთოდი ჩასვამს მითითებულ მნიშვნელობას მითითებულ პოზიციაზე.
#pop() მეთოდი შლის ელემენტს მითითებულ პოზიციაზე.
fruit = ["Apple", "Banana", "Orange", "Lemon", "Kiwi"]
print(len(fruit))
list = [1, 2, 3]
list.append(4)
print(list)
colors = ["red", "green", "blue", "yellow", "purple"]
colors.pop(4)
print(colors)
animals = ["dog", "cat", "elephant", "lion"]
animals.insert(2, "monkey")
print(animals)
students = []
n = int(input("Enter the number of students: "))
# Append elements to the list
for i in range(n):
    element = input(f"Students {i+1}: ")
    students.append(element)
students.insert(0, "Teacher")
students.pop(3)
print("List:", len(students))
