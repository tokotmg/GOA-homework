def move_zeros(lst):
    non_zeros = [x for x in lst if x != 0]
    zeros_count = len(lst) - len(non_zeros)
    return non_zeros + [0] * zeros_count
def dig_pow(n, p):
    str_n = str(n)
    total_sum = 0
    for digit_char in str_n:
        digit = int(digit_char)
        total_sum += digit ** p
        p += 1
        
    if total_sum % n == 0:
        return total_sum // n
    else:
        return -1
def domain_name(url):
    url = url.replace("http://", "")
    url = url.replace("https://", "")
    url = url.replace("www.", "")
    dot_index = url.find(".")
    domain = url[:dot_index]
    return domain
def hamming(n):
    h = [1]
    i2, i3, i5 = 0, 0, 0
    while len(h) < n:
        next_h2 = h[i2] * 2
        next_h3 = h[i3] * 3
        next_h5 = h[i5] * 5
        next_hamming = min(next_h2, next_h3, next_h5)
        if next_hamming not in h:
            h.append(next_hamming)
        if next_hamming == next_h2:
            i2 += 1
        if next_hamming == next_h3:
            i3 += 1
        if next_hamming == next_h5:
            i5 += 1
    return h[-1]
def remove_char(s):
    return s[1:-1]
def repeats(arr):
    counts = {}
    for num in arr:
        counts[num] = counts.get(num, 0) + 1
    single_sum = 0
    for num, count in counts.items():
        if count == 1:
            single_sum += num
    return single_sum
def digitize(n):
    s_num = str(n)
    reversed_s_num = s_num[::-1]
    result = [int(digit) for digit in reversed_s_num]
    return result