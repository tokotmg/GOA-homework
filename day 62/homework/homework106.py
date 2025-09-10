def disemvowel(string_):
    vowels = "aeiouAEIOU"
    result = ""
    for char in string_:
        if char not in vowels:
            result += char
    return result
def square_digits(num):
    if not isinstance(num, int):
        raise TypeError("Input must be an integer.")
    
    num_str = str(num)
    squared_digits = []
    for digit_char in num_str:
        digit = int(digit_char)
        squared_digit = digit ** 2
        squared_digits.append(str(squared_digit))
    
    result_str = "".join(squared_digits)
    return int(result_str)  