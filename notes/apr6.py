# April 6
# 1) pt(n) -> returns a list of pythagorean triples, exclusive up until n
# 2) pt2(n) -> using list comprehensions
# 3)

print "Pythagorean Theorem Fxn 1"

def pt(n):
    a = 1
    b = a+1
    c = b+1
    triplets = []
    for a in range(1,n):
        for b in range (a+1,n):
            for c in range(b+1,n):
                if (((a*a) + (b*b)) == (c*c)):
                    triplets.append([a,b,c])
    return triplets

print pt(3) # -> []
print pt(4) # -> []
print pt(5) # -> []
print pt(6) # -> [[3,4,5]]
print pt(7) # -> [[3,4,5]]
print pt(15) # -> [[3,4,5],[5,12,13],[6,8,10]]

print "Pythagorean Theorem Fxn 2"

def pt2(n):
    return [(a,b,c)
            for a in range(1,n)
            for b in range(a+1,n) 
            for c in range(b+1,n)
            if a*a + b*b == c*c]
 
print pt2(3) # -> []
print pt2(4) # -> []
print pt2(5) # -> []
print pt2(6) # -> [[3,4,5]]
print pt2(7) # -> [[3,4,5]]
print pt2(15) # -> [[3,4,5],[5,12,13],[6,8,10]]

# QuickSort
#   1) Select a PIVOT
#   2) PARTITION your list s.t.
#       a) all vals < PIVOT in LH
#       b) all vals > PIVOT in RH
#       c) PIVOT is in the right spot
#   3) QS LH and RH

    
