def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]
def between(a,b):
    return list(range(a, b + 1))
def remove_exclamation_marks(s):
    return s.replace('!', '')
def reverse_words(s):
    words = s.split()
    words.reverse()
    reversed_text = ' '.join(words)
    return reversed_text