def is_kiss(words):
    words = words.split()
    total_words = len(words)
    for word in words:
        if len(word) > total_words:
            return "Keep It Simple Stupid"
    return "Good work Joe!"
def even_last(numbers): 
    if not numbers: return 0
    return sum(numbers[0::2]) * numbers[-1]
def count_lonely_letters(text):
    chars = [c.lower() for c in text if c.isalpha()]
    char_counts = {c: chars.count(c) for c in set(chars)}
    present_chars = set(chars)
    lonely_count = 0
    for char, count in char_counts.items():
        if count == 1:
            prev_char = chr(ord(char) - 1)
            next_char = chr(ord(char) + 1)
            is_neighbor_present = False
            if 'a' <= prev_char <= 'z' and prev_char in present_chars:
                is_neighbor_present = True
            if "a" <= next_char <= 'z' and next_char in present_chars:
                is_neighbor_present = True
            if not is_neighbor_present:
                lonely_count += 1
    return lonely_count
def stalin_sort(arr):
    i = 1
    while i < len(arr):
        if arr[i] < arr[i - 1]:
            del arr[i]  
        else:
            i += 1