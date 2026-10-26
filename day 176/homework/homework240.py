def row_sum_odd_numbers(n):
    return n ** 3
def binary_array_to_number(arr):
    return int("".join(str(bit) for bit in arr), 2)
def number(bus_stops):
    return sum([stop[0] - stop[1] for stop in bus_stops])
def high(x):
    return max(x.split(), key=lambda k: sum(ord(c) - 96 for c in k))
def valid_braces(string):
    stack = []
    mapping = {")": "(", "]": "[", "}": "{"}
    for char in string:
        if char in mapping.values():
            stack.append(char)
        elif char in mapping:
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()
    return len(stack) == 0