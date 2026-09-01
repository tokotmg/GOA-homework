def multiples(a: int, b: int, limit: int) -> list[int]:
    list = []
    for i in range(1,limit+1,1):
        if i%a == 0 and i%b == 0:
            print(i)
            list.append(i)
    return list
def shopping_spree(p, shop):
    a = b = 0
    for n, c in enumerate(shop):
        c, b, a = sorted((c, b, a))
        p -= c
        if p < 0: return n
    return len(shop)
import math
def stack_height_2d(layers):
    if layers == 0:
        return 0
    return (layers - 1) * math.sqrt(3) / 2 + 1
def wrap(height, width, length):
    dim = sorted([height, width, length])
    return 20 + dim[0] * 4 + (dim[1] + dim[2]) * 2
import math
def find_next_square(sq):
    root = math.sqrt(sq)
    if root.is_integer():
        return int((root + 1) ** 2)
    return -1