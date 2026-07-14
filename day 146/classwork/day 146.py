def solve(s):
    upper_count = sum(1 for char in s if char.isupper())
    if upper_count > len(s) - upper_count:
        return s.upper()
    return s.lower()
def sum_mul(n, m):
    if n <= 0 or m <= 0:
        return "INVALID"
    return sum(range(n, m, n))
def no_repeat(string):
    for char in string:
        if string.count(char) == 1:
            return char
def sum_factorial(lst):
    total_sum = 0
    for num in lst:
        fact = 1
        for i in range(1, num + 1):
            fact *= i
        total_sum += fact
    return total_sum