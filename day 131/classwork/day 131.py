def sum_of_minimums(numbers):
    return sum(min(row) for row in numbers)
def reverse_seq(n):
    return [i for i in range(n, 0, -1)]
def vaporcode(s):
    s = s.replace(" ", "").upper()
    return "  ".join(s)
def solution(number):
    if number < 0:
        return 0
    return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)