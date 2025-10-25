def validate_hello(greetings):
    words = ("hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc")
    for word in words:
        if word in greetings.lower():
            return True
    return False
def cookie(x):
    if not isinstance(x, bool) and isinstance(x, str):
        return "Who ate the last cookie? It was Zach!"
    elif not isinstance(x, bool) and (isinstance(x, int) or isinstance(x, float)):
        return "Who ate the last cookie? It was Monica!"
    return "Who ate the last cookie? It was the dog!"
def grader(score):
    if score < 0.6:
        return "F"
    if score < 0.7:
        return "D"
    if score < 0.8:
        return "C"
    if score < 0.9:
        return "B"
    if score <= 1:
        return "A"
    else:
        return "F"
def unusual_five():
    return len("abcde")
def xo(s):
    s_lower = s.lower()
    count_x = s_lower.count("x")
    count_o = s_lower.count("o")
    return count_x == count_o
def sum_two_smallest_numbers(numbers):
    sorted_numbers = sorted(numbers)
    return sorted_numbers[0] + sorted_numbers[1]
def DNA_strand(dna):
    complement = ""
    for base in dna:
        if base == 'A':
            complement += 'T'
        elif base == 'T':
            complement += 'A'
        elif base == 'C':
            complement += 'G'
        elif base == 'G':
            complement += 'C'
    return complement
def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 !=0:
            return num