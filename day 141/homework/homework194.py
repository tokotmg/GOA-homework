def sum_of_minimums(numbers):
    return sum(min(row) for row in numbers)
def max_tri_sum(numbers):
    return sum(sorted(set(numbers))[-3:])
def odd_ball(arr):
    odd_idx = arr.index("odd")
    return any(isinstance(x, int) and x == odd_idx for x in arr)
def angle(n):
    return (n - 2) * 180
def sum_cubes(n):
    return (n * (n + 1) // 2) ** 2