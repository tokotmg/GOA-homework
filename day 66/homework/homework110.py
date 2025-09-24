def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]
def divisible_by(numbers, divisor):
    result = []
    for num in numbers:
        if num % divisor == 0:
            result.append(num)
    return result
def between(a,b):
    return list(range(a, b + 1))
def string_to_array(s):
    return s.split(" ")
def count_sheep(n):
    result = ""
    for iteration in range(1,n+1):
        result = result + str(iteration) + " " + "sheep..."
    return result