def first(seq, n=1):
    return seq[:n]
def wrap(value):
    return {"value":value}
rooms = {
    "room_1": {
        "name": "The Dungeon",
        "description": "A dark and damp stone cell.",
        "completed": False
    },
    "room_2": {
        "name": "The Library",
        "description": "Shelves packed full of ancient books.",
        "completed": False
    },
    "room_3": {
        "name": "The Treasure Room",
        "description": "Piles of gold coins glimmering in the dark.",
        "completed": False
    }
}
def fuel_price(litres, price_per_litre):
    for i in range(2, 11, 2):
        if litres >= i:
            price_per_litre -= 0.05
    return round(litres * price_per_litre, 2)
def correct_tail(body, tail):
    return body.endswith(tail)