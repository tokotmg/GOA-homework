from collections import Counter
def freq_seq(s, sep):
    char_counts = Counter(s)
    result_parts = []
    for char in s:
        result_parts.append(str(char_counts[char]))
    return sep.join(result_parts)
def reverse_it(data):
    if type(data) in [int, str, float]:
        return type(data)(str(data)[::-1])
    return data
def find_missing_numbers(arr):
    missing = []
    if not arr:
        return missing
    for i in range(len(arr) - 1):
        current = arr[i]
        next_val = arr[i+1]
        for num in range(current + 1, next_val):
            missing.append(num)
    return missing
def only_duplicates(st):
    result = []
    for char in st:
        if st.count(char) > 1:
            result.append(char)
    return "".join(result)
WORDS = 'abcdefghijklmnopqrstuvwxyz'
def break_caesar(message):
    l = (message.lower()).split()
    for i in range(26):
        s = 0
        for j in l:
            m = ''.join(chr((ord(k) - 97 - i)%26 + 97)  for k in j if k not in'.,?!')
            if m in WORDS: s+= 1
        if s > len(l)//2: return i
    return 0