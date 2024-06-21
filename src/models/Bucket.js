class Bucket {
  #maxCapacity;
  #currentCapacity = 0;

  constructor(newCapacity) {
    this.#maxCapacity = newCapacity;
  }

  fill(transferedGallons = null) {
    if (transferedGallons !== null) {
      this.#currentCapacity += transferedGallons;
    } else {
      this.#currentCapacity = this.#maxCapacity;
    }
  }

  empty() {
    this.#currentCapacity = 0;
  }

  transfer(otherBucket) {
    const toTransfer = Math.min(
      otherBucket.checkMaxCapacity(),
      this.#currentCapacity,
    );

    this.#currentCapacity -= toTransfer;

    otherBucket.fill(toTransfer);
  }

  checkMaxCapacity() {
    return this.#maxCapacity;
  }

  checkCurrentCapacity() {
    return this.#currentCapacity;
  }

  checkIsFull() {
    return this.#currentCapacity === this.#maxCapacity;
  }
}

export default Bucket;