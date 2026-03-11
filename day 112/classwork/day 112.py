def high(x):
    words = x.split()
    return max(words, key=lambda word: sum(ord(c) -96 for c in word))
from collections import Counter
def highest_rank(arr):
    counts = Counter(arr)
    max_freq = max(counts.values())
    most_frequent_numbers = [num for num, freq in counts.items() if freq == max_freq]
    return max(most_frequent_numbers)
def get_order(order):
    menu = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke']
    clean_order = ''
    for i in menu:
        clean_order += (i.capitalize() + ' ') * order.count(i)
    return clean_order[:-1]