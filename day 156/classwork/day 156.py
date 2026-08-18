def capitalize(s):
    even = "".join(c.upper() if i % 2 == 0 else c for i, c in enumerate(s))
    odd = "".join(c.upper() if i % 2 != 0 else c for i, c in enumerate(s))
    return [even, odd]
import math
def digits(n):
    if n == 0:
        return 1
    return math.floor(math.log10(n)) + 1
def order(sentence):
    if not sentence:
        return ""
    return " ".join(sorted(sentence.split(), key=lambda w: sorted([c for c in w if c.isdigit])))
def min_value(digits):
    return int("".join(map(str, sorted(set(digits)))))
import math
def round_to_next5(n):
    return math.ceil(n / 5) * 5
def row_weights(array):
    return (sum(array[::2])), sum(array[1::2])