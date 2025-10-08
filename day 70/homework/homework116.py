def solution(s):
    result = []
    for char in s:
        if char.isupper():
            result.append(' ')
        result.append(char)
    return ''.join(result)