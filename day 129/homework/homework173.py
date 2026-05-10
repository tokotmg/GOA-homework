def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return 'yes, ascending'
    elif arr == sorted(arr, reverse=True):
        return 'yes, descending'
    else:
        return 'no'
def vowel_indices(word):
    vowels = "aeiouyAEIOUY"
    return [i for i, char in enumerate(word, 1) if char in vowels]
def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
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