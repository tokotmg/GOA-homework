def summary_ranges(nums):
    ret, s = [], float('-inf')
    for e, n in zip([s] + nums, nums + [-s]):
        if n - e > 1:
            ret.append(['{}', '{}->{}'][s<e].format(s,e))
            s = n
    return ret[1:]
def palindrome(num):
    if not isinstance(num, int) or num < 0:
        return "Not valid"
    n = str(num)
    l = len(n)
    result = {int(n[i:j]) for i in range(l-1) for j in range(i+2, l+1) if int(n[i]) and n[i:j] == n[i:j][::-1]}
    return sorted(result) if result else "No palindromes found"
def pascals_triangle(n):
    if n == 1:
        return [1]
    prev = pascals_triangle(n - 1)
    return prev + [1 if i == 0 or i == n -1 else prev[-i] + prev[-(i + 1)] 
              for i in range(n)]