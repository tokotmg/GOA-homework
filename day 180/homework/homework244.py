from collections import Counter
def first_dup(s):
    counts = Counter(s)
    for char in s:
        if counts[char] > 1:
            return char
    return None
def solve(s,g):
    return -1 if s % g else (g, s - g)
import math
def multiples(a, b, limit):
    lcm = math.lcm(a, b)
    return [i for i in range(lcm, limit + 1, lcm)]
def wrap(height, width, length):
  dim = sorted([height, width, length])
  return 20 + dim[0] * 4 + (dim[1] + dim[2]) * 2
def count_min_rotations(dice):
    if not dice:
        return 0
    min_rotations = float('inf')
    for target in range(1, 7):
        current_rotations = 0
        for die in dice:
            if die == target:
                continue
            elif die + target == 7:
                current_rotations += 2
            else:
                current_rotations += 1
        min_rotations = min(min_rotations, current_rotations)
    return min_rotations