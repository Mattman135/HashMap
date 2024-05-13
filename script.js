class HashMap {
  constructor() {
    this.bucketSize = 0 // behöver jag den här?
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
}

let test = new HashMap()
test.set("carlos", "old value")
