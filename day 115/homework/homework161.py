def sum_args(*args):
    total = 0
    for arg in args:
        if type(arg) == int:
            total += arg
    return total