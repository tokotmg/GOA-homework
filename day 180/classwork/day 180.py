def order_word(s):
    if not s:
        return "Invalid String!"
    return "".join(sorted(s))
def is_monotone(heights):
    return all(heights[i] <= heights[i + 1] for i in range(len(heights) -1))
def unique_sum(lst):
    if not lst:
        return None
    return sum(set(lst))
import re
def debug(s):
    return re.sub(r'bug(?!s)', '', s)
def flatten_and_sort(array):
    return sorted([item for sublist in array for item in sublist])
def next_happy_year(year):
    while True:
        year += 1
        if len(str(year)) == len(set(str(year))):
            return year
def dont_give_me_five(start,end):
    count = 0
    for i in range(start, end + 1):
        if "5" not in str(i):
            count += 1
    return count