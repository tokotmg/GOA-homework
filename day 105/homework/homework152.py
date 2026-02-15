def digital_root(n):
    if n < 10:
        return n
    sum_of_digits = sum(int(digit) for digit in str(n))
    return digital_root(sum_of_digits)
def count_bits(n):
    return n.bit_count()
def find_outlier(integers):
    evens = [num for num in integers if num % 2 == 0]
    odds = [num for num in integers if num % 2 != 0]
    
    if len(evens) == 1:
        return evens[0]
    else:
        return odds[0]