def is_uppercase(inp):
    return inp==inp.upper()
def move(position, roll):
    new_position = position + (roll * 2)
    return new_position
def disemvowel(string_):
    vowels = "aeiouAEIOU"
    result = ""
    for char in string_:
        if char not in vowels:
            result += char
    return result
def xo(s):
    s_lower = s.lower()
    count_x = s_lower.count("x")
    count_o = s_lower.count("o")
    return count_x == count_o 
def summation(num):
    total = 0
    for i in range(1, num + 1):
        total += i
    return total
def digitize(n):
    s_num = str(n)
    reversed_s_num = s_num[::-1]
    result = [int(digit) for digit in reversed_s_num]
    return result
def max_diff(lst):
    if not lst or len(lst) <=1:
        return 0
    else:
        return max(lst) - min(lst)