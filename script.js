class HashMap {
  constructor() {
    this.buckets = []
  }

  hash(key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
    }
    return hashCode
  }

  set(key, value) {
    this.buckets[key] = value
  }

  get(key) {
    return this.buckets[key] ? this.buckets[key] : null
  }

  has(key) {
    return key in this.buckets
  }

  remove(key) {
    if (this.has(key)) {
      delete this.buckets(key)
      return true
    }
    return false
  }

  length() {
    return Object.keys(this.buckets).length
  }

  clear() {
    this.buckets = []
  }

  keys() {
    return Object.keys(this.buckets).length
  }

  values() {
    return Object.values(this.buckets)
  }

  entries() {
    return Object.entries(this.buckets)
  }
}

const test = new HashMap()
test.set("carlos", "old value")
test.set("donald", "trump")
test.set("joe", "biden")
test.set("donald", "duck")

console.log(test.length())
console.log(test.keys())
console.log(test.values())
console.log(test.entries())
