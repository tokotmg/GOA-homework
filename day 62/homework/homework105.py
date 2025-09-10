def even_or_odd(number):
    if number %2==0:
        return "Even"
    else:
        return "Odd"
def solution(string):
    return string[::-1]
def number_to_string(num):
    return str(num)
def bool_to_word(boolean):
    if boolean is True:
        return "Yes"
    else:
        return "No"
def remove_char(s):
    return s[1:-1]
def opposite(number):
    return - number
def summation(num):
    total = 0
    for i in range(1, num + 1):
        total += i
    return total
def find_smallest_int(arr):
    return min(arr)
def count_sheeps(sheep):
    count = 0
    for sheep in sheep:
        if sheep is True:
            count += 1
    return count
def string_to_number(s):
    return int(s)