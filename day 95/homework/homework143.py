def solution(number):
    if number < 0:
        return 0
    total = 0
    for i in range(1, number):
        if i % 3 == 0 or i % 5 == 0:
            total += i
    return total
def spin_words(sentence):
    return " ".join([w[::-1] if len(w) >= 5 else w for w in sentence.split()])
def array_diff(a, b):
    return [x for x in a if x not in b]
