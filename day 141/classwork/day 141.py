def flick_switch(lst):
    result = []
    state = True
    for item in lst:
        if item == 'flick':
            state = not state
        result.append(state)
    return result
def array_diff(a, b):
    return [element for element in a if element not in b]
def digital_root(n):
    return n if n == 0 else 1 + (n - 1) % 9
def tribonacci(signature, n):
    if n == 0:
        return []
    if n <= len(signature):
        return signature[:n]
    result = signature[:]
    for i in range(3, n):
        result.append(result[i - 1] + result[i - 2] + result[i - 3])
    return result