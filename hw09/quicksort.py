
# QuickSort
def quickSort(l):
    # if an empty list, just return it
    if (l == []):
        return l

    # Step 1 : Select a PIVOT (easiest is just first elem)
    pivot = l[0]

    # Step 2 : PARTITION your list such that
    #         a) all values < your PIVOT is on one side
    #         b) all values > your PIVOT is on the other side
    # Step 3: QuickSort the two halves

    # steps two & three are combined; they are easily separable however
    #      ie: lower = [x for x in l[1:] if x < pivot]
    #          lower = quickSort(lower)
    #            ......
    lower = quickSort([x for x in l[1:] if x < pivot])
    upper = quickSort([x for x in l[1:] if x >= pivot])
    return lower + ([pivot]*l.count(pivot)) + upper

print quickSort([5,2,7,1,9,13]) # -> [1,2,5,7,9,13]
print quickSort([8,31,23,96]) # -> [8,23,31,96]
print quickSort([-5,-7,9,15,8]) # -> [-7,-5,8,9,15]
print quickSort([9,8,7,6,631235,2,5,8,3,58,4,7,9,3,2,7,2,5,4,3,2,1])
