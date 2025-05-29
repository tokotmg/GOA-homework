#slicing ფუნქციას შეუძლია დააბრუნოს სიმბოლოების დიაპაზონი slice სინტაქსის გამოყენებით.
a = range(100)
ans = a[:50]
print(ans)

ans = a[10:89:3]
print(ans)

ans = a[::5]
print(ans)
