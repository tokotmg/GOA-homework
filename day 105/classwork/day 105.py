def number(lines):
    return [f"{i}: {line}" for i, line in enumerate(lines, start=1)]
def digits(n):
    return len(str(n))
def adjacent_element_product(array):
    max_prod = array[0] * array[1]
    for i in range(1, len(array) -  1):
        product = array[i] * array[i+1]
        if product > max_prod:
            max_prod = product
    return max_prod
def dup(arry):
    result = []
    for word in arry:
        cleaned_word = ""
        for i in range(len(word)):
            if i == 0 or word[i] != word[i-1]:
                cleaned_word += word[i]
        result.append(cleaned_word)
    return result
def find_missing(sequence):
    n = len(sequence) + 1
    expected_sum = (n * (sequence[0] + sequence[-1])) // 2
    actual_sum = sum(sequence)
    return expected_sum - actual_sum