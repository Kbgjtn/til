---
title: "Memory Allocations"
date: "2025-02-25"
description: "Let's dive deep into heap allocation!"
cover: "/images/0126e11f30520dff.jpg"
---

<TOC
items={[
"What's Heap Allocation?",
"Stack vs Heap: The Showdown",
"Why Does it Matter?",
"Real-World Wins",
"When Should You Use It?",
"Traps and Rules",
]}
/>

<hr />

## What's Heap Allocation?

- **Heap**: A chunk of memory that the program can grab at runtime, separate from the stack (where local variables like `int x = 5` live). Think of it as a big, shared pool you dip into when you need space.
- **Allocation**: Using `new` to carve out a piece of the heap and get a pointer to it. You're the boss-decide when it's born and when it dies with `delete`.
- You clean your own mess...

```cpp
#include <iostream>

int main () {
    int* p = new int(69);
    std::cout << *p << "\n";

    delete p; // free it
    p = nullptr;
    return 0;
}
```

- `new int(69);`: Grabs heap space, sets it to 42, returns a pointer.
- `delete p;`: Gives it back to the heap--miss this, and it's leak. GoodLuck:)

---

## Stack vs Heap: The Showdown

- **Stack**:
  - Automatic--variables die when the function ends (e.g., `int x = 69;`).
  - Fast--pre-allocated, no manual cleanup needed.
  - Limited size--big stuff (arrays, structs) can overflow it.

```cpp
void func() {
    int x = 5; // Stack—dies when func ends
    std::cout << x << "\n"; // 5
} // x is gone
```

- **Heap**:
  - Manual--you control its life with `new` and `delete`.
  - Slower--allocation takes time, fragmented memory.
  - Huge--limited by system RAM, not a tiny stack cap.

```cpp
int* func() {
    int* p = new int(5); // Heap—lives until deleted
    return p; // Pointer escapes—caller must delete
}
int main() {
    int* ptr = func();
    std::cout << *ptr << "\n"; // 5
    delete ptr; // Clean up
}
```

## Why Does it Matter?

- **Lifetime Control**: Heap stuff lives as long you want--beyond function calls. Stack stuff dies fast.
- **Size**: Big data (arrays, objects) won't fit on the stack--heap's your friend.
- **Flexibility**: Allocate exactly what you need, when you need it--dynamic as hell.

## Real-World Wins

- **Big Arrays**: `int arr[100000]` on stack? Crash. `new int[1000000]?` Fine.
- **Objects**: Classes with hefty data (e.g., game characters)--heap lets them persist.
- **Dynamic Stuff**: Lists, trees--size unknown at compile time? Heap it.

## When Should You Use It?

- **Heap**:
  - Data needs to outlive its scope (e.g., return from a function).
  - Size is big or unknown (e.g., user-defined array length).
  - You're building dynamic structures (linked lists, etc.).

- **Stack**:
  - Small, short-lived stuff (e.g., `int x` in a loop)
  - No need for manual cleanup--stack's automatic.

```cpp
#include <iostream>

int* make_array(int size) {
    int* arr = new int[size];
    for (int i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
}

int main() {
    int n = 5;
    int* my_array = make_array(n);
    for (int i = 0; i < n; i++) {
        std::cout << my_array[i] << "\n"; // 0 1 2 3 4
    }
    delete[] my_array; // free array (note delete[])
    return 0;
}
```

Why Heap?: size isn’t known at compile time—stack can’t handle that.

## Traps and Rules

- **Memory Leaks**: Forget `delete`, and that memory's gone until the program ends. No body saves you!

```cpp
int *p = new int(69);
// no delete-leak!
```

- **Dangling Pointers**: Delete, then use? Crash city.

```cpp
int *p = new int(69);
delete p;
std::cout << *p << "\n" // undefined-boom!
```

- **Arrays**: Use `new int[n]` and `delete[]` (not plain `delete`--wrong cleanup).
- **Ownership**: Who deletes? Pass a pointer, and it's a mess. Lucky, modern C++ (smart pointers) fixes this later.
