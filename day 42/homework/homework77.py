#ფუნქცია არის კოდის ბლოკი, რომელიც მხოლოდ მისი გამოძახებისას მუშაობს.
#შეგიძლიათ ფუნქციაში გადაიტანოთ მონაცემები, რომლებიც პარამეტრების სახელითაა ცნობილი.
#ფუნქციას შეუძლია მონაცემების დაბრუნება შედეგად.
def add_numbers(num1, num2):
  return num1 + num2

result = add_numbers(5, 7)
print(f"The sum is: {result}")

another_result = add_numbers(10.5, 3.2)
print(f"The sum is: {another_result}")

def even_or_odd(number):
    if number % 2 == 0:
        print("რიცხვი ლუწია")
    else:
        print("რიცხვი კენტია")

even_or_odd(1)

import math

def calculate_square_root(number):
  
  return math.sqrt(number)

result = calculate_square_root(1)
print(result)

def convert_to_uppercase(text):
   return text.title()
my_string = "hello world"
uppercase_string = convert_to_uppercase(my_string)
print(uppercase_string)

def display_full_name(first_name, last_name):
   print(f"{first_name} {last_name}")
display_full_name("Tornike", "Begheluri")