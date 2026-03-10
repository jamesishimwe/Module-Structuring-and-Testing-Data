## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Console.log returns the following: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console returns the following: 
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
assert
: 
ƒ assert()
clear
: 
ƒ clear()
context
: 
ƒ context()
count
: 
ƒ count()
countReset
: 
ƒ countReset()
createTask
: 
ƒ createTask()
debug
: 
ƒ debug()
dir
: 
ƒ dir()
dirxml
: 
ƒ dirxml()
error
: 
ƒ error()
group
: 
ƒ group()
groupCollapsed
: 
ƒ groupCollapsed()
groupEnd
: 
ƒ groupEnd()
info
: 
ƒ info()
log
: 
ƒ log()
memory
: 
MemoryInfo {totalJSHeapSize: 63828655, usedJSHeapSize: 56412923, jsHeapSizeLimit: 4294967296}
profile
: 
ƒ profile()
profileEnd
: 
ƒ profileEnd()
table
: 
ƒ table()
time
: 
ƒ time()
timeEnd
: 
ƒ timeEnd()
timeLog
: 
ƒ timeLog()
timeStamp
: 
ƒ timeStamp()
trace
: 
ƒ trace()
warn
: 
ƒ warn()
Symbol(Symbol.toStringTag)
: 
"console"
[[Prototype]]
: 
Object
[[Prototype]]
: 
Object

Try also entering `typeof console`
typeof console returns the following:
'object'

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

console is a built-in object that stores a collection of methods (functions) used for debugging and logging information.

Examples of what it contains include functions such as:

log() – prints messages to the console

error() – prints error messages

warn() – prints warnings

assert() – prints a message if a condition is false

table() – displays data as a table

console.log or console.assert means accessing a method of the console object.
The dot operator, used to access a property or method of an object.
So console.log means calling the log function inside the console object and console.assert means calling the log function inside the console object.