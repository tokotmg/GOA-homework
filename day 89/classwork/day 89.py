def tower_builder(n_floors):
    tower = []
    max_width = 2 * n_floors - 1
    for floor in range(1, n_floors + 1):
        num_asterisks = 2 * floor - 1
        num_spaces = (max_width - num_asterisks) // 2       
        floor_string = " " * num_spaces + "*" * num_asterisks + " " * num_spaces
        tower.append(floor_string)      
    return tower
def dashatize(n):
    if n is None:
        return 'None'
    s = str(abs(n))
    result = []  
    for digit in s:
        if int(digit) % 2 != 0:
            result.append('-' + digit + '-')
        else:
            result.append(digit)            
    processed_result = "".join(result).replace('--', '-')   
    if processed_result.startswith('-'):
        processed_result = processed_result[1:]
    if processed_result.endswith('-'):
        processed_result = processed_result[:-1]       
    return processed_result
import string
def solution(s):
    alphabet = string.ascii_lowercase  
    result = []
    i = 0
    while i < len(s):
        j = i
        while j + 1 < len(s) and (ord(s[j+1]) - ord(s[j]) == 1):
            j += 1   
        if j > i:
            slice_to_reverse = s[i:j+1]
            result.append(slice_to_reverse[::-1])
            i = j + 1
        else:
            result.append(s[i])
            i += 1            
    return "".join(result)
def reverse_vowels(s):
    s_list = list(s)
    vowels = "aeiouAEIOU"
    left = 0
    right = len(s_list) - 1
    while left < right:
        while left < right and s_list[left] not in vowels:
            left += 1
        while left < right and s_list[right] not in vowels:
            right -= 1
        if left < right:
            s_list[left], s_list[right] = s_list[right], s_list[left]
            left += 1
            right -= 1
    return "".join(s_list)
def sum_arrays(array1,array2):
    if not array1: return array2
    if not array2: return array1
    num = sum(map(lambda x: int(''.join(map(str, x))), [array1, array2]))
    lst = list(map(int, str(abs(num))))
    if num < 0: lst[0] *=-1
    return lst