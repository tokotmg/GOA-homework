def wave(people):
    return [
        people[:i] + people[i].upper() + people[i+1:]
        for i in range(len(people))
        if people[i].isalpha()
    ]
def valid_braces(string):
    stack = []
    brace_map = {')': '(', ']': '[', '}': '{'}
    for char in string:
        if char in brace_map.values():
            stack.append(char)
        elif char in brace_map:
            if not stack or stack.pop() != brace_map[char]:
                return False
    return len(stack) == 0
def bouncing_ball(h, bounce, window):
    if not (h > 0 and 0 < bounce < 1 and window < h):
        return -1
    seen = 1
    while True:
        h *= bounce
        if h > window:
            seen += 2
        else:
            break
    return seen
def two_sum(numbers, target):
    seen = {}
    for i, num in enumerate(numbers):
        complement = target - num
        if complement in seen:
            return (seen[complement], i)
        seen[num] = i
import math
def is_prime(num):
    if num <= 1:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    limit = math.isqrt(num)
    for divisor in range(3, limit + 1, 2):
        if num % divisor == 0:
              return False
    return True