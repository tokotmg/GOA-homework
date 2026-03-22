def vowel_back(st):
    output = ''
    alpha = "abcdefghijklmnopqrstuvwxyz"
    vowel = "aeiou"
    consonent = "bcdfghjklmnpqrstvwxyz"
    for i in st:
        spot = alpha.index(i)
        if i == 'c' or i == 'o':
            spot -= 1
        elif i == 'd':
            spot -= 3
        elif i == 'e':
            spot -= 4
        elif i in consonent:
            spot += 9
        elif i in vowel:
            spot -= 5
        if alpha[spot % 26] in 'code':
            output += i
        else:
            output += alpha[spot % 26]
    return output
def repeats(arr):
    counts = {}
    for num in arr:
        counts[num] = counts.get(num, 0) + 1
    single_sum = 0
    for num, count in counts.items():
        if count == 1:
            single_sum += num
    return single_sum
def div_con(x):
    total_sum = 0
    for item in x:
        if isinstance(item, str):
            total_sum -= int(item)
        else:
            total_sum += item
    return total_sum