def digitize(n):
    return [int(x) for x in str(n)[::-1]]
def array_diff(a, b):
    return [x for x in a if x not in b]