def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
num1 = 7
result1 = even_or_odd(num1)
print(f"{num1} is {result1}")

def input_names(num_names):
    names_list = []
    for i in range(num_names):
        name = input(f"Enter name {i + 1}: ") 
        names_list.append(name)
    return names_list
number_of_people = 5
entered_names = input_names(number_of_people)
print("Names entered:", entered_names)