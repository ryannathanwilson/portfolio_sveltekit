---
title: "DAILY CODING PROBLEM: #81"
date: "2021-01-12"
description: "Problem:
Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.
For example..."
categories:
    - Python
    - Daily coding problem
---

### Problem:

Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.
For example if:

```
{"2": ["a", "b", "c"], "3": ["d", "e", "f"], …} 
```
then “23” should return

```
["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
```
Code a solution"

### SOLUTION:

```python
import math  # I'll use this to round down later


# Primary Function

# Given a string of numbers, and a mapping of 
# individual numbers to an assortment of letters, 
# return an array of letter compinations that 
# correspond to the given numbers.
def displayConfigurations(number, mapping):
	#initialize variables
	preList = []
	finalList = []
	string = ""
	totalLength = 1

	# Create an array where each item in the array
	# corresponds to a number in the given string of numbers.
	# Each item will be a subarray of all letter that are 
	# mapped to the number. 
	for i in number:
		preList.append(findLetters(i, mapping))

	# The total number of possible combinations is the product
	# of the lengths of all the subarrays.
	for i in range(0, len(preList)):
		totalLength *= len(preList[i])
	
	# Create an array called finalList. If the first number has 3
	# letters mapped to it, then the fist third of the combinations
	# will begin with the first letter, the second third with the 
	# second letter, and the final third with the third letter. Each
	# third will be referred to as an interval. I'll build out the 
	# finalList array by doing this first pass here:
	interval = totalLength / len(preList[0])
	for i in range(0, totalLength):
		j = math.floor(i / interval)
		finalList.append(preList[0][j])

	# Following this each interval can be broken down into smaller
	# intervals by dividing by the size of the number of combinations
	# of the next letter. We can keep subdividing our interval until 
	# we get through all of the numbers in the string of number provided.
	# We keep appending letters at each step untill we've worked through
	# every combination
	for i in range(1, len(preList)):
		interval = interval / len(preList[i])
		for k in range(0, totalLength):
			j = math.floor(k / interval)
			while j >= len(preList[i]):
				j = j - len(preList[i])
			finalList[k] += preList[i][j]

	# Print the final result
	print(finalList)


# HELPER FUNTIONS-------------------------------------------
# Create class to assign an array of letters to each number
class numberMapping:
	def __init__(self, num, letters):
		self.num = num
		self.letters = letters


# Given a number and a mapping, return the letters mapped to that number
def findLetters(num, mapping):
	for i in range(0, len(mapping)):
		if mapping[i].num == num:
			return mapping[i].letters


def main():
	#Create the specific mapping defined in the problem
	mapping = []
	mapping.append(numberMapping("2", ["a", "b", "c"]))
	mapping.append(numberMapping("3", ["d", "e", "f"]))
	mapping.append(numberMapping("4", ["g", "h", "i"]))
	mapping.append(numberMapping("5", ["j", "k", "l"]))
	mapping.append(numberMapping("6", ["m", "n", "o"]))
	mapping.append(numberMapping("7", ["p", "q", "r", "s"]))
	mapping.append(numberMapping("8", ["t", "u", "v"]))
	mapping.append(numberMapping("9", ["w", "x", "y", "z"]))

	#Run the example in the problem
	print("Letter combinations for '23'")
	num = "23"
	displayConfigurations(num, mapping)
	
	#Run a more complex example
	print("Letter combinations for '987'")
	num = "987"
	displayConfigurations(num, mapping)


if __name__ == "__main__":
	main()
```

Here's the results when I run the python script:

Letter combinations for '23'
```
['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
```
Letter combinations for '987'
```
['wtp', 'wtq', 'wtr', 'wts', 'wup', 'wuq', 'wur', 'wus',
'wvp', 'wvq', 'wvr', 'wvs', 'xtp', 'xtq', 'xtr', 'xts',
'xup', 'xuq', 'xur', 'xus', 'xvp', 'xvq', 'xvr', 'xvs',
'ytp', 'ytq', 'ytr', 'yts', 'yup', 'yuq', 'yur', 'yus',
'yvp', 'yvq', 'yvr', 'yvs', 'ztp', 'ztq', 'ztr', 'zts',
'zup', 'zuq', 'zur', 'zus', 'zvp', 'zvq', 'zvr', 'zvs']
```

