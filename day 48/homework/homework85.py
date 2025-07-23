import math
def basic_op(operator, value1, value2):
    if operator=='+':
        return value1+value2
    if operator=='-':
        return value1-value2
    if operator=='/':
        return value1/value2
    if operator=='*':
        return value1*value2
    def check_for_factor(base, factor):
     if factor == 0:
      return False 
     return base % factor == 0
def find_average(numbers):
    if not numbers:
     return 0
    total_sum = sum(numbers)
    count = len(numbers)
    average = total_sum / count
    return average
a = "code"
b = "wa.rs"
name = a + b
def quarter_of(month):
   if not 1 <= month <= 12:
    raise ValueError("Month number must be between 1 and 12.")
   return math.ceil(month / 3)
def say_hello(name):
    return f"Hello, {name}"