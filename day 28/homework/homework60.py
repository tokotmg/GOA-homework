list1 = [1,-2,-4,6,7,-23,45,-0]
pos_count, neg_count = 0, 0
# enhanced for loop  
for num in list1:
   # check for being positive
   if num >= 0:
      pos_count += 1
   else:
      neg_count += 1
print("Positive numbers count: ", pos_count)
print("Negative numbers count: ", neg_count)
