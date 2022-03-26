---
title: PYTHONIC CODE SNIPPETS - TECHNICAL INTERVIEW REFERENCE
date: "2021-09-15"
author: Ryan N Wilson
description: Lorem ipsum alsdkfjal;sdjf asdlfja;sdalksd;fj
categories:
    - python
    - coding problems
---
As I practice solving problems on LeetCode.com I wanted to keep track of pieces of syntax I find to be useful that let Python shine:

LISTS

Lists are great for stacks. For queues use deques.

```python
# Initialize a list object:
myList = []

# Create empty list of length n:
myList = [None] * n
myList = [""] * n
myList = [0] * n

# Instead of for loop, create inline
myList = [x*2 for x in range(10)]

# Or in reference to another list with condition:
myList = [x*10 for x in myOtherList if x > 0]

# Create list with numbers from 0 through n-1:
myList = list(range(n))

# Append to list:
myList.append(item)

# Insert item into list at index:
myList.insert(index, item)

# Remove first occurance of item in list:
myList.remove(item)

# Remove and return item from list at index(assumes last item if no index)
myList.pop(index)

# Other methods to learn:
myList.sort()
myList.reverse()
myList.index()
zip()
DEQUES

from collections import deque

# Initiate a deque
myQueue = deque([])

# Add to left
myQueue.appendleft(item)

# Add to right
myQueue.append(item)

# Remove from left
myQueue.popleft()

# Remove from right
myQueue.pop()
```

## DICTIONARIES

- Coming soon

## TUPLES

-Coming Soon

## SETS

- Coming Soon

## STRING MANIPULATION

- Coming Soon

## ITERATING

Many coding problems involve searching through data structures. Here are a few approaches:

```python
# iterate over characters in a string:
for char in string:
  
# iterate with index:
for counter, value in enumerate(string)

# iterate over items in list:
for item in array:

# check if item is not in a list:
if item not in array:
 
# check if key exists in dictionary:
if key in dictionary:
  
# add dictionary methods

# create list with numbers 0 to n

# create empty list of length n

#slice of string from index i to not including j:
substring = string[i:j]

# avoid calling values that are out of range
pointer = item[i] if i > 0 else None
For more complete reference material see the python docs.
```