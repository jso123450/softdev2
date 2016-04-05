def inc(x):
    return x + 1

def dec(x):
    return x - 1

f = inc

print f(5) # -> 5+1 = 6

flist = [inc,dec]
print flist[1](5) # -> 5-1 = 4

def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

print add3(10) # -> 13
print add5(10) # -> 15

def make_counter():
    # private "instance" data
    # python scoping rules necessitate a list
    count = [0]

    # public methods
    def inc():
        count[0] = count[0]+1
    def dec():
        count[0] = count[0]-1
    def reset():
        count[0]=0
    def get():
        return count[0]

    # return dictionary to allow access to all methods
    return {'inc': inc, 'dec': dec, 'reset': reset, 'get': get}

c1 = make_counter()
c2 = make_counter()

c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']() # -> 3

c2['inc']()
print c2['get']() # -> 1

c1['reset']()
print c1['get']() # -> 0
