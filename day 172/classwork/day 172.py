def alphabet_war(fight):
    left_powers = {"w": 4, "p": 3, "b": 2, "s": 1}
    right_powers = {"m": 4, "q": 3, "d": 2, "z": 1}
    left_score = sum(left_powers.get(ch, 0) for ch in fight)
    right_score = sum(right_powers.get(ch, 0) for ch in fight)
    if left_score > right_score:
        return "Left side wins!"
    elif right_score > left_score:
        return "Right side wins!"
    else:
        return "Let's fight again!"
def bumps(road):
    return "Car Dead" if road.count("n") > 15 else "Woohoo!"
def sum_cubes(n):
    return sum(i**3 for i in range(1, n + 1))
def filter_string(st):
    return int("".join([c for c in st if c.isdigit()]))
def sort_my_string(s):
    return f"{s[::2]} {s[1::2]}"
from collections import Counter
def ordered_count(inp):
    c = Counter(inp)
    return sorted(list(c.items()), key=lambda x: inp.index(x[0]))
def find_smallest(numbers, to_return):
    val = min(numbers)
    return val if to_return == "value" else numbers.index(val)
def narcissistic( value ):
    num_str = str(value)
    power = len(num_str)
    total_sum = sum(int(digit) ** power for digit in num_str)
    return total_sum == value