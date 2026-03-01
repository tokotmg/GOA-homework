def high_and_low(numbers):
    nums = [int(x) for x in numbers.split()]
    return f"{max(nums)} {min(nums)}"
def descending_order(num):
    return int("".join(sorted(str(num), reverse=True)))
def filter_list(l):
    return [i for i in l if isinstance(i, int)]
def duplicate_count(text):
    text = text.lower()
    duplicates = 0
    for char in set(text):
        if text.count(char) > 1:
            duplicates += 1
    return duplicates
def duplicate_encode(word):
    word = word.lower()
    counts = {}
    for char in word:
        counts[char] = counts.get(char, 0) + 1
    encoded_string = ""
    for char in word:
        if counts[char] == 1:
            encoded_string += "("
        else:
            encoded_string += ")" 
    return encoded_string
def alphabet_position(text):
    return " ".join(str(ord(c) - ord("a") + 1) for c in text.lower() if c.isalpha())