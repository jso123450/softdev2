import time

def funcArgs(f):
    def innerArgs(*arg):
        print str(f.func_name) + ": " + str(*arg)
        x = f(*arg)
        return x
    return innerArgs
    
    #return lambda *arg: f(*arg)

def funcTime(f):
    def innerTimer(*arg):
        start = time.time()
        x = f(*arg)
        print "execution time: " + str(time.time() - start)
        return x
    return innerTimer
