def pyramid(n):
    if n == 0: return []
    ret = []
    for i in range(1, n+1):
        ret.append([1 for j in range(i)])
    return ret
import re
def triple_double(num1, num2):
    s1 = str(num1)
    s2 = str(num2)
    for digit in range(10):
        d_str = str(digit)
        triple_pattern = rf"{d_str}{d_str}{d_str}"
        double_pattern = rf"{d_str}{d_str}"
        if re.search(triple_pattern, s1) and re.search(double_pattern, s2):
            return 1
    return 0
def clean_string(s):
    output = []
    for char in s:
        if char == "#":
            if output:
                output.pop()
        else:
            output.append(char)
    return "".join(output)
def is_alt(s):
    vowels = "aeiou"
    previous_letter_is_vowel = not s[0] in vowels
    for letter in s:
        is_vowel = letter in vowels
        if is_vowel == previous_letter_is_vowel:
            return False
        previous_letter_is_vowel = is_vowel
    return True