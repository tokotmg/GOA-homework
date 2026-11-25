def game_winners(gryffindor, slytherin):
    g_score = gryffindor[0] + (150 if gryffindor[1] == "yes" else 0)
    s_score = slytherin[0] + (150 if slytherin[1] == "yes" else 0)
    if g_score > s_score:
        return "Gryffindor wins!"
    elif s_score > g_score:
        return "Slytherin wins!"
    else:
        return "It's a draw!"
def is_kiss(words):
    word_list = words.split()
    total_words = len(word_list)
    for word in word_list:
        if len(word) > total_words:
            return "Keep It Simple Stupid"
    return "Good work Joe!"
def take_umbrella(weather, rain_chance):
    return (
        weather == "rainy"
        or (weather == "cloudy" and rain_chance > 0.20)
        or (weather == "sunny" and rain_chance > 0.50)
    )
def is_magic_three(arr):
    nums = set(arr)
    for a in nums:
        for b in nums:
            if -(a + b) in nums:
                return True
    return False
def min_value(digits):
    return int("".join(map(str, sorted(set(digits)))))
from itertools import chain
def flatten_and_sort(array):
    return sorted(chain.from_iterable(array))
def double_char(s):
    return "".join(c * 2 for c in s)
import re
def digit_multiplication(expression):
    digit = re.sub(r'(?<=\d)(?=\d)', '*', expression)
    return eval(digit)