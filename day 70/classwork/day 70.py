def reverse_it(data):
    if type(data) in [int, str, float]:
        return type(data)(str(data)[::-1])
    return data
def friend(x):
    return [name for name in x if len(name) == 4]
def sum_cubes(n):
    total_sum = 0
    for i in range(1, n + 1):
        total_sum += i**3
    return total_sum
def greet(name):
    if name is None or name == "":
        return None
    return f"hello {name}!"
def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 !=0:
            return num