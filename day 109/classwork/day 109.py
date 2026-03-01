def factorial(n):
    if not 0 <= n <= 12:
        raise ValueError("Input must be between 0 and 12")
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
import math
def predict_age(*ages):
    squared_ages_sum = sum(age * age for age in ages)
    square_root_of_sum = math.sqrt(squared_ages_sum)
    predicted_age = math.floor(square_root_of_sum / 2)
    return predicted_age
def count_red_beads(n):
    if n < 2:
        return 0
    else:
        return 2 * (n - 1)
def find_longest(arr):
    return max(arr, key=lambda x: len(str(abs(x))))
def compute_depth(n):
    digits_seen = set()
    multiplier = 0
    while len(digits_seen) < 10:
        multiplier += 1
        current_product = n * multiplier
        for digit in str(current_product):
            digits_seen.add(digit)
    return multiplier