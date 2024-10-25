---
title: "Deadlock, Livelock, and Starvation"
date: "2024-10-26"
description: "The hack is lock in computing"
cover: "/images/liveness.jpg"
---

<TOC
items={[
"Deadlock",
"Coffman Conditions",
"Livelock",
"Starvation",
]}
/>

<hr/>

## Deadlock

Mean a situation when two or more processes are waiting for each other
to realease a resource (could be anything) that they hold, which creating
a cycle dependency. This is why none of the processes making no any progress (stuck).

## Coffman Conditions

Coffman conditions area set of four conditions, should be met
for a deadlock to happen.

- **Mutual Exclusion**: at least one resource that can be
  held by only one process at a time.
- **Hold and Wait**: process should be able to hold while waiting.
- **No Preemption**: process holding resource cannot be forced to
  release it. Meaning it cannot be forcibly taken away ( must be voluntarily released) by the process after it is done using the resource.
- **Circular Wait**: chain of waiting processes.

**Resource**: R1, R2, R3
<br/>
**Chain**: A -> B -> C -> A
<br/>
**Scenario**:

- Process A holds R1 and waits for R2
- Process B holds R2 and waits for R3
- Process C holds R3 and waits for R1

**Conditions**:

- **Mutual Exclusion**: none of the R1, R2, R3 are shareable
- **Hold and Wait**: each of A,B,C is holding one resource and waiting for another.
- **No Preemption**: none of the resources can be take from any process.
- **Circular Wait**: the chain (A -> B -> C -> A)

This all four conditions leads to a deadlock! The Coffman conditions
are necessary but insufficient. While all four conditions must be present
for a deadlock to occur, having them alone doesn't guarantee this will happen.
Let's say, if one of the conditions is violated, such as the "No Preemption" condition,
processes can still proceed without getting lock or stuck.

Also, what the heck "insufficient"?
happen when all four are present, other factors may prevent a deadlock from it
to happening. Like, the system is designed to detect and resolve potential deadlocks
(e.g., by preempting resources or terminating the processes it self), deadlock may never
occur despite the presence of the conditions above.

Let's say, you have a classic deadlock situation, then there is prevention.
Imagine the system has a deadlock detectionn mechanism that could scan or recognizes
the condition and can preempt resources from one of the processes. If the system forcibly
takes from R1 which held by by A and gives it to C, then C can finish and release R3,
it would breaking the chain (cycle) of waits.

## Livelock

Suchlike to deadlock, but these processes are not blocked (stuck), continuously change their states in response to each other, but without doing anything useful or making progress toward their goals. They are actively executing whatever their doing, but the actions are just harmful.

- **Deadlock**: processes are blocked
- **Livelock**: Processes are active but continuously switch state without any progress

Consider there are two processes, The A and B, they sharing a shared resource and try to
access it simultaneously, but due to a specific issue (e.g., protocol or timing issue), they
keep overwriting each other's attempts. So neither process can acquire the resource successfully right, then they both keep trying indefinitely, which that's mean making no damn progress.

Prevention to livelock, invlolves how careful the system designed and impelemted by using
algorithms and protocols. There are strategies, introducing randomness to break the cycle,
ensure fair access to shared resources so one process no longer dominating the system, and
backoff mechanism.

## Starvation

When a process is continuously denied necessary resources to execute, even it's ready to run.
this can happen due to various reasons, including scheduling algorithms that prioritize other
processes or resource allocaaation policies that favor certain processes.

Actually, this usually happens in multitasking environments where multiple processes compete for
limited resources, such as CPU time or memory. some algorithms might favor certain processes
to prioritize, leading to lower-priority processes being ignored for extended periods. Also,
the resource it's self has allocation policies that lead the favors to a specific tasks or users,
other processes may be starved of necessary resources.

In essence, starvation is about management the resources which process is able or unable to do
their things due to unfair resources allocation.

<hr/>
<hr/>

## Also Reads:

- [Oracle Java Liveness Docs](https://docs.oracle.com/javase/tutorial/essential/concurrency/liveness.html)
- [StackOverflow: How efficient is locking and unlocked mutex? What is the cost of a mutex?](https://stackoverflow.com/questions/3652056/how-efficient-is-locking-and-unlocked-mutex-what-is-the-cost-of-a-mutex/49712993#49712993)
- [Go Wiki: LearnConcurrency](https://go.dev/wiki/LearnConcurrency)
