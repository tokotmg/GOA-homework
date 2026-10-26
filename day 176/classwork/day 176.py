def battery_bars(percent):
    lit_bars = percent // 20
    empty_bars = 5 - lit_bars
    return f"[{'#' * lit_bars}{'.' * empty_bars}]"
def check_exam(arr1,arr2):
    score = 0
    for key, answer in zip(arr1, arr2):
        if answer == "":
            score += 0
        elif answer == key:
            score += 4
        else:
            score -= 1
    return max(0, score)
def persistence(n):
    count = 0
    while n > 9:
        multi = 1
        for digit in str(n):
            multi *= int(digit)
        n = multi
        count += 1
    return count
def grabscrab(said, possible_words):
    target = sorted(said)
    return [word for word in possible_words if sorted(word) == target]
def find_missing_letter(chars):
    for i in range(len(chars) - 1):
        if ord(chars[i]) + 1 != ord(chars[i + 1]):
            return chr(ord(chars[i]) + 1)
def find_employees_role(name):
    for emp in employees:
        if f"{emp['first_name']} {emp['last_name']}" == name:
            return emp['role']
    return "Does not work here!"
