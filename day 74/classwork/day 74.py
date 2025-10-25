def ensure_question(s):
    if s.endswith("?"):
        return s
    else:
        return s + "?"
def find_short(s):
    words = s.split()
    return min(len(word) for word in words)
def create_phone_number(n):
    return f"({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}"