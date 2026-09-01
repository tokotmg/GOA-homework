def find_outlier(integers):
    evens = [x for x in integers if x % 2 == 0]
    odds = [x for x in integers if x % 2 != 0]
    return evens[0] if len(evens) == 1 else odds[0]
import string
def is_pangram(st):
    letters = {char for char in st.lower() if char.isalpha()}
    return len(letters) == 26
def count_bits(n):
    return n.bit_count()
def mine_location(field):
    for r_idx, row in enumerate(field):
        if 1 in row:
            return [r_idx, row.index(1)]
def alphabet_position(text):
    return ' '.join(str(ord(char) - 96) for char in text.lower() if char.isalpha())