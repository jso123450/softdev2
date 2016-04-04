# location == memory location/address

def inc(x):
    return x + 1

f = inc
print f(10)

def h(x):
    return lambda y: x + y

print h(1) # location of where lambda y: x + y is
print h(2) 
print h(1)(3) 
print h(2)(5)
# the ones without y defined all return where lambda y: x + y is
# if y is defined, then it just evaluates the function lambda at that y

b = h(1) # a closure
print b

c = h(1)(3) # another closure
print c

def f(x):
    def g(y):
        return x + y
    return g

# print g(1) -> throws an error since g(y) is defined within f(x)
print f(1) # location of where the function g, x+y is stored
print f(2)
print f(1)(2) # since y is defined, it evaluates g at the givens

a = f(1) # a closure

# TASK: 
#     Write a closure with outer function named 'repeat'
#      such that the function calls shown below will yield the outputs shown.

def repeat(s):
    def times(n):
        return s*n
    return times
        
r1 = repeat('hello')
r2 = repeat('goodbye')

print r1(2) # -> hellohello
print r2(2) # -> goodbyegoodbye
print repeat('cool') # -> should return location of times
print repeat('cool')(3) # -> coolcoolcool
