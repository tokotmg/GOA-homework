def tricky_doubles(n):
    s = str(n)
    mid = len(s) // 2
    if len(s) % 2 == 0 and s[:mid] == s[mid:]:
        return n
    return n * 2
def capitals(word):
    return [index for index, char in enumerate(word) if char.isupper()]
def angle(n):
    return (n - 2) * 180
def is_triangle(a, b, c):
    return (a + b > c) and (b + c > a) and (c + a > b)
def calc_type(a, b, res):
    if a + b == res:
        return "addition"
    elif a - b == res:
        return "subtraction"
    elif a * b == res:
        return "multiplication"
    elif a / b == res:
        return "division"