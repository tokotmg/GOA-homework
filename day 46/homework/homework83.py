def add_numbers(num1, num2):
  sum_result = num1 + num2
  return sum_result
number_a = 5
number_b = 7
result = add_numbers(number_a, number_b)
print(f"The sum of {number_a} and {number_b} is: {result}")
def square_number(number):
  return number ** 2
result = square_number(5)
print(result)
def find_largest_number_max(numbers):
  return max(numbers)
my_list = [10, 5, 8, 12, 3]
largest = find_largest_number_max(my_list)
print(f"The largest number is: {largest}") 
def calculate_mean(num1, num2, num3):
  return (num1 + num2 + num3) / 3
number_a = 10
number_b = 20
number_c = 30
mean_result = calculate_mean(number_a, number_b, number_c)
print(f"The arithmetic mean of {number_a}, {number_b}, and {number_c} is: {mean_result}")
def reverse_list(input_list):
  return input_list[::-1]
my_list = [1, 2, 3, 4, 5]
reversed_my_list = reverse_list(my_list)
print(reversed_my_list)
def isPalindrome(string):
  if (string == string[::-1]):
    return print("The string is a palindrome.")
  else:
    return print("The string is not a palindrome.")
print(isPalindrome("ABBA"))