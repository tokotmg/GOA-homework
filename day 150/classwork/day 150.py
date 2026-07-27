def is_triangle(a, b, c):
    return (a + b > c) and (a + c > b) and (b + c > a)
def even_chars(st): 
    if len(st) < 2 or len(st) > 100:
        return "invalid string"
    return list(st[1::2])
def unique_in_order(sequence):
    result = []
    for item in sequence:
        if not result or item != result[-1]:
            result.append(item)
    return result
def solution(s):
    result = []
    if len(s) % 2 != 0:
        s += '_'
    for i in range(0, len(s), 2):
        result.append(s[i:i+2])
    return result