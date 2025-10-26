"""
TO RUN: python queue_0.py
"""

"""
Queue ADT: ArrayQueue

This class implements the following methods:
    Q.enqueue(e)
    Q.dequeue()
    Q.peek()
    Q.is_empty()
    Q.size()

This class should use an array-based data structure to implement a queue,
with a Python list.

There are two problems with this implementation.
"""

class Queue:
  def __init__(self):
    self._queue = []

  def is_empty(self):
    """
    Check if empty.
    """
    return (len(self._queue) == 0)

  def enqueue(self,e):
    """
    Add an element to the back of the queue.
    If the queue is full, this should print out an error message and return.
    """
    self._queue.append(e)

  def dequeue(self):
    """
    Remove the item at the front of the queue.
    """
    if self.is_empty():
      return None
    return self._queue.pop(0)

  def size(self):
    """
    Check the size of the queue.
    """
    return (len(self._queue))

  def peek(self):
    """
    Peek at the next item.
    """
    return self._queue[0]


"""
This is a sample program that uses the Queue class.
NOTE: This is not sufficient for fully testing the class, just an example of how to use each method.
"""

# Create queue object
example_queue = Queue()

# Check if queue is empty
print("Empty queue?", example_queue.is_empty())

# Enqueue items
for i in range(10):
  example_queue.enqueue(i)

# Dequeue item
print("Dequeued item:", example_queue.dequeue())

# Get queue size
print("Queue size:", example_queue.size())

# Check the next item in the queue
print("Next item:", example_queue.peek())
