---
title: "Generating and Responding to Interupts"
date: "2025-02-10"
description: "Learning how the processes are interrupt"
cover: "/images/icon_floating.png"
---

Interrupts area signals sent to a processor by a process or a device which require its urgently required to look at something else.

- The process itself is just a running program.
- Different processes have different priorities. There's some level of importance here, not all processes are equally important.
- The priority of it each process is determined by Operating System ultimately
- When an interrupt occurs, the processor switches to execute the relevant Interrupt Service Routine (**ISR**) or Interrupt Controller.

Interrupts is there to enable a processor to respond to critical events, it'll either CPU or GPU which is reacting to these kind events. Like things can happen in life, things can happen we have to change our plans a little bit and interrupts enable this to happen. Each interrupts has a priority:

**Software-OS Interrupts: Signals**

- Have fixed priorities which lower signal numbers generally have higher priority.
- Signals like `SIGKILL` and `SIGSTOP` are non-catchable and the process will always be terminated or stopped immediately.
- Signals are delivered in numeric order if multiple signals are delayed.
- Real-time signals (e.g., `SIGRTMIN` to `SIGRTMAX`) have **higher priority** than the rest of it and are queued in the order they are received.
- Examples:
  1.  System call interrupt, occurs when a program requires the OS, The ISR will complete the request
  2.  Divide-by-zero interrupt, this would potentially cause a crash, The ISR will stop the process and report an error message
  3.  Page fault interrupt, occurs when a page is needed that is actually in virtual memory

| **Signal** | **Number** | **Description**                            |
| ---------- | ---------- | ------------------------------------------ |
| `SIGHUP`   | 1          | Hangup detected on controlling terminal    |
| `SIGINT`   | 2          | Interrupt from keyboard (Ctrl + C)         |
| `SIGQUIT`  | 3          | Quit from keyboard (Ctrl + \)              |
| `SIGILL`   | 4          | Illegal instruction                        |
| `SIGABRT`  | 6          | Abort signal                               |
| `SIGFPE`   | 8          | Floating point exception                   |
| `SIGKILL`  | 9          | Kill signal (non-catchable, non-ignorable) |
| `SIGSEGV`  | 11         | Segmentation fault                         |
| `SIGPIPE`  | 13         | Broken pipe                                |
| `SIGALRM`  | 14         | Alarm clock signal                         |
| `SIGTERM`  | 15         | Termination signal                         |
| `SIGUSR1`  | 10         | User-defined signal 1                      |
| `SIGUSR2`  | 12         | User-defined signal 2                      |
| `SIGCHLD`  | 17         | Child process stopped or terminated        |
| `SIGCONT`  | 18         | Continue process                           |
| `SIGSTOP`  | 19         | Stop process (non-catchable)               |
| `SIGTSTP`  | 20         | Stop typed at terminal (Ctrl + Z)          |

**Hardware Interrupts**

- Hardware Interrupts (e.g., in ARM or x86) can be assigned custom priorities based on the hardware architecture itself.
- These is managed via Interrupt Controllers which can determine the priority, masking, and servicing of interrupts.
- The hardware communicated to the processor via the Control Bus
- Since Interrupts priority and handling is different between architecture, these are each of them:

**ARM NVIC Priority Model**

| **Interrupt**      | **IRQ Number** | **Default Priority**       | **Description**                   |
| ------------------ | -------------- | -------------------------- | --------------------------------- |
| Reset              | -3             | Highest (Fixed)            | Reset handler                     |
| NMI (Non-maskable) | -2             | Second Highest (Fixed)     | Non-maskable interrupt            |
| Hard Fault         | -1             | Third Highest (Fixed)      | Handles critical system errors    |
| SVCall             | 11             | Configurable (e.g., 0-255) | Supervisor call for RTOS          |
| PendSV             | 14             | Configurable (e.g., 0-255) | Context switching in RTOS         |
| SysTick            | 15             | Configurable (e.g., 0-255) | System timer interrupt            |
| External IRQ 0-239 | 0-239          | Configurable (e.g., 0-255) | Peripheral or external device IRQ |

**x86 PIC Priority Model**

| **IRQ** | **Vector Number** | **Default Device**       | **Priority** |     |
| ------- | ----------------- | ------------------------ | ------------ | --- |
| IRQ 0   | 32                | System Timer             | Highest      |     |
| IRQ 1   | 33                | Keyboard Controller      | High         |     |
| IRQ 2   | 34                | Cascade (linked to PIC2) | Medium       |     |
| IRQ 3   | 35                | COM2 (Serial Port)       | Medium       |     |
| IRQ 4   | 36                | COM1 (Serial Port)       | Medium       |     |
| IRQ 5   | 37                | Sound Card / LPT2        | Medium       |     |
| IRQ 7   | 39                | Parallel Port (LPT1)     | Medium       |     |
| IRQ 8   | 40                | Real-time clock (RTC)    | Medium       |     |
| IRQ 13  | 45                | Floating Point Exception | Medium       |     |
| IRQ 14  | 46                | Primary IDE Controller   | Medium       |     |
| IRQ 15  | 47                | Secondary IDE Controller | Lowest       |     |

- Examples:
  1.  Timer interrupt, occurs after a set number of clock cycles. E.g., for the system time, the ISR will increment the current time
  2.  Mouse interrupt, occurs when movement is detected, the ISR will capture the movement and show on screen. Same things with the keyboards, captured the key being pressed.
  3.  Shut down interrupt, occurs via the GUI or a physical button, the ISR will try and save any data it can, then withdraw power from components.

### Interrupt Priority Considerations

- **Priority Inversion**: Occurs when a high-priority interrupt is blocked by a lower-priority task. Solutions include priority inheritance or boosting mechanisms.
- **Interrupt Latency**: Optimizing ISR (Interrupt Service Routine) code is crucial to minimize latency.
- **Masking & Nesting**: Some architectures allow masking lower-priority interrupts during ISR execution.

### Responding to an Interrupt

- To handle interrupts:

  - At the end of the FDE cycle, the CPU checking for an interrupt, it's either checking the Control Bus or waiting instruction from the OS if it's a software interrupt, this is happen at the end cycles.
  - If there's one: the **priority** of the interrupt is checked.
  - If it's NOT higher than the current process, the current process is finished.
  - If it's higher than the current process, in which case, the CPU will switch to execute the **relevant ISR**. It will:

    - There is a different ISR for every interrupt it'll find relevant one
    - Store the contents of the current registers in a stack, this step is so so IMPORTANT if you want to resume the process of fact to pause it, switching the handle interrupt, then you wanna be able to go back whatever you were doing before.
    - Change the PC to now point towards the relevant ISR
    - Execute the ISR
    - When done, the stack is popped to restore the register values
    - The CPU continues completing the process from before

    <img src="/images/asdfukh32kj4hr32kjasdflas.png" title="ISR handle interrupt with stack"/>
