import time

def funcTime(f):
    def innerTimer(*arg):
        start = time.time()
        x = f(*arg)
        print "execution time: " + str(time.time() - start)
        return x
    return innerTimer    

def memoize(f):
    memo = {}
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

# @funcTime
@memoize
def fib(n):
    if (n < 2):
        return n
    return fib(n-1) + fib(n-2)

print fib(0)
print fib(1)
print fib(2)
print fib(3)
print fib(4)
print fib(5)
print fib(6)
print fib(7)
print fib(8)
print fib(9)
print fib(100)
