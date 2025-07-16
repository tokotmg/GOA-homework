def find_largest_max(num1, num2, num3):
  return max(num1, num2, num3)
print(find_largest_max(1, 10, 5))
def count_letters_in_word(word):
  return len(word)
word1 = "Hello World"
num_letters1 = count_letters_in_word(word1)
print(num_letters1)
def square(number):
  return number ** 2
result1 = square(5)
print(f"The square of 5 is: {result1}")
def calculate_product(num1, num2, num3):
  product = num1 * num2 * num3
  return product
number_a = 5
number_b = 10
number_c = 2
result = calculate_product(number_a, number_b, number_c)
print(f"The product of {number_a}, {number_b}, and {number_c} is: {result}")
def check_number_sign(number):
  if number > 0:
    return "positive"
  elif number < 0:
    return "negative"
  else:
    return "zero"
print(check_number_sign(5))
