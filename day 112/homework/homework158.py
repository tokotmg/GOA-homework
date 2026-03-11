def get_middle(s):
    length = len(s)
    mid = length // 2
    if length % 2 == 1:
        return s[mid]
    else:
        return s[mid - 1:mid + 1]
import math
def is_square(n):    
    if n < 0:
        return False
    sqrt_n = math.sqrt(n)
    return sqrt_n.is_integer()
def is_isogram(string):
    s = string.lower()
    return len(s) == len(set(s))
import functools
def persistence(n):
    times = 0
    while n > 9:
        n = functools.reduce(lambda x, y: x * y, [int(i) for i in str(n)])
        times += 1
    return times
import re
def to_camel_case(text):
    words = re.split('[-_]', text)
    if not words:
        return ""
    camel_cased_words = [words[0]] + [word.capitalize() for word in words[1:]]
    return "".join(camel_cased_words)
def narcissistic( value ):
    s_value = str(value)
    num_digits = len(s_value)
    sum_of_powers = sum(int(digit) ** num_digits for digit in s_value)
    return value == sum_of_powers