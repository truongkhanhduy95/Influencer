def findLargestPrimeNumber(sequence):
  p = lambda n:[n%i for i in range(2,n) if n%i == 0]
  return max(int(N[j:i])for i in range(len(N)+1)for j in range(i)if not p(int(N[j:i])))

print(findLargestPrimeNumber('117')) # expect 17
print(findLargestPrimeNumber('1234')) # expect 23
print(findLargestPrimeNumber('3571')) # expect 3571