
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

# Union of Two Sets
def union(a,b):
    return quickSort(a + [x for x in b if x not in a])
print union([2,1,3],[5,2,3,9,6]) # -> [1,2,3,5,6,9]

# Intersection of Two Sets
def intersection(a,b):
    return quickSort([x for x in a if x in b])
print intersection([2,1,3],[5,2,3,9,6]) # -> [2,3]

# Difference of Two Sets
def set_diff(a,b):
    return quickSort([x for x in a if x not in b])
print set_diff([2,1,3],[5,2,3,9,6]) # -> [1]
print set_diff([5,2,3,9,6],[2,1,3]) # -> [5,6,9] 

# Symmetric Difference of Two Sets
def symm_diff(a,b):
    return set_diff(a,b) + set_diff(b,a)
print symm_diff([2,1,3],[5,2,3,9,6]) # -> [1,5,6,9]

# Cartesian Product of Two Sets
def cart_prod(a,b):
    return quickSort([(x,y) for x in a for y in b])
print cart_prod([2,1,3],[5,2,3,9,6]) # -> [(1,2),(1,3),(1,5)...]
