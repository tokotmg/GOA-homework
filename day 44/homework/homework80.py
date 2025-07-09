def hello_world():
    print("Hello, World!")
hello_world()
def say_hi(name):
    print(f"Hello, {name}!")
say_hi("Tornike")
def add_number(num1, num2):
     return num1 + num2
result = add_number(5, 3)
print(result)
def even_or_odd(number):
    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")
even_or_odd(4)
def calculate_average(data_list):
  if not data_list:
    return 0
  else:
    total_sum = sum(data_list)
    number_of_elements = len(data_list)
    average = total_sum / number_of_elements
    return average
my_numbers = [10, 20, 30, 40, 50]
avg = calculate_average(my_numbers)
print(f"The average of {my_numbers} is: {avg}")
def get_string_length(input_string):
   return len(input_string)
my_string = "Hello, World!"
length = get_string_length(my_string)
print(f"The length of '{my_string}' is: {length}")
def reverse_list_slicing(number_list):
   return number_list[::-1]
number_list = [1, 2, 3, 4, 5]
reversed_list = reverse_list_slicing(number_list)
print(reversed_list)
def uppercase():
   print("hello world".upper())
uppercase()
def get_greater_number_conditional(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2
print(get_greater_number_conditional(4, 2))
def is_negative(number):
   return number < 0
print(is_negative(5))
def find_longest_word(words_list):
    word_len = []
    for n in words_list:
        word_len.append((len(n), n))
    word_len.sort()
    return word_len[-1][0], word_len[-1][1]
result = find_longest_word(["PHP", "Exercises", "Backend"])
print("\nLongest word: ", result[1])
print("Length of the longest word: ", result[0])
def only_evens(list1) :
    evens = []
    for number in list1:
        if (number % 2 == 0):
            evens.append(number)
    return evens
list1 = [11, 20, 42, 97]
print(only_evens(list1))
def count_vowels(input_string):
    vowels = "aeiouAEIOU"
    vowel_count = 0
    for char in input_string:
        if char in vowels:
            vowel_count += 1
    return vowel_count
sentence = "Hello World"
print(f"Number of vowels in '{sentence}': {count_vowels(sentence)}")
