def longest_palindrome (s):
    n = len(s)
    if n <= 1:
        return n
    max_length = 0
    def expand_around_center(left, right):
        nonlocal max_length
        while left >= 0 and right < n and s[left] == s[right]:
            current_length = right - left + 1
            max_length = max(max_length, current_length)
            left -= 1
            right += 1
    for i in range(n):
        expand_around_center(i, i)
        expand_around_center(i, i + 1)
    return max_length
def is_int_array(arr):
    if not isinstance(arr, list):
        return False
    if not arr:
        return True
    for item in arr:
        if not isinstance(item, (int, float)):
            return False
        if isinstance(item, float) and item != int(item):
            return False
    return True