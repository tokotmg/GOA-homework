def letter_check(arr):
    str1 = arr[0].lower()
    str2 = arr[1].lower()
    return all(letter in str1 for letter in str2)
def cat_mouse(x):
    dots = x.count('.')
    return 'Caught!' if dots <= 3 else 'Escaped!'
def num_combo(xs: list, n: int):
    total_sum = sum(xs)
    target_element = total_sum - n
    return xs.count(target_element)
def array_packing(arr):
    res = 0
    for i, num in enumerate(arr):
        res |= num << (i * 8)
    return res
def nerdify(txt):
    return (
      txt.replace('a', '4')
      .replace('A', '4')
      .replace('e', '3')
      .replace('E', '3')
      .replace('l', '1')
  )